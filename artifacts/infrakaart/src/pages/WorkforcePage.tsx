import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, CheckCircle, Users, MapPin, Shield, Activity, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";

const faqs = [
  {
    q: "What is workforce tracking in construction?",
    a: "Construction workforce tracking is the use of GPS and biometric technology to monitor worker locations, attendance, productivity, and zone compliance in real time — giving site managers complete visibility into their labor force."
  },
  {
    q: "How does real-time workforce tracking reduce construction costs?",
    a: "Real-time tracking eliminates idle time by revealing underutilized zones, enables dynamic reallocation of workers to bottlenecks, and reduces compliance overhead by automating attendance and shift records."
  },
  {
    q: "Is workforce tracking software legal in India?",
    a: "Yes. Construction workforce tracking in India is fully legal when workers are notified and consent is obtained as part of employment agreements. Infrakaart's system is compliant with Indian labor and privacy laws."
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Workforce Tracking Software for Construction India",
  "description": "Real-time GPS workforce tracking for construction sites in India. Track workers, optimize productivity, and ensure compliance with Infrakaart.",
  "url": "https://infrakaart.com/workforce-tracking-construction",
  "mainEntity": {
    "@type": "FAQPage",
    "mainEntity": faqs.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": { "@type": "Answer", "text": a }
    }))
  }
};

export default function WorkforceTrackingPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] grid-bg text-white overflow-x-hidden">
      <SEOHead
        title="Construction Workforce Tracking Software India | Real-Time GPS Monitoring"
        description="Track construction workers in real time with GPS and biometrics. Reduce idle time by 28%, automate attendance, and optimize site productivity with Infrakaart."
        canonical="/workforce-tracking-construction"
        keywords="construction workforce tracking India, GPS worker tracking construction, construction labor management software, workforce management India"
        schema={schema}
      />
      <Navbar />
      <div className="pt-20 pb-24">

        <section className="py-20 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <nav className="flex items-center gap-2 text-xs text-[#A1A1AA] mb-8">
              <Link href="/" className="hover:text-[#EAB308] transition-colors">Home</Link>
              <ChevronRight size={12} />
              <Link href="/construction-management-software" className="hover:text-[#EAB308] transition-colors">Construction Software</Link>
              <ChevronRight size={12} />
              <span className="text-[#EAB308]">Workforce Tracking</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="hazard-stripe h-1 w-24 mb-8" />
              <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 max-w-4xl">
                Real-Time <span className="text-[#EAB308]">Workforce Tracking</span> for Construction India
              </h1>
              <p className="text-[#A1A1AA] text-xl max-w-3xl leading-relaxed mb-8">
                Track every worker on every site in real time. GPS zone heatmaps, biometric attendance, productivity scoring, and shift management — all from one command screen.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="/dashboard" className="flex items-center gap-2 px-6 py-3 bg-[#EAB308] text-black font-black uppercase tracking-wider hover:bg-[#FACC15] transition-colors yellow-glow">
                  See Live Demo <ArrowRight size={16} />
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {["GPS real-time tracking", "Biometric attendance", "Productivity scoring", "Offline capable"].map(item => (
                  <div key={item} className="flex items-center gap-1.5 text-sm text-[#A1A1AA]">
                    <CheckCircle size={13} className="text-[#EAB308]" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-black mb-8">What is construction workforce tracking?</h2>
            <p className="text-[#A1A1AA] text-lg leading-relaxed max-w-3xl mb-4">
              Construction workforce tracking is the real-time monitoring of worker locations, attendance, and productivity using GPS, biometrics, and zone sensors. It replaces paper-based attendance sheets and manual headcounts with automated, always-on visibility.
            </p>
            <p className="text-[#A1A1AA] text-lg leading-relaxed max-w-3xl mb-8">
              In India's construction industry, where 40% of workforce is estimated to be idle at any given time, real-time tracking is not a luxury — it's a competitive necessity.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: MapPin, title: "GPS Zone Tracking", desc: "See every worker's location in real time, mapped to zones, with historical movement playback." },
                { icon: Shield, title: "Biometric Attendance", desc: "Eliminate ghost workers and buddy-punching with fingerprint or face-based attendance verification." },
                { icon: Activity, title: "Productivity Scoring", desc: "AI-generated productivity scores for every worker based on activity, zone engagement, and output." },
                { icon: Users, title: "Shift Management", desc: "Plan and deploy shifts dynamically, responding to site conditions in real time." },
                { icon: Clock, title: "Overtime Tracking", desc: "Automated overtime calculation and labor law compliance across all sites." },
                { icon: CheckCircle, title: "Safety Zone Compliance", desc: "Instant alerts when workers enter restricted zones or safety violations are detected." },
              ].map(({ icon: Icon, title, desc }, i) => (
                <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }} className="border border-white/10 bg-[#18181B] p-5 card-hover">
                  <Icon size={20} className="text-[#EAB308] mb-3" />
                  <h3 className="font-black text-white mb-1 text-sm">{title}</h3>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-black mb-8">Frequently Asked Questions</h2>
            <div className="max-w-3xl space-y-3">
              {faqs.map(({ q, a }) => (
                <div key={q} className="border border-white/10 bg-[#18181B] p-5">
                  <h3 className="font-black text-white mb-2 text-sm">{q}</h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 border-b border-white/10 bg-[#18181B]/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-xs text-[#EAB308] uppercase tracking-widest font-mono font-bold mb-4">Related Pages</div>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/construction-management-software", label: "Construction Management Software" },
                { href: "/construction-software-india", label: "India Coverage" },
                { href: "/about", label: "About Infrakaart" },
                { href: "/blog/ai-in-construction-complete-guide", label: "AI in Construction Guide" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="text-sm text-[#A1A1AA] hover:text-[#EAB308] border border-white/10 px-3 py-1.5 hover:border-[#EAB308]/30 transition-colors">
                  {label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
