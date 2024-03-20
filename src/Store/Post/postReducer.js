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
const createPost = (state, action) => ({
  ...state,
  posts: [...state.posts, action.data],
  is_loading: false,
  error: null,
});
const getPost = (state, action) => ({
  ...state,
  posts: action.data,
  is_loading: false,
  error: null,
});
const getSinglePost = (state, action) => ({
  ...state,
  posts: action.data,
  is_loading: false,
  error: null,
});
const updatePost = (state, action) => ({
  ...state,
  posts: state.posts.map((post) =>
    post.id === action.data.id ? action.data : post
  ),
  is_loading: false,
  error: null,
});
const deletePost = (state, action) => ({
  ...state,
  posts: action.data,
  is_loading: false,
  error: null,
});
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
      return createPost(state, action);
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
