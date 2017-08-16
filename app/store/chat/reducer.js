'use strict';

import * as types from './actionTypes';

const initialState = {
  sending: false,
  sendingError: null,
  message: ''
};

export default function session(state = initialState, action) {
  console.log(action.type);
  switch(action.type) {
    case types.CHAT_MESSAGE_LOADING:
      return { ...state, sending: true, sendingError: null, };
    case types.CHAT_MESSAGE_ERROR:
      return { ...state, sending: false, sendingError: action.error, };
    case types.CHAT_MESSAGE_SUCCESS:
      return initialState;
    case types.CHAT_MESSAGE_UPDATE:
      return { ...state, sending: false, message: action.text, sendingError: null, }
    default:
      return state;
  }
}
