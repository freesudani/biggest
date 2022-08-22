import { FC } from "react";
import { motion } from "framer-motion";
import { tickVariant } from "../animations/questionAnimation";
import { fetchcountryProps } from "../typescript/types.types";

const ResultBox2: FC<fetchcountryProps> = ({ country }) => {
  return (
    <div className="h-20 my-5 w-20 md:h-16 md:w-16 border-2 border-secondary-200 bg-black">
      {country.correctAnswer2Tick === 0 && <div></div>}
      {country.correctAnswer2Tick === 1 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
          fill="none"
          className=" stroke-primary-200 md:w-44 md:h-44"
          stroke-width="5"
        >
          <motion.path
            variants={tickVariant}
            initial="hidden"
            animate="visible"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z"
          />
        </svg>
      )}
      {country.correctAnswer2Tick === 2 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
          fill="none"
          className=" stroke-primary-200 md:w-44 md:h-44"
          stroke-width="5"
        >
          <motion.path
            variants={tickVariant}
            initial="hidden"
            animate="visible"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
          />
        </svg>
      )}
    </div>
  );
};

export default ResultBox2;
