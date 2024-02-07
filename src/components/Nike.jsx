
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";

export function Nike(props) {
  const model = useGLTF("/nike.glb");
  const { scale, rotation, done } = props;

  const animation = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const opacity = {
    initial: { scale: 0, rotateX: 0, rotateY: 0, rotateZ: 0 },
    enter: {
      rotateX: rotation[0],
      rotateY: rotation[1],
      rotateZ: rotation[2],
      scale: done ? 0 : scale,
      transition: { duration: 2, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <motion.group {...props} dispose={null} {...animation(opacity)}>
      <mesh
        geometry={model.nodes.defaultMaterial.geometry}
        material={model.materials.NikeShoe}
      />
    </motion.group>
  );
}

useGLTF.preload("/nike.glb");
