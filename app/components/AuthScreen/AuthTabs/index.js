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

const tabBarOptions = {
  tabBarOptions: {
    activeTintColor: '#88cc88',
  },
};

export default TabNavigator(routeConfigs, tabBarOptions);
