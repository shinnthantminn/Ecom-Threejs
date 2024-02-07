/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 nike_air_zoom_pegasus_36-transformed.glb -T 
Files: nike_air_zoom_pegasus_36-transformed.glb [1.41MB] > /Users/hsuwinlat/Desktop/jsm pj/r3f-setup/public/nike_air_zoom_pegasus_36-transformed-transformed.glb [994.08KB] (29%)
Author: quaz30 (https://sketchfab.com/quaz30)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/nike-air-zoom-pegasus-36-00fd99e778c244c3bd3b65f99dad7cb2
Title: Nike Air Zoom Pegasus 36
*/

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