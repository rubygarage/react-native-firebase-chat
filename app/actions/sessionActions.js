import * as types from './actionTypes';

export function loginUser(username, password) {
  return (dispatch) => {
    dispatch(sessionLoading())

    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(sessionSuccess(null));
    }, 3000);
  }
}

export function signupUser(username, password) {
  return (dispatch) => {
    dispatch(sessionLoading())

    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(sessionSuccess(null));
    }, 3000);
  }
}

export function sessionLoading() {
  return {
    type: types.SESSION_LOADING,
  }
}

export function sessionSuccess(user) {
  return {
    type: types.SESSION_SUCCESS,
    user,
  }
}

export function sessionError(error) {
  return {
    type: types.SESSION_ERROR,
    error,
  }
}
