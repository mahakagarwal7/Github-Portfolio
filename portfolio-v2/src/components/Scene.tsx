"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, MeshDistortMaterial, GradientTexture } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { useScroll } from "framer-motion";

function Sculpture() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { scrollYProgress } = useScroll();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.2;
    meshRef.current.rotation.y = t * 0.3;
    
    // React to scroll
    const scale = 1 + scrollYProgress.get() * 0.5;
    meshRef.current.scale.setScalar(scale);
    
    // Distort based on time and scroll
    if (meshRef.current.material instanceof THREE.ShaderMaterial) {
       // distortion logic handled by MeshDistortMaterial
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={[2, 0, 0]}>
        <torusKnotGeometry args={[1.5, 0.4, 256, 32]} />
        <MeshDistortMaterial
          color="#00ffa3"
          speed={3}
          distort={0.4}
          radius={1}
        >
          <GradientTexture
            stops={[0, 0.5, 1]}
            colors={['#00ffa3', '#fd2155', '#ffd700']}
          />
        </MeshDistortMaterial>
      </mesh>
    </Float>
  );
}

export default function Scene() {
  return (
    <div className="canvas-container">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00ffa3" />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#fd2155" />
        
        <Sculpture />
      </Canvas>
    </div>
  );
}
