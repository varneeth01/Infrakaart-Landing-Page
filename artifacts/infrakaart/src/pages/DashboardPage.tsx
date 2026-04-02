import { lazy, Suspense, useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import {
  LayoutDashboard, Users, FolderOpen, Radio, Brain, Bell, ChevronDown,
  AlertTriangle, CheckCircle, Clock, TrendingUp, TrendingDown, MapPin,
  Menu, X, User, Settings, LogOut, Activity, Zap, Target,
} from "lucide-react";

const MiniSiteView = lazy(() => import("@/components/MiniSiteView"));

const productivityData = [
  { time: "06:00", value: 62 }, { time: "08:00", value: 74 }, { time: "10:00", value: 85 },
  { time: "12:00", value: 70 }, { time: "14:00", value: 88 }, { time: "16:00", value: 92 },
  { time: "18:00", value: 78 }, { time: "20:00", value: 55 },
];

const projectProgressData = [
  { project: "Metro Phase 2", progress: 78 },
  { project: "NH-48 Widening", progress: 45 },
  { project: "Airport Terminal", progress: 91 },
  { project: "Bridge Repair", progress: 32 },
  { project: "Commercial Tower", progress: 63 },
];

const workers = [
  { id: "W-001", name: "Ramesh Kumar", role: "Civil Engineer", zone: "Zone A", status: "active", score: 94 },
  { id: "W-002", name: "Priya Sharma", role: "Site Foreman", zone: "Zone B", status: "active", score: 88 },
  { id: "W-003", name: "Arjun Patel", role: "Machine Operator", zone: "Zone C", status: "idle", score: 72 },
  { id: "W-004", name: "Suresh Nair", role: "Safety Officer", zone: "Zone A", status: "active", score: 97 },
  { id: "W-005", name: "Deepa Verma", role: "Project Manager", zone: "HQ", status: "active", score: 91 },
  { id: "W-006", name: "Mahesh Singh", role: "Electrician", zone: "Zone D", status: "idle", score: 65 },
  { id: "W-007", name: "Kavya Reddy", role: "Surveyor", zone: "Zone B", status: "active", score: 86 },
];

const projects = [
  { id: "P-001", name: "Metro Line Extension - Phase 2", status: "on-track", progress: 78, deadline: "Mar 2027", budget: "₹450Cr", spent: "₹351Cr" },
  { id: "P-002", name: "NH-48 Highway Widening", status: "delayed", progress: 45, deadline: "Jun 2026", budget: "₹120Cr", spent: "₹98Cr" },
  { id: "P-003", name: "Airport Terminal T3", status: "on-track", progress: 91, deadline: "Dec 2026", budget: "₹890Cr", spent: "₹810Cr" },
  { id: "P-004", name: "Yamuna Bridge Rehabilitation", status: "delayed", progress: 32, deadline: "Sep 2026", budget: "₹67Cr", spent: "₹42Cr" },
  { id: "P-005", name: "Tech Hub Commercial Tower", status: "on-track", progress: 63, deadline: "Jan 2028", budget: "₹220Cr", spent: "₹139Cr" },
];

const alerts = [
  { id: 1, type: "warning", msg: "Zone B — Concrete pour delayed 4 hours due to pump failure", time: "2 min ago", site: "Metro Phase 2" },
  { id: 2, type: "critical", msg: "NH-48: Steel delivery missed. Project delay predicted +3 days", time: "15 min ago", site: "NH-48 Widening" },
  { id: 3, type: "info", msg: "Airport T3: Structural inspection passed. Stage 3 cleared.", time: "1 hr ago", site: "Airport Terminal" },
  { id: 4, type: "warning", msg: "Worker utilization in Zone D below threshold (62%)", time: "2 hr ago", site: "Multiple sites" },
];

const aiInsights = [
  { priority: "high", insight: "Reallocate 5 workers from Zone A (low activity) to Zone B to prevent predicted 2-day delay on Metro Phase 2", saving: "₹12L" },
  { priority: "critical", insight: "NH-48 cost overrun likely in 72 hours. Budget utilization at 82% with only 45% completion. Review material procurement immediately.", saving: "₹25L" },
  { priority: "medium", insight: "Worker productivity peaks at 14:00–16:00. Reschedule high-skill tasks (concrete, welding) to this window.", saving: "₹4L" },
  { priority: "low", insight: "Airport T3 on pace for early completion. Opportunity to redeploy equipment to Bridge Rehabilitation.", saving: "₹8L" },
];

type Page = "dashboard" | "workforce" | "projects" | "monitoring" | "insights";

const navItems: { id: Page; label: string; icon: React.ElementType }[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "workforce", label: "Workforce", icon: Users },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "monitoring", label: "Monitoring", icon: Radio },
  { id: "insights", label: "AI Insights", icon: Brain },
];

