import { FC } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Starting from "./components/Starting";
import Instructions from "./components/Instructions";
import Navbar from "./components/Navbar";
import type { RootState, AppDispatch } from "./redux";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

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
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
};

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default App;
