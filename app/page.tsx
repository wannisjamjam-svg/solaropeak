import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, Star, TrendingDown, TrendingUp,
  Clock, Leaf, Shield, Award, ChevronRight, Sun, Zap, BarChart3,
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import RevealSection from "@/components/RevealSection";

export const metadata: Metadata = {
  title: "Accueil – Énergie Solaire Industrielle au Maroc",
};

const stats = [
  { value: 38, suffix: "%", label: "Baisse du coût solaire", sublabel: "en 5 ans", icon: TrendingDown, color: "#2D6A4F" },
  { value: 21.7, suffix: "%", label: "Hausse tarifs ONEE", sublabel: "depuis 2022", icon: TrendingUp, color: "#E76F51", decimals: 1 },
  { value: 4, suffix: " ans", label: "ROI moyen", sublabel: "retour sur investissement", icon: Clock, color: "#2D6A4F" },
  { value: 60, suffix: "%", label: "Économie facture", sublabel: "potentielle", icon: Zap, color: "#E76F51" },
];

const benefits = [
  "Installateur agréé ANRE – garantie de qualité",
  "Dimensionnement personnalisé pour votre site",
  "Installation clé en main sans interruption de production",
  "Monitoring temps réel & SAV réactif",
  "Financement préférentiel dès 3,9%",
  "Subvention MASEN jusqu'à 300 000 MAD",
];

const testimonials = [
  {
    name: "Ahmed Benjelloun",
    company: "Minoterie Atlas, Meknès",
    sector: "Agro-industrie",
    text: "Depuis l'installation de notre système 120 kWc, notre facture ONEE a chuté de 52%. L'équipe SolaroPeak a été professionnelle du premier audit jusqu'à la mise en service.",
    savings: "52%",
    power: "120 kWc",
  },
  {
    name: "Fatima Ezzahra Tahiri",
    company: "Hôtel Palmeraie Suites, Marrakech",
    sector: "Hôtellerie",
    text: "Le processus a été simple et rapide. Étude, financement et installation en 3 mois. Notre hôtel économise maintenant 380 000 MAD par an sur l'électricité.",
    savings: "380K MAD/an",
    power: "200 kWc",
  },
  {
    name: "Karim Lahrizi",
    company: "Textile du Nord, Tanger",
    sector: "Textile",
    text: "ROI atteint en 3 ans et demi. L'accompagnement pour le dossier MASEN nous a permis d'obtenir une subvention de 250 000 MAD. Très satisfait.",
    savings: "ROI 3,5 ans",
    power: "350 kWc",
  },
];

const partners = [
  { name: "MASEN", desc: "Agence Marocaine Énergie Durable" },
  { name: "ANRE", desc: "Autorité Nationale de Régulation de l'Électricité" },
  { name: "SIE", desc: "Société d'Ingénierie Énergétique" },
  { name: "CIH Bank", desc: "Partenaire financement vert" },
  { name: "Attijariwafa", desc: "Crédit Vert PME" },
];

