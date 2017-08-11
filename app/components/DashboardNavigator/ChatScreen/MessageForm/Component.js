'use strict';

import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
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

  render() {
    return (
      <View style={styles.container}>

        <TextInput
          style={styles.textInput}
          placeholder={translations.t('message')}
          returnKeyType='send'
          onChangeText={(text) => this.setState({message: text})}
          value={this.props.message}
          underlineColorAndroid={'transparent'} />

        <TouchableOpacity
          style={styles.button}>

          <Image
            source={require('../../../../images/ic_send.png')} />

        </TouchableOpacity>

      </View>
    );
  }
}

export default MessageFormComponent;
