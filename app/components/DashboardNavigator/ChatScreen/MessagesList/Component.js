'use strict';

import React, { Component } from 'react';
import { ListView, List, FlatList } from 'react-native';

import styles from './Styles';

import MessageRow from './MessageRow';

class MessageListComponent extends Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            data: [{ id: 1, text: '111' },
                   { id: 2, text: '222' },
                   { id: 3, text: '333' }]
        };
    }

    render() {
        console.log(this.state.data);
        return (
            <FlatList
                style={styles.container}
                data={this.state.data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => { 
                    return <MessageRow message={item} />
                }}
            />
        );
    }
}

export default MessageListComponent;