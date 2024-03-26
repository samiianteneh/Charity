import { combineReducers } from "redux";
import { authReducer } from "./Auth/authReducer";
import { userReducer } from "./Users/userReducer";
import { eventReducer } from "./Event/eventReducer";
import { feedbackReducer } from "./Feedback/feedbackReducer";
import { postReducer } from "./Post/postReducer";
import { settingReducer } from "./Setting/settingReducer";
import { BalanceReducer } from "./BalanceCollection/BalanceReducer";
import { DonateReducer } from "./Donate/DonateReducer";
import { messageReducer } from "./Messages/messageReducer";

const rootReducer = combineReducers({
  authReducer: authReducer,
  userReducer: userReducer,
  eventReducer: eventReducer,
  feedbackReducer: feedbackReducer,
  postReducer: postReducer,
  settingReducer: settingReducer,
  BalanceReducer: BalanceReducer,
  DonateReducer: DonateReducer,
  messageReducer: messageReducer,
});

export default rootReducer;
