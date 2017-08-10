'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { signupUser } from '../../../../actions/sessionActions';

import SignUpFormComponent from './Component';

import translations from '../../../../i18n';

class SignUpFormContainer extends Component {

  static navigationOptions = {
    tabBarLabel: translations.t('signup'),
  };

  render() {
    return (
      <SignUpFormComponent
        signup={this.props.signup} />
    );
  }
}

SignUpFormContainer.propTypes = {
  screenProps: PropTypes.shape({
    signup: PropTypes.func.isRequired,
  }),
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (email, password) => dispatch(signupUser(email, password)),
  };
};

export default connect(null, mapDispatchToProps)(SignUpFormContainer);
