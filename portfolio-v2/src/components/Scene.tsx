"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float, PerspectiveCamera } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

function Starfield() {
  const ref = useRef<THREE.Points>(null!);
  const [sphere] = useState(() => {
    const positions = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return positions;
  });

  useFrame((state, delta) => {
    ref.current.rotation.y += delta / 40;
  });

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.04}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.1}
      />
    </Points>
  );
}

function MSculpture() {
  const meshRef = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.1;
    meshRef.current.rotation.x = Math.sin(t / 4) * 0.05;
  });

  return (
    <group ref={meshRef} position={[2, 0, 0]}> {/* Positioned right within the right-half canvas */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh scale={0.65}> {/* Scaled down more to be less intrusive */}
          <torusKnotGeometry args={[2, 0.4, 200, 32, 2, 3]} />
          <meshStandardMaterial 
            color="#111111"
            roughness={0}
            metalness={1}
            emissive="#08fdd8"
            emissiveIntensity={0.15}
          />
        </mesh>
        <mesh scale={0.66}>
          <torusKnotGeometry args={[2, 0.4, 200, 32, 2, 3]} />
          <meshStandardMaterial 
            color="#fd2155"
            transparent
            opacity={0.1}
            wireframe
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function Scene() {
  return (
    <div className="canvas-container">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#08fdd8" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#fd2155" />
        
        <Starfield />
        <MSculpture />
      </Canvas>
    </div>
  );
}
