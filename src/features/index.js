import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./filter/filterSlice";
import { filterDisplaySlice } from "./filterDisplay/filterDisplay";
import { pageSlice } from "./page/pageSlice";
import { themeSlice } from "./theme/themeSlice";

const rootReducer = combineReducers({
  filter: filterSlice.reducer,
  filterDisplay: filterDisplaySlice.reducer,
  page: pageSlice.reducer,
  themes: themeSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
