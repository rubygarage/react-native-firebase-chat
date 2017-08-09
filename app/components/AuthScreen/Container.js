'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { signupUser, loginUser } from '../../actions/sessionActions';

import AuthScreenComponent from './Component';

class AuthScreenContainer extends Component {
  render() {
    return (
      <AuthScreenComponent
        loading={this.props.loading}
        error={this.props.error}
        login={this.props.login}
        signup={this.props.signup} />
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  
  return {
    loading: state.session.loading,
    error: state.session.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(loginUser(email, password)),
    signup: (email, password) => dispatch(signupUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreenContainer);
