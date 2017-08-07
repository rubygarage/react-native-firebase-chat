import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
} from 'react-native';

class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  render() {
    return (
      <View
        style={styles.container}>

        <TextInput
          style={styles.textInput}
          placeholder='Username'
          returnKeyType='next'
          onChangeText={(text) => this.setState({username: text})}
          value={this.state.username} />

        <TextInput
          style={styles.textInput}
          placeholder='Password'
          secureTextEntry={true}
          returnKeyType='done'
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password} />

        <Button
          title="Login"
          onPress={() => this.props.onLoginPress(this.state.username, this.state.password)} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent:'center',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    height: 40,
    margin: 10,
  },
});

export default LoginScreen;
