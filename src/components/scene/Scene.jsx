import React from "react";
import { Canvas } from "@react-three/fiber";

export const Scene = () => {
  return (
    <Canvas>
      <mesh>
        <planeGeometry args={[8, 8]} />
        <meshBasicMaterial color="red" />
      </mesh>
    </Canvas>
  );
};
