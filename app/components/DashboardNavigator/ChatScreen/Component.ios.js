import React from 'react'
import { KeyboardAvoidingView } from 'react-native'

import MessagesList from './MessagesList'
import MessageForm from './MessageForm'

import styles from './Styles'

const ChatScreenComponent = () =>
  <KeyboardAvoidingView
    style={styles.container}
    behavior='padding'
    keyboardVerticalOffset={64}>

    <MessagesList />
    <MessageForm />
  </KeyboardAvoidingView>

export default ChatScreenComponent
