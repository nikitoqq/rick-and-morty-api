import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  settingInput: false,
};

export const settingInputSlice = createSlice({
  name: "settingInput",
  initialState,
  reducers: {
    changeSettingInput(state) {
      state.settingInput = !state.settingInput;
    },
  },
});

export const { changeSettingInput } = settingInputSlice.actions;
