import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, CheckCircle, Zap, Shield, Globe, TrendingUp, Users, BarChart2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";

const features = [
  { icon: Zap, title: "Real-Time Workforce Tracking", desc: "GPS-tagged workers, zone heatmaps, and shift management. See every worker on every site, right now." },
  { icon: TrendingUp, title: "AI Delay Prediction", desc: "94% accurate delay forecasting 72+ hours in advance, giving you time to fix problems before they cascade." },
  { icon: Shield, title: "Material Intelligence", desc: "Smart inventory tracking, automated restocking alerts, and delivery coordination across your supply chain." },
  { icon: Globe, title: "Multi-Site Command Center", desc: "Manage 50+ sites from one dashboard. Drill into any site in seconds." },
  { icon: BarChart2, title: "Budget & Cost Analytics", desc: "Real-time burn rate tracking with predictive overrun alerts — stop surprises before they hit." },
  { icon: Users, title: "Compliance & Reporting", desc: "Automated government filings, safety reports, and audit trails. Built for India's regulatory environment." },
];

const faqs = [
  {
    q: "What is construction management software?",
    a: "Construction management software is a platform that centralizes workforce tracking, project timelines, material logistics, and cost management — giving project managers complete real-time visibility into site operations."
  },
  {
    q: "What is the best construction management software in India?",
    a: "Infrakaart is India's leading construction management software, built specifically for Indian infrastructure projects with AI-powered delay prediction, IoT sensor support, and compliance automation for Indian regulations."
  },
  {
    q: "How much does construction management software cost in India?",
    a: "Infrakaart plans start at ₹2L per site per year. Enterprise plans for 10+ sites are available with custom pricing. Most clients see 3.2x ROI within 12 months."
  },
  {
    q: "Does construction management software work for small contractors?",
    a: "Yes. Infrakaart is designed for Indian construction companies of all sizes — from single-site contractors to enterprises managing hundreds of projects simultaneously."
  },
  {
    q: "Can construction management software work offline?",
    a: "Infrakaart's mobile app includes offline mode for remote sites with poor connectivity. Data syncs automatically when connectivity is restored."
  },
];

const productSchema = {
  "@type": "Product",
  "name": "Infrakaart Construction Management Software",
  "description": "India's #1 AI-powered construction management software with real-time workforce tracking, project monitoring, IoT sensor integration, and cost optimization.",
  "brand": { "@type": "Brand", "name": "Infrakaart", "url": "https://infrakaart.com" },
  "url": "https://infrakaart.com/construction-management-software",
  "offers": {
    "@type": "Offer",
    "price": "200000",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "priceValidUntil": "2027-12-31",
    "seller": { "@type": "Organization", "name": "Infrakaart Technologies Pvt. Ltd." }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "500",
    "bestRating": "5",
    "worstRating": "1"
  }
};

const faqSchema = {
  "@type": "FAQPage",
  "mainEntity": faqs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a }
  }))
};

const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://infrakaart.com" },
    { "@type": "ListItem", "position": 2, "name": "Construction Management Software", "item": "https://infrakaart.com/construction-management-software" }
  ]
};

