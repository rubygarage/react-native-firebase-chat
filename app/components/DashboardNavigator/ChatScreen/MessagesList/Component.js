'use strict';

import React, { Component } from 'react';
import { List, FlatList, Text } from 'react-native';

import styles from './Styles';

import MessageRow from './MessageRow';
import translations from '../../../../i18n';

const ITEM_HEIGHT = 50;

class MessageListComponent extends Component {

    componentDidUpdate() {
        if (this.props.data.length) {
            this.refs.flatList.scrollToIndex({animated: true, index: 0});
        }
    }

    emptyList() {
        return (
            <Text
                style={styles.placeholder}>
                {translations.t('placeholder')}
            </Text>
        );
      }

    render() {
        const data = this.props.data;
        const contentContainerStyle = data.length ? null : styles.flatlistContainerStyle;
        return (
            <FlatList
                ref='flatList'
                style={styles.container}
                contentContainerStyle={contentContainerStyle}
                data={data}
                keyExtractor={item => item.time}
                renderItem={({ item }) => { 
                    return <MessageRow message={item} />
                }}
                getItemLayout={(data, index) => (
                    {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
                )}
                inverted
                ListEmptyComponent={this.emptyList.bind(this)}
            />
        );
    }
}

export default MessageListComponent;