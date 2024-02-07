
import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { Color } from "three";

export function RedNike(props) {
  const { nodes, materials } = useGLTF("/rednike-transformed.glb");
  useEffect(() => {
    Object.entries(materials).map((item) => {
      item[1].color = new Color(`${props.color}`);
    });
  }, [props.color]);
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.semelleINT_low_int_0.geometry}
        material={materials.material}
        position={[-0.014, -0.327, 0.101]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.talonArriere_low_waves_0.geometry}
        material={materials.waves}
        position={[-0.068, -0.327, 0.591]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.etiquetteLanguette_low_chausson_0.geometry}
        material={materials.chausson}
        position={[-0.014, -0.327, 0.101]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.semCrampons_low_sole_02_0.geometry}
        material={materials.sole_02}
        position={[0.368, -0.156, 0.75]}
        rotation={[-Math.PI / 2, 0, -0.068]}
      />
      <mesh
        geometry={nodes.chaussette_int_low_chausson_int_0.geometry}
        material={materials.chausson_int}
        position={[-0.014, -0.327, 0.101]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.vaguesOeillets_low_oeillets_0.geometry}
        material={materials.oeillets}
        position={[0.406, 0.058, -0.003]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.lacets_low_laces_0.geometry}
        material={materials.laces}
        position={[0.235, 0.616, 0.111]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/rednike-transformed.glb");
