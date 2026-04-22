import type { Metadata } from "next";
import Link from "next/link";
import {
  Landmark, TrendingUp, Shield, CheckCircle2, ArrowRight,
  Clock, Banknote, FileText, Users, Award, ChevronRight,
} from "lucide-react";
import RevealSection from "@/components/RevealSection";

export const metadata: Metadata = {
  title: "Financement Solaire – Crédit vert, Subvention MASEN, Leasing",
  description:
    "Découvrez toutes les options de financement pour votre projet solaire : crédit vert dès 3,9%, subvention MASEN jusqu'à 300 000 MAD, garantie Fonds PME 70%, leasing.",
};

const options = [
  {
    id: "fonds-propres",
    icon: Banknote,
    title: "Fonds propres",
    badge: "ROI maximal",
    badgeColor: "#2D6A4F",
    badgeBg: "#D8F3DC",
    description: "Financement intégral sur ressources propres de l'entreprise.",
    pros: [
      "ROI maximal (pas d'intérêts)",
      "Propriété immédiate",
      "Pas de dossier bancaire",
      "Déductibilité des amortissements",
    ],
    cons: ["Mobilisation importante de trésorerie", "Opportunité coût du capital"],
    bestFor: "Entreprises avec trésorerie solide et IS élevé",
    rate: "0%",
    rateLabel: "Taux d'intérêt",
    highlight: false,
  },
  {
    id: "credit-vert",
    icon: Landmark,
    title: "Crédit vert bancaire",
    badge: "Le plus populaire",
    badgeColor: "#E76F51",
    badgeBg: "#FDE8E1",
    description: "Prêt bancaire dédié aux projets d'efficacité énergétique avec taux bonifiés.",
    pros: [
      "Taux préférentiels 3,9 à 5,2%",
      "Durée 7 à 15 ans",
      "Préservation de la trésorerie",
      "Économies couvrent les mensualités",
      "Garantie Fonds PME jusqu'à 70%",
    ],
    cons: ["Dossier de crédit requis", "Durée d'instruction 3-6 semaines"],
    bestFor: "Majorité des PME industrielles (projet 500K – 5M MAD)",
    rate: "3,9 – 5,2%",
    rateLabel: "Taux annuel",
    highlight: true,
  },
  {
    id: "leasing",
    icon: TrendingUp,
    title: "Leasing solaire",
    badge: "Zéro apport",
    badgeColor: "#40916C",
    badgeBg: "#D8F3DC",
    description: "Location longue durée du système solaire avec option d'achat en fin de contrat.",
    pros: [
      "Zéro apport initial",
      "Loyers 100% déductibles",
      "Hors bilan (améliore les ratios)",
      "Entretien inclus selon formule",
      "Flexibilité en fin de contrat",
    ],
    cons: ["Coût global plus élevé", "Propriété différée"],
    bestFor: "Entreprises avec contraintes bilancielle ou démarrant",
    rate: "5,5 – 7%",
    rateLabel: "Taux effectif global",
    highlight: false,
  },
];

const masenProgram = [
  { step: "1", title: "Éligibilité", desc: "Projet ≥50 kWc, PME marocaine, secteur industriel ou hôtelier." },
  { step: "2", title: "Dossier technique", desc: "Étude de dimensionnement certifiée, devis SolaroPeak." },
  { step: "3", title: "Dossier financier", desc: "Bilans 3 ans, business plan solaire, relevés ONEE." },
  { step: "4", title: "Dépôt MASEN", desc: "Soumission via guichet MASEN ou partenaire agréé." },
  { step: "5", title: "Instruction (45j)", desc: "Examen technique et financier par équipes MASEN." },
  { step: "6", title: "Accord & Installation", desc: "Notification, signature convention, démarrage travaux." },
  { step: "7", title: "Versement subvention", desc: "Paiement à la réception des travaux (PV de mise en service)." },
];

const bankPartners = [
  { name: "CIH Bank", product: "Green Energy Loan", rate: "3,9%", duration: "12 ans" },
  { name: "Attijariwafa Bank", product: "Crédit Vert PME", rate: "4,2%", duration: "10 ans" },
  { name: "BMCE Bank", product: "Eco-Entreprise", rate: "4,5%", duration: "10 ans" },
  { name: "Banque Populaire", product: "Énergie Durable Pro", rate: "4,8%", duration: "8 ans" },
  { name: "Société Générale MA", product: "Cap Vert Industrie", rate: "5,2%", duration: "7 ans" },
];

