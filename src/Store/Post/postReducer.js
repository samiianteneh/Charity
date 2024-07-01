import * as actionTypes from "./postActionTypes";

const initialState = {
  is_loading: false,
  error: null,
  posts: [],
  single_post: {},
};

const postStart = (state) => ({
  ...state,
  is_loading: true,
  error: null,
});
const createPostSuccess = (state, action) => {
  return {
    ...state,
    posts: [...state.posts, action.data.data],
    is_loading: false,
    error: null,
  };
};
const getPost = (state, action) => ({
  ...state,
  // posts: Array.isArray(action.data) ? action.data : [], // Ensure action.data is an array
  posts: action.data,
  is_loading: false,
  error: null,
});
const getSinglePost = (state, action) => ({
  ...state,
  single_post: action.data,
  is_loading: false,
  error: null,
});
const updatePost = (state, action) => {
  // console.log("object", state, action);
  return {
    ...state,
    posts: state.posts.map((post) =>
      post.id === action.data.data.id ? action.data.data : post
    ),
    is_loading: false,
    error: null,
  };
};
const deletePost = (state, action) => {
  console.log(state, action, "state and action");

  return {
    ...state,
    posts: action.data,
    is_loading: false,
    error: null,
  };
};
const postFail = (state, action) => ({
  ...state,
  is_loading: false,
  error: action.error,
});

// ==============> USERS REDUCER <============

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_START:
      return postStart(state);
    case actionTypes.CREATE_POST:
      return createPostSuccess(state, action);
    case actionTypes.GET_POST:
      return getPost(state, action);
    case actionTypes.UPDATE_POST:
      return updatePost(state, action);
    case actionTypes.DELETE_POST:
      return deletePost(state, action);
    case actionTypes.POST_FAIL:
      return postFail(state, action);
    default:
      return state;
  }
};
