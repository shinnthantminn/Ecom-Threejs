import { MoveUpRight } from "lucide-react";
import React, { useContext } from "react";
import ShoeComponent from "./ShoeComponent";
import { shoesArr } from "../utils/shoes";
import { WindowContext } from "../context/Window.context";
import { motion } from "framer-motion";

const OverLay = ({ done }) => {
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
      opacity: done ? 0 : 1,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <motion.section
      {...animation(opacity)}
      className="absolute
        top-0
        left-0
        w-full
        p-5
        md:p-10
        lg:p-10
        hero-section
      "
    >
      <div className="w-full h-[90vh] flex flex-col justify-between">
        <div className="w-full flex items-center justify-between fontbold ">
          <p className="sub-header ps-5">Hsu Win Lat</p>
          <h1 className="text-lg">Shoes with Souls</h1>
          <p className="sub-header pe-5 hidden md:block lg:block">
            Javascript Mastery
          </p>
        </div>
        <div className="h-full flex items-end justify-center">
          <h1 className="fontbold heroHeader text-center text-white text-[6rem] top-[10%] lg:top-[3%] lg:text-[12rem] md:text-[8.5rem] ">
            Infinite Style
          </h1>
          <h1 className="yearText text-[10rem] top-[50%] lg:text-[40rem] lg:top-[5%] md:top-[55%] md:text-[20rem] ">
            2024
          </h1>
          <div className="">
            <button className="px-16 py-3 flex items-center justify-center rounded-lg bg-[#c1fe0d] text-[#090509]">
              BUY NOW <MoveUpRight className="ms-1" size={15} />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full mt-10 p-0 md:p-10 lg:p-10 ">
        <h1 className="text-2xl lg:text-5xl md:text-5xl text-center py-20 ">
          Explore Our Diverse Shoe Collection
        </h1>
        <div className="flex flex-wrap ">
          {shoesArr.map((shoe) => (
            <ShoeComponent shoes={shoe} key={shoe.id} />
          ))}
        </div>
      </div>
      <Footer />
    </motion.section>
  );
};

const Footer = () => {
  return (
    <div className=" text-center my-5 p-5 opacity-50 font-bold uppercase">
      Made with ❤️‍🔥 by Hsu Win Lat{" ❤️‍🔥 "}
      <span className="lowercase">hsuwinlat2910@gmail.com</span>
    </div>
  );
};

export default OverLay;
