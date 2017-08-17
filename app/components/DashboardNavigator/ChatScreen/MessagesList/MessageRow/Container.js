'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import MessageRow from './Component';

class MessageRowContainer extends Component {
    render() {
        return (
            <MessageRow message={this.props.message}/>
        );
    }
}

export default MessageRowContainer;