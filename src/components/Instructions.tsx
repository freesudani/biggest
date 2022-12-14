import { FC } from "react";
import {
  instructionVariant,
  paragraphVariant,
} from "../animations/instructionAnimation";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import {
  HiOutlineChevronDoubleRight,
  HiOutlineChevronDoubleLeft,
} from "react-icons/hi";
import { data } from "../data/instructionsdata";
import { InstructionsProps } from "../typescript/types.types";
import { useAppSelector, useAppDispatch } from "../App";
import { instructionsAction } from "../redux/instr";
import { countriesActions1 } from "../redux/fetch1";
import { useNavigate } from "react-router-dom";

const Instructions: FC = () => {
  const step = useAppSelector((state) => state.instruction.step);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const setQuestion1Handler = () => {
    navigate("/q1");
    dispatch(countriesActions1.setQuestion());
  };

  return (
    <motion.div
      variants={instructionVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="h-3/6 sm:h-4/6  w-3/5 ph:w-4/5 bg-primary-200 border-2 border-solid border-black rounded-lg shadow-lg shadow-black relative"
    >
      <div className="grid grid-rows-[1fr_4fr]">
        <div className="flex justify-around items-center m-5">
          {data.map((item: InstructionsProps) => {
            return (
              <>
                <div>
                  <h1
                    className={
                      step >= item.id
                        ? "flex justify-center items-center text-4xl rounded-full bg-secondary-100 text-white w-16 h-16 mb:w-14 mb:h-14 transition-all duration-300 ease-in"
                        : "flex justify-center items-center text-4xl rounded-full bg-primary-100 text-white w-16 h-16 mb:w-14 mb:h-14 transition-all duration-300 ease-in"
                    }
                  >
                    {item.id - 1}
                  </h1>
                </div>
                <div
                  className={
                    step > item.id
                      ? "last:hidden text-secondary-100 transition-all duration-300 ease-in"
                      : "last:hidden transition-all duration-300 ease-in"
                  }
                >
                  <FaArrowRight size={20} />
                </div>
              </>
            );
          })}
        </div>
        <div>
          <motion.h1
            variants={paragraphVariant}
            className="m-10 text-2xl mb:text-xl text-black font-bold font-rubik capitalize text-justify"
          >
            {data[step - 1].description}
          </motion.h1>
        </div>
      </div>
      <div className="absolute right-6 bottom-6 flex justify-between items-center w-96">
        <button
          className="mdbt secondarybt mr-5 uppercase"
          onClick={setQuestion1Handler}
        >
          start
        </button>
        <div className="flex justify-between items-center">
          <button
            onClick={() => dispatch(instructionsAction.instructionreverse())}
            className="hover:scale-125 active:scale-110 active:text-secondary-200 hover:text-secondary-200 transition-all duration-300 ease-in"
          >
            <HiOutlineChevronDoubleLeft size={35} />
          </button>
          <button
            onClick={() => dispatch(instructionsAction.instructioncomplt())}
            className="hover:scale-125 active:scale-110 active:text-secondary-200 hover:text-secondary-200 transition-all duration-300 ease-in"
          >
            <HiOutlineChevronDoubleRight size={35} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Instructions;
