import * as actionTypes from "./authActionTypes";

const initialState = {
  loading: false,
  error: null,
  token: localStorage.getItem("token") || null,
  userData: JSON.parse(localStorage.getItem("userData")) || null,
};

const loginStart = (state) => ({
  ...state,
  error: null,
  loading: true,
});

const loginSuccess = (state, action) => {
  localStorage.setItem("token", token);
  localStorage.setItem("userData", JSON.stringify(userData));
  return {
    ...state,
    loading: false,
    token: action.data,
    userData: action.data,
    error: null,
  };
};

const loginFail = (state) => ({
  ...state,
  error: action.payload.error,
});
const logout = (state) => {
  localStorage.removeItem("token");
  localStorage.removeItem("userData");
  return {
    ...state,
    token: null,
    userData: null,
    error: null,
  };
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_LOGIN:
      return loginStart(state);
    case actionTypes.LOGIN_SUCCESS:
      return loginSuccess(state);
    case actionTypes.LOGIN_FAIL:
      return loginFail(state);
    case actionTypes.LOGOUT:
      return logout(state);
    default:
      return state;
  }
};
