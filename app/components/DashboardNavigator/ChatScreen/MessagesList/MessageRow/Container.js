import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import MessageRow from './Component'

class MessageRowContainer extends Component {

  render() {
    const isCurrentUser = firebaseService.auth().currentUser.email == this.props.message.user.email;
    return (
      <MessageRow
        message={this.props.message}
        isCurrentUser={isCurrentUser}/>
    );
  }
}

MessageRowContainer.propTypes = {
  message: PropTypes.object.isRequired,
}

export default MessageRowContainer
