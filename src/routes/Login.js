import React, { Component } from 'react';
import './Login.scss';

import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

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
