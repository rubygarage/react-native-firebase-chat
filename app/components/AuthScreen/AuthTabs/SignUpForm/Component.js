'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BasicForm from '../BasicForm';

import translations from '../../../../i18n';

class SignUpFormComponent extends Component {

  render() {
    return <BasicForm
        buttonTitle={translations.t('signup')}
        onButtonPress={this.props.signup} />;
  }
}

SignUpFormComponent.propTypes = {
  signup: PropTypes.func.isRequired,
};

export default SignUpFormComponent;
