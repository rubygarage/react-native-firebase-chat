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

class Dashboard extends Component {

  render() {
    return (
      <View
        style={styles.container}>

        <Text>Dashboard</Text>

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

// export default connect(mapStateToProps, mapDispatchToProps)(SessionTabs);
export default Dashboard;
