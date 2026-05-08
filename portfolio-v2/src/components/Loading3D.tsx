"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { TorusKnot, Float, Sparkles, PerspectiveCamera, Environment } from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import { useDeviceType } from "@/hooks/useDeviceType";

// --- 3D Components ---

function GithubCore({ progress }: { progress: number }) {
  const coreRef = useRef<THREE.Group>(null!);
  const cubesRef = useRef<THREE.Group>(null!);
  
  // Generate a 10x10 grid for the contribution landscape
  const grid = useMemo(() => {
    const cubes = [];
    for (let x = -5; x < 5; x++) {
      for (let z = -5; z < 5; z++) {
        cubes.push({ x, z, offset: Math.random() * Math.PI * 2 });
      }
    }
    return cubes;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Core rotation
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.5;
      coreRef.current.rotation.z = Math.sin(t * 0.3) * 0.2;
    }

    // Landscape animation
    cubesRef.current.children.forEach((child, i) => {
      const cube = grid[i];
      const dist = Math.sqrt(cube.x ** 2 + cube.z ** 2);
      const h = Math.sin(t * 2 - dist * 0.5) * 0.5 + 1;
      child.scale.y = THREE.MathUtils.lerp(child.scale.y, h, 0.1);
      child.position.y = (child.scale.y / 2) - 1.5;
      
      // Pulse color based on height
      const mesh = child as THREE.Mesh;
      const mat = mesh.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = h * 0.5;
    });
  });

  return (
    <group>
      {/* Central Repository Monolith */}
      <Float speed={3} rotationIntensity={2} floatIntensity={1}>
        <group ref={coreRef}>
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial 
              color="#00ffa3" 
              emissive="#00ffa3" 
              emissiveIntensity={2}
              transparent
              opacity={0.8}
              wireframe
            />
          </mesh>
          <mesh scale={0.8}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#00ffa3" emissive="#00ffa3" emissiveIntensity={0.5} />
          </mesh>
        </group>
      </Float>

      {/* Contribution Landscape Grid */}
      <group ref={cubesRef} position={[0, 0, 0]}>
        {grid.map((cube, i) => (
          <mesh key={i} position={[cube.x * 0.6, -1.5, cube.z * 0.6]}>
            <boxGeometry args={[0.5, 1, 0.5]} />
            <meshStandardMaterial 
              color="#00ffa3" 
              emissive="#00ffa3" 
              emissiveIntensity={0.2}
              transparent
              opacity={0.6}
            />
          </mesh>
        ))}
      </group>

      {/* Data Flow Arcs */}
      {[...Array(3)].map((_, i) => (
        <mesh key={i} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
          <torusGeometry args={[4, 0.01, 16, 100]} />
          <meshStandardMaterial color="#00ffa3" transparent opacity={0.2} />
        </mesh>
      ))}

      <Sparkles count={200} scale={10} size={1} speed={0.4} color="#00ffa3" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffa3" />
    </group>
  );
}

function CameraRig({ progress }: { progress: number }) {
  const { camera } = useThree();
  
  useFrame(() => {
    // Fly-through effect based on progress
    // Start at distance 12, zoom into 6
    const zPos = THREE.MathUtils.lerp(12, 6, progress);
    camera.position.z = zPos;
    camera.lookAt(0, 0, 0);
  });

  return <PerspectiveCamera makeDefault fov={45} />;
}

// --- Main Loading Component ---

export default function Loading3D({ onComplete }: { onComplete: () => void }) {
  const { isTouch } = useDeviceType();
  const [phase, setPhase] = useState<"loading" | "name" | "exit">("loading");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animation Timeline
    const startPortal = setTimeout(() => {
      // Start camera zoom
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 1) {
            clearInterval(interval);
            return 1;
          }
          return prev + 0.005;
        });
      }, 16);
    }, 500);

    const nameReveal = setTimeout(() => setPhase("name"), 2800);
    const triggerExit = setTimeout(() => setPhase("exit"), 4200);
    const finish = setTimeout(onComplete, 5000);

    return () => {
      clearTimeout(startPortal);
      clearTimeout(nameReveal);
      clearTimeout(triggerExit);
      clearTimeout(finish);
    };
  }, [onComplete]);

  // Mobile Fallback
  if (isTouch) {
    return (
      <div className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="w-24 h-24 border-2 border-primary/20 rounded-full animate-ping absolute inset-0" />
          <div className="w-24 h-24 border-b-2 border-primary rounded-full animate-spin" />
        </motion.div>
        
        <AnimatePresence>
          {phase !== "loading" && (
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 text-4xl font-black text-white tracking-tighter uppercase text-center"
              style={{ textShadow: "0 0 20px #00ffa3" }}
            >
              MAHAK AGARWAL
            </motion.h1>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === "exit" ? 0 : 1 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[10000] bg-black overflow-hidden"
    >
      <Canvas gl={{ antialias: true, alpha: false }} dpr={[1, 2]}>
        <color attach="background" args={["#000000"]} />
        <GithubCore progress={progress} />
        <CameraRig progress={progress} />
      </Canvas>

      {/* Name Overlay */}
      <AnimatePresence>
        {phase !== "loading" && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.h1
              initial={{ opacity: 0, scale: 0.95, letterSpacing: "0em" }}
              animate={{ opacity: 1, scale: 1, letterSpacing: "0.15em" }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-[clamp(3rem,8vw,6rem)] font-black text-white text-center leading-none uppercase select-none"
              style={{
                textShadow: "0 0 30px rgba(0, 255, 163, 0.8), 0 0 60px rgba(0, 255, 163, 0.4)",
              }}
            >
              MAHAK AGARWAL
            </motion.h1>
          </div>
        )}
      </AnimatePresence>

      {/* Subtle Scanlines Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
           style={{ backgroundImage: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))", backgroundSize: "100% 4px, 3px 100%" }} />

      <button 
        onClick={onComplete}
        className="absolute bottom-10 right-10 text-white/20 text-[10px] font-bold tracking-[0.4em] hover:text-primary transition-colors z-20 uppercase"
      >
        Skip Transmission →
      </button>
    </motion.div>
  );
}
