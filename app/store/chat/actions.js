'use strict';

import * as types from './actionTypes';
import firebaseService from '../../services/firebase';

const FIREBASE_REF_MESSAGES = firebaseService.database().ref('Messages');

export function sendMessage(message) {
  return (dispatch) => {
    dispatch(chatMessageLoading());

    let currentUser = firebaseService.auth().currentUser;
    let chatMessage = {
      text: message,
      time: Date.now(),
      user: {
        id: currentUser.uid,
        email: currentUser.email
      }
    }

    FIREBASE_REF_MESSAGES.push().set(chatMessage, function(error) {
      if (error) {
        dispatch(chatMessageError(error.message));
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

export function loadMessages() {
  return (dispatch) => {
    FIREBASE_REF_MESSAGES.on('value', function(snapshot) {
      dispatch(loadMessagesSuccess(snapshot.val()));
    }, function (errorObject) {
      dispatch(loadMessagesError(errorObject.message));
    });
  }
}

export function subscribeFirebaseChanges() {
  return (dispatch) => {
    FIREBASE_REF_MESSAGES.on("child_added", function(snapshot) {
      var newPost = snapshot.val();
      console.log('*** ADDED POST ***');
    });

    FIREBASE_REF_MESSAGES.on("child_changed", function(snapshot) {
      var newPost = snapshot.val();
      console.log('*** CHANGED POST ***');
    });

    FIREBASE_REF_MESSAGES.on("child_removed", function(snapshot) {
      var newPost = snapshot.val();
      console.log('*** REMOVED POST ***');
    });
  }
}

export function unsuscribeFirebaseChanges() {
  return (dispatch) => {
    FIREBASE_REF_MESSAGES.off();
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

function loadMessagesSuccess(messages) {
  return {
    type: types.CHAT_LOAD_MESSAGES_SUCCESS,
    messages,
  }
}

function loadMessagesError(error) {
  return {
    type: types.CHAT_LOAD_MESSAGES_ERROR,
    error,
  }
}
