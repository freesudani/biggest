import { createSlice } from "@reduxjs/toolkit";
import { ShowNavbarProps } from "../typescript/types.types";

const initialState: ShowNavbarProps = { shownvb: false };

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    showNavbar: (state) => {
      state.shownvb = true;
      return state;
    },
    hideNavbar: (state) => {
      state.shownvb = false;
      return state;
    },
  },
});

export const navbarActions = navbarSlice.actions;
export default navbarSlice.reducer;
