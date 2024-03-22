import { API_BASE_URL } from "../../Config/endpoint";
import { errorMessage, successMessage } from "../Messages/messageActions";
import * as actionTypes from "./balanceActionType";
import axios from "axios";

const balanceStart = () => {
  return {
    type: actionTypes.BALANCE_START,
  };
};
const getBalance = (data) => {
  return {
    type: actionTypes.GET_BALANCE,
    data,
  };
};

const balanceFail = (error) => {
  return {
    type: actionTypes.BALANCE_FAIL,
    error,
  };
};

export const getBalances = () => {
  return (dispatch) => {
    dispatch(balanceStart());
    axios({
      method: "get",
      url: `${API_BASE_URL}/payment/balance`,
    })
      .then((response) => {
        dispatch(getBalance(response?.data));
      })
      .catch((error) => {
        dispatch(balanceFail(error));
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