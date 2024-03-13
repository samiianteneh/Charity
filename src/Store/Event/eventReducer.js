import * as actionTypes from "./loginActionTypes";

const initialState = {
  loggedInUser: {},
  loggedInUser_loading: false,
  loggedInUser_error: null,
};

const userLogin = (state) => {
  return {
    ...state,
    loggedInUser_loading: true,
    loggedInUser_error: null,
  };
};

const userLoggedInSuccess = (state, action) => {
  return {
    ...state,
    loggedInUser: action.data,
    loggedInUser_loading: false,
    loggedInUser_error: null,
  };
};

const userLoginFail = (state, action) => {
  return {
    ...state,
    loggedInUser_loading: false,
    loggedInUser_error: action.error,
  };
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return userLogin(state, action);
    case actionTypes.USER_LOGGED_IN_SUCCESS:
      return userLoggedInSuccess(state, action);
    case actionTypes.USER_LOGIN_FAIL:
      return userLoginFail(state, action);
    default:
      return state;
  }
};