const process = [
  { step: "01", title: "Audit gratuit", desc: "Analyse de vos factures ONEE et visite technique du site sous 48h." },
  { step: "02", title: "Dimensionnement", desc: "Étude personnalisée : puissance optimale, rendement attendu, ROI calculé." },
  { step: "03", title: "Financement", desc: "Montage du dossier bancaire et demande de subvention MASEN." },
  { step: "04", title: "Installation", desc: "Pose par nos techniciens certifiés, raccordement ONEE, mise en service." },
  { step: "05", title: "Suivi SAV", desc: "Monitoring temps réel, maintenance préventive, garantie 10 ans." },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center hero-gradient solar-pattern overflow-hidden">
        {/* Decorative sun */}
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #F4A261, transparent 70%)", transform: "translate(30%, -20%)" }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #95d5b2, transparent 70%)" }} />

        {/* Right visual — solar installation illustration */}
        <div className="absolute right-0 top-0 bottom-0 hidden lg:flex items-center justify-center w-[45%] pointer-events-none">
          <SolarInstallationSVG />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
              style={{ background: "rgba(231,111,81,0.2)", border: "1px solid rgba(231,111,81,0.5)" }}>
              <Award className="w-4 h-4" style={{ color: "#F4A261" }} />
              <span className="text-white">Installateur Agréé ANRE · Certifié MASEN</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Réduisez votre facture{" "}
              <span style={{ color: "#F4A261" }}>ONEE</span>{" "}
              de 40 à 60%
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl font-light text-white/80">
                avec le solaire industriel
              </span>
            </h1>

            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
              SolaroPeak conçoit et installe des systèmes photovoltaïques sur mesure pour les PME
              agro-industrielles, textiles et hôtelières au Maroc.{" "}
              <strong className="text-white">ROI en 3 à 5 ans.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg transition-all hover:shadow-2xl hover:scale-105"
                style={{ background: "linear-gradient(135deg, #E76F51, #F4A261)" }}
              >
                Demander une étude gratuite
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/simulateur"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-lg border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all"
              >
                <BarChart3 className="w-5 h-5" />
                Simuler mes économies
              </Link>
            </div>

            {/* Mini benefits */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["Agréé ANRE", "Étude sous 48h", "Garantie 10 ans", "Financement inclus", "SAV réactif", "Subvention MASEN"].map((b) => (
                <div key={b} className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "#95d5b2" }} />
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <RevealSection key={i} delay={i * 100}
                className="text-center p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: stat.color + "15" }}>
                  <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <div className="text-4xl font-bold mb-1" style={{ color: stat.color }}>
                  <AnimatedCounter end={stat.value} suffix={stat.suffix}
                    decimals={stat.decimals ?? 0} />
                </div>
                <div className="font-semibold text-gray-800 text-sm">{stat.label}</div>
                <div className="text-gray-400 text-xs mt-1">{stat.sublabel}</div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SOLAR NOW ─────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealSection>
              <div className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full mb-6"
                style={{ background: "#D8F3DC", color: "#2D6A4F" }}>
                <Sun className="w-4 h-4" />
                Pourquoi maintenant ?
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Les tarifs ONEE augmentent.<br />
                <span style={{ color: "#2D6A4F" }}>Votre rentabilité ne peut pas attendre.</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Depuis 2022, les tarifs ONEE ont augmenté de <strong>+21,7%</strong> et cette
                tendance se poursuit à <strong>+4–6% par an jusqu'en 2030</strong>. Pendant ce
                temps, le coût des panneaux solaires a chuté de <strong>38% en 5 ans</strong>.
                La fenêtre d'opportunité est ouverte maintenant.
              </p>
              <ul className="space-y-3 mb-8">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#2D6A4F" }} />
                    <span className="text-gray-700">{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/simulateur"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:shadow-lg hover:scale-105"
                style={{ background: "#2D6A4F" }}
              >
                Calculer mon économie
                <ArrowRight className="w-4 h-4" />
              </Link>
            </RevealSection>

            {/* Visual: cost comparison */}
            <RevealSection delay={200}>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" style={{ color: "#2D6A4F" }} />
                  Projection coût énergétique (PME 200 kWc)
                </h3>
                <div className="space-y-4">
                  {[
                    { year: "2024", onee: 100, solar: 100, label: "Aujourd'hui" },
                    { year: "2026", onee: 110, solar: 42, label: "2 ans" },
                    { year: "2028", onee: 121, solar: 42, label: "4 ans" },
                    { year: "2030", onee: 133, solar: 42, label: "6 ans" },
                  ].map((row) => (
                    <div key={row.year} className="space-y-1">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span className="font-medium text-gray-700">{row.year} ({row.label})</span>
                        <span style={{ color: "#2D6A4F" }}>-{Math.round(100 - row.solar * 100 / row.onee)}%</span>
                      </div>
                      <div className="flex gap-1 h-8">
                        <div className="flex-1 rounded-lg flex items-center px-3 text-xs text-white font-medium"
                          style={{ background: "#E76F51", width: `${row.onee}%` }}>
                          ONEE: {row.onee}
                        </div>
                      </div>
                      <div className="flex gap-1 h-8">
                        <div className="rounded-lg flex items-center px-3 text-xs text-white font-medium"
                          style={{ background: "#2D6A4F", width: `${row.solar}%` }}>
                          Solaire: {row.solar}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-4">
                  * Indice base 100 en 2024. Hypothèse hausse ONEE +5%/an.
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full mb-4"
              style={{ background: "#D8F3DC", color: "#2D6A4F" }}>
              Notre méthode
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              De l&apos;audit à la mise en service
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Un processus éprouvé pour minimiser les risques et maximiser votre retour sur investissement.
            </p>
          </RevealSection>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {process.map((step, i) => (
                <RevealSection key={i} delay={i * 120}>
                  <div className="relative text-center">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white relative z-10"
                      style={{ background: i % 2 === 0 ? "#2D6A4F" : "#E76F51" }}>
                      {step.step}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                    {i < process.length - 1 && (
                      <ChevronRight className="hidden lg:block absolute -right-4 top-8 text-gray-300 w-6 h-6" />
                    )}
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>

          <RevealSection className="text-center mt-14">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg transition-all hover:shadow-xl hover:scale-105"
              style={{ background: "linear-gradient(135deg, #E76F51, #F4A261)" }}
            >
              Démarrer mon projet
              <ArrowRight className="w-5 h-5" />
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────── */}
      <section style={{ background: "#f8fdf9" }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full mb-4"
              style={{ background: "#D8F3DC", color: "#2D6A4F" }}>
              <Star className="w-4 h-4" />
              Témoignages clients
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ils ont fait confiance à SolaroPeak
            </h2>
            <p className="text-gray-500 text-lg">
              Plus de 85 PME marocaines économisent grâce à nos installations.
            </p>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <RevealSection key={i} delay={i * 150}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" style={{ color: "#F4A261" }} />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.company}</div>
                    <div className="text-xs mt-1 font-medium" style={{ color: "#2D6A4F" }}>{t.sector}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold" style={{ color: "#E76F51" }}>{t.savings}</div>
                    <div className="text-xs text-gray-400">{t.power}</div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ──────────────────────────────────────────── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-10">
            <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">
              Partenaires & certifications
            </p>
          </RevealSection>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {partners.map((p) => (
              <RevealSection key={p.name}>
                <div className="text-center group cursor-default">
                  <div className="w-20 h-16 rounded-xl flex items-center justify-center mx-auto mb-2 border border-gray-200 group-hover:border-green-300 transition-colors"
                    style={{ background: "#f9fafb" }}>
                    <span className="font-bold text-gray-600 text-sm group-hover:text-green-700 transition-colors">
                      {p.name}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 max-w-24 leading-tight">{p.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── ECO IMPACT ────────────────────────────────────────── */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealSection>
            <Leaf className="w-12 h-12 mx-auto mb-4 text-green-300" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Un impact environnemental concret
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Nos installations permettent à nos clients de réduire leur empreinte carbone
              tout en améliorant leur compétitivité.
            </p>
          </RevealSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: 85, suffix: "+", label: "Installations réalisées", unit: "" },
              { value: 12000, suffix: "", label: "kWc installés", unit: "" },
              { value: 7200, suffix: "", label: "Tonnes CO₂ évitées/an", unit: "" },
              { value: 45, suffix: "M MAD", label: "Économies générées", unit: "" },
            ].map((s, i) => (
              <RevealSection key={i} delay={i * 100}
                className="bg-white/10 rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-white mb-1">
                  <AnimatedCounter end={s.value} suffix={s.suffix} />
                </div>
                <div className="text-white/70 text-sm">{s.label}</div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <RevealSection>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ background: "linear-gradient(135deg, #E76F51, #F4A261)" }}>
              <Sun className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Obtenez votre étude personnalisée
            </h2>
            <p className="text-gray-500 text-lg mb-8">
              Nos ingénieurs analysent vos factures ONEE et vous remettent un rapport complet
              (puissance, économies, ROI, financement) <strong>gratuitement sous 48h</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg transition-all hover:shadow-xl hover:scale-105"
                style={{ background: "linear-gradient(135deg, #E76F51, #F4A261)" }}
              >
                Étude gratuite en 48h
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/simulateur"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-green-400 hover:bg-green-50 transition-all"
                style={{ color: "#2D6A4F" }}
              >
                <BarChart3 className="w-5 h-5" />
                Simuler maintenant
              </Link>
            </div>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-400">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4" style={{ color: "#2D6A4F" }} />
                Sans engagement
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" style={{ color: "#2D6A4F" }} />
                Réponse sous 48h
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" style={{ color: "#2D6A4F" }} />
                100% gratuit
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}

function SolarInstallationSVG() {
  return (
    <svg viewBox="0 0 560 520" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-lg opacity-90">

      {/* Sky gradient */}
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B4332" stopOpacity="0"/>
          <stop offset="100%" stopColor="#40916C" stopOpacity="0.15"/>
        </linearGradient>
        <linearGradient id="panel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a3a5c"/>
          <stop offset="100%" stopColor="#0f2744"/>
        </linearGradient>
        <linearGradient id="panelShine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.12"/>
          <stop offset="100%" stopColor="white" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2D6A4F" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="#1B4332" stopOpacity="0.1"/>
        </linearGradient>
        <linearGradient id="sunGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F4A261"/>
          <stop offset="100%" stopColor="#E76F51"/>
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Sun */}
      <circle cx="430" cy="90" r="48" fill="url(#sunGlow)" opacity="0.25"/>
      <circle cx="430" cy="90" r="32" fill="url(#sunGlow)" opacity="0.5"/>
      <circle cx="430" cy="90" r="20" fill="url(#sunGlow)" filter="url(#glow)"/>
      {/* Sun rays */}
      {[0,45,90,135,180,225,270,315].map((angle, i) => (
        <line key={i}
          x1={430 + Math.cos(angle * Math.PI / 180) * 26}
          y1={90 + Math.sin(angle * Math.PI / 180) * 26}
          x2={430 + Math.cos(angle * Math.PI / 180) * 44}
          y2={90 + Math.sin(angle * Math.PI / 180) * 44}
          stroke="#F4A261" strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
      ))}

      {/* Light beams from sun to panels */}
      {[0,1,2].map((i) => (
        <line key={i} x1="430" y1="90" x2={100 + i * 120} y2="200"
          stroke="#F4A261" strokeWidth="1" opacity="0.08"/>
      ))}

      {/* Ground */}
      <ellipse cx="280" cy="460" rx="240" ry="30" fill="url(#ground)"/>

      {/* Factory building silhouette */}
      <rect x="320" y="310" width="160" height="120" rx="4"
        fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
      <rect x="340" y="340" width="30" height="40" rx="2" fill="rgba(255,255,255,0.04)"/>
      <rect x="385" y="340" width="30" height="40" rx="2" fill="rgba(255,255,255,0.04)"/>
      <rect x="430" y="340" width="30" height="40" rx="2" fill="rgba(255,255,255,0.04)"/>
      {/* Chimney */}
      <rect x="460" y="270" width="12" height="45" rx="2" fill="rgba(255,255,255,0.08)"/>
      <rect x="440" y="285" width="12" height="30" rx="2" fill="rgba(255,255,255,0.06)"/>
      {/* Factory roof */}
      <path d="M320 310 L360 285 L400 310" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
      <path d="M360 310 L400 285 L440 310" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
      <path d="M400 310 L440 285 L480 310" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>

      {/* ── SOLAR PANELS ARRAY ── */}
      {/* Row 1 — 3 panels */}
      {[0,1,2].map((col) => (
        <g key={col} transform={`translate(${40 + col * 115}, 170)`}>
          {/* Panel frame */}
          <rect width="105" height="65" rx="3"
            fill="url(#panel)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
          {/* Panel cells grid */}
          <rect width="105" height="65" rx="3" fill="url(#panelShine)"/>
          {[1,2,3,4,5].map((x) => (
            <line key={x} x1={x * 17.5} y1="0" x2={x * 17.5} y2="65"
              stroke="rgba(255,255,255,0.1)" strokeWidth="0.8"/>
          ))}
          {[1,2,3].map((y) => (
            <line key={y} x1="0" y1={y * 16.25} x2="105" y2={y * 16.25}
              stroke="rgba(255,255,255,0.1)" strokeWidth="0.8"/>
          ))}
          {/* Panel shine reflection */}
          <ellipse cx="25" cy="18" rx="18" ry="8" fill="white" opacity="0.06" transform="rotate(-15 25 18)"/>
          {/* Solar mounting legs */}
          <line x1="20" y1="65" x2="15" y2="85" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
          <line x1="85" y1="65" x2="90" y2="85" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
          <line x1="10" y1="85" x2="95" y2="85" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
        </g>
      ))}

      {/* Row 2 — 3 panels (slightly behind) */}
      {[0,1,2].map((col) => (
        <g key={col} transform={`translate(${55 + col * 115}, 280)`}>
          <rect width="105" height="65" rx="3"
            fill="url(#panel)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" opacity="0.85"/>
          <rect width="105" height="65" rx="3" fill="url(#panelShine)" opacity="0.7"/>
          {[1,2,3,4,5].map((x) => (
            <line key={x} x1={x * 17.5} y1="0" x2={x * 17.5} y2="65"
              stroke="rgba(255,255,255,0.08)" strokeWidth="0.8"/>
          ))}
          {[1,2,3].map((y) => (
            <line key={y} x1="0" y1={y * 16.25} x2="105" y2={y * 16.25}
              stroke="rgba(255,255,255,0.08)" strokeWidth="0.8"/>
          ))}
          <line x1="20" y1="65" x2="15" y2="82" stroke="rgba(255,255,255,0.25)" strokeWidth="2"/>
          <line x1="85" y1="65" x2="90" y2="82" stroke="rgba(255,255,255,0.25)" strokeWidth="2"/>
          <line x1="10" y1="82" x2="95" y2="82" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
        </g>
      ))}

      {/* ── FLOATING STAT CARDS ── */}
      {/* Card 1 — économies */}
      <g transform="translate(20, 50)">
        <rect width="130" height="60" rx="10" fill="rgba(255,255,255,0.12)"
          stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
        <rect width="130" height="60" rx="10" fill="rgba(231,111,81,0.15)"/>
        <text x="12" y="22" fill="#F4A261" fontSize="11" fontWeight="600">Économie facture</text>
        <text x="12" y="45" fill="white" fontSize="22" fontWeight="800">-52%</text>
      </g>

      {/* Card 2 — ROI */}
      <g transform="translate(390, 180)">
        <rect width="130" height="60" rx="10" fill="rgba(255,255,255,0.12)"
          stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
        <rect width="130" height="60" rx="10" fill="rgba(45,106,79,0.2)"/>
        <text x="12" y="22" fill="#95d5b2" fontSize="11" fontWeight="600">Retour invest.</text>
        <text x="12" y="45" fill="white" fontSize="22" fontWeight="800">3–5 ans</text>
      </g>

      {/* Card 3 — CO2 */}
      <g transform="translate(20, 380)">
        <rect width="130" height="60" rx="10" fill="rgba(255,255,255,0.1)"
          stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
        <text x="12" y="22" fill="#95d5b2" fontSize="11" fontWeight="600">CO₂ évité/an</text>
        <text x="12" y="45" fill="white" fontSize="22" fontWeight="800">-85 t</text>
      </g>

      {/* Wiring lines */}
      <path d="M145 255 Q145 330 175 345 Q200 355 320 360"
        stroke="#F4A261" strokeWidth="1.5" fill="none" opacity="0.3" strokeDasharray="4 3"/>
      <path d="M260 255 Q280 300 320 330"
        stroke="#F4A261" strokeWidth="1.5" fill="none" opacity="0.2" strokeDasharray="4 3"/>
    </svg>
  );
}
