import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, Clock, Tag, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import { blogPosts } from "./BlogPage";

const articles: Record<string, {
  title: string;
  description: string;
  keywords: string;
  content: React.ReactNode;
}> = {
  "what-is-construction-management-software": {
    title: "What Is Construction Management Software? A Complete Guide for 2026",
    description: "Construction management software helps project managers track workforce, materials, timelines, and costs in real time. Learn how AI-powered platforms are changing India's ₹4.2T construction market.",
    keywords: "what is construction management software, construction project management software India, best construction management software 2026",
    content: (
      <div className="prose prose-invert prose-lg max-w-none">
        <h2 className="text-2xl font-black text-white mt-8 mb-4">What is Construction Management Software?</h2>
        <p className="text-[#A1A1AA] leading-relaxed mb-4">
          Construction management software is a digital platform that centralizes the planning, execution, and monitoring
          of construction projects. It replaces fragmented communication (WhatsApp groups, Excel sheets, phone calls)
          with a unified command system that gives every stakeholder real-time visibility into project health.
        </p>
        <p className="text-[#A1A1AA] leading-relaxed mb-6">
          In 2026, the best construction management software goes further — incorporating AI prediction, IoT sensor
          integration, and workforce biometrics to create a true "digital twin" of every site.
        </p>

        <div className="border border-[#EAB308]/30 bg-[#EAB308]/5 p-5 mb-8">
          <div className="text-xs text-[#EAB308] uppercase tracking-widest font-mono font-bold mb-2">Quick Answer</div>
          <p className="text-white font-medium leading-relaxed text-sm">
            Construction management software is a cloud-based platform that tracks workforce, materials, project
            timelines, and costs in real time — enabling faster decisions, fewer delays, and lower budget overruns.
          </p>
        </div>

        <h2 className="text-2xl font-black text-white mt-8 mb-4">Key Features of Construction Management Software</h2>
        <ul className="space-y-2 mb-6">
          {[
            "Real-time GPS workforce tracking and zone monitoring",
            "AI-powered project delay prediction and risk scoring",
            "Material inventory management and supply chain coordination",
            "Multi-site command dashboard for portfolio oversight",
            "Automated compliance reports and regulatory filing",
            "IoT sensor integration for structural and environmental data",
            "Mobile app for on-site foremen and supervisors",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-[#A1A1AA]">
              <ChevronRight size={16} className="text-[#EAB308] mt-0.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-black text-white mt-8 mb-4">Why Indian Construction Needs This Software</h2>
        <p className="text-[#A1A1AA] leading-relaxed mb-4">
          India's construction market is worth ₹4.2 trillion and employs 51 million workers — yet 93% of sites
          still use WhatsApp as their primary management tool. The result: ₹1.8 lakh crore lost annually to
          inefficiency, with the average project running 67% over budget.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[
            { stat: "93%", label: "Sites use WhatsApp for management" },
            { stat: "67%", label: "Projects exceed budget" },
            { stat: "3.2x", label: "Delay vs global average" },
          ].map(({ stat, label }) => (
            <div key={label} className="border border-red-500/20 bg-red-500/5 p-4 text-center">
              <div className="text-2xl font-black text-red-400 mb-1">{stat}</div>
              <div className="text-xs text-[#A1A1AA]">{label}</div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-black text-white mt-8 mb-4">How AI-Powered Construction Software Works</h2>
        <p className="text-[#A1A1AA] leading-relaxed mb-4">
          Modern platforms like Infrakaart use machine learning models trained on site data to predict
          delays 72+ hours before they occur. The AI analyzes patterns in workforce productivity, material
          delivery timelines, weather data, and historical project performance to generate risk scores for
          every active project.
        </p>
        <p className="text-[#A1A1AA] leading-relaxed mb-4">
          When a delay is predicted, the system automatically recommends corrective actions — such as
          reallocating workers from low-activity zones or rescheduling high-skill tasks to peak productivity windows.
        </p>

        <h2 className="text-2xl font-black text-white mt-8 mb-4">ROI of Construction Management Software</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            { metric: "32%", label: "Reduction in project delays", color: "#22c55e" },
            { metric: "₹49L", label: "Average savings per project", color: "#EAB308" },
            { metric: "94%", label: "AI prediction accuracy", color: "#3b82f6" },
            { metric: "3.2x", label: "ROI within 12 months", color: "#a855f7" },
          ].map(({ metric, label, color }) => (
            <div key={label} className="border border-white/10 bg-[#18181B] p-4 flex items-center gap-4">
              <div className="text-3xl font-black" style={{ color }}>{metric}</div>
              <div className="text-sm text-[#A1A1AA]">{label}</div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-black text-white mt-8 mb-4">FAQ: Construction Management Software</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              q: "How much does construction management software cost in India?",
              a: "Construction management software in India typically costs ₹2L to ₹8L per site per year, depending on project size and features. Infrakaart starts at ₹2L/site/year for core functionality."
            },
            {
              q: "What is the best construction management software for India?",
              a: "Infrakaart is India's leading construction management software, purpose-built for the Indian market with support for local regulatory compliance, IoT sensors, and offline-capable mobile apps for remote sites."
            },
            {
              q: "Can small construction companies use this software?",
              a: "Yes. Infrakaart serves construction companies of all sizes, from single-site contractors to multi-project enterprises managing 100+ sites simultaneously."
            },
          ].map(({ q, a }) => (
            <div key={q} className="border border-white/10 bg-[#18181B] p-5">
              <div className="font-bold text-white mb-2 text-sm">{q}</div>
              <div className="text-sm text-[#A1A1AA] leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  "ai-in-construction-complete-guide": {
    title: "AI in Construction: How Artificial Intelligence Is Transforming Infrastructure in India",
    description: "AI is solving India's biggest construction challenges — predicting delays, optimizing workforce deployment, and reducing project overruns by up to 32%. Learn how in this complete guide.",
    keywords: "AI in construction India, artificial intelligence construction management, machine learning construction, AI construction software",
    content: (
      <div className="prose prose-invert prose-lg max-w-none">
        <h2 className="text-2xl font-black text-white mt-8 mb-4">How does AI help construction?</h2>
        <div className="border border-[#EAB308]/30 bg-[#EAB308]/5 p-5 mb-8">
          <div className="text-xs text-[#EAB308] uppercase tracking-widest font-mono font-bold mb-2">Quick Answer</div>
          <p className="text-white font-medium leading-relaxed text-sm">
            AI helps construction by predicting project delays 72+ hours before they occur, optimizing workforce
            deployment in real time, flagging cost overruns before they happen, and automating compliance
            reporting — saving Indian projects an average of ₹49L per site per year.
          </p>
        </div>

        <p className="text-[#A1A1AA] leading-relaxed mb-4">
          Artificial intelligence is rapidly transforming India's construction sector. By applying machine learning
          to site data — from worker GPS locations to material delivery timelines — AI platforms can now predict
          project outcomes with 94% accuracy weeks before problems become visible to human managers.
        </p>

        <h2 className="text-2xl font-black text-white mt-8 mb-4">6 Ways AI Is Changing Construction in India</h2>
        {[
          { n: "01", title: "Delay Prediction", desc: "ML models analyze historical project data, current workforce productivity, supply chain signals, and weather patterns to predict delays 72+ hours before they materialize." },
          { n: "02", title: "Workforce Optimization", desc: "AI identifies productivity patterns across shifts and zones, recommending optimal reallocation of workers to prevent bottlenecks and maximize throughput." },
          { n: "03", title: "Cost Forecasting", desc: "Predictive models flag budget overruns weeks before they occur, allowing project managers to course-correct before costs spiral." },
          { n: "04", title: "Safety Risk Detection", desc: "Computer vision and sensor fusion identify unsafe conditions — fatigue signals, zone violations, equipment proximity — in real time." },
          { n: "05", title: "Material Intelligence", desc: "AI optimizes inventory levels and delivery scheduling, preventing costly stockouts and avoiding expensive emergency procurement." },
          { n: "06", title: "Automated Reporting", desc: "Natural language generation creates project status reports, regulatory filings, and client presentations automatically from site data." },
        ].map(({ n, title, desc }) => (
          <div key={n} className="border border-white/10 bg-[#18181B] p-5 mb-3">
            <div className="flex gap-3">
              <span className="text-[#EAB308] font-mono font-black text-sm mt-0.5">{n}</span>
              <div>
                <div className="font-bold text-white mb-1">{title}</div>
                <div className="text-sm text-[#A1A1AA] leading-relaxed">{desc}</div>
              </div>
            </div>
          </div>
        ))}

        <h2 className="text-2xl font-black text-white mt-8 mb-4">FAQ: AI in Construction</h2>
        <div className="space-y-4 mb-8">
          {[
            {
              q: "What is the best AI software for construction management?",
              a: "Infrakaart is India's leading AI-powered construction management platform, offering delay prediction, workforce optimization, and IoT sensor integration purpose-built for Indian projects."
            },
            {
              q: "How accurate is AI in predicting construction delays?",
              a: "Infrakaart's AI models achieve 94% prediction accuracy with a 72-hour advance warning window, giving project managers enough time to intervene before delays cascade."
            },
            {
              q: "Is AI construction software affordable for Indian companies?",
              a: "Yes. Infrakaart's AI features are included in standard subscriptions starting at ₹2L/site/year, with demonstrated ROI of 3.2x within 12 months."
            },
          ].map(({ q, a }) => (
            <div key={q} className="border border-white/10 bg-[#18181B] p-5">
              <div className="font-bold text-white mb-2 text-sm">{q}</div>
              <div className="text-sm text-[#A1A1AA] leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  "reduce-construction-project-delays": {
    title: "7 Proven Strategies to Reduce Construction Project Delays in India",
    description: "Indian construction projects run 3x longer than global averages. Here are 7 data-driven strategies — including AI-powered monitoring — to cut delays and recover timelines.",
    keywords: "reduce construction delays India, construction project delay solutions, construction timeline management, project delay prevention",
    content: (
      <div className="prose prose-invert prose-lg max-w-none">
        <h2 className="text-2xl font-black text-white mt-8 mb-4">Why do construction projects get delayed in India?</h2>
        <div className="border border-[#EAB308]/30 bg-[#EAB308]/5 p-5 mb-8">
          <div className="text-xs text-[#EAB308] uppercase tracking-widest font-mono font-bold mb-2">Quick Answer</div>
          <p className="text-white font-medium leading-relaxed text-sm">
            Indian construction projects face delays primarily due to poor real-time visibility into workforce,
            material supply chain disruptions, inadequate planning tools, and lack of predictive analytics —
            resulting in decisions made on yesterday's data instead of today's reality.
          </p>
        </div>
        <p className="text-[#A1A1AA] leading-relaxed mb-6">
          India's construction sector loses ₹1.8 lakh crore annually to delays and inefficiency. The average project runs 67% over budget and takes 3.2x longer than global peers. But this is not inevitable — it's a data and visibility problem.
        </p>

        <h2 className="text-2xl font-black text-white mt-8 mb-4">7 Strategies to Eliminate Construction Delays</h2>
        {[
          { n: "1", title: "Deploy Real-Time Workforce Tracking", desc: "GPS-based worker monitoring gives you instant visibility into zone occupancy and workforce distribution. Sites using real-time tracking see 28% fewer productivity gaps." },
          { n: "2", title: "Implement Predictive AI Monitoring", desc: "AI models can predict delays 72+ hours in advance. Early warning enables proactive intervention before delays cascade into project-wide setbacks." },
          { n: "3", title: "Digitize Material Supply Chain", desc: "Material delivery delays account for 40% of construction delays. Digital tracking of procurement, delivery, and inventory eliminates blind spots in your supply chain." },
          { n: "4", title: "Centralize Communication on One Platform", desc: "Replacing WhatsApp groups with a unified command dashboard eliminates information silos and ensures every decision maker works from the same real-time data." },
          { n: "5", title: "Shift Planning with Productivity Analytics", desc: "Data shows construction productivity peaks between 10:00–12:00 and 14:00–16:00. Rescheduling high-skill tasks to peak windows can recover 15% of lost productivity." },
          { n: "6", title: "Automated Risk Scoring", desc: "Score every active workstream for delay risk daily. Prioritize management attention on high-risk areas before they become critical path items." },
          { n: "7", title: "Daily Automated Status Reports", desc: "Replace manual reporting (which is always backward-looking) with automated dashboards that reflect today's site reality, enabling same-day decisions." },
        ].map(({ n, title, desc }) => (
          <div key={n} className="border border-white/10 bg-[#18181B] p-5 mb-3">
            <div className="flex gap-3">
              <span className="text-[#EAB308] font-mono font-black text-sm mt-0.5">{n}.</span>
              <div>
                <div className="font-bold text-white mb-1">{title}</div>
                <div className="text-sm text-[#A1A1AA] leading-relaxed">{desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
  },

  "construction-cost-optimization-india": {
    title: "Construction Cost Optimization: How AI Can Save Indian Projects ₹1.8L Crore Annually",
    description: "India loses ₹1.8 lakh crore annually to construction inefficiency. Learn how AI-powered cost monitoring, predictive analytics, and real-time budget tracking can reclaim that value.",
    keywords: "construction cost optimization India, reduce construction costs, construction budget management, AI cost control construction",
    content: (
      <div className="prose prose-invert prose-lg max-w-none">
        <h2 className="text-2xl font-black text-white mt-8 mb-4">How can AI reduce construction costs?</h2>
        <div className="border border-[#EAB308]/30 bg-[#EAB308]/5 p-5 mb-8">
          <div className="text-xs text-[#EAB308] uppercase tracking-widest font-mono font-bold mb-2">Quick Answer</div>
          <p className="text-white font-medium leading-relaxed text-sm">
            AI reduces construction costs by predicting overruns before they occur (average warning: 72 hours),
            optimizing workforce allocation to eliminate idle time, reducing material waste through predictive
            inventory management, and automating compliance to avoid regulatory penalties.
          </p>
        </div>

        <p className="text-[#A1A1AA] leading-relaxed mb-6">
          India's ₹4.2 trillion construction market wastes an estimated ₹1.8 lakh crore annually — not because of
          incompetent workers or bad materials, but because of invisible inefficiency. When you can't see a problem
          in real time, you can't fix it before it costs you.
        </p>

        <h2 className="text-2xl font-black text-white mt-8 mb-4">Where Construction Costs Leak</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            { pct: "40%", label: "Material wastage and procurement errors" },
            { pct: "25%", label: "Workforce idle time and misallocation" },
            { pct: "20%", label: "Delay-driven cost escalation" },
            { pct: "15%", label: "Compliance failures and penalties" },
          ].map(({ pct, label }) => (
            <div key={label} className="border border-red-500/20 bg-red-500/5 p-4">
              <div className="text-2xl font-black text-red-400 mb-1">{pct}</div>
              <div className="text-sm text-[#A1A1AA]">{label}</div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-black text-white mt-8 mb-4">AI-Powered Cost Optimization Framework</h2>
        <p className="text-[#A1A1AA] leading-relaxed mb-4">
          Infrakaart's cost intelligence layer works across four optimization dimensions:
        </p>
        {[
          { title: "Real-Time Budget Tracking", desc: "Live burn rate vs. completion percentage. Instant alert when cost-to-completion exceeds approved budget." },
          { title: "Predictive Overrun Detection", desc: "AI models flag budget risk 30+ days before overrun materializes, giving procurement teams time to renegotiate." },
          { title: "Material Optimization", desc: "Demand forecasting prevents emergency procurement (which costs 30–40% premium) and reduces wastage by 22%." },
          { title: "Workforce Cost Control", desc: "Productivity analytics identify idle workers and overstaffed zones, optimizing daily deployment to minimize cost per output." },
        ].map(({ title, desc }) => (
          <div key={title} className="border border-white/10 bg-[#18181B] p-5 mb-3">
            <div className="font-bold text-white mb-1">{title}</div>
            <div className="text-sm text-[#A1A1AA] leading-relaxed">{desc}</div>
          </div>
        ))}
      </div>
    ),
  },
};

export default function BlogArticlePage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const post = blogPosts.find(p => p.slug === slug);
  const article = articles[slug];

  if (!post || !article) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl font-black text-[#EAB308] mb-4">404</div>
          <div className="text-[#A1A1AA] mb-4">Article not found</div>
          <Link href="/blog" className="text-[#EAB308] hover:underline">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  const related = blogPosts.filter(p => p.slug !== slug).slice(0, 2);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "datePublished": post.date,
    "author": { "@type": "Organization", "name": "Infrakaart" },
    "publisher": {
      "@type": "Organization",
      "name": "Infrakaart Technologies Pvt. Ltd.",
      "logo": { "@type": "ImageObject", "url": "https://infrakaart.com/favicon.svg" }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://infrakaart.com/blog/${slug}` },
    "keywords": article.keywords,
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] grid-bg text-white overflow-x-hidden">
      <SEOHead
        title={article.title}
        description={article.description}
        canonical={`/blog/${slug}`}
        keywords={article.keywords}
        ogType="article"
        schema={schema}
      />
      <Navbar />
      <div className="pt-20 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#A1A1AA] mb-8">
            <Link href="/" className="hover:text-[#EAB308] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/blog" className="hover:text-[#EAB308] transition-colors">Blog</Link>
            <ChevronRight size={12} />
            <span className="text-[#EAB308]">{post.category}</span>
          </nav>

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="hazard-stripe h-1 w-16 mb-6" />
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs bg-[#EAB308]/10 text-[#EAB308] border border-[#EAB308]/30 px-2 py-0.5 font-bold">
                {post.category}
              </span>
              <span className="text-xs text-[#A1A1AA] flex items-center gap-1">
                <Clock size={10} /> {post.readTime}
              </span>
              <span className="text-xs text-[#A1A1AA]">{post.date}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
              {article.title}
            </h1>
            <p className="text-[#A1A1AA] text-lg leading-relaxed mb-8">{post.excerpt}</p>
            <div className="border-t border-white/10 pt-4 mb-8 flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="text-xs text-[#A1A1AA] bg-white/5 px-2 py-1 flex items-center gap-1">
                  <Tag size={10} /> {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            {article.content}
          </motion.div>

          {/* CTA Box */}
          <div className="my-12 border border-[#EAB308]/40 bg-[#EAB308]/5 p-6">
            <div className="text-xs text-[#EAB308] uppercase tracking-widest font-mono font-bold mb-2">See It In Action</div>
            <h3 className="text-xl font-black text-white mb-2">Try Infrakaart's AI-powered construction platform</h3>
            <p className="text-sm text-[#A1A1AA] mb-4">500+ sites across India trust Infrakaart for real-time project intelligence. No credit card required.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/dashboard" className="flex items-center gap-2 px-4 py-2 bg-[#EAB308] text-black font-black uppercase text-sm tracking-wider hover:bg-[#FACC15] transition-colors">
                Open Platform <ArrowRight size={14} />
              </Link>
              <Link href="/investors" className="flex items-center gap-2 px-4 py-2 border border-white/30 text-white font-bold uppercase text-sm tracking-wider hover:border-[#EAB308] transition-colors">
                See the Numbers
              </Link>
            </div>
          </div>

          {/* Related articles */}
          <div className="border-t border-white/10 pt-8">
            <div className="text-xs text-[#EAB308] uppercase tracking-widest font-mono font-bold mb-4">Related Articles</div>
            <div className="space-y-3">
              {related.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="block group">
                  <div className="border border-white/10 bg-[#18181B] p-4 group-hover:border-[#EAB308]/30 transition-colors">
                    <div className="font-bold text-white group-hover:text-[#EAB308] transition-colors text-sm mb-1">{p.title}</div>
                    <div className="text-xs text-[#A1A1AA] flex items-center gap-2">
                      <span>{p.category}</span> · <Clock size={10} /> {p.readTime}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Back to blog */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <Link href="/blog" className="flex items-center gap-2 text-[#A1A1AA] hover:text-[#EAB308] transition-colors text-sm">
              <ArrowLeft size={14} /> Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
