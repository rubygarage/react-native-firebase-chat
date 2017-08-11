'use strict';

import React, { Component } from 'react';
import { Text } from 'react-native';

import { connect } from 'react-redux';

// import { logoutUser } from '../../../../actions/sessionActions';

import MessageForm from './Component';

class MessageFormContainer extends Component {

  render() {
    return (
      <MessageForm />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser()),
  };
};

export default MessageFormContainer;
