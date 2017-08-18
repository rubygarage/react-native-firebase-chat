'use strict';

import React, { Component } from 'react';

import ChatScreen from './Component';
import LogoutButton from './LogoutButton';

import { loadMessages } from '../../../store/chat/actions';

import translations from '../../../i18n';

class ChatScreenContainer extends Component {

  static navigationOptions = {
    title: translations.t('chat'),
    headerRight: <LogoutButton />,
  };

  render() {
    return (
      <ChatScreen />
    );
  }
}

export default ChatScreenContainer;
