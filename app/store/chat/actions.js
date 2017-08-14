'use strict';

import * as types from './actionTypes';
import firebaseService from '../../services/firebase';

export function sendMessage(message) {
  return (dispatch) => {
    dispatch(chatMessageLoading());

    let currentUser = firebaseService.auth().currentUser;
    //console.log(currentUser);
    console.log(message);

    setTimeout(function() {
      dispatch(chatMessageSuccess());
    }, 3000);


    // let chatMessage = {
    //   message: message,
    //   user: {
    //     id:
    //   },
    //   date:
    // };

    // firebaseService.database().ref('chat').set

    // let unsubscribe = firebaseService.auth()
    //   .onAuthStateChanged(function(user) {
    //     if (user) {
    //       dispatch(sessionSuccess(user));
    //       unsubscribe();
    //     } else {
    //       dispatch(sessionLogout());
    //       unsubscribe();
    //     }
    //   });
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
