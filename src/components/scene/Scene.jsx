import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  shaderMaterial,
} from "@react-three/drei";
import { vertexShader } from "./vertexShader";
import { fragmentShader } from "./fragmentShader";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

import { MotionCanvas, LayoutCamera } from "framer-motion-3d";
import { Mesh, PlaneGeometry, Group } from "three";

extend({ Mesh, PlaneGeometry, Group });

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
    camera.lookAt(0, 0, 0);
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

export const Scene = ({ mouse, path }) => {
  const canvasRef = useRef();
  const cameraRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && cameraRef.current) {
        const width = window.innerWidth;
        const height = window.innerHeight;
        canvasRef.current.style.width = `${width}px`;
        canvasRef.current.style.height = `${height}px`;
        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();
      }
    };

    // Set initial size
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(path);
  const cameraPositions = {
    "/": { position: [0, 0, 5] },
    "/about": { position: [1, 0, 5] },
    "/contact": { position: [-1, 1, 5] },
    "/work": { position: [0, -1, 5] },
  };

  const { position } = cameraPositions[path] || cameraPositions["/"];

  return (
    <MotionCanvas 
      ref={canvasRef}
    >
      <LayoutCamera
        ref={cameraRef}
        initial={{ x: 0, y: 0, z: 5 }}
        animate={{ x: position[0], y: position[1], z: position[2] }}
        transition={{ duration: 2 }}
        fov={10}
        makeDefault
      />

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
    </MotionCanvas>
  );
};
