'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { subscribeFirebaseChanges, unsuscribeFirebaseChanges } from '../../../../store/chat/actions';

import MessageListComponent from './Component';

class MessagesListContainer extends Component {
  componentDidMount() {
    this.props.subscribeFirebaseChanges();
  }

  componentWillUnmount() {
    this.props.unsuscribeFirebaseChanges();
  }

  render() {
    return (
      <MessageListComponent 
        data={this.props.messages}/>
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
  subscribeFirebaseChanges,
  unsuscribeFirebaseChanges,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesListContainer);