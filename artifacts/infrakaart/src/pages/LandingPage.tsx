import { lazy, Suspense, useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight, ChevronDown, Zap, Shield, BarChart2,
  Users, AlertTriangle, CheckCircle, Globe, TrendingUp,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";

const ConstructionScene = lazy(() => import("@/components/ConstructionScene"));

function StatCard({ value, label, suffix = "" }: { value: string; label: string; suffix?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-white/10 bg-[#18181B] p-4 sm:p-6 card-hover"
    >
      <div className="text-2xl sm:text-4xl font-black text-[#EAB308]">{value}<span className="text-lg sm:text-2xl">{suffix}</span></div>
      <div className="mt-1 text-xs text-[#A1A1AA] uppercase tracking-wider leading-tight">{label}</div>
    </motion.div>
  );
}

function FeatureCard({
  icon: Icon, title, desc, delay,
}: { icon: React.ElementType; title: string; desc: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      viewport={{ once: true }}
      className="border border-white/10 bg-[#18181B] p-5 sm:p-6 card-hover group"
    >
      <div className="w-10 h-10 bg-[#EAB308]/10 border border-[#EAB308]/30 flex items-center justify-center mb-4 group-hover:bg-[#EAB308]/20 transition-colors">
        <Icon size={20} className="text-[#EAB308]" />
      </div>
      <h3 className="text-base sm:text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-[#A1A1AA] leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function LiveWidget() {
  const [count, setCount] = useState(412);
  useEffect(() => {
    const t = setInterval(() => {
      setCount(c => c + Math.floor(Math.random() * 3 - 1));
    }, 3000);
    return () => clearInterval(t);
  }, []);

  const bars = [55, 65, 70, 60, 75, 80, 72, 85, 88, 94];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="border border-white/20 bg-[#18181B] rounded-sm overflow-hidden w-full"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 border-b border-white/10">
        <span className="text-xs text-[#A1A1AA] font-mono tracking-widest">CMD-CTR-01</span>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 bg-green-400 rounded-full pulse-dot" />
          <span className="text-xs text-green-400 uppercase tracking-widest">Active</span>
        </div>
      </div>

      <div className="px-3 sm:px-4 py-2.5 sm:py-3 border-b border-white/10">
        <div className="text-xs text-[#A1A1AA] uppercase tracking-widest mb-1">Sector 4 - Alpha Build</div>
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm font-bold text-white">LIVE EXECUTION</span>
          <span className="px-2 py-0.5 text-xs bg-[#EAB308]/20 text-[#EAB308] border border-[#EAB308]/30 uppercase font-bold whitespace-nowrap">
            ⚡ Syncing
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 border-b border-white/10">
        <div className="p-2.5 sm:p-3 border-r border-white/10">
          <div className="text-xs text-[#A1A1AA] uppercase mb-1">Active Crew</div>
          <div className="text-lg sm:text-xl font-black text-white">{count} <span className="text-xs text-green-400">+12</span></div>
        </div>
        <div className="p-2.5 sm:p-3 border-r border-white/10">
          <div className="text-xs text-[#A1A1AA] uppercase mb-1">Efficiency</div>
          <div className="text-lg sm:text-xl font-black text-white">94% <span className="text-xs text-green-400">+2.4%</span></div>
        </div>
        <div className="p-2.5 sm:p-3 bg-[#EAB308]/10">
          <div className="text-xs text-[#EAB308] uppercase mb-1">Alerts</div>
          <div className="text-lg sm:text-xl font-black text-[#EAB308]">2 <span className="text-xs text-[#A1A1AA]">Review</span></div>
        </div>
      </div>

      {/* Chart */}
      <div className="p-2.5 sm:p-3 border-b border-white/10">
        <div className="text-xs text-[#A1A1AA] uppercase tracking-widest mb-2">Execution Velocity</div>
        <div className="flex items-end gap-1 h-10 sm:h-12">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className={`flex-1 ${i === bars.length - 1 ? "bg-[#EAB308]" : "bg-white/20"}`}
            />
          ))}
        </div>
      </div>

      {/* Activity */}
      <div className="p-2.5 sm:p-3">
        <div className="text-xs text-[#EAB308] uppercase tracking-widest mb-2">Live Activity Log</div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 border border-white/10 px-2 py-1.5 bg-white/5">
            <Users size={12} className="text-[#A1A1AA] shrink-0" />
            <div className="min-w-0">
              <div className="text-xs font-bold text-white">Shift C Deployed to Zone B</div>
              <div className="text-xs text-[#A1A1AA]">2 mins ago</div>
            </div>
          </div>
          <div className="flex items-center justify-between border border-[#EAB308]/30 px-2 py-1.5 bg-[#EAB308]/5">
            <div className="flex items-center gap-2 min-w-0">
              <AlertTriangle size={12} className="text-[#EAB308] shrink-0" />
              <div className="min-w-0">
                <div className="text-xs font-bold text-white">Material Delay Detected</div>
                <div className="text-xs text-[#A1A1AA]">14 mins ago • Steel</div>
              </div>
            </div>
            <span className="text-xs bg-[#EAB308] text-black px-1.5 py-0.5 font-bold shrink-0 ml-2">Resolve</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const organizationSchema = {
  "@type": "Organization",
  "@id": "https://infrakaart.com/#organization",
  "name": "Infrakaart Technologies Pvt. Ltd.",
  "url": "https://infrakaart.com",
  "description": "Infrakaart is India's #1 AI-powered construction management platform.",
  "foundingDate": "2024",
  "foundingLocation": { "@type": "Place", "name": "India" },
  "areaServed": "IN",
};

const websiteSchema = {
  "@type": "WebSite",
  "@id": "https://infrakaart.com/#website",
  "url": "https://infrakaart.com",
  "name": "Infrakaart",
  "description": "India's #1 AI-powered construction management software",
  "inLanguage": "en-IN",
};

const softwareSchema = {
  "@type": "SoftwareApplication",
  "@id": "https://infrakaart.com/#software",
  "name": "Infrakaart Construction Management Software",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, iOS, Android",
  "description": "AI-powered construction management software for India.",
  "url": "https://infrakaart.com",
};

export default function LandingPage() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] grid-bg overflow-x-hidden">
      <SEOHead
        title="Infrakaart — #1 AI-Powered Construction Management Software India"
        description="Infrakaart gives construction companies real-time command over workers, materials, and projects. AI-powered delay prediction, IoT sensors, workforce tracking. 500+ sites. India's leading platform."
        canonical="/"
        keywords="construction management software India, AI construction platform, best construction software India"
        schemas={[organizationSchema, websiteSchema, softwareSchema]}
        geoRegion="IN"
        geoPlacename="India"
        geoPosition="20.5937;78.9629"
        ogType="website"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16">
        {/* 3D Scene background — desktop only */}
        <div className="absolute inset-0 top-16 opacity-50 hidden lg:block">
          <Suspense fallback={<div className="w-full h-full bg-[#0A0A0A]" />}>
            <ConstructionScene />
          </Suspense>
        </div>

        {/* Mobile gradient fallback */}
        <div className="absolute inset-0 top-16 lg:hidden bg-gradient-to-br from-[#EAB308]/5 via-transparent to-transparent" />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left column: text content */}
            <motion.div
              style={{ opacity: heroOpacity, y: heroY }}
              className="flex flex-col gap-5 sm:gap-6"
            >
              <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-3 py-1.5 self-start">
                <span className="w-1.5 h-1.5 bg-[#EAB308]" />
                <span className="text-xs text-[#A1A1AA] uppercase tracking-widest font-medium">
                  The New Standard for Infrastructure
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight">
                <span className="text-white block">CONTROL</span>
                <span className="text-white block">EVERY INCH OF</span>
                <span className="text-[#EAB308] block yellow-glow-text">CONSTRUCTION.</span>
              </h1>

              <p className="text-[#A1A1AA] text-base sm:text-lg max-w-lg leading-relaxed">
                Infrakaart gives you real-time command over workers, materials, and project execution. Total situational awareness.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 px-5 sm:px-6 py-3 bg-[#EAB308] text-black font-bold uppercase tracking-wider hover:bg-[#FACC15] transition-colors yellow-glow text-sm sm:text-base"
                >
                  OPEN PLATFORM <ArrowRight size={16} />
                </Link>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 px-5 sm:px-6 py-3 border border-white/30 text-white font-bold uppercase tracking-wider hover:border-white/60 transition-colors text-sm sm:text-base"
                >
                  VIEW PLATFORM
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
                {["Real-time data", "AI-powered insights", "India's #1 platform"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <CheckCircle size={12} className="text-[#EAB308]" />
                    <span className="text-xs text-[#A1A1AA]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right column: live widget */}
            <div className="w-full lg:flex lg:justify-end">
              <div className="w-full lg:max-w-sm">
                <LiveWidget />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <ChevronDown size={20} className="text-[#A1A1AA]" />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-16 border-y border-white/10 bg-[#18181B]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            <StatCard value="₹4.2T" label="India construction market" />
            <StatCard value="32" suffix="%" label="Avg productivity loss" />
            <StatCard value="500" suffix="+" label="Sites monitored" />
            <StatCard value="94" suffix="%" label="Client retention" />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section id="problem" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <div className="text-xs text-[#EAB308] uppercase tracking-widest mb-3">The Problem</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white max-w-2xl">
              Construction is still running on <span className="text-[#EAB308]">clipboards.</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                icon: AlertTriangle,
                stat: "67%",
                title: "Projects Run Over Budget",
                desc: "No real-time cost tracking means overruns are discovered weeks after they start.",
              },
              {
                icon: Users,
                stat: "40%",
                title: "Workforce is Idle",
                desc: "Without visibility into workforce distribution, half the site is always waiting.",
              },
              {
                icon: BarChart2,
                stat: "3.2x",
                title: "Delays vs. Global Average",
                desc: "Indian projects take 3x longer due to zero predictive intelligence.",
              },
            ].map(({ icon: Icon, stat, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border border-red-500/20 bg-red-500/5 p-5 sm:p-6"
              >
                <div className="text-2xl sm:text-3xl font-black text-red-400 mb-3">{stat}</div>
                <div className="flex items-center gap-2 mb-2">
                  <Icon size={16} className="text-red-400" />
                  <h3 className="font-bold text-white text-sm sm:text-base">{title}</h3>
                </div>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="py-16 sm:py-24 bg-[#18181B]/30 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 sm:mb-16 text-center"
          >
            <div className="text-xs text-[#EAB308] uppercase tracking-widest mb-3">The Solution</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              Command-grade infrastructure intelligence
            </h2>
            <p className="text-[#A1A1AA] max-w-2xl mx-auto text-sm sm:text-base">
              Infrakaart layers IoT sensors, AI prediction, and workforce tracking into one unified control system.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <FeatureCard icon={Zap} title="Real-Time Worker Tracking" desc="GPS-tagged workers with zone heatmaps. See who's where, doing what, right now." delay={0} />
            <FeatureCard icon={BarChart2} title="Predictive Cost Engine" desc="AI models that forecast overruns before they happen, not after the damage is done." delay={0.1} />
            <FeatureCard icon={Shield} title="Material Intelligence" desc="Smart inventory with predictive restocking and delivery coordination." delay={0.2} />
            <FeatureCard icon={Globe} title="Multi-Site Dashboard" desc="Control 50+ sites from one command screen. Drill down in seconds." delay={0.3} />
            <FeatureCard icon={TrendingUp} title="AI Insights Engine" desc="Pattern-trained models that flag risk, recommend reallocation, and predict delays." delay={0.4} />
            <FeatureCard icon={Users} title="Workforce Management" desc="Shift planning, productivity scoring, and compliance tracking for every worker." delay={0.5} />
          </div>
        </div>
      </section>

      {/* Features — platform layers */}
      <section id="features" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-xs text-[#EAB308] uppercase tracking-widest mb-3">Platform Layers</div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                Six layers of total site intelligence
              </h2>
              <div className="space-y-3">
                {[
                  { n: "01", title: "IoT Sensor Network", desc: "Environmental, structural, and logistics sensors" },
                  { n: "02", title: "Worker Biometrics", desc: "Attendance, fatigue, and zone compliance tracking" },
                  { n: "03", title: "Material Logistics", desc: "Supply chain, inventory, and delivery management" },
                  { n: "04", title: "AI Prediction Engine", desc: "Delay forecasting and risk detection" },
                  { n: "05", title: "Command Dashboard", desc: "Real-time unified control interface" },
                  { n: "06", title: "Compliance & Reporting", desc: "Automated regulatory and audit reports" },
                ].map((layer, i) => (
                  <motion.div
                    key={layer.n}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 border-b border-white/10 pb-3 last:border-0"
                  >
                    <span className="text-[#EAB308] font-mono text-sm font-bold mt-0.5">{layer.n}</span>
                    <div>
                      <div className="text-white font-bold text-sm">{layer.title}</div>
                      <div className="text-[#A1A1AA] text-xs mt-0.5">{layer.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border border-white/10 bg-[#18181B] p-5 sm:p-8"
            >
              <div className="text-xs text-[#EAB308] uppercase tracking-widest mb-4">Live Site Metrics</div>
              <div className="space-y-4">
                {[
                  { label: "Worker Productivity", value: 94, color: "#22c55e" },
                  { label: "Project Completion Rate", value: 78, color: "#EAB308" },
                  { label: "Material Utilization", value: 88, color: "#3b82f6" },
                  { label: "Safety Compliance", value: 97, color: "#a855f7" },
                ].map((metric) => (
                  <div key={metric.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#A1A1AA] text-xs sm:text-sm">{metric.label}</span>
                      <span className="font-bold text-white">{metric.value}%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${metric.value}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="h-full"
                        style={{ backgroundColor: metric.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-3 border border-[#EAB308]/30 bg-[#EAB308]/5">
                <div className="text-xs text-[#EAB308] font-bold mb-1">AI ALERT</div>
                <div className="text-xs text-white">Reallocate 5 workers from Zone A to Zone C to prevent predicted 2-day delay.</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className="py-16 sm:py-24 bg-[#18181B]/30 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-xs text-[#EAB308] uppercase tracking-widest mb-3">Vision</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 max-w-4xl mx-auto leading-tight">
              We're building the <span className="text-[#EAB308]">operating system</span> for global infrastructure.
            </h2>
            <p className="text-[#A1A1AA] text-base sm:text-lg max-w-2xl mx-auto mb-10 sm:mb-12">
              Starting with India's ₹4.2T construction market, then expanding to every building, road, and bridge being built on Earth.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 text-left max-w-3xl mx-auto">
              {[
                { year: "2026", milestone: "Launch India • 50 sites • ₹2Cr ARR" },
                { year: "2028", milestone: "500 sites • SEA expansion • Series A" },
                { year: "2031", milestone: "Global platform • 10,000+ sites" },
              ].map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="border border-white/10 bg-[#0A0A0A] p-4"
                >
                  <div className="text-[#EAB308] font-mono font-bold text-sm mb-1">{item.year}</div>
                  <div className="text-white text-sm">{item.milestone}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="hazard-stripe h-1 w-32 mx-auto mb-8" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              Ready to take <span className="text-[#EAB308]">control?</span>
            </h2>
            <p className="text-[#A1A1AA] mb-8 text-base sm:text-lg">Join 500+ construction companies already on the platform.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#EAB308] text-black font-black uppercase tracking-wider text-base sm:text-lg hover:bg-[#FACC15] transition-colors yellow-glow"
              >
                OPEN PLATFORM <ArrowRight size={20} />
              </Link>
              <Link
                href="/investors"
                className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-white/30 text-white font-bold uppercase tracking-wider text-base sm:text-lg hover:border-[#EAB308] transition-colors"
              >
                INVESTOR DECK
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <span className="font-black tracking-tight">INFRA<span className="text-[#EAB308]">KAART</span> <span className="w-1.5 h-1.5 bg-[#EAB308] inline-block align-middle" /></span>
          <span className="text-[#A1A1AA] text-xs sm:text-sm">© 2026 Infrakaart Technologies Pvt. Ltd. · India</span>
        </div>
      </footer>
    </div>
  );
}

