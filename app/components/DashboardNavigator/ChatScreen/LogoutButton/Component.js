import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Image } from 'react-native'

import translations from '../../../../i18n'

import styles from './Styles'

const LogoutButtonComponent = props =>
  <TouchableOpacity
    style={styles.container}
    onPress={props.logout}>

    <Image source={require('../../../../images/ic_exit_to_app.png')} />
  </TouchableOpacity>

LogoutButtonComponent.propTypes = {
  logout: PropTypes.func.isRequired
}

export default LogoutButtonComponent
