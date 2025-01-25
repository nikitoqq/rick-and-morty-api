import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  characterPage: [],
};

export const characterPageSlice = createSlice({
  name: "characterPage",
  initialState,
  reducers: {
    setCharacterPage(state, action) {
      if (state.characterPage.length < 9) {
        state.characterPage.push(action.payload);
      } else {
        state.characterPage.shift(action.payload);
        state.characterPage.push(action.payload);
      }
    },
    setCharacterEpisode(state, action) {
      if (state.characterPage.length < 9) {
        state.characterPage.push(action.payload);
      } else {
        state.characterPage.shift(action.payload);
        state.characterPage.push(action.payload);
      }
    },
  },
});

export const { setCharacterPage } = characterPageSlice.actions;
