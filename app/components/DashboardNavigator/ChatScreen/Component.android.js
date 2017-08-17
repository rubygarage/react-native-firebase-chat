import React, { Component } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';

import MessageForm from './MessageForm';

import styles from './Styles';

class ChatScreenComponent extends Component {

  render() {
    return (
      <View
        style={styles.container}>

        <MessagesList />
        
        <MessageForm />

      </View>
    );
  }
}

export default ChatScreenComponent;
