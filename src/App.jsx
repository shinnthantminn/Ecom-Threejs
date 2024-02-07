import { Routes, Route } from "react-router-dom";
import ExpandShoeComponent from "./components/ExpandShoeComponent";
import Home from "./components/Home";
import Viewer3DComponent from "./components/Viewer3DComponent";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<ExpandShoeComponent />} />
          <Route path="/product/:id/3D" element={<Viewer3DComponent />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
