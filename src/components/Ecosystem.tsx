"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Music, Building2, PartyPopper, ArrowRight, ArrowLeftRight } from "lucide-react";

const stakeholders = [
  {
    id: "agencies",
    icon: Users,
    name: "Agencies",
    color: "bg-[#00d4aa]",
    description: "Manage roster, bookings & contracts",
  },
  {
    id: "festivals",
    icon: PartyPopper,
    name: "Festivals",
    color: "bg-[#a855f7]",
    description: "Build lineups & manage advancing",
  },
  {
    id: "artists",
    icon: Music,
    name: "Artists",
    color: "bg-[#f97316]",
    description: "Access schedules & documents",
  },
  {
    id: "labels",
    icon: Building2,
    name: "Labels",
    color: "bg-[#3b82f6]",
    description: "Track touring & revenue",
  },
];

const connections = [
  { from: "Agencies", to: "Festivals", label: "Booking requests & offers" },
  { from: "Festivals", to: "Artists", label: "Advancing & logistics" },
  { from: "Labels", to: "Agencies", label: "Revenue & analytics" },
];

export default function Ecosystem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-syne)" }}>
            One ecosystem,<br />
            <span className="text-[#00d4aa]">infinite connections</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Every stakeholder connected. Every workflow automated. 
            No more emails, spreadsheets, or miscommunication.
          </p>
        </motion.div>

        {/* Stakeholder Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stakeholders.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all"
            >
              <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
              <p className="text-gray-500">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Connection Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "var(--font-syne)" }}>
            How it works together
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {connections.map((connection, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <span>{connection.from}</span>
                  <ArrowLeftRight className="w-4 h-4 text-[#00d4aa]" />
                  <span>{connection.to}</span>
                </div>
                <p className="text-xs text-gray-500 ml-auto">{connection.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
