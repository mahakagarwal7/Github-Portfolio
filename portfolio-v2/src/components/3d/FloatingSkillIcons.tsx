"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FloatingIcon({ type, position }: any) {
  const meshRef = useRef<THREE.Group>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.position.y = position[1] + Math.sin(t + position[0]) * 0.2;
    meshRef.current.rotation.y += 0.01;
    if (hovered) {
      meshRef.current.rotation.x += 0.05;
    }
  });

  return (
    <group 
      ref={meshRef} 
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.3 : 1}
    >
      {type === "AI/ML" && (
        <group>
          <mesh><sphereGeometry args={[0.3, 16, 16]} /><meshStandardMaterial color="#00ffa3" emissive="#00ffa3" emissiveIntensity={2} /></mesh>
          {[...Array(6)].map((_, i) => (
            <mesh key={i} rotation={[i * Math.PI / 3, 0, 0]} position={[0, 0, 0]}>
              <boxGeometry args={[0.02, 1, 0.02]} />
              <meshStandardMaterial color="#00ffa3" transparent opacity={0.3} />
            </mesh>
          ))}
        </group>
      )}
      {type === "Backend" && (
        <group>
          <mesh position={[0, 0.4, 0]}><boxGeometry args={[0.6, 0.2, 0.6]} /><meshStandardMaterial color="#4facfe" /></mesh>
          <mesh position={[0, 0, 0]}><boxGeometry args={[0.6, 0.2, 0.6]} /><meshStandardMaterial color="#4facfe" /></mesh>
          <mesh position={[0, -0.4, 0]}><boxGeometry args={[0.6, 0.2, 0.6]} /><meshStandardMaterial color="#4facfe" /></mesh>
        </group>
      )}
      {type === "Frontend" && (
        <mesh>
          <boxGeometry args={[0.7, 0.5, 0.1]} />
          <meshStandardMaterial color="#fd2155" wireframe />
        </mesh>
      )}
      {type === "DevOps" && (
        <mesh>
          <torusGeometry args={[0.4, 0.1, 16, 32]} />
          <meshStandardMaterial color="#f6d365" />
        </mesh>
      )}
    </group>
  );
}

export default function FloatingSkillIcons() {
  return (
    <group>
      <FloatingIcon type="AI/ML" position={[2, 0, 0]} />
      <FloatingIcon type="Backend" position={[2, -2.5, 0]} />
      <FloatingIcon type="Frontend" position={[2, -5, 0]} />
      <FloatingIcon type="DevOps" position={[2, -7.5, 0]} />
    </group>
  );
}
