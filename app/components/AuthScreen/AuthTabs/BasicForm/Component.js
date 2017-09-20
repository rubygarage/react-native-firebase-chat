import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'

import translations from '../../../../i18n'

import styles from './Styles'

class BasicFormComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { email: '', password: '', };

    this.handleEmailChange = (email) => {
      this.setState({email: email})
    }

    this.handlePasswordChange = (password) => {
      this.setState({password: password})
    }

    this.handleButtonPress = () => {
      this.props.onButtonPress(this.state.email, this.state.password)
    }
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
          onChangeText={this.handleEmailChange}
          value={this.state.email}
          underlineColorAndroid={'transparent'} />

        <TextInput
          style={styles.textInput}
          placeholder={translations.t('password')}
          secureTextEntry={true}
          returnKeyType='done'
          onChangeText={this.handlePasswordChange}
          value={this.state.password}
          underlineColorAndroid={'transparent'} />

        <TouchableOpacity
          style={styles.button}
          onPress={this.handleButtonPress}>

          <Text style={styles.buttonTitle}>{this.props.buttonTitle}</Text>

        </TouchableOpacity>

      </View>
    )
  }
}

BasicFormComponent.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  onButtonPress: PropTypes.func.isRequired,
}

export default BasicFormComponent
