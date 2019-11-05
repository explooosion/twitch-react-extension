import React, { Component } from 'react';
import './Footer.scss';

import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    this.t = props.t;
    this.state = {};
  }

  render() {
    return (
      <footer id="Footer">
        <ul className>
          <li><Link to="/character">Character</Link></li>
          <li><Link to="/battle">Battle</Link></li>
          <li><Link to="/rank">Rank</Link></li>
        </ul>
      </footer>
    );
  }
}

Footer.propTypes = {}

const mapStateToProps = state => {
  return {}
}

export default withTranslation()(connect(mapStateToProps)(Footer));
