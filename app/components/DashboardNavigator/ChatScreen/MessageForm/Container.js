'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { sendMessage } from '../../../../store/chat';

import MessageForm from './Component';

class MessageFormContainer extends Component {

  render() {
    return (
      <MessageForm
        sending={this.props.sending}
        sendMessage={this.props.sendMessage} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sending: state.chat.sending,
    sendingError: state.chat.sendingError,
  };
};

const mapDispatchToProps = {
  sendMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageFormContainer);
