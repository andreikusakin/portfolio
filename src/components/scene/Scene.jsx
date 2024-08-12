import * as THREE from "three";
import React, { useRef } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  shaderMaterial,
} from "@react-three/drei";
import { vertexShader } from "./vertexShader";
import { fragmentShader } from "./fragmentShader";
import {
  EffectComposer,
  Noise,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { GlitchMode, BlendFunction, ToneMappingMode } from "postprocessing";
import { motion } from "framer-motion-3d"
import { MotionCanvas, LayoutCamera } from "framer-motion-3d"

const CustomShaderMaterial = shaderMaterial(
  {
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uTime: 0.0,
  },
  vertexShader,
  fragmentShader
);

extend({ CustomShaderMaterial });

const Plane = ({ mouse }) => {
  const shaderRef = useRef();
    const shaderWireframeRef = useRef();
  const meshRef = useRef();
  const meshWireframeRef = useRef();


  useFrame(({ clock, camera }) => {
    shaderRef.current.uTime = clock.getElapsedTime();
    // shaderWireframeRef.current.uTime = clock.getElapsedTime();

    meshRef.current.rotation.y = -mouse.current.x * 0.2;
    meshRef.current.rotation.x = mouse.current.y * 0.2;

    // meshWireframeRef.current.rotation.y = -mouse.current.x * 0.2;
    // meshWireframeRef.current.rotation.x = mouse.current.y * 0.2;

    // camera.position.y = 1;
    camera.lookAt(meshRef.current.position);
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <planeGeometry args={[3, 3, 512, 512]} />
        <customShaderMaterial ref={shaderRef} />
      </mesh>
      {/* <mesh ref={meshWireframeRef} position={[0,0,0.1]} >
        <planeGeometry args={[3, 3, 30, 30]} />
        <customShaderMaterial ref={shaderWireframeRef} wireframe  />
      </mesh> */}
    </group>
  );
};

export const Scene = ({ mouse }) => {
  return (
    <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={10} />
      <EffectComposer>
        <Noise
          premultiply
          opacity={1.2}
          blendFunction={BlendFunction.SOFT_LIGHT}
        />
      </EffectComposer>

      {/* <OrbitControls /> */}
      <Plane mouse={mouse} />
      {/* <mesh scale={0.2}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="red" />
      </mesh> */}
    </Canvas>
  );
};
