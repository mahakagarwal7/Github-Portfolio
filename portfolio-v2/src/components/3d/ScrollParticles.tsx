"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useScroll } from "framer-motion";
import { useDeviceType } from "@/hooks/useDeviceType";

export default function ScrollParticles() {
  const pointsRef = useRef<THREE.Points>(null!);
  const { scrollYProgress } = useScroll();
  const { isMobile } = useDeviceType();
  const { mouse } = useThree();

  const count = isMobile ? 200 : 800;
  const columns = isMobile ? 20 : 40;
  const rows = count / columns;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const x = (i % columns) - columns / 2;
      const z = Math.floor(i / columns) - rows / 2;
      pos[i * 3] = x * 0.5;
      pos[i * 3 + 1] = -2;
      pos[i * 3 + 2] = z * 0.5;
    }
    return pos;
  }, [count, columns, rows]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const scroll = scrollYProgress.get();
    const array = pointsRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const x = array[i * 3];
      const z = array[i * 3 + 2];
      
      // Wave calculation
      const waveHeight = scroll * 2.5;
      const d = Math.sqrt(x * x + z * z);
      const y = Math.sin(d * 0.5 - t + scroll * 10) * waveHeight;
      
      array[i * 3 + 1] = -2 + y;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Mouse tilt
    pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, mouse.y * 0.1, 0.1);
    pointsRef.current.rotation.y = THREE.MathUtils.lerp(pointsRef.current.rotation.y, mouse.x * 0.1, 0.1);
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        color="#00ffa3"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
