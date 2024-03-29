import * as actionTypes from "./settingActionTypes";

const initialState = {
  is_loading: false,
  error: null,
  settings: [],
  single_setting: {},
};

const settingStart = (state) => ({
  ...state,
  is_loading: true,
  error: null,
});
const createSetting = (state, action) => ({
  ...state,
  settings: [...state.settings, action.data],
  is_loading: false,
  error: null,
});
const getSetting = (state, action) => ({
  ...state,
  settings: action.data,
  is_loading: false,
  error: null,
});
const getSingleSetting = (state, action) => ({
  ...state,
  settings: action.data,
  is_loading: false,
  error: null,
});
const updateSetting = (state, action) => ({
  ...state,
  settings: state.settings.map((setting) =>
    setting.id === action.data.id ? action.data : setting
  ),
  is_loading: false,
  error: null,
});
const deleteSetting = (state, action) => ({
  ...state,
  settings: action.data,
  is_loading: false,
  error: null,
});
const SettingFail = (state, action) => ({
  ...state,
  is_loading: false,
  error: action.error,
});

// ==============> USERS REDUCER <============

export const settingReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SETTING_START:
      return settingStart(state);
    case actionTypes.CREATE_SETTING:
      return createSetting(state, action);
    case actionTypes.GET_SETTING:
      return getSetting(state, action);
    case actionTypes.UPDATE_SETTING:
      return updateSetting(state, action);
    case actionTypes.DELETE_SETTING:
      return deleteSetting(state, action);
    case actionTypes.SETTING_FAIL:
      return SettingFail(state, action);
    default:
      return state;
  }
};
