'use strict';

import React, { Component } from 'react';
import { ListView, List, FlatList } from 'react-native';

import styles from './Styles';

import MessageRow from './MessageRow';
import { getChatItems } from '../../../../store/chat/selectors';

const ITEM_HEIGHT = 50;

class MessageListComponent extends Component {

    componentDidUpdate() {
        if (getChatItems(this.props.data).length) {
            this.refs.flatList.scrollToIndex({animated: true, index: 0});
        }
    }

    render() {
        const data = getChatItems(this.props.data).reverse();
        return (
            <FlatList
                ref='flatList'
                style={styles.container}
                data={data}
                keyExtractor={item => item.time}
                renderItem={({ item }) => { 
                    return <MessageRow message={item} />
                }}
                getItemLayout={(data, index) => (
                    {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
                )}
                inverted
            />
        );
    }
}

export default MessageListComponent;