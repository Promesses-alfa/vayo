"use client";

import Link from "next/link";
import { Construction, ArrowLeft, Bell } from "lucide-react";

interface UnderConstructionProps {
  title: string;
  description?: string;
}

export default function UnderConstruction({ title, description }: UnderConstructionProps) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="relative z-10 text-center max-w-lg">
        <div className="w-20 h-20 rounded-2xl bg-[#00d4aa]/10 flex items-center justify-center mx-auto mb-6">
          <Construction className="w-10 h-10 text-[#00d4aa]" />
        </div>
        
        <h1 
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {title}
        </h1>
        
        <p className="text-gray-500 mb-8 font-medium">
          {description || "We're working hard to bring you this page. Check back soon for updates!"}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 font-bold rounded-xl hover:bg-gray-200 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#00d4aa] text-white font-bold rounded-xl hover:bg-[#00b894] transition-all shadow-lg shadow-[#00d4aa]/20">
            <Bell className="w-4 h-4" />
            Notify Me
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-8 font-medium">
          Expected launch: Q2 2026
        </p>
      </div>
    </div>
  );
}
