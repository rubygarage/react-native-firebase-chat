'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BasicForm from '../BasicForm';

import translations from '../../../../i18n';

class LoginFormComponent extends Component {

  render() {
    return <BasicForm
        buttonTitle={translations.t('login')}
        onButtonPress={this.props.login} />;
  }
}

LoginFormComponent.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginFormComponent;
