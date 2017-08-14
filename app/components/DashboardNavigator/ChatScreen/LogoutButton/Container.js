'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logoutUser } from '../../../../store/session';

import LogoutButton from './Component';

class LogoutButtonContainer extends Component {

  render() {
    return (
      <LogoutButton logout={this.props.logout} />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser()),
  };
};

export default connect(null, mapDispatchToProps)(LogoutButtonContainer);
