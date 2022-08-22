import { FC } from "react";
import StartingImage from "../images/cooltext417308198092490.png";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  startingVariant,
  bouncybuttonVariant,
} from "../animations/StartinfAnimation";
import { useAppDispatch } from "../App";
import { navbarActions } from "../redux/nvb";
import { instructionsAction } from "../redux/instr";

const Starting: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const startHander = () => {
    navigate("/instructions");
    dispatch(navbarActions.showNavbar());
    dispatch(instructionsAction.instructionreset());
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <motion.div
        variants={startingVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="my-5"
      >
        <img src={StartingImage} alt="starting" className="ph:w-3/4 mx-auto" />
      </motion.div>
      <motion.div
        variants={startingVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="my-5"
      >
        <button
          className="outlinedbt lgbt flex justify-evenly items-center uppercase"
          onClick={startHander}
        >
          Start
          <motion.div variants={bouncybuttonVariant} animate="animationone">
            <MdOutlineDoubleArrow size={25} />
          </motion.div>
        </button>
      </motion.div>
    </div>
  );
};

export default Starting;
