'use strict';

import * as types from './actionTypes';
import firebaseService from '../../services/firebase';

const FIREBASE_REF_MESSAGES = 'Messages'

export function sendMessage(message) {
  return (dispatch) => {
    dispatch(chatMessageLoading());

    let currentUser = firebaseService.auth().currentUser;
    let chatMessage = {
      text: message,
      time: Date.now(),
      user: {
        id: currentUser.uid,
        name: currentUser.email
      }
    }

    let firebaseRef = firebaseService.database().ref(FIREBASE_REF_MESSAGES);
    firebaseRef.push().set(chatMessage, function(error) {
      if (error) {
        dispatch(chatMessageError(error));
      } else {
        dispatch(chatMessageSuccess());
      }
    });
  }
}
export function updateMessage(text) {
  return (dispatch) => {
    dispatch(chatUpdateMessage(text));
  }
}

function chatMessageLoading() {
  return {
    type: types.CHAT_MESSAGE_LOADING,
  }
}

function chatMessageSuccess() {
  return {
    type: types.CHAT_MESSAGE_SUCCESS,
  }
}

function chatMessageError(error) {
  return {
    type: types.CHAT_MESSAGE_ERROR,
    error,
  }
}

function chatUpdateMessage(text) {
  return {
    type: types.CHAT_MESSAGE_UPDATE,
    text,
  }
}
