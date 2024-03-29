import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Color } from "three";

export function ShopNike(props) {
  const { nodes, materials } = useGLTF("/shop-nike-transformed.glb");

  useEffect(() => {
    Object.entries(materials).map((item) => {
      item[1].color = new Color(`${props.color}`);
    });
  }, [props.color]);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Circle001.geometry}
        material={materials.metall_svart}
        position={[0.067, 0.044, -0.048]}
        rotation={[-3.008, -0.005, -2.218]}
        scale={[-0.01, 0.01, 0.01]}
      />
      <mesh
        geometry={nodes.insida_sock.geometry}
        material={materials["Material.006"]}
        scale={[0.11, 0.108, 0.108]}
      />
      <mesh
        geometry={nodes.snöre.geometry}
        material={materials["Material.004"]}
      />
      <mesh
        geometry={nodes.snöre_baksida.geometry}
        material={materials["Material.001"]}
        scale={0.108}
      />
      <mesh
        geometry={nodes.snöre_framsida.geometry}
        material={materials.Material}
        scale={0.108}
      />
      <mesh
        geometry={nodes.sock.geometry}
        material={materials.material_grund}
        scale={0.108}
      />
      <group scale={0.108}>
        <mesh
          onClick={() => {
            console.log("hello");
          }}
          geometry={nodes.Cube003.geometry}
          material={materials.sko_sula_underdel}
        />
        <mesh
          geometry={nodes.Cube003_1.geometry}
          material={materials.sko_sula_sida}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/shop-nike-transformed.glb");
