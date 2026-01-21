"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Eye, EyeOff } from "lucide-react";

const CORRECT_PASSWORD = "BigBC";
const STORAGE_KEY = "schecker_access";

interface PasswordGateProps {
  children: React.ReactNode;
}

export default function PasswordGate({ children }: PasswordGateProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "granted") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === CORRECT_PASSWORD) {
      setIsEntering(true);
      setTimeout(() => {
        localStorage.setItem(STORAGE_KEY, "granted");
        setIsAuthenticated(true);
      }, 1500);
    } else {
      setError(true);
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false);
        setError(false);
      }, 600);
      setPassword("");
    }
  };

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-red-900/50 border-t-red-600 rounded-full animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a0506] relative overflow-hidden flex flex-col">
        {/* Creepy ambient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,0,0,0.15)_0%,_transparent_70%)]" />
          <div className="absolute top-0 left-0 w-full h-full opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Creepy Clown SVG - Peeking from above */}
        <motion.div 
          className="relative z-20 flex justify-center"
          initial={{ y: -100 }}
          animate={{ y: isEntering ? -200 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <svg 
            viewBox="0 0 200 180" 
            className="w-48 md:w-64 drop-shadow-[0_0_30px_rgba(139,0,0,0.5)]"
          >
            {/* Clown Face */}
            <ellipse cx="100" cy="90" rx="70" ry="80" fill="#f5e6d3" />
            
            {/* Dark circles under eyes */}
            <ellipse cx="70" cy="75" rx="22" ry="18" fill="#2a1a1a" />
            <ellipse cx="130" cy="75" rx="22" ry="18" fill="#2a1a1a" />
            
            {/* Eyes - creepy wide */}
            <ellipse cx="70" cy="75" rx="15" ry="14" fill="#fff" />
            <ellipse cx="130" cy="75" rx="15" ry="14" fill="#fff" />
            
            {/* Pupils - looking at you */}
            <circle cx="73" cy="77" r="8" fill="#1a0a0a" />
            <circle cx="133" cy="77" r="8" fill="#1a0a0a" />
            
            {/* Tiny light reflections */}
            <circle cx="76" cy="74" r="2" fill="#fff" />
            <circle cx="136" cy="74" r="2" fill="#fff" />
            
            {/* Eyebrows - sinister */}
            <path d="M50 55 Q70 45 90 58" stroke="#8B0000" strokeWidth="4" fill="none" />
            <path d="M150 55 Q130 45 110 58" stroke="#8B0000" strokeWidth="4" fill="none" />
            
            {/* Red nose */}
            <circle cx="100" cy="100" r="18" fill="#cc0000" />
            <ellipse cx="95" cy="95" rx="5" ry="4" fill="#ff3333" opacity="0.6" />
            
            {/* Creepy smile */}
            <path 
              d="M55 125 Q100 175 145 125" 
              stroke="#8B0000" 
              strokeWidth="5" 
              fill="#2a0a0a"
            />
            
            {/* Teeth */}
            <path d="M65 130 L75 145 L85 130" fill="#f5f5dc" />
            <path d="M85 130 L95 148 L105 130" fill="#f5f5dc" />
            <path d="M105 130 L115 148 L125 130" fill="#f5f5dc" />
            <path d="M125 130 L135 145 L145 130" fill="#f5f5dc" />
            
            {/* Wild red hair */}
            <ellipse cx="35" cy="50" rx="20" ry="25" fill="#cc0000" />
            <ellipse cx="165" cy="50" rx="20" ry="25" fill="#cc0000" />
            <ellipse cx="50" cy="25" rx="18" ry="22" fill="#8B0000" />
            <ellipse cx="150" cy="25" rx="18" ry="22" fill="#8B0000" />
            <ellipse cx="75" cy="15" rx="20" ry="18" fill="#cc0000" />
            <ellipse cx="125" cy="15" rx="20" ry="18" fill="#cc0000" />
            <ellipse cx="100" cy="8" rx="22" ry="15" fill="#8B0000" />
            
            {/* Left hand gripping */}
            <g transform="translate(-15, 140)">
              <ellipse cx="30" cy="20" rx="12" ry="8" fill="#f5e6d3" />
              <ellipse cx="20" cy="15" rx="5" ry="12" fill="#f5e6d3" />
              <ellipse cx="28" cy="12" rx="5" ry="14" fill="#f5e6d3" />
              <ellipse cx="36" cy="14" rx="5" ry="13" fill="#f5e6d3" />
              <ellipse cx="43" cy="18" rx="5" ry="11" fill="#f5e6d3" />
            </g>
            {/* Right hand gripping */}
            <g transform="translate(155, 140)">
              <ellipse cx="30" cy="20" rx="12" ry="8" fill="#f5e6d3" />
              <ellipse cx="17" cy="18" rx="5" ry="11" fill="#f5e6d3" />
              <ellipse cx="24" cy="14" rx="5" ry="13" fill="#f5e6d3" />
              <ellipse cx="32" cy="12" rx="5" ry="14" fill="#f5e6d3" />
              <ellipse cx="40" cy="15" rx="5" ry="12" fill="#f5e6d3" />
            </g>
          </svg>
        </motion.div>

        {/* Curtains */}
        <div className="flex-1 relative z-10 flex">
          {/* Left Curtain */}
          <motion.div 
            className="w-1/2 min-h-full relative"
            initial={{ x: 0 }}
            animate={{ x: isEntering ? "-100%" : 0 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <div 
              className="absolute inset-0"
              style={{
                background: `linear-gradient(90deg, 
                  #1a0505 0%, 
                  #2d0a0a 20%, 
                  #4a0f0f 40%,
                  #3d0c0c 60%,
                  #2d0a0a 80%,
                  #4a0f0f 100%
                )`,
              }}
            />
            {/* Curtain folds */}
            <div className="absolute inset-0" style={{
              background: `repeating-linear-gradient(90deg,
                transparent 0px,
                rgba(0,0,0,0.3) 20px,
                transparent 40px,
                rgba(139,0,0,0.1) 60px,
                transparent 80px
              )`
            }} />
            {/* Curtain drape effect */}
            <svg className="absolute top-0 right-0 h-full w-16" viewBox="0 0 50 400" preserveAspectRatio="none">
              <path d="M50 0 Q30 100 50 200 Q30 300 50 400 L50 400 L50 0" fill="rgba(0,0,0,0.4)" />
            </svg>
          </motion.div>

          {/* Right Curtain */}
          <motion.div 
            className="w-1/2 min-h-full relative"
            initial={{ x: 0 }}
            animate={{ x: isEntering ? "100%" : 0 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <div 
              className="absolute inset-0"
              style={{
                background: `linear-gradient(270deg, 
                  #1a0505 0%, 
                  #2d0a0a 20%, 
                  #4a0f0f 40%,
                  #3d0c0c 60%,
                  #2d0a0a 80%,
                  #4a0f0f 100%
                )`,
              }}
            />
            {/* Curtain folds */}
            <div className="absolute inset-0" style={{
              background: `repeating-linear-gradient(270deg,
                transparent 0px,
                rgba(0,0,0,0.3) 20px,
                transparent 40px,
                rgba(139,0,0,0.1) 60px,
                transparent 80px
              )`
            }} />
            {/* Curtain drape effect */}
            <svg className="absolute top-0 left-0 h-full w-16" viewBox="0 0 50 400" preserveAspectRatio="none">
              <path d="M0 0 Q20 100 0 200 Q20 300 0 400 L0 400 L0 0" fill="rgba(0,0,0,0.4)" />
            </svg>
          </motion.div>

          {/* Center content - between curtains */}
          <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: isEntering ? 0 : 1, 
                scale: isEntering ? 0.8 : 1 
              }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-sm px-6 pointer-events-auto"
            >
              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center mb-8"
              >
                <h1 
                  className="text-5xl md:text-6xl font-black tracking-tight mb-2"
                  style={{ 
                    fontFamily: "var(--font-syne)",
                    background: "linear-gradient(180deg, #ffd700 0%, #ffb300 50%, #ff8c00 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0 0 60px rgba(255,215,0,0.6), 0 0 120px rgba(255,140,0,0.4)",
                    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.8))"
                  }}
                >
                  SCHECKER
                </h1>
                <p 
                  className="text-base font-bold tracking-[0.5em] uppercase"
                  style={{ 
                    color: "#ffd700",
                    textShadow: "0 0 30px rgba(255,215,0,0.5), 0 2px 4px rgba(0,0,0,0.8)"
                  }}
                >
                  Enterprises
                </p>
              </motion.div>

              {/* Password Form */}
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  x: isShaking ? [0, -10, 10, -10, 10, 0] : 0
                }}
                transition={{ 
                  delay: 0.4,
                  x: { duration: 0.4 }
                }}
                className="space-y-4"
              >
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className={`w-5 h-5 ${error ? 'text-red-500' : 'text-red-300/40'}`} />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter if you dare..."
                    className={`w-full bg-black/60 border ${error ? 'border-red-500' : 'border-red-900/50'} rounded-lg py-4 pl-12 pr-12 text-red-100 placeholder-red-300/30 focus:outline-none focus:border-red-700 focus:bg-black/80 transition-all`}
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-red-300/40 hover:text-red-300/70 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-900 to-red-800 text-red-100 font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-2 hover:from-red-800 hover:to-red-700 transition-all border border-red-700/50 shadow-lg shadow-red-900/30"
                  style={{ textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}
                >
                  <span>Step Inside</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </button>
              </motion.form>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center text-red-400/30 text-xs mt-6"
              >
                🎪 Welcome to the show 🎪
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Curtain rod */}
        <div className="absolute top-[170px] md:top-[210px] left-0 right-0 h-3 bg-gradient-to-b from-yellow-900 via-yellow-700 to-yellow-900 z-30 shadow-lg" />
        <div className="absolute top-[168px] md:top-[208px] left-0 right-0 h-1 bg-yellow-600/50 z-30" />
      </div>
    );
  }

  return <>{children}</>;
}
