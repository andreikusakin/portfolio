export const fragmentShader = /*glsl*/ `
    varying vec2 vUv;
    varying float vHeight;

    vec3 colorA = vec3(0.36, 0.07, 0.29);
    vec3 colorB = vec3(0.74, 0.07, 0.3);

    void main() {
        
        vec3 color = mix(colorA, colorB, vHeight * 2.0);
        gl_FragColor = vec4(color, 1.0);
    }
`;
