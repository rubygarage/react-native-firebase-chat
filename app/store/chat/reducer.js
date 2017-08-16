'use strict';

import * as types from './actionTypes';

const initialState = {
  sending: false,
  sendingError: null,
  message: ''
};

export default function session(state = initialState, action) {
  switch(action.type) {
    case types.CHAT_MESSAGE_LOADING:
      return { ...state, sending: true, };
    case types.CHAT_MESSAGE_ERROR:
      return { ...state, sending: false, sendingError: action.error, };
    case types.CHAT_MESSAGE_SUCCESS:
      return initialState;
    case types.CHAT_MESSAGE_UPDATE:
      return { ...state, sending: false, message: action.text, }
    default:
      return state;
  }
}
