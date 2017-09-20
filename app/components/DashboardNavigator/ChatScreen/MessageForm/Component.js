import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import PropTypes from 'prop-types'

import translations from '../../../../i18n'

import styles from './Styles'

const OPACITY_ENABLED = 1.0
const OPACITY_DISABLED = 0.2

class MessageFormComponent extends Component {

  constructor() {
    super()

    this.handleMessageChange = (message) => {
      this.props.updateMessage(message)
    }

    this.handleButtonPress = () => {
      this.props.sendMessage(this.props.message)
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.sendingError && this.props.sendingError) {
      Alert.alert(translations.t('error'), this.props.sendingError)
    }
  }

  render() {
    const sending = this.props.sending
    const isButtonDisabled = sending || this.props.message.trim().length == 0
    const opacity = isButtonDisabled ? OPACITY_DISABLED : OPACITY_ENABLED

    return (
      <View style={styles.container}>

        <TextInput
          style={styles.textInput}
          placeholder={translations.t('message')}
          returnKeyType='send'
          onChangeText={this.handleMessageChange}
          value={this.props.message}
          underlineColorAndroid={'transparent'}
          editable={!sending} />

          <TouchableOpacity
            style={styles.button}
            onPress={this.handleButtonPress}
            disabled={isButtonDisabled}>

            <Image
              source={require('../../../../images/ic_send.png')}
              style={{opacity: opacity}} />

          </TouchableOpacity>

      </View>
    );
  }
}

MessageFormComponent.propTypes = {
  sending: PropTypes.bool.isRequired,
  sendMessage: PropTypes.func.isRequired,
  updateMessage: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  sendingError: PropTypes.string
}

export default MessageFormComponent
