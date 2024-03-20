import * as actionTypes from "./donateActionTypes";

const initialState = {
  is_loading: false,
  error: null,
  donators: [],
  single_Donate: {},
};

const donateStart = (state) => ({
  ...state,
  is_loading: true,
  error: null,
});
const createDonate = (state, action) => ({
  ...state,
  donators: [...state.donators, action.data],
  is_loading: false,
  error: null,
});
const getDonate = (state, action) => ({
  ...state,
  donators: action.data,
  is_loading: false,
  error: null,
});
const getSingleDonate = (state, action) => ({
  ...state,
  donators: action.data,
  is_loading: false,
  error: null,
});
const updateDonate = (state, action) => ({
  ...state,
  donators: state.donators.map((donator) =>
    donator.id === action.data.id ? action.data : donator
  ),
  is_loading: false,
  error: null,
});
const deleteDonate = (state, action) => ({
  ...state,
  donators: action.data,
  is_loading: false,
  error: null,
});
const donateFail = (state, action) => ({
  ...state,
  is_loading: false,
  error: action.error,
});

// ==============> USERS REDUCER <============

export const DonateReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DONATE_START:
      return donateStart(state);
    case actionTypes.CREATE_DONATE:
      return createDonate(state, action);
    case actionTypes.GET_DONATE:
      return getDonate(state, action);
    case actionTypes.UPDATE_DONATE:
      return updateDonate(state, action);
    case actionTypes.DELETE_DONATE:
      return deleteDonate(state, action);
    case actionTypes.DONATE_FAIL:
      return donateFail(state, action);
    default:
      return state;
  }
};
