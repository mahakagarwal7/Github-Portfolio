"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Float, Line } from "@react-three/drei";

export default function NeuralNetwork3D() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Generate random nodes
  const nodes = useMemo(() => {
    return [...Array(15)].map(() => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10
      ] as [number, number, number],
      size: Math.random() * 0.15 + 0.05
    }));
  }, []);

  // Generate random connections between nodes
  const connections = useMemo(() => {
    const lines = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = new THREE.Vector3(...nodes[i].position).distanceTo(new THREE.Vector3(...nodes[j].position));
        if (dist < 8) {
          lines.push({
            start: nodes[i].position,
            end: nodes[j].position
          });
        }
      }
    }
    return lines;
  }, [nodes]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
      groupRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Nodes */}
      {nodes.map((node, i) => (
        <Float key={i} speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <mesh position={node.position}>
            <sphereGeometry args={[node.size, 16, 16]} />
            <meshStandardMaterial 
              color="#00ffa3" 
              emissive="#00ffa3" 
              emissiveIntensity={2} 
              transparent 
              opacity={0.8} 
            />
          </mesh>
        </Float>
      ))}

      {/* Connection Lines */}
      {connections.map((conn, i) => (
        <Line
          key={i}
          points={[conn.start, conn.end]}
          color="#00ffa3"
          opacity={0.15}
          transparent
          lineWidth={1}
        />
      ))}

      {/* Decorative Large Background Neural Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -5]}>
        <torusGeometry args={[12, 0.02, 16, 100]} />
        <meshStandardMaterial color="#00ffa3" transparent opacity={0.05} />
      </mesh>
    </group>
  );
}
