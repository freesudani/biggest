import { FC } from "react";
import NavbarImage from "../images/cooltext417308405455111.png";
import { NavbarImageVariant } from "../animations/NavbarAnimation";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../App";
import { navbarActions } from "../redux/nvb";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const restartHandler = () => {
    navigate("/");
    dispatch(navbarActions.hideNavbar());
  };

  return (
    <div className="absolute top-6 left-6 z-10">
      <motion.div
        variants={NavbarImageVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={restartHandler}
      >
        <img src={NavbarImage} alt="navbar" />
      </motion.div>
    </div>
  );
};

export default Navbar;
