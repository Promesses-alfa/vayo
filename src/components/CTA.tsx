import { ArrowRight, CheckCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="section relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        >
          <source src="/videos/Vid3.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--vayo-accent)]/30 via-[var(--vayo-dark)]/95 to-[var(--vayo-dark)]" />
      </div>
      <div className="absolute inset-0 bg-grid opacity-30 z-[1]" />
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[var(--vayo-accent)]/20 blur-[100px] z-[1]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[var(--vayo-secondary)]/10 blur-[100px] z-[1]" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-[var(--vayo-white)] mb-6"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Ready to Transform Your Agency?
          </h2>
          <p className="text-lg text-[var(--vayo-gray-300)] mb-8 max-w-xl mx-auto">
            Join hundreds of agencies already using VAYO to streamline their operations 
            and grow their business.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {["14-day free trial", "No credit card required", "Cancel anytime"].map(
              (benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-2 text-[var(--vayo-gray-300)]"
                >
                  <CheckCircle className="w-5 h-5 text-[var(--vayo-accent)]" />
                  <span className="text-sm">{benefit}</span>
                </div>
              )
            )}
          </div>

          {/* CTA Form */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="input flex-1"
            />
            <a href="/login" className="btn-primary whitespace-nowrap group">
              Get Started
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <p className="text-xs text-[var(--vayo-gray-500)] mt-4">
            By signing up, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </section>
  );
}
