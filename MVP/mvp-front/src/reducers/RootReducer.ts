import { combineReducers } from "redux";
import googleReducer from "./GoogleReducer"
import authReducer from "./AuthReducer";

const rootReducer = combineReducers({
  authReducer,
  googleReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
