import React, { Component } from 'react';
import './Battle.scss';

import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import Footer from '../containers/Footer';

class Battle extends Component {
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    this.t = props.t;
  }

  render() {
    return (
      <div id="Battle">
        Battle
        <Footer />
      </div>
    );
  }
}

Battle.propTypes = {}

const mapStateToProps = state => {
  return {
  }
}

export default withTranslation()(connect(mapStateToProps)(Battle));
