import * as actionTypes from "./eventActionTypes";

const initialState = {
  events: [],
  single_event: {},
  loading: false,
  error: null,
};

const eventStart = (state) => {
  return {
    ...state,
    loading: true,
    error: null,
  };
};

const eventCreateSuccess = (state, action) => {
  return {
    ...state,
    events: [...state.events, action.data],
    loading: false,
    error: null,
  };
};
const eventGetSuccess = (state, action) => {
  return {
    ...state,
    events: action.data,
    loading: false,
    error: null,
  };
};
const singleEventGetSuccess = (state, action) => {
  return {
    ...state,
    single_event: action.data,
    loading: false,
    error: null,
  };
};
const updateEventSuccess = (state, action) => {
  return {
    ...state,
    events: state.events.map((event) =>
      event.id === action.data.id ? action.data : event
    ),
    loading: false,
    error: null,
  };
};
const eventDeleteSuccess = (state, action) => {
  return {
    ...state,
    events: action.data,
    loading: false,
    error: null,
  };
};

const eventFail = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error,
  };
};

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EVENT_START:
      return eventStart(state, action);
    case actionTypes.CREATE_EVENT_SUCCESS:
      return eventCreateSuccess(state, action);
    case actionTypes.GET_EVENT:
      return eventGetSuccess(state, action);
    case actionTypes.GET_SINGLE_EVENT:
      return singleEventGetSuccess(state, action);
    case actionTypes.UPDATE_EVENT:
      return updateEventSuccess(state, action);
    case actionTypes.DELETE_EVENT:
      return eventDeleteSuccess(state, action);
    case actionTypes.EVENT_FAIL:
      return eventFail(state, action);

    default:
      return state;
  }
};
