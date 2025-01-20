import { createSlice } from "@reduxjs/toolkit";
import { theme } from "../../theme";

const initialState = {
  themes: theme.palette.primary,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme(state, action) {
      state.themes = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
