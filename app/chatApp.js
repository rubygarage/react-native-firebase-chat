import React, { Component } from 'react';
import { connect } from 'react-redux';

import SessionTabs from './containers/session'
import Dashboard from './containers/dashboard'

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.default.session.user != null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

class ChatApp extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    
    if (this.props.isLoggedIn) {
      return <Dashboard />;
    } else {
      return <SessionTabs />;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatApp);
