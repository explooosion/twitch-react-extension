import React, { Component } from 'react';
import './Login.scss';

import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import Footer from '../containers/Footer';

class Login extends Component {
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    this.t = props.t;
  }

  render() {
    return (
      <div id="Login">
        Login
        <Footer />
      </div>
    );
  }
}

Login.propTypes = {}

const mapStateToProps = state => {
  return {
  }
}

export default withTranslation()(connect(mapStateToProps)(Login));
