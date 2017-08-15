'use strict';

import * as types from './actionTypes';
import firebaseService from '../../services/firebase';

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

    // setTimeout(function() {
    //   dispatch(chatMessageSuccess());
    // }, 3000);

    

    let firebaseRef = firebaseService.database().ref("Messages");
    firebaseRef.push().set(chatMessage, function(error) {
      if (error) {
        dispatch(chatMessageSuccess(error));
      } else {
        dispatch(chatMessageSuccess());
      }
    });
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
