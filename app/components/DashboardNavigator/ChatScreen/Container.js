'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import ChatScreen from './Component';
import LogoutButton from './LogoutButton';

import { loadMessages } from '../../../store/chat/actions';

import translations from '../../../i18n';

class ChatScreenContainer extends Component {

  static navigationOptions = {
    title: translations.t('chat'),
    headerRight: <LogoutButton />,
  };

  constructor(props) {
    super(props);
    this.props.loadData();
  }

  render() {
    return (
      <ChatScreen />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => dispatch(loadMessages()),
  };
};

export default connect(null, mapDispatchToProps)(ChatScreenContainer);
