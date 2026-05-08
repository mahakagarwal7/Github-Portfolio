"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Float, MeshDistortMaterial } from "@react-three/drei";

export default function GlassArchitecture() {
  return (
    <group>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[-4, 2, -5]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[2, 2, 2]} />
          <MeshDistortMaterial
            color="#00ffa3"
            speed={5}
            distort={0.3}
            radius={1}
            transmission={0.8}
            thickness={0.5}
            roughness={0}
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={2}>
        <mesh position={[5, -3, -8]}>
          <octahedronGeometry args={[3]} />
          <MeshDistortMaterial
            color="#ffffff"
            speed={3}
            distort={0.4}
            radius={1}
            transmission={0.9}
            thickness={1}
            roughness={0.1}
          />
        </mesh>
      </Float>

      <Float speed={3} rotationIntensity={2} floatIntensity={1}>
        <mesh position={[8, 4, -10]}>
          <torusGeometry args={[2, 0.5, 16, 100]} />
          <MeshDistortMaterial
            color="#00ffa3"
            speed={4}
            distort={0.2}
            radius={1}
            transmission={0.5}
            thickness={2}
          />
        </mesh>
      </Float>
    </group>
  );
}
