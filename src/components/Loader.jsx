import { motion } from "framer-motion";
import { loaderGif } from "../utils/images";

const Loader = ({ done }) => {
  const animation = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const opacity = {
    initial: { opacity: 0 },
    enter: {
      opacity: done ? 1 : 0,
      transition: { ease: [0.76, 0, 0.24, 1] },
      backgroundColor: "#edede9",
    },
  };

  const displayNone = {
    initial: { display: "flex" },
    enter: {
      display: done ? "flex" : "none",
      transition: { delay: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <>
      <motion.section
        {...animation(opacity)}
        className="w-screen h-screen overflow-hidden flex justify-center items-center absolute top-0 left-0 z-10 "
      >
        <motion.div {...animation(displayNone)}>
          <img src={loaderGif} alt="loader" className="w-full h-full" />
        </motion.div>
      </motion.section>
    </>
  );
};

export default Loader;
