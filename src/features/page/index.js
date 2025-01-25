import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 2,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    pageIncrement(state) {
      state.page = state.page + 1;
    },
  },
});

export const { pageIncrement } = pageSlice.actions;
