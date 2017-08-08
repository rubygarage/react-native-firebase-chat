import * as types from '../actions/actionTypes';
import firebaseService from '../services/firebase';

const initialState = {
  restoring: false,
  loading: false,
  user: null,
  error: null,
};

export default function session(state = initialState, action) {
  switch(action.type) {
    case types.SESSION_RESTORING:
      return Object.assign({}, state, {
        restoring: true,
      });
    case types.SESSION_LOADING:
      return Object.assign({}, state, {
        loading: true,
        error: null,
      });
    case types.SESSION_SUCCESS:
      return Object.assign({}, state, {
        restoring: false,
        loading: false,
        user: action.user,
        error: null
      });
    case types.SESSION_ERROR:
      return Object.assign({}, state, {
        restoring: false,
        loading: false,
        user: null,
        error: action.error,
      });
    case types.LOGOUT:
      return initialState;
    default:
      return state;
  }
}
