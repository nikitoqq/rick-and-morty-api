import { createSlice } from "@reduxjs/toolkit";

export const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    filter: {
      status: "none",
      type: "none"
    },
    filterIsCheck: false,
    page: 1,
    theme: "black",
  },
  reducers: {
    pageIncrement(state) {
      state.page = state.page + 1;
    },
    pageDecrement(state) {
      state.page = state.page - 1;
    },
    pageReset(state) {
      state.page = 1
    },
    changeFilterIsCheck(state) {
      state.filterIsCheck = !state.filterIsCheck;
    },
    changeTheme(state, action) {
      state.theme = action;
    },
    addFilterStatus(state, action) {
      state.filter.status = action
    },
    addFilterType(state, action) {
      state.filter.type = action
    },
    resetFilter(state, action) {
      state.filter.status = ''
      state.filter.type = ''
    },
  },
});

export const {
  pageIncrement,
  pageDecrement,
  changeFilterIsCheck,
  changeTheme,
  addFilterStatus,
  addFilterType,
  resetFilter,
  pageReset
} = toolkitSlice.actions;
