"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiAlertTriangle } from "react-icons/fi";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-bg">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <Container>
        <div className="text-center space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex p-6 bg-primary/10 rounded-[32px] text-primary mb-4"
          >
            <FiAlertTriangle size={48} />
          </motion.div>
          
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter">
              404 <span className="text-primary italic">!</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-white/60 uppercase tracking-[0.3em]">
              Protocol Not Found
            </h2>
          </div>
          
          <p className="text-text-secondary max-w-md mx-auto text-sm leading-relaxed">
            The coordinates you've requested do not exist in the current architecture. 
            Redirecting to home base is recommended.
          </p>
          
          <div className="pt-8">
            <Link href="/" passHref>
              <Button variant="primary" className="gap-3 px-8 group">
                <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
                RETURN TO SYSTEM
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
