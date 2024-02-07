import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Color } from "three";

export function WhiteNike(props) {
  const { nodes, materials } = useGLTF("/white-nike-transformed.glb");
  useEffect(() => {
    Object.entries(materials).map((item) => {
      item[1].color = new Color(`${props.color}`);
    });
  }, [props.color]);
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.model_tex_u1_v1_0.geometry}
        material={materials.tex_u1_v1}
      />
    </group>
  );
}

useGLTF.preload("/white-nike-transformed.glb");
