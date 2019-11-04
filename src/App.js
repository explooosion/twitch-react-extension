import React, { Component } from 'react';
import './App.scss';

import { HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// import Header from './container/Header';
// import Footer from './container/Footer';

import { setColor, getColor } from './service/Color';

class App extends Component {
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    this.state = {
      channelId: null,
      clientId: null,
      token: null,
      userId: null,
      finishedLoading: false,
      color: '#6441a4',
    };
    this.twitch = window.Twitch ? window.Twitch.ext : null;
  }

  componentDidMount() {
    if (this.twitch) {
      this.twitch.onAuthorized(async ({ token, userId }) => {
        console.log(userId)
        console.log(token)
        this.setState({ token, userId });
        // this.Authentication.setToken(auth.token, auth.userId)
        if (!this.state.finishedLoading) {
          // if the component hasn't finished loading (as in we've not set up after getting a token), let's set it up now.
          const color = await getColor(this.state.token);
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
        // console.log('Visibility', isVisible, _c)
      })

      this.twitch.onContext((context, delta) => {
        // this.contextUpdate(context, delta)
        // console.log('context', context, delta)
      })
    }
  }

  async updateColor() {
    const color = await setColor(this.state.token);
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
            type='button'
            id='cycle'
            onClick={() => this.updateColor()}
          >
            Yes, I would
          </button>
        </div>
        <div id='box'>
          <div id='circle' style={{ backgroundColor: this.state.color }}>
          </div>
        </div>
        <div id='list'>
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
        <div id='app' className='full-height' data-locale={this.locale}>
          {this.state.finishedLoading ? this.renderMain() : this.renderLoading()}
        </div>
      </HashRouter>
    );
  }
}

App.propTypes = {}

const mapStateToProps = state => {
  return {
    settings: state.settings,
  }
}

export default connect(mapStateToProps)(App);
