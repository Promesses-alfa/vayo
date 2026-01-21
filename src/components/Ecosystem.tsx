"use client";

import { useRef } from "react";
import { Users, Music, Building2, PartyPopper, ArrowRight, ArrowLeftRight } from "lucide-react";

const stakeholders = [
  {
    id: "agencies",
    icon: Users,
    name: "Agencies",
    color: "text-[#00d4aa]",
    bgColor: "bg-[#00d4aa]/10",
    borderColor: "border-[#00d4aa]/20",
    description: "Manage roster, bookings & contracts",
  },
  {
    id: "festivals",
    icon: PartyPopper,
    name: "Festivals",
    color: "text-[#a855f7]",
    bgColor: "bg-[#a855f7]/10",
    borderColor: "border-[#a855f7]/20",
    description: "Build lineups & manage advancing",
  },
  {
    id: "artists",
    icon: Music,
    name: "Artists",
    color: "text-[#f97316]",
    bgColor: "bg-[#f97316]/10",
    borderColor: "border-[#f97316]/20",
    description: "Access schedules & documents",
  },
  {
    id: "labels",
    icon: Building2,
    name: "Labels",
    color: "text-[#3b82f6]",
    bgColor: "bg-[#3b82f6]/10",
    borderColor: "border-[#3b82f6]/20",
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

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-syne)" }}>
            One ecosystem,<br />
            <span className="text-[#00d4aa]">infinite connections</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Every stakeholder connected. Every workflow automated. 
            No more emails, spreadsheets, or miscommunication.
          </p>
        </div>

        {/* Stakeholder Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stakeholders.map((item) => (
            <div
              key={item.id}
              className={`p-6 bg-white rounded-2xl border ${item.borderColor} hover:shadow-lg transition-all`}
            >
              <div className={`w-14 h-14 ${item.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                <item.icon className={`w-7 h-7 ${item.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
              <p className="text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Connection Examples */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
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
        </div>
      </div>
    </section>
  );
}
