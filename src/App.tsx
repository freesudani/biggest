import { FC } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Starting from "./components/Starting";
import Instructions from "./components/Instructions";
import Navbar from "./components/Navbar";
import type { RootState, AppDispatch } from "./redux";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import Question1 from "./components/Question1";
import Question2 from "./components/Question2";
import Question3 from "./components/Question3";
import Question4 from "./components/Question4";
import Question5 from "./components/Question5";

const App: FC = () => {
  const location = useLocation();
  const show = useAppSelector((state) => state.navbar.shownvb);
  return (
    <div className="relative">
      <AnimatePresence>{show && <Navbar />}</AnimatePresence>
      <div className="h-screen w-screen flex flex-col justify-center items-center overflow-x-hidden">
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigate to="/start" />} />
            <Route path="/start" element={<Starting />} />
            <Route path="/instructions" element={<Instructions />} />
            <Route path="/q1" element={<Question1 />} />
            <Route path="/q2" element={<Question2 />} />
            <Route path="/q3" element={<Question3 />} />
            <Route path="/q4" element={<Question4 />} />
            <Route path="/q5" element={<Question5 />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
};

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default App;
