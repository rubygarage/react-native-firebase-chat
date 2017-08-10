'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

import styles from './Styles';

class LogoutButtonComponent extends Component {

  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.props.logout}>

        <Text>Logout</Text>

      </TouchableOpacity>
    );
  }
}

LogoutButtonComponent.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default LogoutButtonComponent;
