import React, { Component } from 'react'
import { connect } from 'react-redux'

import { logoutUser } from '../../../../store/session'

import LogoutButton from './Component'

const LogoutButtonContainer = props =>
  <LogoutButton logout={props.logout} />

const mapDispatchToProps = {
  logout: logoutUser
}

export default connect(null, mapDispatchToProps)(LogoutButtonContainer)
