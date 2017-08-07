import React, { Component } from 'react';
import { Text } from 'react-native';


import SessionTabs from './containers/session'

class ChatApp extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <SessionTabs />;
  }
}

export default ChatApp;
