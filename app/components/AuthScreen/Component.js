'use strict';

import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import {
  View,
  StatusBar,
  ActivityIndicator,
  Alert,
} from 'react-native';

import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

import styles from './Styles';

const routeConfigs = {
  Login: {
    screen: LoginForm,
  },
  SignUp: {
    screen: SignUpForm,
  },
};

const AuthTabs = TabNavigator(routeConfigs);

class AuthScreenComponent extends Component {

  _activityIndicator = () => {
    if (this.props.loading) {
      return (
        <View style={styles.activityContainer}>
          <ActivityIndicator style={styles.activityIndicator} />
        </View>
      );
    }
    return null;
  };

  componentDidUpdate(prevProps) {
    if (!prevProps.error && this.props.error) {
      Alert.alert('Error', this.props.error);
    }
  }

  render() {
    return (
      <View
        style={styles.container}>

        <AuthTabs
          screenProps={{ login: this.props.login, signup: this.props.signup }} />

        {this._activityIndicator()}

      </View>
    );
  }
}

AuthScreenComponent.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,

  login: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
};

export default AuthScreenComponent;
