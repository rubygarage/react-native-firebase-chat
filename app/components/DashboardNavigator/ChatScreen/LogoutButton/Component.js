'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

import translations from '../../../../i18n';

import styles from './Styles';

class LogoutButtonComponent extends Component {

  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.props.logout}>

        <Text>{translations.t('logout')}</Text>

      </TouchableOpacity>
    );
  }
}

LogoutButtonComponent.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default LogoutButtonComponent;
