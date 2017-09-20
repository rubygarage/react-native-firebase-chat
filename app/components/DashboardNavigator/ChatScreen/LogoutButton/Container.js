import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { logoutUser } from '../../../../store/session'

import LogoutButton from './Component'

const LogoutButtonContainer = props =>
  <LogoutButton logout={props.logout} />

const mapDispatchToProps = {
  logout: logoutUser
}

LogoutButtonContainer.propTypes = {
  logout: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(LogoutButtonContainer)
