'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AuthScreenComponent from './Component';

class AuthScreenContainer extends Component {
  render() {
    return (
      <AuthScreenComponent
        loading={this.props.loading}
        error={this.props.error} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.session.loading,
    error: state.session.error,
  };
};

export default connect(mapStateToProps)(AuthScreenContainer);
