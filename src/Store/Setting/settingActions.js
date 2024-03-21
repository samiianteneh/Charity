import axios from "axios";
import { API_BASE_URL } from "../../Config/endpoint";
import { errorMessage, successMessage } from "../Messages/messageActions";
import * as actionTypes from "./settingActionTypes";

const settingStart = () => ({
  type: actionTypes.SETTING_START,
});
const createSettingSuccess = (data) => ({
  type: actionTypes.CREATE_SETTING,
  data,
});
const getSettingSuccess = (data) => ({
  type: actionTypes.GET_SETTING,
  data,
});
const updateSettingSuccess = (data) => ({
  type: actionTypes.UPDATE_SETTING,
  data,
});
const deleteSettingSuccess = (data) => ({
  type: actionTypes.DELETE_SETTING,
  data,
});
const SettingFail = (error) => ({
  type: actionTypes.SETTING_FAIL,
  error,
});

export const createVolunteerType = (data) => {
  return (dispatch) => {
    dispatch(settingStart());
    axios({
      method: "post",
      url: `${API_BASE_URL}/Setting`,
      header: {
        "Content-Type": "Application/json",
      },
      data,
    })
      .then((response) => {
        dispatch(createSettingSuccess(response?.data));
        dispatch(successMessage("Setting Created Successfully!"));
      })
      .catch((error) => {
        dispatch(SettingFail(error));
        dispatch(errorMessage(error));
      });
  };
};
export const getVolunteerType = () => {
  return (dispatch) => {
    dispatch(settingStart());
    axios({
      method: "get",
      // url: `${API_BASE_URL}/Setting`,
    })
      .then((response) => {
        dispatch(getSettingSuccess(response?.data));
      })
      .catch((error) => {
        dispatch(SettingFail(error));
        dispatch(errorMessage(error));
      });
  };
};
export const updateSetting = (SettingID, updatedData) => {
  return (dispatch) => {
    dispatch(SettingStart());
    axios({
      method: "put",
      url: `${API_BASE_URL}/Setting/${SettingID}`,
      updatedData,
    })
      .then((response) => {
        dispatch(updateSettingSuccess(response?.data));
      })
      .catch((error) => {
        dispatch(SettingFail(error));
        dispatch(errorMessage(error));
      });
  };
};
export const deleteSetting = (SettingID, data) => {
  return (dispatch) => {
    dispatch(SettingStart());
    axios({
      method: "delete",
      url: `${API_BASE_URL}/Setting/${SettingID}`,
      updatedData,
    })
      .then((response) => {
        dispatch(
          deleteSettingSuccess(data?.filter((item) => item.id !== SettingID))
        );
        dispatch(successMessage("Setting deleted successfully!"));
      })
      .catch((error) => {
        dispatch(SettingFail(error));
        dispatch(errorMessage(error));
      });
  };
};
