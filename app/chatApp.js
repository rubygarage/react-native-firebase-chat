import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { restoreSession } from './actions/sessionActions';

import SessionTabs from './containers/session'
import Dashboard from './containers/dashboard'

const mapStateToProps = (state) => {
  return {
    restoring: state.session.restoring,
    isLoggedIn: state.session.user != null,
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    restore: () => dispatch(restoreSession()),
  };
};

class ChatApp extends Component {

  constructor(props) {
    super(props);
    this.props.restore();
  }

  render() {
    if (this.props.restoring) {
      return <ActivityIndicator style={{flex: 1, justifyContent:'center',}} />;
    } else {
      if (this.props.isLoggedIn) {
        return <Dashboard />;
      } else {
        return <SessionTabs />;
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatApp);
