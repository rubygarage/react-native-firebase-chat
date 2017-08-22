'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import MessageRow from './Component';

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

export default MessageRowContainer;