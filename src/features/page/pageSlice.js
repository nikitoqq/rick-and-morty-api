import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    pageIncrement(state) {
      state.page = state.page + 1;
    },
    pageDecrement(state) {
      state.page = state.page - 1;
    },
    pageReset(state) {
      state.page = 1;
    },
  },
});

export const { pageIncrement, pageDecrement, pageReset } = pageSlice.actions;
