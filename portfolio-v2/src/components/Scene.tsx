"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useScroll } from "framer-motion";

function GridParticles() {
  const pointsRef = useRef<THREE.Points>(null!);
  const { scrollYProgress } = useScroll();

  const count = 40;
  const spacing = 1.5;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * count * 3);
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        const x = (i - count / 2) * spacing;
        const z = (j - count / 2) * spacing;
        const y = 0;
        pos.set([x, y, z], (i * count + j) * 3);
      }
    }
    return pos;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const points = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const scroll = scrollYProgress.get();

    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        const idx = (i * count + j) * 3;
        const x = (i - count / 2) * spacing;
        const z = (j - count / 2) * spacing;
        
        // Wave animation
        const dist = Math.sqrt(x * x + z * z);
        points[idx + 1] = Math.sin(dist * 0.5 - t * 2) * 0.5 + Math.cos(x * 0.3 + t) * 0.3;
        
        // Scroll reaction
        points[idx + 1] += scroll * 5 * Math.sin(dist * 0.1);
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y = t * 0.05;
  });

  return (
    <points ref={pointsRef} rotation={[-Math.PI / 3, 0, 0]} position={[0, -2, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#00ffa3"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

export default function Scene() {
  return (
    <div className="canvas-container">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 5, 15], fov: 45 }} style={{ pointerEvents: 'none' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ffa3" />
        <GridParticles />
      </Canvas>
    </div>
  );
}
