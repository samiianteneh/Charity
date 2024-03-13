import { API_BASE_URL } from "../../Config/endpoint";
import { errorMessage, successMessage } from "../Messages/messageActions";
import * as actionTypes from "./eventActionTypes";

const eventStart = () => {
  return {
    type: actionTypes.EVENT_START,
  };
};

const eventCreateSuccess = (data) => {
  return {
    type: actionTypes.EVENT_START,
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
      url: `${API_BASE_URL}/`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    })
      .then((response) => {
        dispatch(eventCreateSuccess(response?.data));
        dispatch(successMessage("Event Created Successfully!"));
      })
      .catch((error) => {
        dispatch(dispatch(eventFail(error)));
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
export const getEvent = (event_id) => {
  return (dispatch) => {
    dispatch(eventStart());
    axios({
      method: "get",
      url: `${API_BASE_URL}/.../${event_id}`,
    })
      .then((response) => {
        dispatch(eventGetSuccess(response?.data));
      })
      .catch((error) => {
        dispatch(dispatch(eventFail(error)));
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

export const updateStakeholder = (id, data) => {
  return (dispatch) => {
    dispatch(eventStart());
    axios({
      method: "patch",
      url: `${API_BASE_URL}/..../${id}`,
      data: data,
    })
      .then((response) => {
        dispatch(updateEventSuccess(response?.data));
        dispatch(successMessage("Stakeholder Updated Successfully!"));
      })
      .catch((error) => {
        dispatch(stakeholderFail(error));
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
