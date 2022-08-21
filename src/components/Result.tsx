import { FC } from "react";
import { motion } from "framer-motion";
import {
  resultVariant,
  imageVariant,
  paragraphVariant,
} from "../animations/resultAnimation";
import { useAppSelector } from "../App";
import VictoryImage from "../images/cup-1010916_1280_prev_ui.png";
import LoseImage from "../images/question-mark-1019820_1280_prev_ui.png";

const Result: FC = () => {
  const country1 = useAppSelector((state) => state.countries1);
  const country2 = useAppSelector((state) => state.countries2);
  const country3 = useAppSelector((state) => state.countries3);
  const country4 = useAppSelector((state) => state.countries4);
  const country5 = useAppSelector((state) => state.countries5);

  const totalScore: number =
    country1.total +
    country2.total +
    country3.total +
    country4.total +
    country5.total;

  return (
    <motion.div
      variants={resultVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-3/5 h-[35rem] bg-primary-200 border-2 border-solid border-black rounded-lg shadow-lg shadow-black   overflow-hidden grid grid-cols-[3fr_2fr] justify-items-center"
    >
      <motion.div
        variants={paragraphVariant}
        className="flex flex-col justify-center items-center h-full"
      >
        {totalScore > 3 ? (
          <div>
            <h3 className=" text-6xl text-white font-bold uppercase">
              Excellent
            </h3>
          </div>
        ) : (
          <div>
            <h3 className=" text-6xl text-white font-bold uppercase">
              Try Again
            </h3>
          </div>
        )}
        <div className=" flex justify-around items-center">
          <div>
            <h3 className="text-6xl text-white font-bold uppercase">
              Result :
            </h3>
          </div>
          <div>
            <h3 className="text-6xl text-white font-bold uppercase ml-3">
              {totalScore}
            </h3>
          </div>
        </div>
      </motion.div>
      <motion.div variants={imageVariant} className=" h-8/12">
        <img
          className="h-8/12"
          src={totalScore > 3 ? VictoryImage : LoseImage}
          alt={totalScore > 3 ? "Victory" : "Lose"}
        />
      </motion.div>
    </motion.div>
  );
};

export default Result;
