'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { restoreSession } from '../../store/session/actions';

import ChatAppComponent from './Component';

class ChatAppContainer extends Component {

  constructor(props) {
    super(props);
    this.props.restore();
  }

  render() {
    return (
      <ChatAppComponent
        restoring={this.props.restoring}
        logged={this.props.logged} />);
  }
}

ChatAppContainer.propTypes = {
  restoring: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    restoring: state.session.restoring,
    logged: state.session.user != null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    restore: () => dispatch(restoreSession()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatAppContainer);
