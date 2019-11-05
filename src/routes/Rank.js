import React, { Component } from 'react';
import './Rank.scss';

import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import Footer from '../containers/Footer';

class Rank extends Component {
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    this.t = props.t;
  }

  render() {
    return (
      <div id="Rank">
        Rank
        <Footer />
      </div>
    );
  }
}

Rank.propTypes = {}

const mapStateToProps = state => {
  return {
  }
}

export default withTranslation()(connect(mapStateToProps)(Rank));
