import {
  Center,
  Environment,
  OrbitControls,
  ContactShadows,
  Float,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Suspense, useContext, useEffect, useRef } from "react";
import { Nike } from "./Nike.jsx";
import { easing } from "maath";
import { WindowContext } from "../context/Window.context.jsx";
import { ProductsContext } from "../context/Products.context.jsx";

const SceneRender = ({ done }) => {
  const shoeScalingFactor = Math.min(
    Math.max(window.innerWidth / 1300, 0.5),
    1.2
  );

  const { windowWidth } = useContext(WindowContext);

  return (
    <>
      {windowWidth > 1400 && (
        <OrbitControls
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          enableZoom={false}
          enablePan={false}
        />
      )}

      <ambientLight intensity={1} />
      <spotLight
        intensity={0.5}
        angle={0.1}
        penumbra={1}
        position={[10, 15, -5]}
        castShadow
      />
      <Environment preset="city" />
      <ContactShadows
        resolution={512}
        position={[0, -0.8, 0]}
        opacity={1}
        scale={10}
        blur={2}
        far={0.8}
      />
      <CameraRig>
        <Center>
          <Float speed={2} floatIntensity={1} rotationIntensity={1}>
            <Nike
              done={done}
              position-y={windowWidth < 600 && -0.4}
              scale={shoeScalingFactor}
              rotation={[1, Math.PI / 0.7, 0.7]}
            />
          </Float>
        </Center>
      </CameraRig>
    </>
  );
};

function CameraRig({ children }) {
  const group = useRef();

  useFrame((state, delta) => {
    easing.dampE(
      group.current.rotation,
      [-state.pointer.y / 10, state.pointer.x / 10, 0],
      0.25,
      delta
    );
  });

  return <group ref={group}>{children}</group>;
}

export default SceneRender;
