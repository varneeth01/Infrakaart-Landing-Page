import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LogIn, Bell, AlertTriangle, CheckCircle, Info } from "lucide-react";

const notifications = [
  { id: 1, type: "critical", title: "NH-48: Steel delivery missed", desc: "Project delay predicted +3 days", time: "15 min ago" },
  { id: 2, type: "warning", title: "Zone B — Concrete pour delayed", desc: "Pump failure on Metro Phase 2", time: "2 min ago" },
  { id: 3, type: "info", title: "Airport T3 Stage 3 cleared", desc: "Structural inspection passed", time: "1 hr ago" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [location] = useLocation();
  const notifRef = useRef<HTMLDivElement>(null);

  const isDashboard = location.startsWith("/dashboard");

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setNotifOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleHashNav(e: React.MouseEvent<HTMLAnchorElement>, hash: string) {
    if (window.location.pathname === "/") {
      e.preventDefault();
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  }

  const navLinks = [
    { href: "/", label: "Product", hash: "" },
    { href: "/#features", label: "Features", hash: "features" },
    { href: "/#vision", label: "Vision", hash: "vision" },
    { href: "/investors", label: "Investors", hash: "" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10">
      <div className="hazard-stripe h-1 w-full" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl font-black tracking-tight text-white">
            INFRA<span className="text-[#EAB308]">KAART</span>
          </span>
          <span className="w-2 h-2 bg-[#EAB308] rounded-sm" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            link.hash ? (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleHashNav(e, link.hash)}
                className="text-sm text-[#A1A1AA] hover:text-white transition-colors font-medium tracking-wide uppercase cursor-pointer"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#A1A1AA] hover:text-white transition-colors font-medium tracking-wide uppercase"
              >
                {link.label}
              </Link>
            )
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {isDashboard && (
            <div className="relative" ref={notifRef}>
              <button
                onClick={() => setNotifOpen(!notifOpen)}
                className="p-2 text-[#A1A1AA] hover:text-white transition-colors relative"
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
                      <span className="text-xs text-[#A1A1AA]">{notifications.length} active</span>
                    </div>
                    <div className="divide-y divide-white/5 max-h-72 overflow-y-auto">
                      {notifications.map(n => (
                        <div key={n.id} className="px-4 py-3 hover:bg-white/5 cursor-pointer transition-colors">
                          <div className="flex items-start gap-2">
                            {n.type === "critical" ? <AlertTriangle size={13} className="text-red-400 mt-0.5 shrink-0" />
                              : n.type === "warning" ? <AlertTriangle size={13} className="text-[#EAB308] mt-0.5 shrink-0" />
                              : <Info size={13} className="text-blue-400 mt-0.5 shrink-0" />}
                            <div className="min-w-0">
                              <div className="text-xs font-bold text-white">{n.title}</div>
                              <div className="text-xs text-[#A1A1AA] mt-0.5">{n.desc}</div>
                              <div className="text-xs text-[#A1A1AA]/60 mt-0.5">{n.time}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="px-4 py-2 border-t border-white/10">
                      <Link
                        href="/dashboard"
                        onClick={() => setNotifOpen(false)}
                        className="text-xs text-[#EAB308] hover:underline"
                      >
                        View all in Monitoring →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          <Link
            href="/login"
            className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-[#A1A1AA] hover:text-white transition-colors uppercase tracking-wider border border-white/10 hover:border-white/30"
          >
            <LogIn size={14} />
            Sign In
          </Link>
          <Link
            href="/dashboard"
            className="px-4 py-2 text-sm font-bold tracking-wider text-black bg-[#EAB308] hover:bg-[#FACC15] transition-colors uppercase yellow-glow"
          >
            Open Platform
          </Link>
        </div>

        {/* Mobile menu btn */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0A0A] border-t border-white/10 px-4 py-4 flex flex-col gap-4"
          >
            {navLinks.map(link => (
              link.hash ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleHashNav(e, link.hash)}
                  className="text-sm text-[#A1A1AA] hover:text-white py-1 uppercase font-medium tracking-wide cursor-pointer"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#A1A1AA] hover:text-white py-1 uppercase font-medium tracking-wide"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
            <Link
              href="/dashboard"
              className="mt-2 px-4 py-2 text-sm font-bold text-black bg-[#EAB308] text-center uppercase"
              onClick={() => setOpen(false)}
            >
              Open Platform
            </Link>
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-[#A1A1AA] text-center uppercase border border-white/10"
              onClick={() => setOpen(false)}
            >
              Sign In
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
