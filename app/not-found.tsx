import Link from "next/link";
import { Sun, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center hero-gradient">
      <div className="text-center px-4">
        <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
          style={{ background: "rgba(255,255,255,0.1)" }}>
          <Sun className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-8xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">Page introuvable</h2>
        <p className="text-white/70 mb-8">Cette page n&apos;existe pas ou a été déplacée.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:shadow-lg"
          style={{ background: "linear-gradient(135deg, #E76F51, #F4A261)" }}
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
