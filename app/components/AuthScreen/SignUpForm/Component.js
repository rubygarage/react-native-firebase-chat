'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BasicForm from '../BasicForm';

class SignUpFormComponent extends Component {
  render() {
    return <BasicForm
        buttonTitle="Sign Up"
        onButtonPress={this.props.onButtonPress} />;
  }
}

SignUpFormComponent.propTypes = {
  onButtonPress: PropTypes.func.isRequired,
};

export default SignUpFormComponent;
