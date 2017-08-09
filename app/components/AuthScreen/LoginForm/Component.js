'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BasicForm from '../BasicForm';

class LoginFormComponent extends Component {
  render() {
    return <BasicForm
        buttonTitle="Login"
        onButtonPress={this.props.onButtonPress} />;
  }
}

LoginFormComponent.propTypes = {
  onButtonPress: PropTypes.func.isRequired,
};

export default LoginFormComponent;
