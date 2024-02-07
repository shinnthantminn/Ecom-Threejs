import {
  Center,
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
  useProgress,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { colors, shoesArr } from "../utils/shoes";
import { MoveLeft } from "lucide-react";
import "../App.css";
import { ProductsContext } from "../context/Products.context";
import { motion } from "framer-motion-3d";

const Viewer3DComponent = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(shoesArr[id - 1]);
  const { model: Model } = product;
  const { color, bg } = useContext(ProductsContext);

  const shoeScalingFactor = Math.min(
    Math.max(window.innerWidth / 1300, 0.5),
    1.2
  );

  const animation = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const rotation = {
    initial: { rotateX: 0, rotateY: 0, rotateZ: 0 },
    enter: {
      rotateX: product.rotation[0],
      rotateY: product.rotation[1],
      rotateZ: product.rotation[2],
      transition: { duration: 2, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <div className="w-full h-screen overflow-hidden">
      <Canvas
        className="z-[1]"
        shadows
        eventSource={document.getElementById("root")}
        eventPrefix="client"
        camera={{ position: [0, 0, 4], fov: 40 }}
      >
        <OrbitControls enablePan={false} />
        <ambientLight intensity={0.5} />
        <Environment preset="city" />

        <Float>
          <Center>
            <motion.group {...animation(rotation)}>
              <Model
                scale={product.scale * shoeScalingFactor}
                rotation={product.rotation}
                color={color}
              />
            </motion.group>
          </Center>
        </Float>
      </Canvas>
      <OverLay />
    </div>
  );
};

const OverLay = () => {
  const backToDetail = useNavigate();
  const { id } = useParams();
  const { setColor, setBg, color, bg } = useContext(ProductsContext);

  const handleColor = (color, bg) => {
    setColor(color);
    setBg(bg);
  };

  const handleReset = () => {
    setColor(null);
    setBg(null);
  };

  return (
    <>
      <section
        section
        className={`absolute top-0 left-0 w-full h-screen p-10 flex flex-col justify-between  `}
        style={{ background: bg }}
      ></section>
      <section
        className={`absolute top-0 left-0 w-full h-screen p-10 flex flex-col justify-between  `}
      >
        <button
          className="flex mb-5 hover:underline transition-all"
          onClick={() => backToDetail(`/product/${id}`)}
        >
          <MoveLeft color="#000000" className="me-1" />
          Back
        </button>
        <div className=" flex items-center justify-center">
          {colors.map((item, i) => {
            return (
              <button
                onClick={() => handleColor(item.color, item.bg)}
                key={i}
                className={`rounded-full w-10 h-10 border-[3px] border-[#00000050] me-5 `}
                style={{
                  background: item.color,
                }}
              ></button>
            );
          })}
          <button onClick={handleReset}>Reset</button>
        </div>
      </section>
    </>
  );
};

export default Viewer3DComponent;
