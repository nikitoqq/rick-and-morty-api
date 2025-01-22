import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterDisplay: false,
};

export const filterDisplaySlice = createSlice({
  name: "filterDisplay",
  initialState,
  reducers: {
    setFilterDisplay(state) {
      state.filterDisplay = !state.filterDisplay;
    },
  },
});

export const { setFilterDisplay } = filterDisplaySlice.actions;
