"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ScrollParticles from "./ScrollParticles";
import NeuralNetwork3D from "./NeuralNetwork3D";
import DepthGrid from "./DepthGrid";
import FloatingSkillIcons from "./FloatingSkillIcons";
import { useDeviceType } from "@/hooks/useDeviceType";
import { Environment } from "@react-three/drei";

export default function Scene() {
  const { isMobile } = useDeviceType();

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00ffa3" />
          <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#fd2155" />
          
          <ScrollParticles />
          <NeuralNetwork3D />
          
          {/* Post-processing could go here if needed */}
        </Suspense>
      </Canvas>
    </div>
  );
}
