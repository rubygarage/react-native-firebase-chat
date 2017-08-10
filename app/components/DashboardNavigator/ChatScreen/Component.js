import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import translations from '../../../i18n';

import styles from './Styles';

// import { connect } from 'react-redux';

// import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
//
// import { signupUser, loginUser } from '../../actions/sessionActions';
//
// import LoginScreen from '../../components/login';
// import SignUpScreen from '../../components/signup';

// const mapStateToProps = (state) => {
//   return {
//     loading: state.default.session.loading,
//     error: state.default.session.error,
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     login: (username, password) => dispatch(loginUser(username, password)),
//     signup: (username, password) => dispatch(signupUser(username, password)),
//   };
// };

// import { StackNavigator } from 'react-navigation';

// const SimpleApp = StackNavigator({
//   Dashboard: { screen: DashboardScreenComponent },
// });

class ChatScreenComponent extends Component {

  render() {
    return (
      <View
        style={styles.container}>

        <Text>{translations.t('chat')}</Text>

      </View>
    );
  }
}

export default ChatScreenComponent;
