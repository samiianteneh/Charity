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
      url: `${API_BASE_URL}/volunteryType`,
      header: {
        "Content-Type": "Application/json",
      },
      data,
    })
      .then((response) => {
        console.log(response, "response for create volunteer type");
        dispatch(createSettingSuccess(response?.data));
        dispatch(successMessage("Setting Created Successfully!"));
      })
      .catch((error) => {
        console.log(error, "response for create volunteer type err");
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
      url: `${API_BASE_URL}/volunteryType`,
    })
      .then((response) => {
        dispatch(getSettingSuccess(response?.data));
        console.log(response, "response for get voluntery type");
      })
      .catch((error) => {
        dispatch(SettingFail(error));
        dispatch(errorMessage(error));
        console.log(error, "response for get voluntery type err");
      });
  };
};
export const updateSetting = (SettingID, updatedData) => {
  console.log(SettingID, updatedData, "object");
  // return;
  return (dispatch) => {
    dispatch(settingStart());
    axios({
      method: "patch",
      url: `${API_BASE_URL}/volunteryType/${SettingID}`,
      updatedData,
    })
      .then((response) => {
        dispatch(updateSettingSuccess(response?.data));
        console.log(response, "response for update voluntery type");
      })
      .catch((error) => {
        dispatch(SettingFail(error));
        dispatch(errorMessage(error));
        console.log(error, "response for update voluntery type error");
      });
  };
};
export const deleteSetting = (SettingID, data) => {
  console.log("testing id", SettingID, data);
  return (dispatch) => {
    dispatch(settingStart());
    axios({
      method: "delete",
      url: `${API_BASE_URL}/Setting/${SettingID}`,
    })
      .then((response) => {
        // dispatch(
        //   deleteSettingSuccess(data?.filter((item) => item.id !== SettingID))
        // );
        // dispatch(deleteSettingSuccess(response?.data));
        dispatch(successMessage("Setting deleted successfully!"));
        console.log(response, "response for delete voluntery");
      })
      .catch((error) => {
        dispatch(SettingFail(error));
        dispatch(errorMessage(error));
        console.log(error, " response for delete voluntery err");
      });
  };
};
