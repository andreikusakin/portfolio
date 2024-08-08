import * as THREE from "three";
import React, { useRef } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

const CustomShaderMaterial = shaderMaterial(
  {
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uTime: 0.0,
    uTest: 1.0,
  },
  // vertex shader
  /*glsl*/ `
    varying vec2 vUv;
    uniform float uTime;

    void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        modelPosition.y += sin(modelPosition.x * 4.0 + uTime) * 0.2;

        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;

        gl_Position = projectedPosition;

        vUv = uv;
    }
    `,
  // fragment shader
  /*glsl*/ `
    varying vec2 vUv;

    vec3 colorA = vec3(0.912,0.191,0.652);
    vec3 colorB = vec3(1.000,0.777,0.052);

    void main() {
         
        vec3 color = mix(colorA, colorB, vUv.x * vUv.y);
        gl_FragColor = vec4(color, 1.0);
    }
`
);

extend({ CustomShaderMaterial });

const Plane = () => {
  const shaderRef = useRef();
  useFrame(({ clock }) => {
    shaderRef.current.uTime = clock.getElapsedTime();
    // console.log(meshRef.current.uTime);
  });

  return (
    <mesh>
      <planeGeometry args={[1, 1, 20, 20]} />
      <customShaderMaterial ref={shaderRef} wireframe />
    </mesh>
  );
};

export const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Plane />
    </Canvas>
  );
};
