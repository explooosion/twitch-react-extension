import React, { Component } from 'react';
import './Character.scss';

import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

class Character extends Component {
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    this.t = props.t;
  }

  render() {
    return (
      <div id="Character">
        Character
      </div>
    );
  }
}

Character.propTypes = {}

const mapStateToProps = state => {
  return {
  }
}

export default withTranslation()(connect(mapStateToProps)(Character));
