import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ProductsContext } from "../context/Products.context";
import { motion } from "framer-motion";

const ShoeComponent = ({ shoes }) => {
  const gotoProduct = useNavigate();
  const { setProduct } = useContext(ProductsContext);

  const cardOnClick = () => {
    gotoProduct(`/product/${shoes.id}`);
    setProduct(shoes);
  };

  return (
    <div
      className="w-full  lg:w-2/4 h-[55vh] p-10 cursor-pointer mb-5"
      onClick={cardOnClick}
    >
      <div>
        <div className="w-full h-[40vh] relative overflow-hidden">
          <img
            src={shoes.img1}
            alt={`${shoes.img1}${shoes.id}`}
            className="absolute top-0 left-0 w-full h-full object-cover transition-transform hover:scale-95 active:scale-90"
          />
        </div>
        <div className="flex items-center justify-between mt-5">
          <p className="text-1xl lg:text-2xl md:text-2xl font-light">
            {shoes.name}
          </p>
          <p
            className="text-1xl w-fit font-semibold px-5 py-2 lg:px-10 lg:py-2 md:px-8 md:py-2
           rounded-full bg-black text-white"
          >
            ${shoes.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShoeComponent;