function StatCard({ label, value, change, icon: Icon, color = "#EAB308" }: {
  label: string; value: string; change: string; icon: React.ElementType; color?: string;
}) {
  const isPositive = change.startsWith("+");
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="border border-white/10 bg-[#18181B] p-5 card-hover"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="text-xs text-[#A1A1AA] uppercase tracking-widest">{label}</div>
        <div className="w-8 h-8 flex items-center justify-center" style={{ background: `${color}20` }}>
          <Icon size={14} style={{ color }} />
        </div>
      </div>
      <div className="text-3xl font-black text-white mb-1">{value}</div>
      <div className={`text-xs font-bold flex items-center gap-1 ${isPositive ? "text-green-400" : "text-red-400"}`}>
        {isPositive ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
        {change}
      </div>
    </motion.div>
  );
}

function DashboardHome() {
  return (
    <div className="space-y-6 page-enter">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-white">Command Center</h1>
          <p className="text-sm text-[#A1A1AA] mt-0.5">April 2, 2026 • All systems operational</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-400 rounded-full pulse-dot" />
          <span className="text-xs text-green-400 font-mono uppercase tracking-wider">Live</span>
        </div>
      </div>

      {/* Overview cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <StatCard label="Active Projects" value="5" change="+1 this month" icon={Target} />
        <StatCard label="Workers On Site" value="412" change="+12 today" icon={Users} color="#22c55e" />
        <StatCard label="Productivity" value="94%" change="+2.4% vs yesterday" icon={Activity} color="#22c55e" />
        <StatCard label="Cost Usage" value="₹1,440Cr" change="-3.2% under budget" icon={TrendingUp} color="#3b82f6" />
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        {/* 3D mini site */}
        <div className="lg:col-span-1 border border-white/10 bg-[#18181B] overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <span className="text-xs text-[#EAB308] uppercase tracking-widest font-bold font-mono">3D Site View</span>
            <span className="text-xs text-[#A1A1AA]">Metro Phase 2</span>
          </div>
          <div className="h-48">
            <Suspense fallback={<div className="w-full h-full bg-[#0A0A0A] flex items-center justify-center text-xs text-[#A1A1AA]">Loading 3D...</div>}>
              <MiniSiteView />
            </Suspense>
          </div>
          <div className="px-4 py-2 border-t border-white/10 flex gap-3 text-xs">
            {[["Zone A", "#EAB308"], ["Zone B", "#22c55e"], ["Zone C", "#ef4444"], ["Zone D", "#3b82f6"]].map(([z, c]) => (
              <div key={z} className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full" style={{ background: c }} />
                <span className="text-[#A1A1AA]">{z}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Productivity chart */}
        <div className="lg:col-span-2 border border-white/10 bg-[#18181B] p-4">
          <div className="text-xs text-[#EAB308] uppercase tracking-widest font-bold font-mono mb-4">Worker Productivity — Today</div>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={productivityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" />
              <XAxis dataKey="time" tick={{ fill: "#A1A1AA", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis domain={[40, 100]} tick={{ fill: "#A1A1AA", fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ background: "#18181B", border: "1px solid #EAB308", borderRadius: 0, color: "#ffffff" }}
                labelStyle={{ color: "#EAB308", fontWeight: "bold" }}
                itemStyle={{ color: "#ffffff" }}
              />
              <Line type="monotone" dataKey="value" stroke="#EAB308" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Project progress */}
      <div className="border border-white/10 bg-[#18181B] p-4">
        <div className="text-xs text-[#EAB308] uppercase tracking-widest font-bold font-mono mb-4">Project Progress</div>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={projectProgressData} layout="vertical" margin={{ left: 80, right: 20 }}>
            <XAxis type="number" domain={[0, 100]} tick={{ fill: "#A1A1AA", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis type="category" dataKey="project" tick={{ fill: "#A1A1AA", fontSize: 11 }} axisLine={false} tickLine={false} width={80} />
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" horizontal={false} />
            <Tooltip
              contentStyle={{ background: "#18181B", border: "1px solid #EAB308", borderRadius: 0, color: "#ffffff" }}
              labelStyle={{ color: "#EAB308", fontWeight: "bold" }}
              itemStyle={{ color: "#ffffff" }}
              formatter={(v: number) => [`${v}%`, "Progress"]}
            />
            <Bar dataKey="progress" fill="#EAB308" radius={0} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Recent alerts */}
      <div className="border border-white/10 bg-[#18181B] p-4">
        <div className="text-xs text-[#EAB308] uppercase tracking-widest font-bold font-mono mb-3">Recent Alerts</div>
        <div className="space-y-2">
          {alerts.slice(0, 3).map((a) => (
            <div key={a.id} className={`flex items-start justify-between gap-3 p-3 border ${
              a.type === "critical" ? "border-red-500/30 bg-red-500/5"
              : a.type === "warning" ? "border-[#EAB308]/30 bg-[#EAB308]/5"
              : "border-white/10 bg-white/5"
            }`}>
              <div className="flex items-start gap-2 flex-1 min-w-0">
                {a.type === "critical" ? <AlertTriangle size={14} className="text-red-400 mt-0.5 shrink-0" />
                  : a.type === "warning" ? <AlertTriangle size={14} className="text-[#EAB308] mt-0.5 shrink-0" />
                  : <CheckCircle size={14} className="text-green-400 mt-0.5 shrink-0" />}
                <div className="min-w-0">
                  <div className="text-sm text-white truncate">{a.msg}</div>
                  <div className="text-xs text-[#A1A1AA] mt-0.5">{a.site} · {a.time}</div>
                </div>
              </div>
              {a.type !== "info" && (
                <button className="text-xs bg-[#EAB308] text-black px-2 py-0.5 font-bold shrink-0">Resolve</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkforcePage() {
  const [filter, setFilter] = useState<"all" | "active" | "idle">("all");
  const filtered = filter === "all" ? workers : workers.filter(w => w.status === filter);

  return (
    <div className="space-y-6 page-enter">
      <div>
        <h1 className="text-2xl font-black text-white">Workforce Management</h1>
        <p className="text-sm text-[#A1A1AA] mt-0.5">{workers.length} workers tracked across all sites</p>
      </div>

      <div className="flex items-center gap-2">
        {(["all", "active", "idle"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 text-xs uppercase tracking-wider font-bold border transition-colors ${
              filter === f
                ? "bg-[#EAB308] text-black border-[#EAB308]"
                : "border-white/20 text-[#A1A1AA] hover:text-white"
            }`}
          >
            {f}
          </button>
        ))}
        <span className="text-xs text-[#A1A1AA] ml-2 font-mono">{filtered.length} shown</span>
      </div>

      <div className="border border-white/10 bg-[#18181B] overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              {["Worker ID", "Name", "Role", "Zone", "Status", "Productivity"].map(h => (
                <th key={h} className="text-left px-4 py-3 text-xs text-[#A1A1AA] uppercase tracking-wider font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((w, i) => (
              <motion.tr
                key={w.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border-b border-white/5 hover:bg-white/5 cursor-pointer"
              >
                <td className="px-4 py-3 font-mono text-xs text-[#A1A1AA]">{w.id}</td>
                <td className="px-4 py-3 font-bold text-white">{w.name}</td>
                <td className="px-4 py-3 text-[#A1A1AA] text-xs">{w.role}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1">
                    <MapPin size={11} className="text-[#EAB308]" />
                    <span className="text-xs text-[#A1A1AA]">{w.zone}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-0.5 text-xs font-bold uppercase ${
                    w.status === "active" ? "bg-green-400/20 text-green-400" : "bg-[#A1A1AA]/20 text-[#A1A1AA]"
                  }`}>
                    {w.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-white/10 max-w-20">
                      <div
                        className="h-full"
                        style={{ width: `${w.score}%`, background: w.score >= 80 ? "#22c55e" : w.score >= 60 ? "#EAB308" : "#ef4444" }}
                      />
                    </div>
                    <span className="text-xs font-bold text-white">{w.score}%</span>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ProjectsPage() {
  return (
    <div className="space-y-6 page-enter">
      <div>
        <h1 className="text-2xl font-black text-white">Project Management</h1>
        <p className="text-sm text-[#A1A1AA] mt-0.5">{projects.length} active projects · ₹1,747Cr total portfolio</p>
      </div>

      <div className="space-y-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="border border-white/10 bg-[#18181B] p-5 card-hover"
          >
            <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-[#A1A1AA]">{p.id}</span>
                  <span className={`px-2 py-0.5 text-xs font-bold uppercase ${
                    p.status === "on-track" ? "bg-green-400/20 text-green-400" : "bg-red-400/20 text-red-400"
                  }`}>
                    {p.status === "on-track" ? "On Track" : "Delayed"}
                  </span>
                </div>
                <h3 className="font-black text-white text-base">{p.name}</h3>
              </div>
              <div className="text-right">
                <div className="text-xs text-[#A1A1AA]">Deadline</div>
                <div className="text-sm font-bold text-white flex items-center gap-1">
                  <Clock size={12} className="text-[#A1A1AA]" />
                  {p.deadline}
                </div>
              </div>
            </div>

            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-[#A1A1AA]">Progress</span>
                <span className="font-bold text-white">{p.progress}%</span>
              </div>
              <div className="h-2 bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${p.progress}%` }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="h-full"
                  style={{ background: p.status === "on-track" ? "#EAB308" : "#ef4444" }}
                />
              </div>
            </div>

            <div className="flex gap-6 text-sm">
              <div>
                <div className="text-xs text-[#A1A1AA]">Budget</div>
                <div className="font-bold text-white">{p.budget}</div>
              </div>
              <div>
                <div className="text-xs text-[#A1A1AA]">Spent</div>
                <div className="font-bold text-white">{p.spent}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function MonitoringPage() {
  return (
    <div className="space-y-6 page-enter">
      <div>
        <h1 className="text-2xl font-black text-white">Site Monitoring</h1>
        <p className="text-sm text-[#A1A1AA] mt-0.5">Live sensor data across all active sites</p>
      </div>

      <div className="grid md:grid-cols-3 gap-3">
        {[
          { site: "Metro Phase 2", status: "active", workers: 142, efficiency: 94, alerts: 1 },
          { site: "NH-48 Highway", status: "warning", workers: 89, efficiency: 61, alerts: 3 },
          { site: "Airport T3", status: "active", workers: 124, efficiency: 97, alerts: 0 },
          { site: "Yamuna Bridge", status: "warning", workers: 43, efficiency: 72, alerts: 2 },
          { site: "Tech Hub Tower", status: "active", workers: 78, efficiency: 88, alerts: 0 },
        ].map((site, i) => (
          <motion.div
            key={site.site}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
            className={`border p-4 card-hover ${
              site.status === "warning" ? "border-[#EAB308]/40 bg-[#EAB308]/5" : "border-white/10 bg-[#18181B]"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${site.status === "active" ? "bg-green-400 pulse-dot" : "bg-[#EAB308] pulse-dot"}`} />
                <span className="text-xs uppercase tracking-wider font-bold text-white">{site.site}</span>
              </div>
              {site.alerts > 0 && (
                <span className="text-xs bg-[#EAB308]/20 text-[#EAB308] px-2 py-0.5 font-bold">{site.alerts} alert{site.alerts > 1 ? "s" : ""}</span>
              )}
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <div className="text-xs text-[#A1A1AA]">Workers</div>
                <div className="font-black text-white">{site.workers}</div>
              </div>
              <div>
                <div className="text-xs text-[#A1A1AA]">Efficiency</div>
                <div className={`font-black ${site.efficiency >= 80 ? "text-green-400" : "text-[#EAB308]"}`}>{site.efficiency}%</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Alerts */}
      <div className="border border-white/10 bg-[#18181B] p-4">
        <div className="text-xs text-[#EAB308] uppercase tracking-widest font-bold font-mono mb-3">Active Alerts</div>
        <div className="space-y-2">
          {alerts.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 }}
              className={`flex items-start justify-between gap-3 p-3 border ${
                a.type === "critical" ? "border-red-500/30 bg-red-500/5"
                : a.type === "warning" ? "border-[#EAB308]/30 bg-[#EAB308]/5"
                : "border-white/10 bg-white/5"
              }`}
            >
              <div className="flex items-start gap-2 flex-1 min-w-0">
                {a.type === "critical" ? <AlertTriangle size={14} className="text-red-400 mt-0.5 shrink-0" />
                  : a.type === "warning" ? <AlertTriangle size={14} className="text-[#EAB308] mt-0.5 shrink-0" />
                  : <CheckCircle size={14} className="text-green-400 mt-0.5 shrink-0" />}
                <div className="min-w-0">
                  <div className="text-sm text-white">{a.msg}</div>
                  <div className="text-xs text-[#A1A1AA] mt-0.5">{a.site} · {a.time}</div>
                </div>
              </div>
              {a.type !== "info" && (
                <button className="text-xs bg-[#EAB308] text-black px-2 py-0.5 font-bold shrink-0 hover:bg-[#FACC15] transition-colors">Resolve</button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function InsightsPage() {
  return (
    <div className="space-y-6 page-enter">
      <div>
        <h1 className="text-2xl font-black text-white">AI Insights</h1>
        <p className="text-sm text-[#A1A1AA] mt-0.5">Predictive intelligence powered by site data</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="border border-[#EAB308]/30 bg-[#EAB308]/5 p-4 text-center">
          <div className="text-2xl font-black text-[#EAB308]">4</div>
          <div className="text-xs text-[#A1A1AA] mt-1">Active Insights</div>
        </div>
        <div className="border border-green-500/30 bg-green-500/5 p-4 text-center">
          <div className="text-2xl font-black text-green-400">₹49L</div>
          <div className="text-xs text-[#A1A1AA] mt-1">Potential Savings</div>
        </div>
        <div className="border border-blue-500/30 bg-blue-500/5 p-4 text-center">
          <div className="text-2xl font-black text-blue-400">3</div>
          <div className="text-xs text-[#A1A1AA] mt-1">Delays Predicted</div>
        </div>
        <div className="border border-purple-500/30 bg-purple-500/5 p-4 text-center">
          <div className="text-2xl font-black text-purple-400">94%</div>
          <div className="text-xs text-[#A1A1AA] mt-1">Prediction Accuracy</div>
        </div>
      </div>

      <div className="space-y-3">
        {aiInsights.map((insight, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`border p-5 ${
              insight.priority === "critical" ? "border-red-500/40 bg-red-500/5"
              : insight.priority === "high" ? "border-[#EAB308]/40 bg-[#EAB308]/5"
              : insight.priority === "medium" ? "border-blue-500/30 bg-blue-500/5"
              : "border-white/10 bg-[#18181B]"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Zap size={14} className={
                    insight.priority === "critical" ? "text-red-400"
                    : insight.priority === "high" ? "text-[#EAB308]"
                    : "text-blue-400"
                  } />
                  <span className={`text-xs uppercase tracking-wider font-black ${
                    insight.priority === "critical" ? "text-red-400"
                    : insight.priority === "high" ? "text-[#EAB308]"
                    : insight.priority === "medium" ? "text-blue-400"
                    : "text-[#A1A1AA]"
                  }`}>{insight.priority} priority</span>
                </div>
                <p className="text-sm text-white leading-relaxed">{insight.insight}</p>
              </div>
              <div className="text-right shrink-0">
                <div className="text-xs text-[#A1A1AA]">Est. saving</div>
                <div className="text-base font-black text-green-400">{insight.saving}</div>
                <button className="mt-2 text-xs bg-[#EAB308] text-black px-3 py-1 font-bold hover:bg-[#FACC15] transition-colors">
                  Apply
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const [activePage, setActivePage] = useState<Page>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [, navigate] = useLocation();
  const notifRef = useRef<HTMLDivElement>(null);
  const adminRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) setNotifOpen(false);
      if (adminRef.current && !adminRef.current.contains(e.target as Node)) setAdminOpen(false);
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const pageComponents: Record<Page, React.ReactNode> = {
    dashboard: <DashboardHome />,
    workforce: <WorkforcePage />,
    projects: <ProjectsPage />,
    monitoring: <MonitoringPage />,
    insights: <InsightsPage />,
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] border-b border-white/10 h-14 flex items-center px-4 gap-4">
        <div className="hazard-stripe absolute top-0 left-0 right-0 h-0.5" />
        <button
          className="lg:hidden text-[#A1A1AA] hover:text-white"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <Link href="/" className="text-lg font-black tracking-tight">
          INFRA<span className="text-[#EAB308]">KAART</span>
        </Link>
        <span className="text-xs text-[#A1A1AA] font-mono ml-2 hidden md:block">CMD-CTR-01</span>

        <div className="ml-auto flex items-center gap-3">
          {/* Bell notification */}
          <div className="relative" ref={notifRef}>
            <button
              onClick={() => { setNotifOpen(!notifOpen); setAdminOpen(false); }}
              className="relative p-2 text-[#A1A1AA] hover:text-white transition-colors"
            >
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#EAB308] rounded-full" />
            </button>
            <AnimatePresence>
              {notifOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-80 bg-[#18181B] border border-white/10 shadow-2xl z-50"
                >
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                    <span className="text-xs text-[#EAB308] uppercase tracking-widest font-bold font-mono">Alerts</span>
                    <span className="text-xs text-[#A1A1AA]">{alerts.length} active</span>
                  </div>
                  <div className="divide-y divide-white/5 max-h-72 overflow-y-auto">
                    {alerts.map(a => (
                      <div key={a.id} className="px-4 py-3 hover:bg-white/5 cursor-pointer transition-colors">
                        <div className="flex items-start gap-2">
                          {a.type === "critical"
                            ? <AlertTriangle size={13} className="text-red-400 mt-0.5 shrink-0" />
                            : a.type === "warning"
                            ? <AlertTriangle size={13} className="text-[#EAB308] mt-0.5 shrink-0" />
                            : <CheckCircle size={13} className="text-green-400 mt-0.5 shrink-0" />}
                          <div className="min-w-0">
                            <div className="text-xs font-bold text-white truncate">{a.msg}</div>
                            <div className="text-xs text-[#A1A1AA] mt-0.5">{a.site} · {a.time}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-2 border-t border-white/10">
                    <button
                      onClick={() => { setActivePage("monitoring"); setNotifOpen(false); }}
                      className="text-xs text-[#EAB308] hover:underline"
                    >
                      View all in Monitoring →
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Admin dropdown */}
          <div className="relative" ref={adminRef}>
            <button
              onClick={() => { setAdminOpen(!adminOpen); setNotifOpen(false); }}
              className="flex items-center gap-2 hover:bg-white/5 px-3 py-1.5 transition-colors"
            >
              <div className="w-7 h-7 bg-[#EAB308] flex items-center justify-center">
                <User size={14} className="text-black" />
              </div>
              <span className="text-sm text-white hidden sm:block">Admin</span>
              <ChevronDown size={14} className={`text-[#A1A1AA] transition-transform ${adminOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {adminOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-52 bg-[#18181B] border border-white/10 shadow-2xl z-50"
                >
                  <div className="px-4 py-3 border-b border-white/10">
                    <div className="text-sm font-bold text-white">Admin User</div>
                    <div className="text-xs text-[#A1A1AA]">admin@infrakaart.com</div>
                  </div>
                  <div className="py-1">
                    <button
                      onClick={() => { setActivePage("dashboard"); setAdminOpen(false); }}
                      className="w-full flex items-center gap-2 px-4 py-2 text-sm text-[#A1A1AA] hover:text-white hover:bg-white/5 transition-colors text-left"
                    >
                      <User size={14} />
                      Profile
                    </button>
                    <button
                      onClick={() => setAdminOpen(false)}
                      className="w-full flex items-center gap-2 px-4 py-2 text-sm text-[#A1A1AA] hover:text-white hover:bg-white/5 transition-colors text-left"
                    >
                      <Settings size={14} />
                      Settings
                    </button>
                  </div>
                  <div className="py-1 border-t border-white/10">
                    <button
                      onClick={() => { setAdminOpen(false); navigate("/login"); }}
                      className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors text-left"
                    >
                      <LogOut size={14} />
                      Sign Out
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="flex flex-1 pt-14">
        {/* Sidebar */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-40 w-56 bg-[#18181B] border-r border-white/10 flex flex-col
          transition-transform duration-200 pt-14 lg:pt-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}>
          <div className="p-4 flex-1">
            <div className="text-xs text-[#A1A1AA] uppercase tracking-widest font-mono mb-3 px-2">Navigation</div>
            <nav className="space-y-0.5">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => { setActivePage(id); setSidebarOpen(false); }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium transition-colors ${
                    activePage === id
                      ? "bg-[#EAB308]/10 text-[#EAB308] border-r-2 border-[#EAB308]"
                      : "text-[#A1A1AA] hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={16} />
                  {label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-4 border-t border-white/10">
            <button
              onClick={() => navigate("/login")}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-[#A1A1AA] hover:text-white transition-colors"
            >
              <LogOut size={14} />
              Sign Out
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-[#A1A1AA] hover:text-white transition-colors">
              <Settings size={14} />
              Settings
            </button>
          </div>
        </aside>

        {/* Sidebar overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/60 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 p-4 sm:p-6 overflow-y-auto min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {pageComponents[activePage]}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
