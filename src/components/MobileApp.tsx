import { 
  Smartphone, 
  Wifi, 
  WifiOff, 
  Calendar, 
  FileText, 
  Bell,
  MapPin,
  Download
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Full Tour Schedule",
    description: "Access complete itineraries, venue details, and show information",
  },
  {
    icon: FileText,
    title: "Document Access",
    description: "Download contracts, riders, tickets, and boarding passes instantly",
  },
  {
    icon: WifiOff,
    title: "Offline Mode",
    description: "Everything syncs automatically—works without internet connection",
  },
  {
    icon: Bell,
    title: "Real-time Alerts",
    description: "Get instant notifications for schedule changes and updates",
  },
  {
    icon: MapPin,
    title: "Navigation",
    description: "One-tap directions to venues, hotels, and meeting points",
  },
  {
    icon: Smartphone,
    title: "Push Updates",
    description: "Changes from the agency appear instantly on all devices",
  },
];

export default function MobileApp() {
  return (
    <section id="mobile" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--vayo-dark)] via-[var(--vayo-black)] to-[var(--vayo-dark)]" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--vayo-accent)]/10 blur-[120px]" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Phone Mockup */}
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto w-[280px] md:w-[320px]">
              {/* Phone Frame */}
              <div className="relative bg-[var(--vayo-gray-900)] rounded-[3rem] p-3 shadow-2xl border border-[var(--vayo-gray-700)]">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[var(--vayo-gray-900)] rounded-b-2xl z-10" />
                
                {/* Screen */}
                <div className="relative bg-[var(--vayo-black)] rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between px-6 py-3 bg-[var(--vayo-dark)]">
                    <span className="text-xs text-white font-medium">9:41</span>
                    <div className="flex items-center gap-1">
                      <Wifi className="w-3.5 h-3.5 text-white" />
                      <div className="w-6 h-3 rounded-sm border border-white/50 p-0.5">
                        <div className="w-full h-full bg-[var(--vayo-accent)] rounded-[1px]" />
                      </div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="p-4">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className="text-[var(--vayo-gray-400)] text-xs">Welcome back,</p>
                        <p className="text-white font-semibold">DJ Storm</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-accent" />
                    </div>

                    {/* Next Show Card */}
                    <div className="bg-gradient-to-br from-[var(--vayo-accent)] to-[var(--vayo-accent-dark)] rounded-2xl p-4 mb-4">
                      <p className="text-white/80 text-xs mb-1">NEXT SHOW</p>
                      <p className="text-white font-bold text-lg mb-2">Paradiso Amsterdam</p>
                      <div className="flex items-center gap-4 text-white/90 text-xs">
                        <span>Jan 24, 2026</span>
                        <span>•</span>
                        <span>23:00</span>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {["Schedule", "Docs", "Flights", "Hotels"].map((item) => (
                        <div key={item} className="bg-[var(--vayo-gray-900)] rounded-xl p-3 text-center">
                          <div className="w-8 h-8 rounded-full bg-[var(--vayo-gray-800)] mx-auto mb-1" />
                          <p className="text-[var(--vayo-gray-400)] text-[10px]">{item}</p>
                        </div>
                      ))}
                    </div>

                    {/* Upcoming */}
                    <p className="text-white font-medium text-sm mb-3">Upcoming Shows</p>
                    <div className="space-y-2">
                      {[
                        { venue: "O2 Arena, London", date: "Jan 28" },
                        { venue: "Berghain, Berlin", date: "Feb 2" },
                      ].map((show) => (
                        <div key={show.venue} className="flex items-center gap-3 bg-[var(--vayo-gray-900)] rounded-xl p-3">
                          <div className="w-10 h-10 rounded-lg bg-[var(--vayo-gray-800)]" />
                          <div className="flex-1">
                            <p className="text-white text-xs font-medium">{show.venue}</p>
                            <p className="text-[var(--vayo-gray-500)] text-[10px]">{show.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements - Static */}
              <div className="absolute -top-4 -right-8 bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-700)] rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[var(--vayo-secondary)] flex items-center justify-center">
                    <Bell className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-medium">Flight Update</p>
                    <p className="text-[var(--vayo-gray-500)] text-[10px]">Gate changed to B24</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-8 bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-700)] rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[var(--vayo-accent)] flex items-center justify-center">
                    <FileText className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-medium">New Rider</p>
                    <p className="text-[var(--vayo-gray-500)] text-[10px]">Available for download</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="badge mb-4">Mobile App</span>
            <h2
              className="text-3xl md:text-5xl font-bold text-[var(--vayo-white)] mb-6"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Your Shows,{" "}
              <span className="text-gradient">On The Go</span>
            </h2>
            <p className="text-[var(--vayo-gray-400)] text-lg mb-8">
              Artists, tour managers, and crew can access everything they need, anywhere in the world. 
              Real-time sync keeps everyone on the same page.
            </p>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-800)] flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-[var(--vayo-accent)]" />
                  </div>
                  <div>
                    <h4 className="text-[var(--vayo-white)] font-medium text-sm mb-1">{feature.title}</h4>
                    <p className="text-[var(--vayo-gray-500)] text-xs">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#appstore"
                className="flex items-center gap-3 px-5 py-3 bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-700)] rounded-xl hover:border-[var(--vayo-gray-600)] transition-colors"
              >
                <Download className="w-6 h-6 text-[var(--vayo-white)]" />
                <div>
                  <p className="text-[var(--vayo-gray-400)] text-[10px]">Download on the</p>
                  <p className="text-[var(--vayo-white)] font-semibold text-sm">App Store</p>
                </div>
              </a>
              <a
                href="#playstore"
                className="flex items-center gap-3 px-5 py-3 bg-[var(--vayo-gray-900)] border border-[var(--vayo-gray-700)] rounded-xl hover:border-[var(--vayo-gray-600)] transition-colors"
              >
                <Download className="w-6 h-6 text-[var(--vayo-white)]" />
                <div>
                  <p className="text-[var(--vayo-gray-400)] text-[10px]">Get it on</p>
                  <p className="text-[var(--vayo-white)] font-semibold text-sm">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
