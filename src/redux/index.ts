import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import navbarReducer from "./nvb";
import instructionReducer from "./instr";
import countriesReducer from "./fetch";

export const store = configureStore({
  reducer: combineReducers({
    navbar: navbarReducer,
    instruction: instructionReducer,
    countries: countriesReducer,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
