import { MoveLeft, MoveUpRight } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { shoesArr } from "../utils/shoes";
import { ProductsContext } from "../context/Products.context";

const ExpandShoeComponent = () => {
  const backToHome = useNavigate();
  const viewin3D = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(shoesArr[id - 1]);
  const { setColor, setBg } = useContext(ProductsContext);

  const handleBackToHome = () => {
    backToHome("/");
    setBg(null);
    setColor(null);
  };

  return (
    <div className="lg:flex ">
      <div className="lg:w-2/4 h-full lg:h-screen p-10  ">
        <div>
          <button
            className="flex mb-5 hover:underline transition-all"
            onClick={handleBackToHome}
          >
            <MoveLeft color="#00000090" className="me-1" />
            Back to home
          </button>
          <div className="md:flex md:gap-10 lg:block">
            <div className="w-full lg:w-full md:w-2/4 h-[20vh] lg:h-[40vh] relative overflow-hidden lg:m-0 mt-10">
              <img
                src={product.img1}
                alt="poster1"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-full md:w-2/4 h-[20vh] lg:h-[40vh] relative overflow-hidden mt-10">
              <img
                src={product.img2}
                alt="poster1_2"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-2/4 h-full lg:h-screen p-5 lg:p-20 lg:mt-10 md:p-10">
        <div className="h-2/4">
          <p className="text-3xl lg:text-6xl font-bold">{product.name}</p>
          <p className="text-2xl w-fit font-semibold px-10 py-2 rounded-full bg-black text-white my-10">
            ${product.price}
          </p>
          <p>{product.des}</p>
        </div>
        <div className="h-2/4 flex items-center justify-center lg:m-0 my-10 md:mt-20">
          <div>
            <div className="w-full flex justify-center  ">
              <button
                className="px-20 lg:px-40 py-3 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-[#ffffff] hover:text-[#090509]  transition-transform hover:scale-95 active:scale-90"
                onClick={() => viewin3D(`/product/${id}/3D`)}
              >
                View in 3D <MoveUpRight className="ms-1" size={15} />
              </button>
            </div>
            <div className="w-full flex justify-center mt-10">
              <button className="px-20 lg:px-40 py-3 flex items-center justify-center rounded-full bg-[#c1fe0d] text-[#090509]  transition-transform hover:scale-95 active:scale-90">
                BUY NOW <MoveUpRight className="ms-1" size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandShoeComponent;
