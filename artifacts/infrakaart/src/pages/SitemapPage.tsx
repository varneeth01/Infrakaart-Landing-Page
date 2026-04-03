import { Link } from "wouter";
import { motion } from "framer-motion";
import { ExternalLink, FileText, MapPin, LayoutDashboard, BookOpen, Building, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";

type SiteLink = { href: string; label: string; desc?: string };

type SiteSection = {
  icon: React.ElementType;
  title: string;
  links: SiteLink[];
};

const sections: SiteSection[] = [
  {
    icon: LayoutDashboard,
    title: "Core Pages",
    links: [
      { href: "/", label: "Home", desc: "AI-powered construction management platform" },
      { href: "/about", label: "About Us", desc: "Our mission and founding story" },
      { href: "/investors", label: "Investors", desc: "Seed deck, market data, revenue projections" },
      { href: "/login", label: "Sign In", desc: "Access the command platform" },
    ],
  },
  {
    icon: Building,
    title: "Product",
    links: [
      { href: "/construction-management-software", label: "Construction Management Software", desc: "Core platform overview" },
      { href: "/workforce-tracking-construction", label: "Workforce Tracking", desc: "GPS-based worker tracking system" },
      { href: "/dashboard", label: "Live Platform Demo", desc: "Try the command center dashboard" },
    ],
  },
  {
    icon: BookOpen,
    title: "Blog & Resources",
    links: [
      { href: "/blog", label: "Blog", desc: "Construction intelligence articles" },
      { href: "/blog/what-is-construction-management-software", label: "What Is Construction Management Software?", desc: "A complete guide for 2026" },
      { href: "/blog/ai-in-construction-complete-guide", label: "AI in Construction: Complete Guide", desc: "How AI is reshaping infrastructure" },
      { href: "/blog/reduce-construction-project-delays", label: "How to Reduce Project Delays", desc: "Practical strategies and tools" },
      { href: "/blog/construction-cost-optimization-india", label: "Cost Optimization in Indian Construction", desc: "India-specific data and insights" },
    ],
  },
  {
    icon: Globe,
    title: "India — National",
    links: [
      { href: "/construction-software-india", label: "Construction Software — India", desc: "Nationwide coverage" },
      { href: "/construction-software-andhra-pradesh", label: "Construction Software — Andhra Pradesh", desc: "AP region" },
    ],
  },
  {
    icon: MapPin,
    title: "City Pages",
    links: [
      { href: "/construction-software-hyderabad", label: "Hyderabad", desc: "#1 construction software in Hyderabad" },
      { href: "/construction-software-mumbai", label: "Mumbai", desc: "Construction management in Mumbai" },
      { href: "/construction-software-delhi", label: "Delhi", desc: "Construction management in Delhi" },
      { href: "/construction-software-bengaluru", label: "Bengaluru", desc: "Construction tech in Bengaluru" },
      { href: "/construction-software-bangalore", label: "Bangalore", desc: "Construction software in Bangalore" },
      { href: "/construction-software-chennai", label: "Chennai", desc: "Construction management in Chennai" },
      { href: "/construction-software-pune", label: "Pune", desc: "Construction software in Pune" },
      { href: "/construction-software-nellore", label: "Nellore", desc: "Construction software in Nellore" },
      { href: "/construction-software-vijayawada", label: "Vijayawada", desc: "Construction software in Vijayawada" },
      { href: "/construction-software-visakhapatnam", label: "Visakhapatnam", desc: "Construction software in Vizag" },
    ],
  },
  {
    icon: FileText,
    title: "Technical",
    links: [
      { href: "/sitemap.xml", label: "XML Sitemap", desc: "Machine-readable sitemap for search engines" },
      { href: "/robots.txt", label: "robots.txt", desc: "Search engine crawl directives" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] grid-bg overflow-x-hidden text-white">
      <SEOHead
        title="Sitemap | Infrakaart"
        description="Complete sitemap of Infrakaart — India's #1 AI-powered construction management platform. All pages, resources, and city coverage."
        canonical="/sitemap"
      />
      <Navbar />

      <div className="pt-24 sm:pt-28 pb-16 sm:pb-24 max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="hazard-stripe h-1 w-16 mb-6" />
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">
            Site<span className="text-[#EAB308]">map</span>
          </h1>
          <p className="text-[#A1A1AA] text-sm sm:text-base mb-10">
            All pages on <span className="text-white font-medium">infrakaart.com</span>
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {sections.map((section, si) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: si * 0.07, duration: 0.35 }}
                  className="border border-white/10 bg-[#18181B] p-5"
                >
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                    <div className="w-7 h-7 bg-[#EAB308]/10 border border-[#EAB308]/30 flex items-center justify-center shrink-0">
                      <Icon size={14} className="text-[#EAB308]" />
                    </div>
                    <h2 className="font-black text-white text-sm uppercase tracking-widest">{section.title}</h2>
                  </div>
                  <ul className="space-y-2.5">
                    {section.links.map((link) => {
                      const isExternal = link.href.endsWith(".xml") || link.href.endsWith(".txt");
                      return (
                        <li key={link.href}>
                          {isExternal ? (
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex items-start gap-2 text-sm hover:text-[#EAB308] transition-colors text-[#A1A1AA]"
                            >
                              <ExternalLink size={12} className="mt-0.5 shrink-0 text-[#EAB308]/50 group-hover:text-[#EAB308]" />
                              <span>
                                <span className="text-white group-hover:text-[#EAB308] font-medium">{link.label}</span>
                                {link.desc && <span className="block text-xs text-[#A1A1AA] mt-0.5">{link.desc}</span>}
                              </span>
                            </a>
                          ) : (
                            <Link
                              href={link.href}
                              className="group flex items-start gap-2 text-sm hover:text-[#EAB308] transition-colors"
                            >
                              <span className="w-1 h-1 bg-[#EAB308]/50 rounded-full mt-2 shrink-0 group-hover:bg-[#EAB308]" />
                              <span>
                                <span className="text-white group-hover:text-[#EAB308] font-medium">{link.label}</span>
                                {link.desc && <span className="block text-xs text-[#A1A1AA] mt-0.5">{link.desc}</span>}
                              </span>
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
