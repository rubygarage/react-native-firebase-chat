'use strict';

import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native';
import PropTypes from 'prop-types';

import translations from '../../../../i18n';

import styles from './Styles';

const SEND_BUTTON_OPACITY_ENABLED = 1.0
const SEND_BUTTON_OPACITY_DISABLED = 0.2

class MessageFormComponent extends Component {
  handleTextChange(text) {
    this.props.updateMessage(text);
  }

  showAlertIfNeeded = () => {
    if (this.props.sendingError) {
      Alert.alert('Alert', this.props.sendingError)
    }
  }

  render() {
    const sending = this.props.sending;
    const isButtonDisabled = sending || this.props.message.trim().length == 0;

    return (
      <View style={styles.container}>

        <TextInput
          style={styles.textInput}
          placeholder={translations.t('message')}
          returnKeyType='send'
          onChangeText={(text) => this.handleTextChange(text)}
          value={this.props.message}
          underlineColorAndroid={'transparent'}
          editable={!sending} />

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.sendMessage(this.props.message)}
            disabled={isButtonDisabled}>

            <Image
              source={require('../../../../images/ic_send.png')}
              style={{opacity: (isButtonDisabled ? SEND_BUTTON_OPACITY_DISABLED : SEND_BUTTON_OPACITY_ENABLED)}} />

          </TouchableOpacity>

          {this.showAlertIfNeeded()}
          
      </View>
    );
  }
}

MessageFormComponent.propTypes = {
  sending: PropTypes.bool.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default MessageFormComponent;
