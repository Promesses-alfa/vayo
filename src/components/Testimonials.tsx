import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "VAYO transformed how we operate. We went from juggling spreadsheets to having everything in one beautiful dashboard. Our booking confirmations are now sent in under 5 minutes.",
    author: "Sarah van der Berg",
    role: "Director",
    company: "Nightlife Agency Amsterdam",
    avatar: "SB",
  },
  {
    quote:
      "The tour logistics feature alone saved us countless hours. We manage 50+ artists and multiple international tours — VAYO makes it feel effortless.",
    author: "Marcus Rodriguez",
    role: "Senior Agent",
    company: "Global Talent Partners",
    avatar: "MR",
  },
  {
    quote:
      "Finally, a booking platform that understands the electronic music industry. The customizable workflows and instant contract generation are game-changers.",
    author: "Lisa Krause",
    role: "Founder",
    company: "Techno Collective Berlin",
    avatar: "LK",
  },
  {
    quote:
      "We switched from three different tools to just VAYO. The financial reporting and forecasting features give us insights we never had before.",
    author: "James Chen",
    role: "Operations Manager",
    company: "Pacific Artists Group",
    avatar: "JC",
  },
  {
    quote:
      "The mobile app keeps our tour managers connected wherever they are. Real-time itinerary updates, document access — it's all there when we need it.",
    author: "Emma Williams",
    role: "Tour Coordinator",
    company: "Festival Circuit UK",
    avatar: "EW",
  },
  {
    quote:
      "VAYO's support team is incredible. They actually listen to feedback and implement features we request. It feels like a true partnership.",
    author: "David Okonkwo",
    role: "CEO",
    company: "Afrobeats International",
    avatar: "DO",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src="/videos/Vid2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[var(--vayo-dark)]/90" />
      </div>
      <div className="absolute inset-0 bg-dots opacity-30 z-[1]" />
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="badge mb-4">Testimonials</span>
          <h2
            className="text-3xl md:text-5xl font-bold text-[var(--vayo-white)] mb-6"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Loved by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-[var(--vayo-gray-400)] max-w-xl mx-auto">
            See why top booking agencies around the world choose VAYO
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="testimonial-card"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[var(--vayo-accent)] text-[var(--vayo-accent)]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[var(--vayo-gray-300)] text-sm leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-[var(--vayo-white)] font-medium text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-[var(--vayo-gray-500)] text-xs">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
