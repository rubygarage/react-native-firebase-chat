'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadMessages } from '../../../../store/chat/actions';
import { getChatItems } from '../../../../store/chat/selectors';

import MessageListComponent from './Component';

class MessagesListContainer extends Component {
  
  constructor(props) {
    super(props);
    this.props.loadMessages();
  }

  render() {
    const data = getChatItems(this.props.messages).reverse();
    return (
      <MessageListComponent
        data={data}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.chat.messages,
    error: state.chat.loadMessagesError,
  };
};

const mapDispatchToProps = {
  loadMessages,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesListContainer);