import axios from "axios";
import { API_BASE_URL } from "../../Config/endpoint";
import * as actionTypes from "./authActionTypes";

const loginStart = () => ({
  type: actionTypes.START_LOGIN,
});
const loginSuccess = (token, user) => ({
  type: actionTypes.LOGIN_SUCCESS,
  data: { token, user },
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
        console.log("firstresponse", response);
        const { token, user } = response?.data;

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(loginSuccess(token, user));
        // localStorage.setItem("token", token);
        // localStorage.setItem("user", JSON.stringify(user));
        // console.log("firstgtyh", dispatch(loginSuccess(token, user)));
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
    localStorage.removeItem("user");
  };
};
