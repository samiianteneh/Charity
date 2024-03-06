import { combineReducers } from "redux";
import { authReducer } from "./Login/authReducer";

const rootReducer = combineReducers({
  authReducer: authReducer,
});

export default rootReducer;
