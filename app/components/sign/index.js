import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
} from 'react-native';

class SignScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <View
        style={styles.container}>

        <TextInput
          style={styles.textInput}
          placeholder='Email'
          returnKeyType='next'
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={(text) => this.setState({email: text})}
          value={this.state.email} />

        <TextInput
          style={styles.textInput}
          placeholder='Password'
          secureTextEntry={true}
          returnKeyType='done'
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password} />

        <Button
          title={this.props.buttonTitle}
          onPress={() => this.props.onButtonPress(this.state.email, this.state.password)} />

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

export default SignScreen;
