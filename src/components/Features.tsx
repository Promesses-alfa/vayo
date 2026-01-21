import {
  Calendar,
  FileText,
  DollarSign,
  Truck,
  Users,
  Zap,
  TrendingUp,
  Shield,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Smart Booking Management",
    description:
      "Streamline your entire booking workflow. From initial inquiry to confirmed show, manage every detail in one place.",
    highlights: ["Automated confirmations", "Calendar sync", "Availability tracking"],
  },
  {
    icon: FileText,
    title: "Contract & Document Hub",
    description:
      "Create, send, and sign contracts in minutes. Custom templates, e-signatures, and automatic reminders.",
    highlights: ["E-signature integration", "Template library", "Version control"],
  },
  {
    icon: DollarSign,
    title: "Financial Command Center",
    description:
      "Track revenue, manage invoices, and forecast earnings. Get complete financial visibility across all your artists.",
    highlights: ["Invoice automation", "Payment tracking", "Financial reports"],
  },
  {
    icon: Truck,
    title: "Tour & Logistics Mastery",
    description:
      "Plan tours like a pro. Manage travel, accommodations, riders, and technical requirements effortlessly.",
    highlights: ["Itinerary builder", "Rider management", "Vendor coordination"],
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Keep everyone in sync. Share information, assign tasks, and communicate seamlessly with your team and artists.",
    highlights: ["Real-time updates", "Task management", "Role-based access"],
  },
  {
    icon: Zap,
    title: "Powerful Integrations",
    description:
      "Connect with the tools you already use. Seamless integrations with calendars, accounting software, and more.",
    highlights: ["Google Calendar", "QuickBooks", "API access"],
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Sell More Shows",
    description: "Data-driven insights help you identify opportunities and close deals faster.",
  },
  {
    icon: Clock,
    title: "Save 10+ Hours/Week",
    description: "Automation handles the busywork so you can focus on building relationships.",
  },
  {
    icon: Shield,
    title: "Stay in Control",
    description: "Complete visibility into every aspect of your agency's operations.",
  },
];

export default function Features() {
  return (
    <section id="features" className="section relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--vayo-gray-700)] to-transparent" />
      
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="badge mb-4">Features</span>
          <h2
            className="text-3xl md:text-5xl font-bold text-[var(--vayo-white)] mb-6"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Everything You Need to{" "}
            <span className="text-gradient">Dominate</span>
          </h2>
          <p className="text-[var(--vayo-gray-400)] max-w-2xl mx-auto text-lg">
            One platform to power every aspect of your booking agency. 
            Built by industry veterans who understand your challenges.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card-glass group"
            >
              <div className="feature-icon mb-5">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--vayo-white)] mb-3">
                {feature.title}
              </h3>
              <p className="text-[var(--vayo-gray-400)] mb-4 text-sm leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-center gap-2 text-sm text-[var(--vayo-gray-300)]"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--vayo-accent)]" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Benefits Row */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-[var(--vayo-gray-900)] to-[var(--vayo-dark)] border border-[var(--vayo-gray-800)]"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[var(--vayo-white)] mb-1">
                  {benefit.title}
                </h4>
                <p className="text-sm text-[var(--vayo-gray-400)]">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
