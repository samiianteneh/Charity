import { errorMessage, successMessage } from "../Messages/messageActions";
import * as actionTypes from "./donateActionTypes";

const donateStart = () => ({
  type: actionTypes.DONATE_START,
});
const createDonateSuccess = (data) => ({
  type: actionTypes.CREATE_DONATE,
  data,
});
const getDonateSuccess = (data) => ({
  type: actionTypes.GET_DONATE,
  data,
});
const updateDonateSuccess = (data) => ({
  type: actionTypes.UPDATE_DONATE,
  data,
});
const deleteDonateSuccess = (data) => ({
  type: actionTypes.DELETE_DONATE,
  data,
});
const DonateFail = (error) => ({
  type: actionTypes.DONATE_FAIL,
  error,
});

export const createDonate = (data) => {
  return (dispatch) => {
    dispatch(donateStart());
    axios({
      method: "post",
      url: `${API_BASE_URL}/Donate`,
      header: {
        "Content-Type": "Application/json",
      },
      data,
    })
      .then((response) => {
        dispatch(createDonateSuccess(response?.data));
        dispatch(successMessage("Donate Created Successfully!"));
      })
      .catch((error) => {
        dispatch(DonateFail(error));
        dispatch(errorMessage(error));
      });
  };
};
export const getDonate = () => {
  return (dispatch) => {
    dispatch(donateStart());
    axios({
      method: "get",
      url: `${API_BASE_URL}/Donate`,
    })
      .then((response) => {
        dispatch(getDonateSuccess(response?.data));
      })
      .catch((error) => {
        dispatch(DonateFail(error));
        dispatch(errorMessage(error));
      });
  };
};
export const updateDonate = (DonateID, updatedData) => {
  return (dispatch) => {
    dispatch(donateStart());
    axios({
      method: "put",
      url: `${API_BASE_URL}/Donate/${DonateID}`,
      updatedData,
    })
      .then((response) => {
        dispatch(updateDonateSuccess(response?.data));
      })
      .catch((error) => {
        dispatch(DonateFail(error));
        dispatch(errorMessage(error));
      });
  };
};
export const deleteDonate = (DonateID, data) => {
  return (dispatch) => {
    dispatch(donateStart());
    axios({
      method: "delete",
      url: `${API_BASE_URL}/Donate/${DonateID}`,
      updatedData,
    })
      .then((response) => {
        dispatch(
          deleteDonateSuccess(data?.filter((item) => item.id !== DonateID))
        );
        dispatch(successMessage("Donate deleted successfully!"));
      })
      .catch((error) => {
        dispatch(DonateFail(error));
        dispatch(errorMessage(error));
      });
  };
};
