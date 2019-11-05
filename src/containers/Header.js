import React, { Component } from 'react';
import './Header.scss';

import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import ReactFlagsSelect from 'react-flags-select';

import { setLocal } from '../actions/settings';

import imgLogo from '../images/logo.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    this.t = props.t;
    this.state = {
      countries: props.settings.countries,
      customLabels: props.settings.customLabels,
      transDefault: props.settings.locale,
    }
  }

  onSelectFlag(countryCode) {
    this.dispatch(setLocal({ locale: countryCode }));
  }

  render() {
    return (
      <header id="header">
        { /* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <Link to="/"><img title="logo" alt="logo" className="header-logo" src={imgLogo} /></Link>
        <span className="header-title">{this.t('header-title')}</span>
        {
          /**
          <h1>
            <a href='/' className='header-text'>
              <small>{this.t('title')}</small>
            </a>
          </h1>
          <ReactFlagsSelect
            className='flag-select'
            defaultCountry={this.state.transDefault}
            countries={this.state.countries}
            customLabels={this.state.customLabels}
            selectedSize={30}
            showSelectedLabel={false}
            onSelect={(e) => this.onSelectFlag(e)}
          />
           */
        }
      </header>
    );
  }
}

Header.propTypes = {}

const mapStateToProps = state => {
  return {
    settings: state.settings,
  }
}

export default withTranslation()(connect(mapStateToProps)(Header));
