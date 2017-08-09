'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ActivityIndicator,
  Alert,
} from 'react-native';

import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

import styles from './Styles';

class AuthScreenComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      routes: [
        { key: '1', title: 'Login' },
        { key: '2', title: 'Sign Up' },
      ],
    };
  }

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar style={styles.tabBar} {...props} />;

  _renderScene = SceneMap({
    '1': () => <LoginForm onButtonPress={this.props.login} />,
    '2': () => <SignUpForm onButtonPress={this.props.signup} />,
  });

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

        <StatusBar
          backgroundColor={styles.statusBar.backgroundColor} />

        <TabViewAnimated
          navigationState={this.state}
          renderScene={this._renderScene}
          renderHeader={this._renderHeader}
          onIndexChange={this._handleIndexChange} />

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
