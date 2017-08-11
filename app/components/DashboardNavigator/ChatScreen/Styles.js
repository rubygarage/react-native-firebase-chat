'use strict';

import React, { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#eeeeee',
  },
  list: {
    flex: 1,
  },
  form: {
    flexShrink: 0,
  }
});