const fiscalBenefits = [
  { title: "Exonération TVA (20%)", desc: "Équipements solaires exonérés de TVA à l'import et à la fabrication locale.", saving: "20%" },
  { title: "Amortissement accéléré", desc: "Amortissement sur 5 ans (au lieu de 10-15 ans) pour les équipements solaires.", saving: "IS réduit" },
  { title: "Subvention MASEN", desc: "Jusqu'à 300 000 MAD pour projets industriels ≥50 kWc.", saving: "300K MAD" },
  { title: "Déduction IS R&D", desc: "Investissement solaire qualifiable en déduction IS dans certains cas.", saving: "Variable" },
];

export default function FinancementPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 hero-gradient solar-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealSection>
            <div className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full mb-6"
              style={{ background: "rgba(231,111,81,0.2)", border: "1px solid rgba(231,111,81,0.4)", color: "#F4A261" }}>
              <Landmark className="w-4 h-4" />
              Options de financement
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Financez votre projet solaire<br />
              <span style={{ color: "#F4A261" }}>aux meilleures conditions</span>
            </h1>
            <p className="text-white/80 text-xl max-w-3xl mx-auto">
              Taux préférentiels dès 3,9%, subvention MASEN jusqu'à 300 000 MAD,
              et garantie Fonds PME à 70%. Votre projet solaire est finançable dès aujourd'hui.
            </p>
          </RevealSection>

          {/* Quick stats */}
          <RevealSection delay={200} className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-12">
            {[
              { value: "3,9%", label: "Taux minimal" },
              { value: "300K MAD", label: "Subvention MASEN" },
              { value: "70%", label: "Garantie Fonds PME" },
            ].map((s) => (
              <div key={s.value} className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-white/70 text-sm">{s.label}</div>
              </div>
            ))}
          </RevealSection>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comparez les options de financement</h2>
            <p className="text-gray-500 text-lg">Chaque situation est différente. Trouvez la formule qui convient à votre PME.</p>
          </RevealSection>

          <div className="grid lg:grid-cols-3 gap-6">
            {options.map((opt, i) => (
              <RevealSection key={opt.id} delay={i * 120}>
                <div className={`relative rounded-2xl p-8 h-full flex flex-col border-2 transition-shadow hover:shadow-xl ${
                  opt.highlight ? "border-orange-300 shadow-lg" : "border-gray-100"
                }`}
                  style={opt.highlight ? { background: "linear-gradient(135deg, #fffbf9, #fff)" } : {}}>
                  {opt.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 rounded-full text-xs font-bold text-white"
                        style={{ background: "linear-gradient(135deg, #E76F51, #F4A261)" }}>
                        Recommandé
                      </span>
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                        style={{ background: opt.badgeBg }}>
                        <opt.icon className="w-6 h-6" style={{ color: opt.badgeColor }} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{opt.title}</h3>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: opt.badgeBg, color: opt.badgeColor }}>
                      {opt.badge}
                    </span>
                  </div>

                  <div className="text-center p-4 rounded-xl mb-6"
                    style={{ background: opt.badgeBg }}>
                    <div className="text-3xl font-bold" style={{ color: opt.badgeColor }}>{opt.rate}</div>
                    <div className="text-sm" style={{ color: opt.badgeColor }}>{opt.rateLabel}</div>
                  </div>

                  <p className="text-gray-600 text-sm mb-6">{opt.description}</p>

                  <div className="flex-1 space-y-4 mb-6">
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Avantages</div>
                      <ul className="space-y-1.5">
                        {opt.pros.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: opt.badgeColor }} />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Contraintes</div>
                      <ul className="space-y-1.5">
                        {opt.cons.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-sm text-gray-500">
                            <span className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-300">—</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="text-xs text-gray-400 mb-3">
                      <strong className="text-gray-600">Idéal pour :</strong> {opt.bestFor}
                    </div>
                    <Link
                      href="/contact"
                      className="block text-center py-3 rounded-xl font-semibold text-sm transition-all hover:shadow-md"
                      style={opt.highlight
                        ? { background: "linear-gradient(135deg, #E76F51, #F4A261)", color: "white" }
                        : { background: opt.badgeBg, color: opt.badgeColor }
                      }
                    >
                      Choisir cette option
                    </Link>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* MASEN Program */}
      <section style={{ background: "#f8fdf9" }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full mb-6"
                style={{ background: "#D8F3DC", color: "#2D6A4F" }}>
                <Award className="w-4 h-4" />
                Programme MASEN
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Subvention MASEN jusqu'à<br />
                <span style={{ color: "#2D6A4F" }}>300 000 MAD</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Le programme <strong>Solaire Industriel</strong> de MASEN (Agence Marocaine pour
                l'Énergie Durable) subventionne les projets photovoltaïques industriels ≥50 kWc.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { label: "Montant maximal", value: "300 000 MAD", icon: Banknote },
                  { label: "Puissance minimale", value: "50 kWc", icon: TrendingUp },
                  { label: "Délai d'instruction", value: "45 jours", icon: Clock },
                  { label: "Bénéficiaires", value: "PME marocaines tous secteurs", icon: Users },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "#D8F3DC" }}>
                      <item.icon className="w-5 h-5" style={{ color: "#2D6A4F" }} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium">{item.label}</div>
                      <div className="font-semibold text-gray-900">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all hover:shadow-lg hover:scale-105"
                style={{ background: "#2D6A4F" }}
              >
                Monter mon dossier MASEN
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* MASEN Timeline */}
            <div>
              <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5" style={{ color: "#2D6A4F" }} />
                Processus de demande
              </h3>
              <div className="space-y-4">
                {masenProgram.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                        style={{ background: i === masenProgram.length - 1 ? "#E76F51" : "#2D6A4F" }}>
                        {step.step}
                      </div>
                      {i < masenProgram.length - 1 && (
                        <div className="w-0.5 flex-1 mt-2" style={{ background: "#D8F3DC" }} />
                      )}
                    </div>
                    <div className="pb-4">
                      <div className="font-semibold text-gray-900 text-sm">{step.title}</div>
                      <div className="text-gray-500 text-sm mt-0.5">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Banking Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos partenaires bancaires</h2>
            <p className="text-gray-500 text-lg">
              SolaroPeak a négocié des conditions préférentielles avec les principales banques
              marocaines pour ses clients.
            </p>
          </RevealSection>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ background: "#2D6A4F" }}>
                  {["Banque", "Produit", "Taux annuel", "Durée max"].map((h) => (
                    <th key={h} className="text-left px-6 py-4 text-white text-sm font-semibold first:rounded-tl-xl last:rounded-tr-xl">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {bankPartners.map((bank, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">{bank.name}</td>
                    <td className="px-6 py-4 text-gray-600">{bank.product}</td>
                    <td className="px-6 py-4">
                      <span className="font-bold" style={{ color: "#2D6A4F" }}>{bank.rate}</span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{bank.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            * Taux indicatifs. Les conditions définitives dépendent du profil financier de l'entreprise.
          </p>
        </div>
      </section>

      {/* Fiscal benefits */}
      <section style={{ background: "#f8fdf9" }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Avantages fiscaux</h2>
            <p className="text-gray-500 text-lg">
              L'État marocain encourage activement l'investissement solaire via plusieurs dispositifs fiscaux.
            </p>
          </RevealSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fiscalBenefits.map((fb, i) => (
              <RevealSection key={i} delay={i * 100}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-2xl font-bold mb-3" style={{ color: "#E76F51" }}>{fb.saving}</div>
                <h3 className="font-bold text-gray-900 mb-2">{fb.title}</h3>
                <p className="text-sm text-gray-500">{fb.desc}</p>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Fonds PME Guarantee */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="rounded-2xl p-8 md:p-12 border-2"
              style={{ background: "linear-gradient(135deg, #f8fdf9, #fff)", borderColor: "#2D6A4F" }}>
              <div className="flex items-start gap-6 flex-col md:flex-row">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#D8F3DC" }}>
                  <Shield className="w-8 h-8" style={{ color: "#2D6A4F" }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Garantie Fonds de Garantie PME
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Le <strong>Fonds de Garantie PME</strong> (géré par la CCG) garantit jusqu'à{" "}
                    <strong>70% du montant du prêt</strong> bancaire pour les PME investissant dans
                    les énergies renouvelables. Cela réduit le risque pour la banque et facilite
                    l'octroi du crédit même pour les entreprises jeunes.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      { label: "Garantie max", value: "70%" },
                      { label: "Éligibilité", value: "PME <250 salariés" },
                      { label: "Coût garantie", value: "0,5%/an" },
                    ].map((item) => (
                      <div key={item.label} className="text-center p-3 rounded-xl"
                        style={{ background: "#D8F3DC" }}>
                        <div className="font-bold text-lg" style={{ color: "#2D6A4F" }}>{item.value}</div>
                        <div className="text-xs text-gray-500">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Process CTA */}
      <section className="py-16 hero-gradient">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <RevealSection>
            <FileText className="w-10 h-10 mx-auto mb-4 text-white opacity-80" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Votre plan de financement en 48h
            </h2>
            <p className="text-white/80 text-lg mb-8">
              SolaroPeak monte votre dossier de financement complet : choix de la formule,
              relations bancaires, demande MASEN et garantie Fonds PME.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg transition-all hover:shadow-xl hover:scale-105"
                style={{ background: "linear-gradient(135deg, #E76F51, #F4A261)" }}
              >
                Obtenir mon plan de financement
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/simulateur"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-lg border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
                Simuler d'abord
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
