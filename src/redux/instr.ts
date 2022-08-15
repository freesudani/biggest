import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  show: false,
};

const instructionsSlice = createSlice({
  name: "instructions",
  initialState,
  reducers: {
    instructioncomplt: (state) => {
      state.step++;
      if (state.step > 4) {
        state.step = 4;
      }
      return state;
    },
    instructionreverse: (state) => {
      state.step--;
      if (state.step < 1) {
        state.step = 1;
      }
      return state;
    },
    instructionreset: (state) => {
      state.step = 1;
      return state;
    },
    showhandler: (state) => {
      state.show = true;
      return state;
    },
  },
});

export const instructionsAction = instructionsSlice.actions;
export default instructionsSlice.reducer;
