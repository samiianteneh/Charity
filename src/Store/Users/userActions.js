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

const getUsersSuccess = (data) => ({
  type: actionTypes.GET_USER,
  data,
});
const getAdminSuccess = (data) => ({
  type: actionTypes.GET_ADMIN,
  data,
});
const getSingleUserSuccess = (data) => ({
  type: actionTypes.GET_SINGLE_USER,
  data,
});
const updateUserSuccess = (data) => ({
  type: actionTypes.UPDATE_USER,
  data,
});
const deleteUserSuccess = (data) => ({
  type: actionTypes.DELETE_USER,
  data,
});
const userFail = (error) => ({
  type: actionTypes.USER_FAIL,
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
        "Content-Type": "application/json",
      },
      data: { ...data, role },
    })
      .then((response) => {
        dispatch(registerSuccess(response?.data));
        dispatch(successMessage("User Created Successfully!"));
        console.log("create Volenteer response", response);
      })
      .catch((error) => {
        dispatch(registerFail(error));
        let errors;
        if (error?.response) {
          errors = error?.message + " " + error?.response?.data;
        }
        if (error?.request) {
          errors = error?.message + "Failed request, Try Again!";
        }
        console.log("create Volenteer response err", error);

        dispatch(errorMessage(errors));
      });
  };
};

export const getUsers = () => {
  return (dispatch) => {
    dispatch(registerStart());
    const token = localStorage.getItem("token");

    if (!token) {
      dispatch(userFail("Token not found"));
      dispatch(errorMessage("Token not found."));
      return;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`${API_BASE_URL}/users`, config)
      .then((response) => {
        dispatch(getUsersSuccess(response?.data));
        console.log(response, "responsettt");
      })
      .catch((error) => {
        dispatch(userFail(error));
        dispatch(errorMessage("Failed to fetch users."));
      });
  };
};
export const getAdmin = () => {
  return (dispatch) => {
    dispatch(registerStart());
    const token = localStorage.getItem("token");

    if (!token) {
      dispatch(userFail("Token not found"));
      dispatch(errorMessage("Token not found."));
      return;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`${API_BASE_URL}/users/new`, config)
      .then((response) => {
        dispatch(getAdminSuccess(response?.data));
        console.log(response, "responsettt");
      })
      .catch((error) => {
        dispatch(userFail(error));
        dispatch(errorMessage("Failed to fetch users."));
      });
  };
};

export const getUserById = (userId) => {
  return (dispatch) => {
    dispatch(registerStart());
    axios
      .get(`${API_BASE_URL}/users/${userId}`)
      .then((response) => {
        dispatch(getSingleUserSuccess(response?.data));
      })
      .catch((error) => {
        dispatch(registerFail(error));
        dispatch(errorMessage("Failed to fetch user."));
      });
  };
};

export const updateUser = (userId, newData) => {
  console.log("firstfirstfirst", userId, newData);

  return (dispatch) => {
    dispatch(registerStart());
    axios
      .patch(`${API_BASE_URL}/users/${userId}`, newData)
      .then((response) => {
        dispatch(updateUserSuccess(response?.data));
        dispatch(successMessage("User updated successfully!"));
        console.log("firresponsest", response);
      })
      .catch((error) => {
        dispatch(userFail(error));
        dispatch(errorMessage("Failed to update user."));
      });
  };
};

export const userDelete = (userId, data) => {
  console.log(userId, "userId");

  return (dispatch) => {
    dispatch(registerStart());
    axios
      .delete(`${API_BASE_URL}/users/${userId}`)
      .then(() => {
        dispatch(deleteUserSuccess(data?.filter((item) => item.id !== userId)));
        dispatch(successMessage("User deleted successfully!"));
      })
      .catch((error) => {
        dispatch(registerFail(error));
        dispatch(errorMessage("Failed to delete user."));
      });
  };
};
