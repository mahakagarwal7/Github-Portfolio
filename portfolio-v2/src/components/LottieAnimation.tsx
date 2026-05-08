"use client";

import React, { useEffect, useState, Suspense, lazy } from "react";
import { useLazyLoad } from "@/hooks/useLazyLoad";

const Lottie = lazy(() => import("lottie-react"));

interface LottieAnimationProps {
  url: string;
  className?: string;
  loop?: boolean;
}

export default function LottieAnimation({ url, className = "", loop = true }: LottieAnimationProps) {
  const [ref, isVisible] = useLazyLoad({ threshold: 0.1, once: true });
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    if (isVisible && !animationData) {
      fetch(url)
        .then(res => res.json())
        .then(data => setAnimationData(data))
        .catch(err => console.error("Lottie load error:", err));
    }
  }, [isVisible, url, animationData]);

  return (
    <div ref={ref} className={className}>
      {animationData ? (
        <Suspense fallback={<div className="w-full h-full bg-white/5 animate-pulse rounded-2xl" />}>
          <Lottie 
            animationData={animationData} 
            loop={loop} 
            className="w-full h-full" 
          />
        </Suspense>
      ) : (
        <div className="w-full h-full bg-white/5 animate-pulse rounded-2xl" />
      )}
    </div>
  );
}
