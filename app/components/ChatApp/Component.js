'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ActivityIndicator } from 'react-native';

import DashboardNavigator from '../DashboardNavigator';
import AuthScreen from '../AuthScreen';

import styles from './Styles';

class ChatAppComponent extends Component {
  render() {
    if (this.props.restoring) {
      return <ActivityIndicator style={styles.activityIndicator} />;
    } else {
      if (this.props.logged) {
        return <DashboardNavigator />;
      } else {
        return <AuthScreen />;
      }
    }
  }
}

ChatAppComponent.propTypes = {
  restoring: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired,
};

export default ChatAppComponent;
