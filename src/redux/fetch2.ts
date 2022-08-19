import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data/countries";
import { fetchProps } from "../typescript/types.types";

const initialState: fetchProps = {
  countries: data,
  questionOption1: {
    image: "",
    title: "",
    area: 0,
  },
  questionOption2: {
    image: "",
    title: "",
    area: 0,
  },
  correctAnswer1: true,
  correctAnswer2: true,
  correctAnswer1Tick: 0,
  correctAnswer2Tick: 0,
  total: 0,
};

const countriesSlice = createSlice({
  name: "countries2",
  initialState,
  reducers: {
    setQuestion: (state) => {
      let Random1 =
        state.countries[Math.floor(Math.random() * state.countries.length)];
      let Random2 =
        state.countries[Math.floor(Math.random() * state.countries.length)];

      while (Random1 === Random2) {
        Random2 =
          state.countries[Math.floor(Math.random() * state.countries.length)];
      }

      state.questionOption1 = {
        image: Random1.image,
        title: Random1.title,
        area: Random1.area,
      };

      state.questionOption2 = {
        image: Random2.image,
        title: Random2.title,
        area: Random2.area,
      };

      state.correctAnswer1 = true;
      state.correctAnswer2 = true;
      state.correctAnswer1Tick = 0;
      state.correctAnswer2Tick = 0;
      state.total = 0;

      return state;
    },

    chooseCountry1: (state) => {
      if (state.questionOption1.area > state.questionOption2.area) {
        state.correctAnswer2 = false;
        state.correctAnswer1Tick = 1;
        state.total++;
      } else {
        state.correctAnswer1 = false;
        state.correctAnswer1Tick = 2;
      }
      return state;
    },

    chooseCountry2: (state) => {
      if (state.questionOption2.area > state.questionOption1.area) {
        state.correctAnswer1 = false;
        state.correctAnswer2Tick = 1;
        state.total++;
      } else {
        state.correctAnswer2 = false;
        state.correctAnswer2Tick = 2;
      }
      return state;
    },
  },
});

export const countriesActions2 = countriesSlice.actions;
export default countriesSlice.reducer;
