'use strict';

import * as types from './actionTypes';
import firebaseService from '../services/firebase';

export function restoreSession() {
  return (dispatch) => {
    dispatch(sessionRestoring());

    let unsubscribe = firebaseService.auth()
      .onAuthStateChanged(function(user) {
        if (user) {
          dispatch(sessionSuccess(user));
          unsubscribe();
        } else {
          dispatch(sessionLogout());
          unsubscribe();
        }
      });
  }
}

export function loginUser(email, password) {
  return (dispatch) => {
    dispatch(sessionLoading());

    firebaseService.auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        dispatch(sessionError(error.message));
      });

    let unsubscribe = firebaseService.auth()
      .onAuthStateChanged(function(user) {
        if (user) {
          dispatch(sessionSuccess(user));
          unsubscribe();
        }
      });
  }
}

export function signupUser(email, password) {
  return (dispatch) => {
    dispatch(sessionLoading());

    firebaseService.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        dispatch(sessionError(error.message));
      });

    let unsubscribe = firebaseService.auth()
      .onAuthStateChanged(function(user) {
        if (user) {
          dispatch(sessionSuccess(user));
          unsubscribe();
        }
      });
  }
}

export function logoutUser() {
  return (dispatch) => {
    dispatch(sessionLoading());

    firebaseService.auth()
      .signOut()
      .then(function() {
        dispatch(sessionLogout());
      })
      .catch(function(error) {
        dispatch(sessionError(error.message));
      });
  }
}

function sessionRestoring() {
  return {
    type: types.SESSION_RESTORING,
  }
}

function sessionLoading() {
  return {
    type: types.SESSION_LOADING,
  }
}

function sessionSuccess(user) {
  return {
    type: types.SESSION_SUCCESS,
    user,
  }
}

function sessionError(error) {
  return {
    type: types.SESSION_ERROR,
    error,
  }
}

function sessionLogout() {
  return {
    type: types.SESSION_LOGOUT,
  }
}
