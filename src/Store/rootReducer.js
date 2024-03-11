import { combineReducers } from "redux";
import { authReducer } from "./Auth/authReducer";
import { userReducer } from "./Users/userReducer";

const rootReducer = combineReducers({
  authReducer: authReducer,
  userReducer: userReducer,
});

export default rootReducer;
