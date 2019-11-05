import React, { Component } from 'react';
import './Rank.scss';

import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

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
