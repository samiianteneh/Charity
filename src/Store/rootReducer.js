import { combineReducers } from "redux";
import { authReducer } from "./Auth/authReducer";

const rootReducer = combineReducers({
  authReducer: authReducer,
});

export default rootReducer;
