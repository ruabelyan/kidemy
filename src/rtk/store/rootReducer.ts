import { combineReducers } from "@reduxjs/toolkit";
import { signApi } from "..";
import { sharedReducer } from "../reducers";

const rootReducer = combineReducers({
  [signApi.reducerPath]: signApi.reducer,
  ["shared"]: sharedReducer,
});

export default rootReducer;
