import * as types from '../actions/actionTypes';

const initialState = {
  loading: false,
  user: null,
  error: null,
};

export default function session(state = initialState, action) {
  switch(action.type) {
    case types.SESSION_LOADING:
      return Object.assign({}, state, {
        loading: true,
      });
    case types.SESSION_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        user: null,
        error: null
      });
    case types.SESSION_ERROR:
      return Object.assign({}, state, {
        loading: false,
        user: null,
        error: null
      });
    case types.LOGOUT:
      return initialState;
    default:
      return state;
  }
}
