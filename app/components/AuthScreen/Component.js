'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ActivityIndicator,
  Alert,
} from 'react-native';

import AuthTabs from './AuthTabs';

import styles from './Styles';

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

        <AuthTabs />

        {this._activityIndicator()}

      </View>
    );
  }
}

AuthScreenComponent.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default AuthScreenComponent;
