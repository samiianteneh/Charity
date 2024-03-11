import * as actionTypes from "./authActionTypes";

const initialState = {
  loading: false,
  error: null,
  token: localStorage.getItem("token") || null,
  user: JSON.parse(localStorage.getItem("user")) || null,
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
    token: action.token,
    user: action.user,
    error: null,
  };
};

const loginFail = (state, action) => ({
  ...state,
  error: action.payload.error,
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
