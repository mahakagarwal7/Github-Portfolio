"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useScroll } from "framer-motion";

function Shape({ position, color, opacity, speed, factor, children }: any) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { scrollYProgress } = useScroll();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.position.y = position[1] + Math.sin(t * speed) * factor;
    meshRef.current.rotation.x += 0.002;
    meshRef.current.rotation.y += 0.002;

    // Scroll response
    const scroll = scrollYProgress.get();
    const scale = THREE.MathUtils.lerp(1, 0.7, scroll);
    const fade = THREE.MathUtils.lerp(opacity, 0.05, scroll);
    
    meshRef.current.scale.setScalar(scale);
    if (Array.isArray(meshRef.current.material)) {
        meshRef.current.material.forEach(m => m.opacity = fade);
    } else {
        meshRef.current.material.opacity = fade;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      {children}
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={opacity} 
        roughness={0.1}
        metalness={0.8}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

export default function HeroShapes() {
  return (
    <group>
      <Shape position={[-4, 2, -5]} color="#00ffa3" opacity={0.15} speed={0.5} factor={0.5}>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      </Shape>
      <Shape position={[5, -2, -8]} color="#fd2155" opacity={0.1} speed={0.7} factor={0.4}>
        <icosahedronGeometry args={[1.5, 0]} />
      </Shape>
      <Shape position={[-6, -3, -12]} color="#4facfe" opacity={0.08} speed={0.4} factor={0.6}>
        <sphereGeometry args={[2, 32, 32]} />
      </Shape>
      <Shape position={[7, 4, -15]} color="#4facfe" opacity={0.08} speed={0.6} factor={0.3}>
        <sphereGeometry args={[1.2, 32, 32]} />
      </Shape>
    </group>
  );
}
