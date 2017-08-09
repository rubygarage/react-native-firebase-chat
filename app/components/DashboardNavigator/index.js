'use strict';

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import DashboardScreen from './DashboardScreen';

const routeConfig = {
  Dashboard: { screen: DashboardScreen },
};

export default StackNavigator(routeConfig);
