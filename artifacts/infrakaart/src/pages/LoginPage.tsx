import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Eye, EyeOff, Zap, ArrowLeft, CheckCircle, Mail } from "lucide-react";
import SEOHead from "@/components/SEOHead";

type View = "login" | "forgot" | "forgot-sent";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgotEmail, setForgotEmail] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState<View>("login");
  const [, navigate] = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 1200);
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setView("forgot-sent");
    }, 1400);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] grid-bg flex flex-col">
      <SEOHead
        title="Sign In | Infrakaart Construction Command Platform"
        description="Sign in to Infrakaart — India's #1 AI-powered construction management platform. Access real-time site intelligence, workforce tracking, and predictive analytics."
        canonical="/login"
        noindex={true}
      />

      <div className="hazard-stripe h-1.5 w-full" />

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-sm"
        >
          <div className="text-center mb-10">
            <Link href="/">
              <span className="text-3xl font-black tracking-tight">
                INFRA<span className="text-[#EAB308]">KAART</span>
              </span>
              <span className="w-2 h-2 bg-[#EAB308] inline-block align-middle ml-1" />
            </Link>
            <p className="text-[#A1A1AA] text-sm mt-2">Command platform access</p>
          </div>

          <div className="border border-white/15 bg-[#18181B] p-8">
            <AnimatePresence mode="wait">

              {view === "login" && (
                <motion.div
                  key="login"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-6 h-6 bg-[#EAB308]/10 border border-[#EAB308]/30 flex items-center justify-center">
                      <Zap size={12} className="text-[#EAB308]" />
                    </div>
                    <div className="text-xs text-[#A1A1AA] uppercase tracking-widest font-mono">Secure Access</div>
                  </div>

                  <h1 className="text-2xl font-black text-white mb-6">Sign In</h1>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs text-[#A1A1AA] uppercase tracking-widest mb-1.5">Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="admin@infrakaart.com"
                        className="w-full bg-[#0A0A0A] border border-white/20 text-white text-sm px-3 py-2.5 focus:outline-none focus:border-[#EAB308] transition-colors placeholder:text-[#A1A1AA]/40"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-[#A1A1AA] uppercase tracking-widest mb-1.5">Password</label>
                      <div className="relative">
                        <input
                          type={showPass ? "text" : "password"}
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                          placeholder="••••••••"
                          className="w-full bg-[#0A0A0A] border border-white/20 text-white text-sm px-3 py-2.5 pr-10 focus:outline-none focus:border-[#EAB308] transition-colors placeholder:text-[#A1A1AA]/40"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPass(!showPass)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A1A1AA] hover:text-white"
                        >
                          {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <label className="flex items-center gap-2 text-[#A1A1AA] cursor-pointer">
                        <input type="checkbox" className="accent-[#EAB308]" />
                        Remember me
                      </label>
                      <button
                        type="button"
                        onClick={() => setView("forgot")}
                        className="text-[#EAB308] hover:text-[#FACC15] transition-colors"
                      >
                        Forgot password?
                      </button>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 py-3 bg-[#EAB308] text-black font-black uppercase tracking-wider text-sm hover:bg-[#FACC15] transition-colors disabled:opacity-70 mt-2"
                    >
                      {loading ? (
                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      ) : (
                        <>ENTER PLATFORM <ArrowRight size={15} /></>
                      )}
                    </button>
                  </form>

                  <div className="mt-6 pt-4 border-t border-white/10 text-center">
                    <p className="text-xs text-[#A1A1AA]">
                      Don't have access?{" "}
                      <Link href="/#cta" className="text-[#EAB308] hover:text-[#FACC15] transition-colors">
                        Request early access
                      </Link>
                    </p>
                  </div>
                </motion.div>
              )}

              {view === "forgot" && (
                <motion.div
                  key="forgot"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    onClick={() => setView("login")}
                    className="flex items-center gap-1.5 text-xs text-[#A1A1AA] hover:text-white transition-colors mb-6"
                  >
                    <ArrowLeft size={13} /> Back to sign in
                  </button>

                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-6 h-6 bg-[#EAB308]/10 border border-[#EAB308]/30 flex items-center justify-center">
                      <Mail size={12} className="text-[#EAB308]" />
                    </div>
                    <div className="text-xs text-[#A1A1AA] uppercase tracking-widest font-mono">Password Reset</div>
                  </div>

                  <h2 className="text-2xl font-black text-white mb-2">Forgot Password</h2>
                  <p className="text-sm text-[#A1A1AA] mb-6 leading-relaxed">
                    Enter your registered email address and we'll send you a secure link to reset your password.
                  </p>

                  <form onSubmit={handleForgotSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs text-[#A1A1AA] uppercase tracking-widest mb-1.5">Email Address</label>
                      <input
                        type="email"
                        value={forgotEmail}
                        onChange={e => setForgotEmail(e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="w-full bg-[#0A0A0A] border border-white/20 text-white text-sm px-3 py-2.5 focus:outline-none focus:border-[#EAB308] transition-colors placeholder:text-[#A1A1AA]/40"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading || !forgotEmail}
                      className="w-full flex items-center justify-center gap-2 py-3 bg-[#EAB308] text-black font-black uppercase tracking-wider text-sm hover:bg-[#FACC15] transition-colors disabled:opacity-50 mt-2"
                    >
                      {loading ? (
                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      ) : (
                        <>SEND RESET LINK <ArrowRight size={15} /></>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}

              {view === "forgot-sent" && (
                <motion.div
                  key="forgot-sent"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  className="text-center py-4"
                >
                  <div className="w-14 h-14 bg-[#EAB308]/10 border border-[#EAB308]/30 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={28} className="text-[#EAB308]" />
                  </div>
                  <h2 className="text-xl font-black text-white mb-3">Reset Link Sent</h2>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed mb-2">
                    We've sent a password reset link to
                  </p>
                  <p className="text-sm font-bold text-[#EAB308] mb-6 break-all">{forgotEmail}</p>
                  <p className="text-xs text-[#A1A1AA] mb-6 leading-relaxed">
                    Check your inbox and spam folder. The link expires in 30 minutes.
                  </p>
                  <button
                    onClick={() => { setView("login"); setForgotEmail(""); }}
                    className="flex items-center justify-center gap-1.5 text-xs text-[#A1A1AA] hover:text-white transition-colors mx-auto"
                  >
                    <ArrowLeft size={13} /> Back to sign in
                  </button>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {view === "login" && (
            <div className="mt-4 border border-[#EAB308]/20 bg-[#EAB308]/5 px-4 py-3 text-center">
              <p className="text-xs text-[#A1A1AA]">
                Demo: Enter any email and password to access the platform
              </p>
            </div>
          )}

          <div className="mt-8 text-center">
            <Link href="/" className="text-xs text-[#A1A1AA] hover:text-white transition-colors">
              ← Back to homepage
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="hazard-stripe h-1.5 w-full" />
    </div>
  );
}
