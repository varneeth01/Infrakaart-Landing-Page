import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell,
} from "recharts";
import { ArrowRight, TrendingUp, Globe, Zap, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";

const revenueData = [
  { year: "2026", arr: 2, sites: 50 },
  { year: "2027", arr: 12, sites: 200 },
  { year: "2028", arr: 45, sites: 500 },
  { year: "2029", arr: 120, sites: 1500 },
  { year: "2030", arr: 280, sites: 4000 },
  { year: "2031", arr: 500, sites: 10000 },
];

const marketData = [
  { name: "India", value: 4200, color: "#EAB308" },
  { name: "SEA", value: 2800, color: "#FACC15" },
  { name: "Middle East", value: 1900, color: "#A16207" },
  { name: "Africa", value: 1200, color: "#78350F" },
];

const competitorData = [
  { feature: "Real-time GPS", infrakaart: true, competitor1: false, competitor2: false },
  { feature: "AI Predictions", infrakaart: true, competitor1: false, competitor2: false },
  { feature: "IoT Sensors", infrakaart: true, competitor1: true, competitor2: false },
  { feature: "India-first", infrakaart: true, competitor1: false, competitor2: false },
  { feature: "Mobile App", infrakaart: true, competitor1: true, competitor2: true },
  { feature: "Offline Mode", infrakaart: true, competitor1: false, competitor2: false },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="text-xs text-[#EAB308] uppercase tracking-widest font-bold mb-3 font-mono">{children}</div>
  );
}

