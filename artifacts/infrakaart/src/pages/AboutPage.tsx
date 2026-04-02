import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Shield, Target, Globe, Zap, TrendingUp, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";

const team = [
  { name: "Arjun Mehta", role: "CEO & Co-Founder", bg: "Civil Engineering, IIT Bombay · ex-L&T", img: "AM" },
  { name: "Priya Nair", role: "CTO & Co-Founder", bg: "AI/ML, IISc Bangalore · ex-Google DeepMind", img: "PN" },
  { name: "Vikram Singh", role: "CPO", bg: "Product Design, NID · ex-Procore India", img: "VS" },
  { name: "Deepa Reddy", role: "Head of Sales", bg: "B2B SaaS · ex-Salesforce India", img: "DR" },
];

const values = [
  { icon: Target, title: "Precision First", desc: "Every feature we ship reduces real waste on real sites. We measure success in crores saved and days recovered." },
  { icon: Shield, title: "Infrastructure Grade Reliability", desc: "Construction never sleeps. Our platform has 99.9% uptime guarantees because downtime means projects stop." },
  { icon: Globe, title: "India-First, World-Ready", desc: "Built for India's unique construction challenges — informal labor, fragmented supply chains, regulatory complexity." },
  { icon: Zap, title: "Speed as a Feature", desc: "In construction, decisions made in minutes prevent delays of weeks. Our AI delivers insights faster than any analyst." },
];

const milestones = [
  { year: "2025", event: "Infrakaart founded. Core team assembled. ₹50L pre-seed from angel investors." },
  { year: "Q1 2026", event: "MVP launched. First 10 beta sites onboarded. Product-market fit validated." },
  { year: "Q2 2026", event: "Seed round closed. 50 sites live. Worker tracking and AI insights shipped." },
  { year: "Q3 2026", event: "₹2Cr ARR milestone. IoT sensor hardware launched. Series A conversations begin." },
  { year: "2027", event: "200 sites. AI prediction accuracy exceeds 94%. Series A completed." },
  { year: "2028", event: "SEA expansion — Singapore, Vietnam, Malaysia. 500 global sites." },
  { year: "2031", event: "10,000+ sites globally. IPO readiness. ₹500Cr ARR." },
];

