import React, { Component } from 'react'
import { FlatList, Text } from 'react-native'
import PropTypes from 'prop-types'

import MessageRow from './MessageRow'

import translations from '../../../../i18n'

import styles from './Styles'

const ITEM_HEIGHT = 50

class MessageListComponent extends Component {

  constructor() {
    super()

    this.renderItem = ({item}) => {
      return <MessageRow message={item} />
    }

    this.emptyList = () => {
      return (
        <Text
          style={styles.placeholder}>
          {translations.t('placeholder')}
        </Text>
      )
    }

    this.itemLayout = (data, index) => (
      {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
    )
  }

  componentDidUpdate() {
    if (this.props.data.length) {
        this.flatList.scrollToIndex({animated: true, index: 0});
    }
  }

  render() {
    const data = this.props.data
    const contentContainerStyle = data.length ? null : styles.flatlistContainerStyle
    return (
      <FlatList
        ref={(c) => { this.flatList = c }}
        style={styles.container}
        contentContainerStyle={contentContainerStyle}
        data={data}
        keyExtractor={item => item.time}
        renderItem={this.renderItem}
        getItemLayout={this.itemLayout}
        ListEmptyComponent={this.emptyList}
        inverted />
    )
  }
}

MessageListComponent.propTypes = {
  data: PropTypes.array.isRequired,
}

export default MessageListComponent
