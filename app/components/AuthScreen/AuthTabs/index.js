'use strict';

import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';

import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const routeConfigs = {
  Login: {
    screen: LoginForm,
  },
  SignUp: {
    screen: SignUpForm,
  },
};

export default TabNavigator(routeConfigs);
