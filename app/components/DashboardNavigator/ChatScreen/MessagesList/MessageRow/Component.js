'use strict';

import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './Styles';

class MessageRowComponent extends Component {
    render() {
        return (
            <View
                style={styles.container}>

                <Text>{this.props.message.text}</Text>
            </View>
        );
    }
}

export default MessageRowComponent;