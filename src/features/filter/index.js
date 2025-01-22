import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: {
    status: "",
    type: "",
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addFilterStatus(state, action) {
      state.filter.status = action.payload;
    },
    addFilterType(state, action) {
      state.filter.type = action.payload;
    },
  },
});

export const { addFilterStatus, addFilterType } = filterSlice.actions;
