"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useScroll } from "framer-motion";

export default function DepthGrid() {
  const gridRef = useRef<THREE.Group>(null!);
  const { scrollYProgress } = useScroll();
  const { mouse } = useThree();

  useFrame((state) => {
    const scroll = scrollYProgress.get();
    
    // Parallax movement
    gridRef.current.position.z = scroll * 5;
    
    // Mouse rotation
    gridRef.current.rotation.x = THREE.MathUtils.lerp(gridRef.current.rotation.x, -Math.PI / 2.5 + mouse.y * 0.05, 0.1);
    gridRef.current.rotation.y = THREE.MathUtils.lerp(gridRef.current.rotation.y, mouse.x * 0.05, 0.1);
  });

  return (
    <group ref={gridRef} position={[0, -3.5, -5]}>
      <gridHelper 
        args={[100, 40, "#00ffa3", "#00ffa3"]} 
        rotation={[0, 0, 0]}
      >
        <meshBasicMaterial 
          attach="material" 
          transparent 
          opacity={0.08} 
          color="#00ffa3" 
          depthWrite={false}
        />
      </gridHelper>
      
      {/* Horizontal Perspective Lines */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <planeGeometry args={[100, 100, 20, 20]} />
        <meshBasicMaterial color="#00ffa3" wireframe transparent opacity={0.03} />
      </mesh>
    </group>
  );
}
