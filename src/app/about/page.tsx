"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Globe, Heart, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { label: "Active Agencies", value: "500+" },
  { label: "Artists Managed", value: "50K+" },
  { label: "Shows Booked", value: "2.5M+" },
  { label: "Countries", value: "45+" },
];

const values = [
  {
    icon: Heart,
    title: "Artist-First",
    description: "We build tools that put artists and their teams at the center of everything.",
    color: "bg-[#f97316]",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We're constantly pushing boundaries to create the most powerful booking platform.",
    color: "bg-[#a855f7]",
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe in the power of community and collaboration in the music industry.",
    color: "bg-[#00d4aa]",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Supporting agencies and artists across 45+ countries worldwide.",
    color: "bg-[#3b82f6]",
  },
];

const team = [
  { name: "Fabian H", role: "Creative Engine", image: "/images/Afbeelding3.jpg" },
  { name: "Ties H", role: "Young Hansler", image: "/images/Afbeelding3.jpg" },
  { name: "Jaime H", role: "Legal Bricker", image: "/images/Afbeelding3.jpg" },
  { name: "Didier H", role: "Senior Pusher", image: "/images/Afbeelding3.jpg" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-24 bg-white">
        {/* Hero */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-syne)" }}>
                Building the future of<br />
                <span className="text-[#a855f7]">live entertainment</span>
              </h1>
              <p className="text-xl text-gray-500">
                We're on a mission to empower everyone in the music industry with the tools 
                they need to succeed together.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                    {stat.value}
                  </p>
                  <p className="text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-syne)" }}>
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    VAYO was born out of frustration. As former booking agents ourselves, 
                    we experienced firsthand the chaos of managing artists with spreadsheets, 
                    scattered emails, and disconnected tools.
                  </p>
                  <p>
                    We saw how festivals struggled to coordinate with agencies, how artists 
                    were left in the dark about their own schedules, and how labels had no 
                    visibility into their roster's touring activity.
                  </p>
                  <p>
                    In 2024, we set out to build the platform we always wished existed — 
                    one that brings everyone together in a single, connected ecosystem.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <Image
                    src="/images/Afbeelding5.JPG"
                    alt="Festival crowd"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-syne)" }}>
                Our Values
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                The principles that guide everything we do at VAYO.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div key={value.title} className="p-6 bg-white rounded-2xl border border-gray-200">
                  <div className={`w-12 h-12 ${value.color} rounded-xl flex items-center justify-center mb-4`}>
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-500">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-syne)" }}>
                Meet the Team
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                The passionate people behind VAYO.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden mb-4 bg-gray-200">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#00d4aa]">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-syne)" }}>
              Join the VAYO Community
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8">
              Ready to transform how you work? Start your free trial today.
            </p>
            <Link 
              href="/login" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Free
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
