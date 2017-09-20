import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { restoreSession } from '../../store/session/actions'

import ChatAppComponent from './Component'

class ChatAppContainer extends Component {

  componentDidMount() {
    this.props.restore()
  }

  render() {
    return (
      <ChatAppComponent
        restoring={this.props.restoring}
        logged={this.props.logged} />)
  }
}

ChatAppContainer.propTypes = {
  restoring: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  restoring: state.session.restoring,
  logged: state.session.user != null,
})

const mapDispatchToProps = {
  restore: restoreSession
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatAppContainer)
