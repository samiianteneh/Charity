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

// export const loginUser = (data) => {
//   return (dispatch) => {
//     dispatch(loginStart());
//     axios({
//       url: `${API_BASE_URL}/login`,
//       method: "post",
//       data,
//     })
//       .then((response) => {
//         console.log("firstresponse", response);

//         const { token, user } = response?.data;

//         dispatch(loginSuccess(token, user));
//         // console.log("token", token);
//         // console.log("user", user);
//         // When setting the items in localStorage
//         // localStorage.setItem("token", JSON.stringify(tokenObject));
//         // localStorage.setItem("user", JSON.stringify(userObject));

//         localStorage.setItem("token", token);
//         localStorage.setItem("user", JSON.stringify(user));
//       })
//       .catch((error) => {
//         dispatch(loginFail(error.message));
//       });
//   };
// };
export const loginUser = (data) => {
  return (dispatch) => {
    dispatch(loginStart());
    axios({
      url: `${API_BASE_URL}/login`,
      method: "post",
      data,
    })
      .then((response) => {
        console.log("Token or user", response);

        const { token, user } = response?.data ?? {};
        const newToken = response?.data?.token;
        const newUser = response?.data?.user;
        console.log(newToken, "object_object", newUser);

        console.log("token", token);
        console.log("user", user);

        if (token && user) {
          dispatch(loginSuccess(token, user));

          // When setting the items in localStorage
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));

          console.log("Token or user saved to localStorage");
        } else {
          console.error("Token or user data missing in response");
        }
      })
      .catch((error) => {
        console.error("Login failed", error);
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
