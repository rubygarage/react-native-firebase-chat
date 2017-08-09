'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BasicForm from '../BasicForm';

class LoginFormComponent extends Component {

  static navigationOptions = {
    tabBarLabel: 'Login',
  };

  render() {
    return <BasicForm
        buttonTitle='Login'
        onButtonPress={this.props.screenProps.login} />;
  }
}

LoginFormComponent.propTypes = {
  screenProps: PropTypes.shape({
    login: PropTypes.func.isRequired,
  }),
};

export default LoginFormComponent;
