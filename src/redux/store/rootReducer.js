import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../reducers/userSlice";
import commentReducer from "../reducers/commentSlice";
import postReducer from "../reducers/postSlice";
// імпортуйте інші ред'юсери

const rootReducer = combineReducers({
  user: userReducer,
  comment: commentReducer,
  post: postReducer,
  // додайте інші ред'юсери
});

export default rootReducer;
