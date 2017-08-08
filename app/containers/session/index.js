import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';

import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import { signupUser, loginUser } from '../../actions/sessionActions';

import SignScreen from '../../components/sign';

const mapStateToProps = (state) => {
  return {
    loading: state.default.session.loading,
    error: state.default.session.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(loginUser(email, password)),
    signup: (email, password) => dispatch(signupUser(email, password)),
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
    '1': () => <SignScreen onButtonPress={this.props.login} buttonTitle="Login" />,
    '2': () => <SignScreen onButtonPress={this.props.signup} buttonTitle="Sign Up" />,
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
