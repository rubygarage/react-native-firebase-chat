import React, { Component } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';

import MessagesList from './MessagesList';
import MessageForm from './MessageForm';

import styles from './Styles';

class ChatScreenComponent extends Component {

  render() {    
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior='padding'
        keyboardVerticalOffset={64}>

        <MessagesList />

        <MessageForm />

      </KeyboardAvoidingView>
    );
  }
}

export default ChatScreenComponent;
