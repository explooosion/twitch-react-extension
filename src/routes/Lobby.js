import React, { Component } from 'react';
import './Lobby.scss';

import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import Footer from '../containers/Footer';

class Lobby extends Component {
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    this.t = props.t;
  }

  render() {
    return (
      <div id="lobby">
        lobby
        <Footer />
      </div>
    );
  }
}

Lobby.propTypes = {}

const mapStateToProps = state => {
  return {
  }
}

export default withTranslation()(connect(mapStateToProps)(Lobby));
