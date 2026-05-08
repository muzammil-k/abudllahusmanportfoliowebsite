"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import * as THREE from "three";

function Blob() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    const { clock, mouse } = state;
    meshRef.current.rotation.x = clock.getElapsedTime() * 0.2;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    
    // Smoothly follow mouse
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, mouse.x * 2, 0.1);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, mouse.y * 2, 0.1);
  });

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.4}>
        <MeshDistortMaterial
          color="#ff0000"
          speed={3}
          distort={0.5}
          radius={1}
          roughness={0}
          metalness={1}
          emissive="#330000"
          emissiveIntensity={2}
        />
      </Sphere>
    </Float>
  );
}

export default function LavaScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#ff0000" intensity={2} />
        <pointLight position={[-10, -10, -10]} color="#330000" intensity={1} />
        <spotLight position={[0, 5, 0]} angle={0.3} penumbra={1} intensity={2} castShadow />
        <Blob />
      </Canvas>
    </div>
  );
}
