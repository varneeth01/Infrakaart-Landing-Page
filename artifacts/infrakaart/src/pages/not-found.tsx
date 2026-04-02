import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] grid-bg flex items-center justify-center">
      <div className="text-center">
        <div className="text-8xl font-black text-[#EAB308] mb-4">404</div>
        <h1 className="text-2xl font-black text-white mb-2">Page Not Found</h1>
        <p className="text-[#A1A1AA] mb-8">This sector is off the grid.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#EAB308] text-black font-bold uppercase tracking-wider hover:bg-[#FACC15] transition-colors"
        >
          <ArrowLeft size={16} /> BACK TO BASE
        </Link>
      </div>
    </div>
  );
}
