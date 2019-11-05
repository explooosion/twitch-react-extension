import React, { Component } from 'react';
import './App.scss';

import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { getColor } from './service/Color';

import { setAuth } from './actions/auth';

// Routes
import Login from './routes/Login';
import Lobby from './routes/Lobby';
import Character from './routes/Character';
import Battle from './routes/Battle';
import Rank from './routes/Rank';

// Containers
import Header from './containers/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    this.auth = props.auth;
    this.twitch = props.twitch;
    this.state = {
      finishedLoading: true,
    };
  }

  componentDidMount() {
    if (this.twitch) {
      this.twitch.onAuthorized(async ({ token, userId }) => {

        this.dispatch(setAuth({ token, userId }));

        if (!this.state.finishedLoading) {
          // if the component hasn't finished loading (as in we've not set up after getting a token), let's set it up now.
          const color = await getColor(token);
          // now we've done the setup for the component, let's set the state to true to force a rerender with the correct data.
          this.setState({ finishedLoading: true, color });
        }
      })

      this.twitch.listen('broadcast', (target, contentType, body) => {
        this.twitch.rig.log(`New PubSub message!\n${target}\n${contentType}\n${body}`)
        // now that you've got a listener, do something with the result...
        // console.log(`New PubSub message!\n${target}\n${contentType}\n${body}`)
        // do something...
      })

      this.twitch.onVisibilityChanged((isVisible, _c) => {
        // this.visibilityChanged(isVisible)
      })

      this.twitch.onContext((context, delta) => {
        // this.contextUpdate(context, delta)
      })
    }
  }

  renderLoading() {
    return (<div>Loading...</div>);
  }

  renderMain() {
    return (<div>{this.renderRoues()}</div>);
  }

  renderRoues() {
    return (
      <Switch>
        <Route exact path="/" component={Lobby} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/character" component={Character} />
        <Route exact path="/battle" component={Battle} />
        <Route exact path="/rank" component={Rank} />
      </Switch>
    );
  }

  render() {
    return (
      <Router>
        <div id="app" className="full-height" data-locale={this.locale}>
          <Header />
          {this.state.finishedLoading ? this.renderMain() : this.renderLoading()}
        </div>
      </Router>
    );
  }
}

App.propTypes = {}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    twitch: state.twitch,
  }
}

export default connect(mapStateToProps)(App);
