'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loginUser } from '../../../../actions/sessionActions';

import LoginFormComponent from './Component';

import translations from '../../../../i18n';

class LoginFormContainer extends Component {

  static navigationOptions = {
    tabBarLabel: translations.t('login'),
  };

  render() {
    return (
      <LoginFormComponent
        login={this.props.login} />
    );
  }
}

LoginFormContainer.propTypes = {
  screenProps: PropTypes.shape({
    login: PropTypes.func.isRequired,
  }),
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(loginUser(email, password)),
  };
};

export default connect(null, mapDispatchToProps)(LoginFormContainer);
