'use strict';

import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import translations from '../../../../i18n';

import styles from './Styles';

class MessageFormComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };
  }

  handleTextChange(text) {
    this.setState({message: text});
  }

  render() {
    const sending = this.props.sending;
    const isButtonDisabled = sending || this.state.message.trim().length == 0;

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
            onPress={() => this.props.sendMessage(this.state.message)}
            disabled={isButtonDisabled}>

            <Image
              source={require('../../../../images/ic_send.png')}
              style={{opacity: (isButtonDisabled ? 0.2 : 1.0)}} />

          </TouchableOpacity>

      </View>
    );
  }
}

MessageFormComponent.propTypes = {
  sending: PropTypes.bool.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default MessageFormComponent;
