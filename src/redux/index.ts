import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import navbarReducer from "./nvb";
import instructionReducer from "./instr";
import countriesReducer1 from "./fetch1";
import countriesReducer2 from "./fetch2";
import countriesReducer3 from "./fetch3";
import countriesReducer4 from "./fetch4";
import countriesReducer5 from "./fetch5";

export const store = configureStore({
  reducer: combineReducers({
    navbar: navbarReducer,
    instruction: instructionReducer,
    countries1: countriesReducer1,
    countries2: countriesReducer2,
    countries3: countriesReducer3,
    countries4: countriesReducer4,
    countries5: countriesReducer5,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
