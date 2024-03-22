import { API_BASE_URL } from "../../Config/endpoint";
import { errorMessage, successMessage } from "../Messages/messageActions";
import * as actionTypes from "./eventActionTypes";
import axios from "axios";

const eventStart = () => {
  return {
    type: actionTypes.EVENT_START,
  };
};

const eventCreateSuccess = (data) => {
  return {
    type: actionTypes.CREATE_EVENT_SUCCESS,
    data,
  };
};

const eventGetSuccess = (data) => {
  return {
    type: actionTypes.GET_EVENT,
    data,
  };
};
const singleEventGetSuccess = (data) => {
  return {
    type: actionTypes.GET_SINGLE_EVENT,
    data,
  };
};
const updateEventSuccess = (data) => {
  return {
    type: actionTypes.UPDATE_EVENT,
    data,
  };
};
const eventDeleteSuccess = (data) => {
  return {
    type: actionTypes.DELETE_EVENT,
    data,
  };
};
const eventFail = (error) => {
  return {
    type: actionTypes.EVENT_FAIL,
    error,
  };
};

// ================> EVENT CRUD <================

export const createEvent = (data) => {
  return (dispatch) => {
    dispatch(eventStart());
    axios({
      method: "post",
      url: `${API_BASE_URL}/event`,
      // headers: {
      //   "Content-Type": "application/json",
      // },
      data: data,
    })
      .then((response) => {
        dispatch(eventCreateSuccess(response?.data));
        dispatch(successMessage("Event Created Successfully!"));
        console.log("response from backend for charity ", response);
      })
      .catch((error) => {
        console.log(error, "response from backend for charity  error");
        dispatch(eventFail(error));
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
export const getEvent = () => {
  return (dispatch) => {
    dispatch(eventStart());
    axios({
      method: "get",
      url: `${API_BASE_URL}/event`,
    })
      .then((response) => {
        dispatch(eventGetSuccess(response?.data));
      })
      .catch((error) => {
        dispatch(eventFail(error));
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
export const getSingleEvent = (event_id) => {
  return (dispatch) => {
    dispatch(eventStart());
    axios({
      method: "get",
      url: `${API_BASE_URL}/event/${event_id}`,
    })
      .then((response) => {
        dispatch(singleEventGetSuccess(response?.data));
        console.log(response, "responsensajdvjsavg");
      })
      .catch((error) => {
        dispatch(eventFail(error));
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

export const updateEvent = (id, data) => {
  return (dispatch) => {
    dispatch(eventStart());
    axios({
      method: "patch",
      url: `${API_BASE_URL}/event/${id}`,
      data: data,
    })
      .then((response) => {
        console.log(response, "response from backend for charity update");
        dispatch(updateEventSuccess(response?.data));
        dispatch(successMessage("Event Updated Successfully!"));
      })
      .catch((error) => {
        console.log(error, "response from backend for charity update error");

        dispatch(eventFail(error));
        let errors;
        if (error.response) {
          errors = error.message + " " + error.response.data;
        }
        if (error.request) {
          errors = error.message + "Failed request, Try Again!";
        }

        dispatch(errorMessage(errors));
      });
  };
};
export const deleteUser = (userId, data) => {
  console.log(userId, "userId");

  return (dispatch) => {
    dispatch(eventStart());
    axios
      .delete(`${API_BASE_URL}/event/${userId}`)
      .then(() => {
        dispatch(
          eventDeleteSuccess(data?.filter((item) => item.id !== userId))
        );
        dispatch(successMessage("Event deleted successfully!"));
      })
      .catch((error) => {
        dispatch(eventFail(error));
        dispatch(errorMessage("Failed to delete event."));
      });
  };
};
