import { FC } from "react";
import {
  questionOption1Variant,
  questionOption2Variant,
  dividerVariant,
} from "../animations/questionAnimation";
import { motion } from "framer-motion";
import { useAppSelector, useAppDispatch } from "../App";
import { countriesActions2 } from "../redux/fetch2";
import { countriesActions3 } from "../redux/fetch3";
import { useNavigate } from "react-router-dom";
import ResultBox1 from "./ResultBox1";
import ResultBox2 from "./ResultBox2";

const Question1: FC = () => {
  const country = useAppSelector((state) => state.countries2);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const firstChoiseHandler = () => {
    dispatch(countriesActions2.chooseCountry1());
    dispatch(countriesActions3.setQuestion());
    setTimeout(() => navigate("/q3"), 2500);
  };

  const secondChoiseHandler = () => {
    dispatch(countriesActions2.chooseCountry2());
    dispatch(countriesActions3.setQuestion());
    setTimeout(() => navigate("/q3"), 2500);
  };

  return (
    <div className="grid grid-cols-3 md:grid-rows-3 md:grid-cols-1 md:justify-center md:items-center h-screen w-screen overflow-y-hidden">
      <motion.div
        variants={questionOption1Variant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="h-full flex flex-col justify-center items-center pl-52 md:pl-0 md:mt-64"
      >
        <div>
          <img
            src={country.questionOption1.image}
            alt="flag"
            className={
              country.correctAnswer1
                ? `rounded-full  border-primary-200 border-8 h-80 w-80 md:h-60 md:w-60`
                : `rounded-full  border-red-500 border-8 h-80 w-80 md:h-60 md:w-60 transition-all duration-300 ease-in-out`
            }
          />
        </div>
        <div className="my-5">
          <h1 className="text-3xl font-rubik font-semibold text-secondary-200 uppercase">
            {country.questionOption1.title}
          </h1>
        </div>
        <button
          className="my-5 mdbt primarybt uppercase disabled:opacity-60 disabled:shadow-sm"
          onClick={firstChoiseHandler}
          disabled={
            !country.correctAnswer1 || !country.correctAnswer2 ? true : false
          }
        >
          Correct Answer
        </button>
        <ResultBox1 country={country} />
      </motion.div>
      <div className="relative md:rotate-90">
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 14.707 20.3"
          className="enable-background:new 0 0 18.707 18.707;"
        >
          <motion.g
            variants={dividerVariant}
            initial="hidden"
            animate="visible"
          >
            <rect
              x="6.275"
              y="0"
              className="fill-primary-200"
              width="0.5"
              height="20.3"
            />
          </motion.g>
        </svg>
      </div>
      <motion.div
        variants={questionOption2Variant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="h-full flex flex-col justify-center items-center pr-52  md:pr-0 md:mb-64 "
      >
        <div>
          <img
            src={country.questionOption2.image}
            alt="flag"
            className={
              country.correctAnswer2
                ? `rounded-full  border-primary-200 border-8 h-80 w-80 md:h-60 md:w-60`
                : `rounded-full  border-red-500 border-8 h-80 w-80 md:h-60 md:w-60  transition-all duration-300 ease-in-out`
            }
          />
        </div>
        <div className="my-5">
          <h1 className="text-3xl font-rubik font-semibold text-secondary-200 uppercase">
            {country.questionOption2.title}
          </h1>
        </div>
        <button
          className="my-5 mdbt primarybt uppercase disabled:opacity-60 disabled:shadow-sm"
          onClick={secondChoiseHandler}
          disabled={
            !country.correctAnswer1 || !country.correctAnswer2 ? true : false
          }
        >
          Correct Answer
        </button>
        <ResultBox2 country={country} />
      </motion.div>
    </div>
  );
};

export default Question1;