export default function SoftwarePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] grid-bg text-white overflow-x-hidden">
      <SEOHead
        title="Construction Management Software India | Best AI-Powered Platform"
        description="Infrakaart is India's #1 construction management software. AI-powered workforce tracking, project delay prediction, and cost optimization. 500+ sites. Starts at ₹2L/site/yr."
        canonical="/construction-management-software"
        keywords="construction management software India, best construction software India, AI construction management, project management software construction India, infrastructure software, construction ERP India, construction project tracking"
        schemas={[productSchema, faqSchema, breadcrumbSchema]}
        geoRegion="IN"
        geoPlacename="India"
      />
      <Navbar />
      <div className="pt-20 pb-24">

        {/* Hero */}
        <section className="py-20 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-[#A1A1AA] mb-8">
              <Link href="/" className="hover:text-[#EAB308] transition-colors">Home</Link>
              <ChevronRight size={12} />
              <span className="text-[#EAB308]">Construction Management Software</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="hazard-stripe h-1 w-24 mb-8" />
              <div className="inline-flex items-center gap-2 border border-[#EAB308]/30 px-3 py-1.5 mb-6 bg-[#EAB308]/5">
                <span className="text-xs text-[#EAB308] uppercase tracking-widest font-mono">India's #1 Platform · 500+ Sites</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 max-w-4xl">
                The Best <span className="text-[#EAB308]">Construction Management Software</span> for India
              </h1>
              <p className="text-[#A1A1AA] text-xl max-w-3xl leading-relaxed mb-8">
                Infrakaart gives construction companies real-time command over workers, materials, and project execution.
                AI-powered. India-first. Built to replace WhatsApp and Excel on your sites.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="/dashboard" className="flex items-center gap-2 px-6 py-3 bg-[#EAB308] text-black font-black uppercase tracking-wider hover:bg-[#FACC15] transition-colors yellow-glow">
                  See It Live <ArrowRight size={16} />
                </Link>
                <Link href="/investors" className="flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-bold uppercase tracking-wider hover:border-[#EAB308] transition-colors">
                  Platform Overview
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {["AI-powered delay prediction", "500+ sites live", "94% accuracy", "₹2L/site/yr from"].map(item => (
                  <div key={item} className="flex items-center gap-1.5 text-sm text-[#A1A1AA]">
                    <CheckCircle size={13} className="text-[#EAB308]" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 border-b border-white/10 bg-[#18181B]/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
              {[
                { stat: "500+", label: "Active construction sites" },
                { stat: "32%", label: "Reduction in project delays" },
                { stat: "₹49L", label: "Avg savings per project" },
                { stat: "3.2x", label: "ROI within 12 months" },
              ].map(({ stat, label }) => (
                <div key={label} className="bg-[#0A0A0A] p-6 text-center">
                  <div className="text-3xl font-black text-[#EAB308] mb-1">{stat}</div>
                  <div className="text-xs text-[#A1A1AA] uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What is CMS */}
        <section className="py-20 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-black mb-6">What is Construction Management Software?</h2>
              <p className="text-[#A1A1AA] text-lg leading-relaxed mb-4">
                Construction management software is a digital platform that replaces fragmented, manual project tracking
                with a unified command system. Instead of WhatsApp groups, Excel sheets, and phone calls — you get
                real-time data from every corner of your site delivered to one screen.
              </p>
              <p className="text-[#A1A1AA] text-lg leading-relaxed mb-4">
                Modern platforms like Infrakaart go beyond basic tracking. They use AI to predict delays before they
                happen, IoT sensors to monitor structural conditions in real time, and machine learning to optimize
                workforce deployment — creating a complete intelligence layer for your construction operations.
              </p>
              <div className="border border-[#EAB308]/30 bg-[#EAB308]/5 p-5 mt-6">
                <div className="text-sm font-bold text-[#EAB308] mb-2">The Infrakaart Advantage</div>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  Built specifically for Indian infrastructure — supporting local regulatory compliance, offline operation
                  for remote sites, and integration with India's construction supply chain — Infrakaart is the only
                  platform that truly understands how Indian construction works.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-xs text-[#EAB308] uppercase tracking-widest mb-3 font-mono">Platform Features</div>
            <h2 className="text-3xl font-black mb-8">Everything you need to run construction at scale</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="border border-white/10 bg-[#18181B] p-5 card-hover"
                >
                  <Icon size={20} className="text-[#EAB308] mb-3" />
                  <h3 className="font-black text-white mb-2 text-sm">{title}</h3>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-xs text-[#EAB308] uppercase tracking-widest mb-3 font-mono">FAQ</div>
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

        {/* Internal Links */}
        <section className="py-12 border-b border-white/10 bg-[#18181B]/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-xs text-[#EAB308] uppercase tracking-widest font-mono font-bold mb-4">Explore More</div>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/workforce-tracking-construction", label: "Workforce Tracking" },
                { href: "/construction-software-india", label: "India Coverage" },
                { href: "/construction-software-hyderabad", label: "Hyderabad" },
                { href: "/construction-software-mumbai", label: "Mumbai" },
                { href: "/about", label: "About Us" },
                { href: "/blog", label: "Construction Tech Blog" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="text-sm text-[#A1A1AA] hover:text-[#EAB308] border border-white/10 px-3 py-1.5 hover:border-[#EAB308]/30 transition-colors">
                  {label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <div className="hazard-stripe h-1 w-24 mx-auto mb-8" />
            <h2 className="text-4xl font-black mb-4">Ready to modernize your construction operations?</h2>
            <p className="text-[#A1A1AA] mb-8 text-lg">Join 500+ construction sites already running on Infrakaart.</p>
            <Link href="/dashboard" className="inline-flex items-center gap-2 px-8 py-4 bg-[#EAB308] text-black font-black uppercase tracking-wider text-lg hover:bg-[#FACC15] transition-colors yellow-glow">
              Open the Platform <ArrowRight size={20} />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
