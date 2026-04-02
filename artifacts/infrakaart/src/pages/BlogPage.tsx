import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Clock, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";

export const blogPosts = [
  {
    slug: "what-is-construction-management-software",
    title: "What Is Construction Management Software? A Complete Guide for 2026",
    excerpt: "Construction management software is a digital platform that helps project managers track workforce, materials, timelines, and costs in real time. In 2026, AI-powered platforms like Infrakaart are setting the new standard.",
    category: "Construction Technology",
    readTime: "8 min read",
    date: "March 28, 2026",
    tags: ["Construction Management", "Software", "India"],
    featured: true,
  },
  {
    slug: "ai-in-construction-complete-guide",
    title: "AI in Construction: How Artificial Intelligence Is Transforming Infrastructure in India",
    excerpt: "AI is solving the biggest problems in Indian construction — from predicting delays before they happen to optimizing workforce deployment across multi-site projects.",
    category: "AI in Construction",
    readTime: "11 min read",
    date: "March 20, 2026",
    tags: ["AI", "Machine Learning", "Construction"],
    featured: true,
  },
  {
    slug: "reduce-construction-project-delays",
    title: "7 Proven Strategies to Reduce Construction Project Delays in India",
    excerpt: "Indian construction projects run 67% over budget and 3x longer than global averages. Here's a data-driven playbook to cut delays using real-time intelligence.",
    category: "Project Management",
    readTime: "9 min read",
    date: "March 14, 2026",
    tags: ["Project Delays", "Strategy", "Best Practices"],
    featured: false,
  },
  {
    slug: "construction-cost-optimization-india",
    title: "Construction Cost Optimization: How AI Can Save Indian Projects ₹1.8L Crore Annually",
    excerpt: "India loses ₹1.8 lakh crore annually to construction inefficiency. Here's how predictive AI and real-time material tracking can reclaim that lost value.",
    category: "Cost Optimization",
    readTime: "10 min read",
    date: "March 8, 2026",
    tags: ["Cost Management", "ROI", "India"],
    featured: false,
  },
];

const categories = ["All", "Construction Technology", "AI in Construction", "Project Management", "Cost Optimization"];

const schema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Infrakaart Construction Technology Blog",
  "description": "Expert insights on construction management software, AI in construction, project delay reduction, and infrastructure technology in India.",
  "url": "https://infrakaart.com/blog",
  "publisher": {
    "@type": "Organization",
    "name": "Infrakaart Technologies Pvt. Ltd."
  }
};

export default function BlogPage() {
  const featured = blogPosts.filter(p => p.featured);
  const rest = blogPosts.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-[#0A0A0A] grid-bg text-white overflow-x-hidden">
      <SEOHead
        title="Construction Technology Blog | Infrakaart"
        description="Expert insights on AI-powered construction management, project delay reduction, workforce tracking, and infrastructure technology in India."
        canonical="/blog"
        keywords="construction technology blog, AI construction India, construction management tips, infrastructure software insights"
        schema={schema}
      />
      <Navbar />
      <div className="pt-20 pb-24">

        {/* Hero */}
        <section className="py-16 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="hazard-stripe h-1 w-24 mb-8" />
              <div className="inline-flex items-center gap-2 border border-[#EAB308]/30 px-3 py-1.5 mb-4 bg-[#EAB308]/5">
                <span className="text-xs text-[#EAB308] uppercase tracking-widest font-mono">Construction Intelligence Hub</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-4">
                The <span className="text-[#EAB308]">Construction Tech</span> Blog
              </h1>
              <p className="text-[#A1A1AA] text-lg max-w-2xl">
                Data-driven insights on AI, workforce management, and construction technology — written by builders for builders.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <div className="border-b border-white/10 bg-[#18181B]/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
            <div className="flex gap-2 overflow-x-auto pb-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors border ${
                    cat === "All"
                      ? "bg-[#EAB308] text-black border-[#EAB308]"
                      : "text-[#A1A1AA] border-white/10 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

          {/* Featured posts */}
          <div className="mb-12">
            <div className="text-xs text-[#EAB308] uppercase tracking-widest font-mono font-bold mb-6">Featured Articles</div>
            <div className="grid md:grid-cols-2 gap-6">
              {featured.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`} className="block group">
                    <div className="border border-white/10 bg-[#18181B] p-6 h-full card-hover group-hover:border-[#EAB308]/40 transition-colors">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs bg-[#EAB308]/10 text-[#EAB308] border border-[#EAB308]/30 px-2 py-0.5 font-bold">
                          {post.category}
                        </span>
                        <span className="text-xs text-[#A1A1AA] flex items-center gap-1">
                          <Clock size={10} /> {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-xl font-black text-white mb-3 group-hover:text-[#EAB308] transition-colors leading-snug">
                        {post.title}
                      </h2>
                      <p className="text-sm text-[#A1A1AA] leading-relaxed mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#A1A1AA]">{post.date}</span>
                        <span className="text-xs text-[#EAB308] flex items-center gap-1 font-bold group-hover:gap-2 transition-all">
                          Read More <ArrowRight size={12} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Other posts */}
          <div>
            <div className="text-xs text-[#EAB308] uppercase tracking-widest font-mono font-bold mb-6">More Articles</div>
            <div className="space-y-4">
              {rest.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/blog/${post.slug}`} className="block group">
                    <div className="border border-white/10 bg-[#18181B] p-5 card-hover group-hover:border-[#EAB308]/30 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs text-[#EAB308] font-bold">{post.category}</span>
                            <span className="text-xs text-[#A1A1AA]">· {post.readTime}</span>
                          </div>
                          <h2 className="font-black text-white group-hover:text-[#EAB308] transition-colors leading-snug mb-1">
                            {post.title}
                          </h2>
                          <p className="text-sm text-[#A1A1AA] line-clamp-2">{post.excerpt}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2 shrink-0">
                          <span className="text-xs text-[#A1A1AA]">{post.date}</span>
                          <div className="flex gap-1">
                            {post.tags.slice(0, 2).map(tag => (
                              <span key={tag} className="text-xs text-[#A1A1AA]/60 bg-white/5 px-1.5 py-0.5 flex items-center gap-1">
                                <Tag size={9} /> {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Internal links footer */}
        <section className="py-12 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-xs text-[#EAB308] uppercase tracking-widest font-mono font-bold mb-4">Explore Infrakaart</div>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/construction-management-software", label: "Construction Management Software" },
                { href: "/workforce-tracking-construction", label: "Workforce Tracking" },
                { href: "/construction-software-india", label: "India Coverage" },
                { href: "/about", label: "About Us" },
                { href: "/dashboard", label: "Live Platform Demo" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="text-sm text-[#A1A1AA] hover:text-[#EAB308] transition-colors border border-white/10 px-3 py-1.5 hover:border-[#EAB308]/30">
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
