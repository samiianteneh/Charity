import { errorMessage, successMessage } from "../Messages/messageActions";
import * as actionTypes from "./postActionTypes";
import axios from "axios";
import { API_BASE_URL } from "../../Config/endpoint";

const postStart = () => ({
  type: actionTypes.POST_START,
});
const createPostSuccess = (data) => ({
  type: actionTypes.CREATE_POST,
  data,
});
const getPostSuccess = (data) => ({
  type: actionTypes.GET_POST,
  data,
});
const updatePostSuccess = (data) => ({
  type: actionTypes.UPDATE_POST,
  data,
});
const deletePostSuccess = (data) => ({
  type: actionTypes.DELETE_POST,
  data,
});
const postFail = (error) => ({
  type: actionTypes.POST_FAIL,
  error,
});

export const createPost = (data) => {
  return (dispatch) => {
    dispatch(postStart());
    axios({
      method: "post",
      url: `${API_BASE_URL}/post`,
      header: {
        "Content-Type": "Application/json",
      },
      data,
    })
      .then((response) => {
        dispatch(createPostSuccess(response?.data));
        dispatch(successMessage("Post Created Successfully!"));
      })
      .catch((error) => {
        dispatch(postFail(error));
        dispatch(errorMessage(error));
      });
  };
};
export const getPost = () => {
  return (dispatch) => {
    dispatch(postStart());
    axios({
      method: "get",
      url: "https://fakestoreapi.com/products/category/jewelery",

      // url: `${API_BASE_URL}/post`,
    })
      .then((response) => {
        dispatch(getPostSuccess(response?.data));
        console.log("firstrety", response);
      })
      .catch((error) => {
        dispatch(postFail(error));
        dispatch(errorMessage(error));
      });
  };
};
export const updatePost = (postID, updatedData) => {
  return (dispatch) => {
    dispatch(postStart());
    axios({
      method: "put",
      url: `${API_BASE_URL}/post/${postID}`,
      updatedData,
    })
      .then((response) => {
        dispatch(updatePostSuccess(response?.data));
      })
      .catch((error) => {
        dispatch(postFail(error));
        dispatch(errorMessage(error));
      });
  };
};
export const deletePost = (postID, data) => {
  return (dispatch) => {
    dispatch(postStart());
    axios({
      method: "delete",
      url: `${API_BASE_URL}/post/${postID}`,
      updatedData,
    })
      .then((response) => {
        dispatch(deletePostSuccess(data?.filter((item) => item.id !== postID)));
        dispatch(successMessage("Post deleted successfully!"));
      })
      .catch((error) => {
        dispatch(postFail(error));
        dispatch(errorMessage(error));
      });
  };
};
