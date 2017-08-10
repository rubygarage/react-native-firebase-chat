'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Text,
} from 'react-native';

import translations from '../../../../i18n';

import styles from './Styles';

class BasicFormComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { email: '', password: '', };
  }

  render() {
    return (
      <View
        style={styles.container}>

        <TextInput
          style={styles.textInput}
          placeholder={translations.t('email')}
          returnKeyType='next'
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={(text) => this.setState({email: text})}
          value={this.state.email} />

        <TextInput
          style={styles.textInput}
          placeholder={translations.t('password')}
          secureTextEntry={true}
          returnKeyType='done'
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password} />

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.onButtonPress(this.state.email, this.state.password)}>

          <Text style={styles.buttonTitle}>{this.props.buttonTitle}</Text>

        </TouchableOpacity>

      </View>
    );
  }
}

BasicFormComponent.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  onButtonPress: PropTypes.func.isRequired,
};

export default BasicFormComponent;
