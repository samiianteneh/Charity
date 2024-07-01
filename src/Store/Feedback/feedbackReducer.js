import * as actionTypes from "./feedbackActionTypes";

const initialState = {
  is_loading: false,
  error: null,
  feedbacks: [],
  single_feedback: {},
};

const feedbackStart = (state) => ({
  ...state,
  is_loading: true,
  error: null,
});
const createFeedback = (state, action) => {
  return {
    ...state,
    feedbacks: [...state.feedbacks, action.data],
    is_loading: false,
    error: null,
  };
};
const getFeedback = (state, action) => {
  console.log("object", state, action);

  return {
    ...state,
    feedbacks: action.data,
    is_loading: false,
    error: null,
  };
};
// const getSingleFeedback = (state, action) => ({
//   ...state,
//   single_feedback: action.data,
//   is_loading: false,
//   error: null,
// });
const updateFeedback = (state, action) => ({
  ...state,
  feedbacks: state.feedbacks.map((feedback) =>
    feedback.id === action.data.id ? action.data : feedback
  ),
  is_loading: false,
  error: null,
});
const feedbackFail = (state, action) => ({
  ...state,
  is_loading: false,
  error: action.error,
});

// ==============> FEEDBACK REDUCER <============

export const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FEEDBACK_START:
      return feedbackStart(state);
    case actionTypes.FEEDBACK_CREATE_SUCCESS:
      return createFeedback(state, action);
    case actionTypes.FEEDBACK_GET_SUCCESS:
      return getFeedback(state, action);
    case actionTypes.FEEDBACK_UPDATE_SUCCESS:
      return updateFeedback(state, action);
    case actionTypes.FEEDBACK_FAIL:
      return feedbackFail(state, action);
    default:
      return state;
  }
};
