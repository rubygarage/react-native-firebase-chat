'use strict';

import React, { Component } from 'react';
import { ListView, List, FlatList } from 'react-native';

import styles from './Styles';

import MessageRow from './MessageRow';
import { getChatItems } from '../../../../store/chat/selectors';

class MessageListComponent extends Component {
    render() {
        const data = getChatItems(this.props.data)
        return (
            <FlatList
                style={styles.container}
                data={data}
                keyExtractor={item => item.time}
                renderItem={({ item }) => { 
                    return <MessageRow message={item} />
                }}
            />
        );
    }
}

export default MessageListComponent;