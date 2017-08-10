'use strict';

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import ChatScreen from './ChatScreen';

const routeConfig = {
  Chat: { screen: ChatScreen },
};

export default StackNavigator(routeConfig);
