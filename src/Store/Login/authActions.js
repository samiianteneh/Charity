import { API_BASE_URL } from "../../Config/endpoint";
import * as actionTypes from "./authActionTypes";

const loginStart = () => ({
  type: actionTypes.START_LOGIN,
});
const loginSuccess = (token, userData) => ({
  type: actionTypes.LOGIN_SUCCESS,
  data: { token, userData },
});
const loginFail = (error) => ({
  type: actionTypes.LOGIN_FAIL,
  error,
});

const logout = () => ({
  type: actionTypes.LOGOUT,
});

// =========> LOGIN CRUD <==========

export const loginUser = (data) => {
  return (dispatch) => {
    dispatch(loginStart());
    axios({
      url: `${API_BASE_URL}/users/login`,
      method: "post",
      data,
    })
      .then((response) => {
        const { token, userData } = response?.data;
        dispatch(loginSuccess(token, userData));
        localStorage.setItem("token", token);
        localStorage.setItem("userData", JSON.stringify(userData));
      })
      .catch((error) => {
        dispatch(loginFail(error.message));
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch(logout());
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
  };
};
