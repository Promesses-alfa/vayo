"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Smartphone, 
  Calendar, 
  FileText, 
  Bell,
  MapPin,
  Download,
  Wifi,
  WifiOff
} from "lucide-react";

const features = [
  { icon: Calendar, title: "Full schedule", description: "All shows & itineraries" },
  { icon: FileText, title: "Documents", description: "Contracts & riders" },
  { icon: WifiOff, title: "Offline mode", description: "Works everywhere" },
  { icon: Bell, title: "Notifications", description: "Real-time updates" },
  { icon: MapPin, title: "Navigation", description: "One-tap directions" },
  { icon: Smartphone, title: "Push sync", description: "Instant changes" },
];

export default function MobileApp() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-[#00d4aa]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative mx-auto w-[280px]">
              {/* Phone Frame */}
              <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-2xl z-10" />
                
                <div className="relative bg-gray-800 rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between px-6 py-3 bg-gray-900">
                    <span className="text-xs text-white font-medium">9:41</span>
                    <div className="flex items-center gap-1">
                      <Wifi className="w-3.5 h-3.5 text-white" />
                      <div className="w-6 h-3 rounded-sm border border-white/50 p-0.5">
                        <div className="w-full h-full bg-[#00d4aa] rounded-[1px]" />
                      </div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className="text-gray-400 text-xs">Welcome back,</p>
                        <p className="text-white font-semibold">DJ Storm</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#00d4aa]" />
                    </div>

                    <div className="bg-[#00d4aa] rounded-2xl p-4 mb-4">
                      <p className="text-white/80 text-xs mb-1">NEXT SHOW</p>
                      <p className="text-white font-bold text-lg mb-2">Paradiso Amsterdam</p>
                      <div className="flex items-center gap-4 text-white/90 text-xs">
                        <span>Jan 24, 2026</span>
                        <span>•</span>
                        <span>23:00</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {["Schedule", "Docs", "Flights", "Hotels"].map((item) => (
                        <div key={item} className="bg-gray-700 rounded-xl p-3 text-center">
                          <div className="w-8 h-8 rounded-full bg-gray-600 mx-auto mb-1" />
                          <p className="text-gray-400 text-[10px]">{item}</p>
                        </div>
                      ))}
                    </div>

                    <p className="text-white font-medium text-sm mb-3">Upcoming</p>
                    <div className="space-y-2">
                      {[
                        { venue: "O2 Arena, London", date: "Jan 28" },
                        { venue: "Berghain, Berlin", date: "Feb 2" },
                      ].map((show) => (
                        <div key={show.venue} className="flex items-center gap-3 bg-gray-700 rounded-xl p-3">
                          <div className="w-10 h-10 rounded-lg bg-gray-600" />
                          <div className="flex-1">
                            <p className="text-white text-xs font-medium">{show.venue}</p>
                            <p className="text-gray-500 text-[10px]">{show.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-syne)" }}>
              Your shows,<br />on the go.
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-md">
              Artists and crew access everything they need, anywhere. 
              Real-time sync keeps everyone on the same page.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">{feature.title}</h4>
                    <p className="text-white/60 text-xs">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#" className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl hover:bg-gray-50 transition-colors">
                <Download className="w-6 h-6 text-gray-900" />
                <div>
                  <p className="text-gray-500 text-[10px]">Download on the</p>
                  <p className="text-gray-900 font-semibold text-sm">App Store</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl hover:bg-gray-50 transition-colors">
                <Download className="w-6 h-6 text-gray-900" />
                <div>
                  <p className="text-gray-500 text-[10px]">Get it on</p>
                  <p className="text-gray-900 font-semibold text-sm">Google Play</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