function MetricBox({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="border border-white/10 bg-[#18181B] p-4 sm:p-6 card-hover"
    >
      <div className="text-2xl sm:text-3xl font-black text-[#EAB308] mb-1">{value}</div>
      <div className="text-sm font-bold text-white">{label}</div>
      {sub && <div className="text-xs text-[#A1A1AA] mt-1">{sub}</div>}
    </motion.div>
  );
}

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] grid-bg text-white overflow-x-hidden">
      <Navbar />
      <div className="pt-16 sm:pt-20 pb-16 sm:pb-24">

        {/* Hero */}
        <section className="py-12 sm:py-20 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="hazard-stripe h-1 w-24 mx-auto mb-8" />
              <div className="inline-flex items-center gap-2 border border-[#EAB308]/30 px-3 py-1.5 mb-6 bg-[#EAB308]/5">
                <span className="text-xs text-[#EAB308] uppercase tracking-widest font-mono">Investor Deck — Series Seed</span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-black leading-tight mb-6">
                The <span className="text-[#EAB308]">Bloomberg Terminal</span><br />for Construction
              </h1>
              <p className="text-[#A1A1AA] text-base sm:text-xl max-w-3xl mx-auto">
                Infrakaart is building the world's first end-to-end construction intelligence platform.
                Starting with India's ₹4.2 trillion market. Going global.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Metrics */}
        <section className="py-12 sm:py-16 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionLabel>Key Metrics</SectionLabel>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              <MetricBox value="₹4.2T" label="TAM — India Construction" sub="Growing 8% YoY" />
              <MetricBox value="₹340Cr" label="SAM — Tech-Addressable" sub="By 2028" />
              <MetricBox value="₹2Cr" label="Target ARR Year 1" sub="50 sites × ₹4L/yr" />
              <MetricBox value="67%" label="Construction Inefficiency" sub="Avg project overrun" />
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="py-12 sm:py-16 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 sm:mb-8 max-w-2xl">
              India builds at scale. It manages like it's <span className="text-red-400">1985.</span>
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { stat: "93%", label: "Sites use WhatsApp as their primary reporting tool" },
                { stat: "₹1.8L Cr", label: "Lost annually to inefficiency in Indian construction" },
                { stat: "0", label: "Unified platforms serving Indian construction at scale today" },
              ].map(({ stat, label }) => (
                <div key={label} className="border border-red-500/20 bg-red-500/5 p-5 sm:p-6">
                  <div className="text-3xl sm:text-4xl font-black text-red-400 mb-2">{stat}</div>
                  <div className="text-[#A1A1AA] text-sm leading-relaxed">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Layers */}
        <section className="py-12 sm:py-16 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionLabel>Product — 6 Platform Layers</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-black mb-6 sm:mb-8">Infrakaart is a stack, not a tool</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { n: "L1", icon: Zap, title: "IoT Sensor Layer", desc: "Structural, environmental, and logistics sensors across the site" },
                { n: "L2", icon: Shield, title: "Identity & Biometrics", desc: "Worker presence, fatigue, compliance, and zone tracking" },
                { n: "L3", icon: Globe, title: "Material Intelligence", desc: "Smart inventory, supply chain, and delivery coordination" },
                { n: "L4", icon: TrendingUp, title: "AI Prediction Engine", desc: "Delay forecasting, risk scoring, and reallocation recommendations" },
                { n: "L5", icon: BarChart, title: "Command Dashboard", desc: "Real-time unified control interface with 3D site visualization" },
                { n: "L6", icon: Shield, title: "Compliance & Audit", desc: "Automated government reporting and regulatory filing" },
              ].map(({ n, icon: Icon, title, desc }, i) => (
                <motion.div
                  key={n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="border border-white/10 bg-[#18181B] p-4 sm:p-5 card-hover"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[#EAB308] font-mono font-black text-sm">{n}</span>
                    <Icon size={16} className="text-[#EAB308]" />
                  </div>
                  <h3 className="font-bold text-white mb-1 text-sm">{title}</h3>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Revenue Projection */}
        <section className="py-12 sm:py-16 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionLabel>Revenue Projection</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-black mb-6 sm:mb-8">Path to ₹500Cr ARR</h2>
            <div className="border border-white/10 bg-[#18181B] p-4 sm:p-6">
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={revenueData} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                  <XAxis dataKey="year" tick={{ fill: "#A1A1AA", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#A1A1AA", fontSize: 11 }} axisLine={false} tickLine={false} width={35} />
                  <Tooltip
                    contentStyle={{ background: "#18181B", border: "1px solid #EAB308", borderRadius: 0, color: "#ffffff" }}
                    labelStyle={{ color: "#EAB308", fontWeight: "bold" }}
                    itemStyle={{ color: "#ffffff" }}
                    formatter={(v: number) => [`₹${v}Cr`, "ARR"]}
                  />
                  <Bar dataKey="arr" fill="#EAB308" radius={0} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* Market Opportunity */}
        <section className="py-12 sm:py-16 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionLabel>Market Opportunity</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-black mb-6 sm:mb-8">₹10.1T addressable market by 2030</h2>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="border border-white/10 bg-[#18181B] p-4 sm:p-6">
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie data={marketData} cx="50%" cy="50%" innerRadius={55} outerRadius={90} dataKey="value" paddingAngle={2}>
                      {marketData.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ background: "#18181B", border: "1px solid #EAB308", borderRadius: 0, color: "#ffffff" }}
                      formatter={(v: number) => [`₹${v}B`, "Market Size"]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-3">
                {marketData.map((m) => (
                  <div key={m.name} className="flex items-center justify-between border border-white/10 px-4 py-3 bg-[#18181B]">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 shrink-0" style={{ backgroundColor: m.color }} />
                      <span className="text-white font-bold">{m.name}</span>
                    </div>
                    <span className="text-[#EAB308] font-black font-mono">₹{m.value}B</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Business Model */}
        <section className="py-12 sm:py-16 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionLabel>Business Model</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-black mb-6 sm:mb-8">Three revenue streams</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  label: "SaaS Platform",
                  price: "₹2–8L / site / year",
                  pct: "70%",
                  desc: "Recurring subscription by site size and feature tier",
                },
                {
                  label: "IoT Hardware",
                  price: "₹50K–₹3L / site",
                  pct: "20%",
                  desc: "One-time sensor deployment + maintenance contracts",
                },
                {
                  label: "Data & Insights",
                  price: "Enterprise pricing",
                  pct: "10%",
                  desc: "Aggregated market intelligence sold to banks and insurers",
                },
              ].map((item) => (
                <div key={item.label} className="border border-white/10 bg-[#18181B] p-5 sm:p-6 card-hover">
                  <div className="text-3xl sm:text-4xl font-black text-[#EAB308] mb-2">{item.pct}</div>
                  <h3 className="font-bold text-white mb-1">{item.label}</h3>
                  <div className="text-sm text-[#EAB308] font-mono mb-2">{item.price}</div>
                  <p className="text-xs text-[#A1A1AA]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive Advantage — scrollable table on mobile */}
        <section className="py-12 sm:py-16 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionLabel>Competitive Advantage</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-black mb-6 sm:mb-8">No one else is doing this</h2>
            <div className="border border-white/10 bg-[#18181B] overflow-x-auto">
              <table className="w-full text-sm min-w-[400px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-3 sm:p-4 text-[#A1A1AA] font-medium">Feature</th>
                    <th className="p-3 sm:p-4 text-[#EAB308] font-black">Infrakaart</th>
                    <th className="p-3 sm:p-4 text-[#A1A1AA] font-medium">Procore</th>
                    <th className="p-3 sm:p-4 text-[#A1A1AA] font-medium">Buildertrend</th>
                  </tr>
                </thead>
                <tbody>
                  {competitorData.map((row) => (
                    <tr key={row.feature} className="border-b border-white/5 hover:bg-white/5">
                      <td className="p-3 sm:p-4 text-white">{row.feature}</td>
                      <td className="p-3 sm:p-4 text-center">
                        <span className="text-green-400 font-bold">✓</span>
                      </td>
                      <td className="p-3 sm:p-4 text-center">
                        <span className={row.competitor1 ? "text-green-400" : "text-red-400"}>
                          {row.competitor1 ? "✓" : "✗"}
                        </span>
                      </td>
                      <td className="p-3 sm:p-4 text-center">
                        <span className={row.competitor2 ? "text-green-400" : "text-red-400"}>
                          {row.competitor2 ? "✓" : "✗"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="py-12 sm:py-16 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionLabel>Roadmap</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-black mb-6 sm:mb-8">5-year execution plan</h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-[#EAB308]/30" />
              <div className="space-y-6 pl-10 sm:pl-12">
                {[
                  { year: "Q1 2026", title: "MVP Launch", items: ["50 beta sites", "Core dashboard", "Worker tracking v1"] },
                  { year: "Q3 2026", title: "Commercial Launch", items: ["₹2Cr ARR target", "IoT sensor integration", "Seed round close"] },
                  { year: "Q2 2027", title: "Scale India", items: ["200 sites", "AI prediction v1", "Series A"] },
                  { year: "Q4 2028", title: "SEA Expansion", items: ["Singapore, Vietnam", "500 global sites", "₹45Cr ARR"] },
                  { year: "2031", title: "Global Platform", items: ["10,000+ sites", "IPO readiness", "₹500Cr ARR"] },
                ].map((phase, i) => (
                  <motion.div
                    key={phase.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute -left-6 sm:-left-8 w-4 h-4 bg-[#EAB308] border-2 border-[#0A0A0A] rounded-full" />
                    <div className="border border-white/10 bg-[#18181B] p-4 sm:p-5">
                      <div className="text-xs text-[#EAB308] font-mono font-bold mb-1">{phase.year}</div>
                      <div className="font-black text-white text-base sm:text-lg mb-2">{phase.title}</div>
                      <div className="flex flex-wrap gap-2">
                        {phase.items.map((item) => (
                          <span key={item} className="text-xs bg-white/10 text-[#A1A1AA] px-2 py-1">{item}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="hazard-stripe h-1 w-24 mx-auto mb-8" />
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-4">
                Partner with us to build the future of <span className="text-[#EAB308]">infrastructure.</span>
              </h2>
              <p className="text-[#A1A1AA] mb-8 text-base sm:text-lg">Seed round open · ₹5Cr target · Lead investor slots available</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="mailto:invest@infrakaart.com"
                  className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#EAB308] text-black font-black uppercase tracking-wider text-base sm:text-lg hover:bg-[#FACC15] transition-colors yellow-glow"
                >
                  CONTACT US <ArrowRight size={20} />
                </a>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-white/30 text-white font-bold uppercase tracking-wider text-base sm:text-lg hover:border-[#EAB308] transition-colors"
                >
                  VIEW DEMO
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

