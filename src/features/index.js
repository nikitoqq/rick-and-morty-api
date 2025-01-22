import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { filterSlice } from "./filter";
import { filterDisplaySlice } from "./filterDisplay";
import { pageSlice } from "./page";
import { themeSlice } from "./theme";
import { settingInputSlice } from "./settingInput";
import { characterPageSlice } from "./characterPage";

const persistConfig = {
  key: "userSetting",
  storage,
};

const persistedCombineReducer = combineReducers({
  settingInput: settingInputSlice.reducer,
  themes: themeSlice.reducer,
  characterPage: characterPageSlice.reducer,
});

const otherReducer = combineReducers({
  filter: filterSlice.reducer,
  filterDisplay: filterDisplaySlice.reducer,
  page: pageSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, persistedCombineReducer);

export const store = configureStore({
  reducer: { persistedReducer, otherReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
