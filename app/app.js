import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { configureStore } from './store'

import ChatApp from './chatApp';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ChatApp />
      </Provider>
    );
  }
}
