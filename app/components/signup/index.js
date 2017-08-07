import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class SignUpScreen extends Component {
  render() {
    return (
      <View
        style={styles.container}>
        <Text>Sign Up</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default SignUpScreen;
