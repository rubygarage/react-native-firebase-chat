'use strict';

import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';

import styles from './Styles';

class MessageListComponent extends Component {
    constructor(props) {
        super(props);
    
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(['Row 1', 'Row 2', 'Row 3']),
        };
    }

    render() {
        return (
            <ListView 
            style={styles.container}
            dataSource={this.state.dataSource}
            renderRow={(data) => <View><Text>{data}</Text></View>}/>
          );
    }
}

export default MessageListComponent;