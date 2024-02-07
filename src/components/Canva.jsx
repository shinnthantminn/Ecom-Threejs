
import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { Color } from "three";

export function Canva(props) {
  const { nodes, materials } = useGLTF("/canva-transformed.glb");

  useEffect(() => {
    Object.entries(materials).map((item) => {
      item[1].color = new Color(`${props.color}`);
    });
  }, [props.color]);
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.initialShadingGroup}
        position={[7.43, 74.494, -0.273]}
        scale={173.895}
      />
    </group>
  );
}

useGLTF.preload("/canva-transformed.glb");
