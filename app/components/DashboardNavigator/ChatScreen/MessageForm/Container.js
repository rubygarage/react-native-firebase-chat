'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { sendMessage, updateMessage } from '../../../../store/chat';

import MessageForm from './Component';

class MessageFormContainer extends Component {

  render() {
    return (
      <MessageForm
        sending={this.props.sending}
        sendMessage={this.props.sendMessage}
        updateMessage={this.props.updateMessage}
        message={this.props.message}
        sendingError={this.props.sendingError} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sending: state.chat.sending,
    sendingError: state.chat.sendingError,
    message: state.chat.message,
  };
};

const mapDispatchToProps = {
  sendMessage,
  updateMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageFormContainer);
