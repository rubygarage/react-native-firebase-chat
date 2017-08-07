import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';

import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import { signupUser, loginUser } from '../../actions/sessionActions';

import LoginScreen from '../../components/login';
import SignUpScreen from '../../components/signup';

const mapStateToProps = (state) => {
  return {
    loading: state.default.session.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => dispatch(loginUser(username, password)),
    signup: (username, password) => dispatch(signupUser(username, password)),
  };
};

class SessionTabs extends Component {

  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Login' },
      { key: '2', title: 'Sign Up' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar style={styles.tabBar} {...props} />;

  _renderScene = SceneMap({
    '1': () => <LoginScreen onLoginPress={this.props.login} />,
    '2': () => <SignUpScreen />,
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

  render() {
    return (
      <View
        style={styles.container}>
        <StatusBar
          backgroundColor={styles.statusBar.backgroundColor}
        />
        <TabViewAnimated
          navigationState={this.state}
          renderScene={this._renderScene}
          renderHeader={this._renderHeader}
          onIndexChange={this._handleIndexChange}
        />

        {this._activityIndicator()}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    backgroundColor: '#ff0000',
  },
  tabBar: {
    marginTop: 20,
  },
  activityContainer: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: '#000000',
    opacity: 0.5,
  },
  activityIndicator: {
    flex: 1,
    alignItems: 'center',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionTabs);
