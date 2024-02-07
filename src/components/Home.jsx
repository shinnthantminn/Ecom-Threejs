import { Canvas } from "@react-three/fiber";
import OverLay from "./OverLay";
import SceneRender from "./Scene";
import { Suspense, useContext, useEffect } from "react";
import { Html, useProgress } from "@react-three/drei";
import Loader from "./Loader";

const Home = () => {
  const { active } = useProgress();

  return (
    <>
      <Loader done={active} />
      <Suspense>
        <Canvas
          shadows
          eventSource={document.getElementById("root")}
          eventPrefix="client"
          camera={{ position: [0, 0, 4], fov: 40 }}
        >
          {/* <Perf /> */}
          <SceneRender done={active} />
        </Canvas>
        <OverLay done={active} />
      </Suspense>
    </>
  );
};

export default Home;
