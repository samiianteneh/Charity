import * as actionTypes from "./userActionTypes";
import { successMessage, errorMessage } from "../Messages/messageActions";
import axios from "axios";
import { API_BASE_URL } from "../../Config/endpoint";

const registerStart = () => ({
  type: actionTypes.START_REGISTER,
});
const registerSuccess = (data) => ({
  type: actionTypes.REGISTRATION_SUCCESS,
  data,
});
const registerFail = (error) => ({
  type: actionTypes.REGISTRATION_FAIL,
  error,
});

// ===========> USER CRUD <=============

export const userRegistration = (data, role) => {
  return (dispatch) => {
    dispatch(registerStart());
    axios({
      method: "post",
      url: `${API_BASE_URL}/users`,
      headers: {
        "Content-Type": "Application/json",
      },
      data,
      role,
    })
      .then((response) => {
        dispatch(registerSuccess(response?.data));
        dispatch(successMessage("User Created Successfully!"));
      })
      .catch((error) => {
        dispatch(dispatch(registerFail(error)));
        let errors;
        if (error?.response) {
          errors = error?.message + " " + error?.response?.data;
        }
        if (error?.request) {
          errors = error?.message + "Failed request, Try Again!";
        }

        dispatch(errorMessage(errors));
      });
  };
};
