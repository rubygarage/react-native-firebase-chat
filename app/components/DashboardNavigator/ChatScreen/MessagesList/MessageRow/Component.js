'use strict';

import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './Styles';
import translations from '../../../../../i18n';

const MESSAGE_TEXT_MARGIN = 50;

class MessageRowComponent extends Component {
    
    render() {
        const currentUser = firebaseService.auth().currentUser.email == this.props.message.user.email;
        const alignItems = currentUser ? 'flex-end' : 'flex-start';
        const margin = currentUser ? {marginLeft: MESSAGE_TEXT_MARGIN} : {marginRight: MESSAGE_TEXT_MARGIN}
        const date = this.props.message.time;
        const username = currentUser ? translations.t('you') : this.props.message.user.email;
        return (
            <View
                style={styles.container}>
                <View
                    style={ [styles.bubbleView, {alignItems: alignItems}, margin] }>
                    <Text
                        style={styles.userText} >
                        {date + ' - ' + username}
                    </Text>
                    <Text
                        style={styles.messageText}>
                        {this.props.message.text}
                    </Text>
                </View>
            </View>
        );
    }
}

export default MessageRowComponent;