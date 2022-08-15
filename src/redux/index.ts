import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import navbarReducer from "./nvb";
import instructionReducer from "./instr";

export const store = configureStore({
  reducer: combineReducers({
    navbar: navbarReducer,
    instruction: instructionReducer,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
