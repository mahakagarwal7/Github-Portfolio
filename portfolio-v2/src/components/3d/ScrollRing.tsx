"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";

function ProgressRing() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { scrollYProgress } = useScroll();
  const [isComplete, setIsComplete] = useState(false);

  useFrame((state) => {
    const progress = scrollYProgress.get();
    meshRef.current.rotation.z = -progress * Math.PI * 2;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;

    if (progress >= 0.99 && !isComplete) setIsComplete(true);
    if (progress < 0.99 && isComplete) setIsComplete(false);
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[1.5, 0.15, 16, 100]} />
      <meshStandardMaterial 
        color="#00ffa3" 
        emissive="#00ffa3" 
        emissiveIntensity={2} 
        toneMapped={false}
      />
    </mesh>
  );
}

export default function ScrollRing() {
  const { scrollYProgress } = useScroll();
  const scale = useSpring(useTransform(scrollYProgress, [0.99, 1], [1, 1.2]));

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div 
      style={{ scale }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-16 h-16 z-[1000] cursor-pointer group"
    >
      <Canvas camera={{ position: [0, 0, 5] }} gl={{ alpha: true }}>
        <ambientLight intensity={1} />
        <ProgressRing />
      </Canvas>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-1 h-1 bg-primary rounded-full group-hover:scale-[3] transition-transform" />
      </div>
    </motion.div>
  );
}
