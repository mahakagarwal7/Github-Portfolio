import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Container = ({ children, className = "", id }: ContainerProps) => {
  return (
    <div 
      id={id}
      className={`max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24 w-full ${className}`}
    >
      {children}
    </div>
  );
};
