import { API_BASE_URL } from "../../Config/endpoint";
import { errorMessage, successMessage } from "../Messages/messageActions";
import * as actionTypes from "./feedbackActionTypes";
import axios from "axios";

const feedbackStart = () => ({
  type: actionTypes.FEEDBACK_START,
});

const feedbackCreate = (data) => ({
  type: actionTypes.FEEDBACK_CREATE_SUCCESS,
  data,
});

const feedbackGet = (data) => ({
  type: actionTypes.FEEDBACK_GET_SUCCESS,
  data,
});

const feedbackUpdate = (data) => ({
  type: actionTypes.FEEDBACK_UPDATE_SUCCESS,
  data,
});

const feedbackFail = (error) => ({
  type: actionTypes.FEEDBACK_FAIL,
  error,
});

export const createFeedback = (data) => {
  console.log("firstdatadata", data);

  return (dispatch) => {
    dispatch(feedbackStart());
    axios({
      method: "post",
      url: `${API_BASE_URL}/feedback`,
      data,
    })
      .then((response) => {
        dispatch(feedbackCreate(response?.data));
        dispatch(successMessage("Feedback Created Successfully!"));
        console.log("responsefirst", response);
      })
      .catch((error) => {
        dispatch(feedbackFail(error));
        dispatch(errorMessage("Failed to create feedback."));
      });
  };
};

export const getFeedback = () => {
  return (dispatch) => {
    dispatch(feedbackStart());
    axios
      .get(`${API_BASE_URL}/feedback`)
      .then((response) => {
        dispatch(feedbackGet(response?.data));
      })
      .catch((error) => {
        dispatch(feedbackFail(error));
        dispatch(errorMessage("Failed to fetch feedback."));
      });
  };
};

export const updateFeedback = (userId, newData) => {
  return (dispatch) => {
    dispatch(feedbackStart());
    axios
      .put(`${API_BASE_URL}/feedback/${userId}`, newData)
      .then((response) => {
        dispatch(feedbackUpdate(response?.data));
        dispatch(successMessage("Feedback updated successfully!"));
        console.log(response, " feedback updated successfully");
      })
      .catch((error) => {
        dispatch(feedbackFail(error));
        dispatch(errorMessage("Failed to update feedback."));
      });
  };
};