const trustSignals = [
  { stat: "500+", label: "Construction sites monitored" },
  { stat: "₹1,440Cr", label: "Budget managed on platform" },
  { stat: "94%", label: "AI prediction accuracy" },
  { stat: "4.9★", label: "Average customer rating" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Infrakaart",
  "description": "Infrakaart is India's leading construction management software company, building AI-powered infrastructure intelligence for India's ₹4.2 trillion construction market.",
  "url": "https://infrakaart.com/about",
  "mainEntity": {
    "@type": "Organization",
    "name": "Infrakaart Technologies Pvt. Ltd.",
    "foundingDate": "2025",
    "foundingLocation": "India",
    "description": "AI-powered construction management software platform"
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] grid-bg text-white overflow-x-hidden">
      <SEOHead
        title="About Infrakaart | India's #1 Construction Intelligence Platform"
        description="Learn about Infrakaart — founded by IIT/IISc engineers and ex-Google, L&T leaders to digitize India's ₹4.2T construction market with AI-powered software."
        canonical="/about"
        keywords="about infrakaart, construction technology company India, construction software founders, infrastructure tech startup India"
        schema={schema}
      />
      <Navbar />
      <div className="pt-20 pb-24">

        {/* Hero */}
        <section className="py-20 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="hazard-stripe h-1 w-24 mb-8" />
              <div className="inline-flex items-center gap-2 border border-[#EAB308]/30 px-3 py-1.5 mb-6 bg-[#EAB308]/5">
                <span className="text-xs text-[#EAB308] uppercase tracking-widest font-mono">Est. 2025 · India</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 max-w-4xl">
                We're building the <span className="text-[#EAB308]">intelligence layer</span> for global infrastructure
              </h1>
              <p className="text-[#A1A1AA] text-xl max-w-3xl leading-relaxed">
                Infrakaart was founded on a single conviction: India builds at the scale of a superpower,
                but manages construction like it's 1985. We're here to change that — one site at a time.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="py-12 border-b border-white/10 bg-[#18181B]/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
              {trustSignals.map(({ stat, label }) => (
                <div key={label} className="bg-[#0A0A0A] p-6 text-center">
                  <div className="text-3xl font-black text-[#EAB308] mb-1">{stat}</div>
                  <div className="text-xs text-[#A1A1AA] uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Story */}
        <section className="py-20 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <div className="text-xs text-[#EAB308] uppercase tracking-widest mb-3 font-mono">The Origin Story</div>
              <h2 className="text-3xl md:text-4xl font-black mb-6">Why we built Infrakaart</h2>
              <div className="space-y-4 text-[#A1A1AA] text-lg leading-relaxed">
                <p>
                  Our CEO Arjun spent 8 years at L&T managing construction projects worth ₹2,000+ crore.
                  Every day, he coordinated hundreds of workers through WhatsApp groups, tracked material
                  deliveries through phone calls, and produced project reports from Excel sheets the night before
                  client meetings.
                </p>
                <p>
                  <span className="text-white font-bold">The waste was staggering.</span> Not because anyone
                  lacked skill or dedication — but because there was no real-time visibility. Decisions were
                  made on yesterday's data. Delays were discovered after they'd already cascaded.
                </p>
                <p>
                  When Arjun met Priya — who was building predictive AI systems at Google DeepMind — the
                  conversation was immediate: <em className="text-[#EAB308]">"What if every site manager could
                  see the future of their project?"</em>
                </p>
                <p>
                  That question became Infrakaart.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-xs text-[#EAB308] uppercase tracking-widest mb-3 font-mono">The Team</div>
            <h2 className="text-3xl font-black mb-8">Built by operators, not observers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {team.map(({ name, role, bg, img }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-white/10 bg-[#18181B] p-5 card-hover"
                >
                  <div className="w-12 h-12 bg-[#EAB308]/10 border border-[#EAB308]/30 flex items-center justify-center mb-4 text-sm font-black text-[#EAB308]">
                    {img}
                  </div>
                  <div className="font-black text-white mb-0.5">{name}</div>
                  <div className="text-xs text-[#EAB308] font-bold mb-2">{role}</div>
                  <div className="text-xs text-[#A1A1AA] leading-relaxed">{bg}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-xs text-[#EAB308] uppercase tracking-widest mb-3 font-mono">Our Values</div>
            <h2 className="text-3xl font-black mb-8">What we stand for</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {values.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="border border-white/10 bg-[#18181B] p-6 card-hover"
                >
                  <Icon size={20} className="text-[#EAB308] mb-3" />
                  <h3 className="font-black text-white mb-2">{title}</h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-20 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-xs text-[#EAB308] uppercase tracking-widest mb-3 font-mono">Company Timeline</div>
            <h2 className="text-3xl font-black mb-8">Our journey</h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-[#EAB308]/20" />
              <div className="space-y-6 pl-12">
                {milestones.map(({ year, event }, i) => (
                  <motion.div
                    key={year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className="relative border border-white/10 bg-[#18181B] p-4"
                  >
                    <div className="absolute -left-8 w-3 h-3 bg-[#EAB308] border-2 border-[#0A0A0A] rounded-full" />
                    <div className="text-xs text-[#EAB308] font-mono font-bold mb-1">{year}</div>
                    <div className="text-sm text-white">{event}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industry Insights / EEAT */}
        <section className="py-20 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-xs text-[#EAB308] uppercase tracking-widest mb-3 font-mono">Industry Data</div>
            <h2 className="text-3xl font-black mb-8">Why construction tech is the opportunity of the decade</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { stat: "₹4.2T", label: "India construction market size", src: "NITI Aayog, 2026" },
                { stat: "67%", label: "Projects exceed budget in India", src: "CII Construction Survey" },
                { stat: "93%", label: "Sites rely on WhatsApp for reporting", src: "Infrakaart Field Research" },
              ].map(({ stat, label, src }) => (
                <div key={label} className="border border-white/10 bg-[#18181B] p-5">
                  <div className="text-3xl font-black text-[#EAB308] mb-1">{stat}</div>
                  <div className="text-sm font-bold text-white mb-1">{label}</div>
                  <div className="text-xs text-[#A1A1AA]">Source: {src}</div>
                </div>
              ))}
            </div>
            <p className="text-[#A1A1AA] max-w-3xl leading-relaxed">
              India's construction sector employs over 51 million workers and is growing at 8% annually.
              Yet digital penetration in construction management remains below 12% — creating a once-in-a-decade
              opportunity for a platform that speaks the language of Indian infrastructure.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="hazard-stripe h-1 w-24 mb-8" />
            <h2 className="text-4xl font-black mb-4">Join us in building the future of construction.</h2>
            <p className="text-[#A1A1AA] mb-8 text-lg max-w-2xl">
              Whether you're a construction company, an investor, or a builder who's tired of running projects on WhatsApp — we'd love to talk.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/dashboard" className="flex items-center gap-2 px-6 py-3 bg-[#EAB308] text-black font-black uppercase tracking-wider hover:bg-[#FACC15] transition-colors yellow-glow">
                See the Platform <ArrowRight size={16} />
              </Link>
              <a href="mailto:hello@infrakaart.com" className="flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-bold uppercase tracking-wider hover:border-[#EAB308] transition-colors">
                Get in Touch
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
