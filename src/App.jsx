import { Suspense, useState, useEffect } from "react";
import "./App.css";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import Scene from "./Scene.jsx";
import { useThree } from "@react-three/fiber";
import Meteor from "./Meteor.jsx";
import { NodeToyTick } from "@nodetoy/react-nodetoy";

function App() {
  const state = useThree();

  useEffect(() => {
    // scene tone mapping
    state.gl.toneMappingExposure = 5;
  }, [state.gl]);

  return (
    <>
      <Environment
        background={"only"}
        files={"assets/textures/envmap_blur.hdr"}
        ground={{ height: 100, radius: 300 }}
      />
      <Environment background={false} files={"assets/textures/envmap.hdr"} />
      <PerspectiveCamera
        makeDefault
        fov={33}
        position={[-0.09, 16.01, -27.9]}
      />
      <OrbitControls
        target={[0.304, 0.806, 0.427]}
        maxPolarAngle={Math.PI / 0.45}
      />

      <NodeToyTick />

      <Suspense fallback={null}>
        <Scene />
        <Meteor />
      </Suspense>
    </>
  );
}

export default App;
