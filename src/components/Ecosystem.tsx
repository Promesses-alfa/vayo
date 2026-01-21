import { 
  Users, 
  Music, 
  Building2, 
  PartyPopper,
  ArrowRight,
  ArrowLeftRight,
  FileText,
  Calendar,
  DollarSign,
  MessageSquare,
  CheckCircle2
} from "lucide-react";

const stakeholders = [
  { 
    id: "agency",
    icon: Users, 
    label: "Booking Agency", 
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    description: "Manage artists, negotiate deals, coordinate bookings"
  },
  { 
    id: "artist",
    icon: Music, 
    label: "Artist / DJ", 
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    description: "View schedule, access documents, track earnings"
  },
  { 
    id: "label",
    icon: Building2, 
    label: "Record Label", 
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
    description: "Oversee roster, coordinate releases, track revenue"
  },
  { 
    id: "festival",
    icon: PartyPopper, 
    label: "Festival / Venue", 
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    description: "Build lineups, send offers, manage logistics"
  },
];

const sharedData = [
  { icon: Calendar, label: "Real-time Availability", desc: "Everyone sees the same calendar" },
  { icon: FileText, label: "Unified Contracts", desc: "Sign once, visible to all parties" },
  { icon: DollarSign, label: "Transparent Finances", desc: "Clear commission splits & payments" },
  { icon: MessageSquare, label: "Centralized Communication", desc: "No more email chains" },
];

export default function Ecosystem() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        >
          <source src="/videos/Vid4.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[var(--vayo-black)]/90" />
      </div>
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-20 z-[1]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[var(--vayo-accent)]/5 blur-[150px] z-[1]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="badge inline-flex items-center gap-2 mb-4">
            <ArrowLeftRight className="w-4 h-4" />
            The VAYO Ecosystem
          </span>
          <h2 
            className="text-3xl md:text-5xl font-bold text-[var(--vayo-white)] mb-6"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            All Worlds. <span className="text-gradient">One Platform.</span>
          </h2>
          <p className="text-[var(--vayo-gray-400)] text-lg max-w-2xl mx-auto">
            VAYO isn&apos;t just software — it&apos;s the central hub where the entire music industry connects. 
            Agencies, artists, labels, and festivals all work together seamlessly.
          </p>
        </div>

        {/* Ecosystem Visualization */}
        <div className="max-w-5xl mx-auto mb-20">
          {/* Central Hub */}
          <div className="relative">
            {/* Center VAYO Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-accent flex items-center justify-center shadow-2xl shadow-[var(--vayo-accent)]/30">
                <div className="text-center">
                  <span className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>VAYO</span>
                  <p className="text-xs text-white/70 mt-1">Central Hub</p>
                </div>
              </div>
            </div>

            {/* Stakeholder Cards in Circle */}
            <div className="relative h-[500px] md:h-[600px]">
              {stakeholders.map((item, index) => {
                // Position cards in a circle
                const angle = (index * 90 - 45) * (Math.PI / 180);
                const radius = 200; // Distance from center
                
                return (
                  <div
                    key={item.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `calc(50% + ${Math.cos(angle) * radius}px)`,
                      top: `calc(50% + ${Math.sin(angle) * radius}px)`,
                    }}
                  >
                    <div className={`w-36 md:w-48 p-4 md:p-5 rounded-2xl ${item.bgColor} border ${item.borderColor} backdrop-blur-sm`}>
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3`}>
                        <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <h3 className="text-sm md:text-base font-semibold text-[var(--vayo-white)] mb-1">{item.label}</h3>
                      <p className="text-xs text-[var(--vayo-gray-400)] hidden md:block">{item.description}</p>
                    </div>

                    {/* Connection Line to Center */}
                    <svg 
                      className="absolute top-1/2 left-1/2 -z-10 pointer-events-none"
                      style={{
                        width: '200px',
                        height: '200px',
                        transform: `translate(-50%, -50%) rotate(${index * 90 - 45 + 180}deg)`,
                      }}
                    >
                      <defs>
                        <linearGradient id={`gradient-${item.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="var(--vayo-accent)" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="var(--vayo-accent)" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <line 
                        x1="100" 
                        y1="100" 
                        x2="200" 
                        y2="100" 
                        stroke={`url(#gradient-${item.id})`}
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />
                    </svg>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* What's Shared */}
        <div className="text-center mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-[var(--vayo-white)] mb-2" style={{ fontFamily: "var(--font-syne)" }}>
            Everything Syncs Automatically
          </h3>
          <p className="text-[var(--vayo-gray-400)]">
            When one party updates, everyone sees it instantly
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {sharedData.map((item) => (
            <div
              key={item.label}
              className="bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] rounded-xl p-5 text-center hover:border-[var(--vayo-accent)]/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--vayo-accent)]/10 flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-6 h-6 text-[var(--vayo-accent)]" />
              </div>
              <h4 className="text-sm font-semibold text-[var(--vayo-white)] mb-1">{item.label}</h4>
              <p className="text-xs text-[var(--vayo-gray-500)]">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Use Case Flow Example */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[var(--vayo-gray-900)] to-[var(--vayo-dark)] border border-[var(--vayo-gray-800)] rounded-2xl p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-bold text-[var(--vayo-white)] mb-6 text-center" style={{ fontFamily: "var(--font-syne)" }}>
              See It In Action: A Booking Flow
            </h3>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {[
                { step: 1, actor: "Festival", action: "Sends offer to Agency", icon: PartyPopper, color: "from-emerald-500 to-teal-500" },
                { step: 2, actor: "Agency", action: "Reviews & negotiates", icon: Users, color: "from-orange-500 to-amber-500" },
                { step: 3, actor: "Artist", action: "Confirms availability", icon: Music, color: "from-purple-500 to-pink-500" },
                { step: 4, actor: "All Parties", action: "Contract auto-generated", icon: CheckCircle2, color: "from-green-500 to-emerald-500" },
              ].map((item, index) => (
                <div key={item.step} className="flex items-center gap-3">
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-2`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs font-medium text-[var(--vayo-white)]">{item.actor}</span>
                    <span className="text-xs text-[var(--vayo-gray-500)] text-center max-w-24">{item.action}</span>
                  </div>
                  {index < 3 && (
                    <ArrowRight className="w-5 h-5 text-[var(--vayo-gray-600)] hidden md:block" />
                  )}
                </div>
              ))}
            </div>
            
            <p className="text-center text-sm text-[var(--vayo-gray-400)] mt-6">
              No emails. No phone tag. No miscommunication. <span className="text-[var(--vayo-accent)]">Just seamless collaboration.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
