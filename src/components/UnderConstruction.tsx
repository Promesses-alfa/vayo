"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Construction, ArrowLeft, Bell } from "lucide-react";

interface UnderConstructionProps {
  title: string;
  description?: string;
}

export default function UnderConstruction({ title, description }: UnderConstructionProps) {
  return (
    <div className="min-h-screen bg-[var(--vayo-black)] flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[var(--vayo-accent)]/10 blur-[120px]" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center max-w-lg"
      >
        <div className="w-20 h-20 rounded-2xl bg-[var(--vayo-accent)]/10 flex items-center justify-center mx-auto mb-6">
          <Construction className="w-10 h-10 text-[var(--vayo-accent)]" />
        </div>
        
        <h1 
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {title}
        </h1>
        
        <p className="text-[var(--vayo-gray-400)] mb-8">
          {description || "We're working hard to bring you this page. Check back soon for updates!"}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <button className="btn-primary inline-flex items-center gap-2">
            <Bell className="w-4 h-4" />
            Notify Me
          </button>
        </div>

        <p className="text-xs text-[var(--vayo-gray-600)] mt-8">
          Expected launch: Q2 2026
        </p>
      </motion.div>
    </div>
  );
}
