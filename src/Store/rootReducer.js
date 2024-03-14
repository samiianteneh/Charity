import { combineReducers } from "redux";
import { authReducer } from "./Auth/authReducer";
import { userReducer } from "./Users/userReducer";
import { eventReducer } from "./Event/eventReducer";

const rootReducer = combineReducers({
  authReducer: authReducer,
  userReducer: userReducer,
  eventReducer: eventReducer,
});

export default rootReducer;
