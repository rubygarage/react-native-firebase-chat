import React from 'react'
import { View } from 'react-native'

import MessagesList from './MessagesList'
import MessageForm from './MessageForm'

import styles from './Styles'

const ChatScreenComponent = () =>
  <View style={styles.container}>
    <MessagesList />
    <MessageForm />
  </View>

export default ChatScreenComponent
