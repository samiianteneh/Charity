import { combineReducers } from "redux";
import { authReducer } from "./Auth/authReducer";
import { userReducer } from "./Users/userReducer";
import { eventReducer } from "./Event/eventReducer";
import { feedbackReducer } from "./Feedback/feedbackReducer";

const rootReducer = combineReducers({
  authReducer: authReducer,
  userReducer: userReducer,
  eventReducer: eventReducer,
  feedbackReducer: feedbackReducer,
});

export default rootReducer;
