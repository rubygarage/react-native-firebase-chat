'use strict';

import React, { Component } from 'react';

import ChatScreen from './Component';
import LogoutButton from './LogoutButton';

class ChatScreenContainer extends Component {

  static navigationOptions = {
    title: 'Chat',
    headerRight: <LogoutButton />,
  };

  render() {
    return (
      <ChatScreen />
    );
  }
}

export default ChatScreenContainer;
