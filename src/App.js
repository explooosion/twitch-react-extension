import React, { Component } from 'react';
import './App.scss';

import { HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { setColor, getColor } from './service/Color';
import { setAuth } from './actions/auth';
import Header from './container/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    this.auth = props.auth;
    this.twitch = window.Twitch ? window.Twitch.ext : null;
    this.state = {
      finishedLoading: true,
      color: '#6441a4',
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

  async updateColor() {
    const color = await setColor(this.auth.token);
    console.log('set', color);
    this.setState({ color });
  }

  renderMain() {
    return (
      <div>
        <h2>Hello, World!</h2>
        <p>Would you care to cycle a color?</p>
        <div>
          <button
            type="button"
            onClick={() => this.updateColor()}
          >
            Yes, I would
          </button>
        </div>
        <div className="box">
          <div className="circle" style={{ backgroundColor: this.state.color }}>
          </div>
        </div>
      </div>
    );
  }

  renderLoading() {
    return (<div>Loading...</div>);
  }

  render() {

    return (
      <HashRouter>
        <div id="app" className="full-height" data-locale={this.locale}>
          <Header />
          {this.state.finishedLoading ? this.renderMain() : this.renderLoading()}
        </div>
      </HashRouter>
    );
  }
}

App.propTypes = {}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps)(App);
