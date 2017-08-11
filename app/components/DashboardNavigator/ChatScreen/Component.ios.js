import React, { Component } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';

import MessageForm from './MessageForm';

import styles from './Styles';

class ChatScreenComponent extends Component {

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior='padding'
        keyboardVerticalOffset={64}>

        <View
          style={styles.list} />

        <MessageForm
          style={styles.form} />

      </KeyboardAvoidingView>
    );
  }
}

export default ChatScreenComponent;
