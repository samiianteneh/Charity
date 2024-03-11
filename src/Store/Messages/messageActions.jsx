import * as types from "./messageActionTypes";

export const authErrorHandler = (msg, status = 0) => {
  return (dispatch) => {
    if (status == "401" || msg == "The User no longer exists") {
      dispatch(setErrorMessage(msg, 401));
    }
  };
};

export const successMessage = (msg) => {
  return (dispatch) => {
    dispatch(setSuccessMessage(msg));
    setTimeout(() => {
      dispatch(setMessageNull());
    }, 5000);
  };
};

export const errorMessage = (msg, status = 0) => {
  return (dispatch) => {
    dispatch(setErrorMessage(msg, status));
    setTimeout(() => {
      dispatch(setMessageNull());
    }, 5000);
  };
};

export const infoMessage = (msg) => {
  return (dispatch) => {
    dispatch(setInfoMessage(msg));
  };
};

export const messageNull = () => {
  return (dispatch) => {
    dispatch(setMessageNull());
  };
};

export const setErrorMessage = (msg, status = 0) => {
  return {
    type: types.SET_MESSAGE_ERROR,
    payload: msg,
    status: status,
  };
};

export const setSuccessMessage = (msg) => {
  return {
    type: types.SET_MESSAGE_SUCCESS,
    payload: msg,
  };
};

export const setInfoMessage = (msg) => {
  return {
    type: types.SET_MESSAGE_INFO,
    payload: msg,
  };
};

export const setMessageNull = () => {
  return {
    type: types.SET_MESSAGE_NULL,
  };
};
