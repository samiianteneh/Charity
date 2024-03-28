import * as actionTypes from "./userActionTypes";

const initialState = {
  is_loading: false,
  error: null,
  users: [],
  single_user: {},
};

const userStart = (state) => ({
  ...state,
  is_loading: true,
  error: null,
});
const createUser = (state, action) => ({
  ...state,
  users: [...state.users, action.data],
  is_loading: false,
  error: null,
});
const getUser = (state, action) => ({
  ...state,
  users: action.data,
  is_loading: false,
  error: null,
});
const getAdmin = (state, action) => ({
  ...state,
  users: action.data,
  is_loading: false,
  error: null,
});
const getSingleUser = (state, action) => ({
  ...state,
  users: action.data,
  is_loading: false,
  error: null,
});
const updateUser = (state, action) => ({
  ...state,
  users: state.users.map((user) =>
    user.id === action.data.id ? action.data : user
  ),
  is_loading: false,
  error: null,
});
const deleteUser = (state, action) => ({
  ...state,
  users: state.users.filter((user) => user.id !== action.userId), // Filter out the deleted user
  is_loading: false,
  error: null,
});

const userFail = (state, action) => ({
  ...state,
  is_loading: false,
  error: action.error,
});

// ==============> USERS REDUCER <============

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_REGISTER:
      return userStart(state);
    case actionTypes.REGISTRATION_SUCCESS:
      return createUser(state, action);
    case actionTypes.GET_USER:
      return getUser(state, action);
    case actionTypes.GET_ADMIN:
      return getAdmin(state, action);
    case actionTypes.GET_SINGLE_USER:
      return getSingleUser(state, action);
    case actionTypes.UPDATE_USER:
      return updateUser(state, action);
    case actionTypes.DELETE_USER:
      return deleteUser(state, action);
    case actionTypes.USER_FAIL:
      return userFail(state, action);
    default:
      return state;
  }
};
