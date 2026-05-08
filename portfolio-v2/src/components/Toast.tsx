"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiInfo, FiAlertCircle } from "react-icons/fi";

type ToastType = "success" | "error" | "info";

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);

  const showToast = useCallback((message: string, type: ToastType = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 50, x: "-50%" }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[1000] px-6 py-3 bg-surface/80 backdrop-blur-md border border-white/10 rounded-2xl flex items-center gap-3 shadow-2xl"
          >
            {toast.type === "success" && <FiCheckCircle className="text-primary text-xl" />}
            {toast.type === "info" && <FiInfo className="text-blue-400 text-xl" />}
            {toast.type === "error" && <FiAlertCircle className="text-red-400 text-xl" />}
            <span className="text-sm font-bold tracking-widest uppercase">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
