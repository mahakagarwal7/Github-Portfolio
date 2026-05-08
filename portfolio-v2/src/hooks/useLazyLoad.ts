"use client";

import { useState, useEffect, useRef } from "react";

interface LazyLoadOptions extends IntersectionObserverInit {
  once?: boolean;
}

export const useLazyLoad = (options: LazyLoadOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (options.once) observer.unobserve(entry.target);
      } else {
        if (!options.once) setIsVisible(false);
      }
    }, options);

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [ref, isVisible] as const;
};
