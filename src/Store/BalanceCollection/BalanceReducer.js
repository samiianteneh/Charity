import * as actionTypes from "./balanceActionType";

const initialState = {
  balance: [],
  loading: false,
  error: null,
};

const balanceStart = (start) => {
  return {
    ...start,
    loading: true,
    error: null,
  };
};

const getBalance = (state, action) => {
  // console.log("objectttss", state, action);
  return {
    ...state,
    balance: action.data,
    loading: false,
    error: null,
  };
};
const balanceFail = (start, action) => {
  return {
    ...start,
    loading: false,
    error: action.error,
  };
};
export const BalanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BALANCE_START:
      return balanceStart(state, action);
    case actionTypes.GET_BALANCE:
      return getBalance(state, action);
    case actionTypes.BALANCE_FAIL:
      return balanceFail(state, action);
    default:
      return state;
  }
};
