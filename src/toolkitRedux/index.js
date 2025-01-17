import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { toolkitSlice } from "./toolkitSlice";

const rootReducer = combineReducers({
  toolkit: toolkitSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
