import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../reducers/userSlice";
import commentReducer from "../reducers/commentSlice";
// імпортуйте інші ред'юсери

const rootReducer = combineReducers({
  user: userReducer,
  comment: commentReducer,
  // додайте інші ред'юсери
});

export default rootReducer;
