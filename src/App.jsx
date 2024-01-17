import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

function App() {
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
    </>
  );
}

export default App;
