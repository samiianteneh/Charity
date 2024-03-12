import * as actionTypes from "./authActionTypes";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const initialState = {
  loading: false,
  error: null,
  // token: token ? JSON.parse(token) : null,
  // user: user ? JSON.parse(user) : null,
  token: token ? token : null,
  user: user ? user : null,
};

const loginStart = (state) => ({
  ...state,
  error: null,
  loading: true,
});

const loginSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    token: action.data.token,
    user: action.data.user,
    error: null,
  };
};

const loginFail = (state, action) => ({
  ...state,
  error: action.error,
});
const logout = (state) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  return {
    ...state,
    token: null,
    user: null,
    error: null,
  };
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_LOGIN:
      return loginStart(state);
    case actionTypes.LOGIN_SUCCESS:
      return loginSuccess(state, action);
    case actionTypes.LOGIN_FAIL:
      return loginFail(state, action);
      return loginFail(state, action);
    case actionTypes.LOGOUT:
      return logout(state);
    default:
      return state;
  }
};
