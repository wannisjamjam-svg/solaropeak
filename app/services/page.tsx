import type { Metadata } from "next";
import Link from "next/link";
import {
  ClipboardList, Wrench, MonitorSmartphone, FileCheck,
  ArrowRight, CheckCircle2, Clock, Shield, Zap, Sun,
  BarChart3, Settings, Phone, ChevronRight,
} from "lucide-react";
import RevealSection from "@/components/RevealSection";

export const metadata: Metadata = {
  title: "Nos Services – Audit, Installation, SAV Solaire",
  description:
    "SolaroPeak offre un service complet : audit énergétique, installation photovoltaïque clé en main (>50 kWc), maintenance avec monitoring temps réel et accompagnement administratif MASEN.",
};

const services = [
  {
    id: "audit",
    icon: ClipboardList,
    color: "#2D6A4F",
    bg: "#D8F3DC",
    title: "Audit énergétique & Dimensionnement",
    subtitle: "La base d'un projet rentable",
    description:
      "Avant toute installation, nos ingénieurs analysent en détail votre consommation, vos factures ONEE et votre infrastructure pour concevoir la solution la plus performante.",
    features: [
      "Analyse complète des 12 derniers mois de factures ONEE",
      "Visite technique du site (toiture, structure, tableau électrique)",
      "Simulation de production PVsol ou PVsyst",
      "Étude de rentabilité avec ROI personnalisé",
      "Rapport de dimensionnement certifié ANRE",
      "Délai : 48h à 5 jours selon complexité",
    ],
    deliverable: "Rapport d'étude complet",
    duration: "48h – 5 jours",
    cta: "Demander un audit gratuit",
  },
  {
    id: "installation",
    icon: Wrench,
    color: "#E76F51",
    bg: "#FDE8E1",
    title: "Installation clé en main (>50 kWc)",
    subtitle: "Votre centrale solaire, sans stress",
    description:
      "De la conception à la mise en service, nos techniciens certifiés gèrent l'intégralité du chantier. Spécialisés dans l'autoconsommation industrielle, nous minimisons l'interruption de votre production.",
    features: [
      "Modules premium (rendement ≥22%, garantie 25 ans)",
      "Onduleurs industriels SMA, Fronius, Huawei",
      "Structure de montage galvanisée anti-corrosion",
      "Coffrets AC/DC, câblage BT, protection foudre",
      "Raccordement réseau conforme ONEE/ANRE",
      "Mise en service avec tests de performance",
    ],
    deliverable: "Centrale solaire opérationnelle",
    duration: "2 à 6 semaines",
    cta: "Obtenir un devis",
  },
  {
    id: "maintenance",
    icon: MonitorSmartphone,
    color: "#40916C",
    bg: "#D8F3DC",
    title: "Maintenance & Suivi SAV",
    subtitle: "Votre performance protégée 24/7",
    description:
      "Un système solaire mal entretenu peut perdre jusqu'à 20% de sa performance. Notre offre de maintenance inclut un monitoring en temps réel et une intervention rapide en cas d'anomalie.",
    features: [
      "Monitoring temps réel (web + application mobile)",
      "Alertes automatiques en cas d'anomalie",
      "Maintenance préventive semestrielle (nettoyage, vérification)",
      "Intervention corrective sous 48h",
      "Rapport mensuel de performance",
      "Gestion des garanties fabricants",
    ],
    deliverable: "Contrat de maintenance annuel",
    duration: "Contrat annuel renouvelable",
    cta: "Souscrire une maintenance",
  },
  {
    id: "administratif",
    icon: FileCheck,
    color: "#F4A261",
    bg: "#FEF3E8",
    title: "Accompagnement administratif",
    subtitle: "Simplifiez les démarches complexes",
    description:
      "Les procédures ANRE, MASEN et les exonérations fiscales peuvent être complexes. Notre équipe administrative vous guide à chaque étape pour maximiser vos aides et subventions.",
    features: [
      "Dossier de demande de subvention MASEN (jusqu'à 300 000 MAD)",
      "Déclaration ANRE pour systèmes >50 kWc",
      "Exonération TVA sur équipements solaires",
      "Montage dossier crédit vert (CIH, Attijariwafa, BMCE)",
      "Demande garantie Fonds PME (jusqu'à 70%)",
      "Suivi des dossiers jusqu'à déblocage des fonds",
    ],
    deliverable: "Dossiers administratifs complets",
    duration: "1 à 3 mois selon organismes",
    cta: "En savoir plus",
  },
];

const guarantees = [
  { icon: Shield, label: "Garantie 10 ans", desc: "Sur l'installation complète" },
  { icon: Sun, label: "Garantie 25 ans", desc: "Performance des panneaux" },
  { icon: Clock, label: "Intervention 48h", desc: "En cas de panne" },
  { icon: Zap, label: "Rendement garanti", desc: "Contractualisé à la mise en service" },
];

const sectors = [
  { name: "Agro-industrie", icon: "🌾", examples: "Minoteries, huileries, conserveries, abattoirs" },
  { name: "Textile", icon: "🧵", examples: "Filatures, teintureries, confection, lavanderies" },
  { name: "Hôtellerie", icon: "🏨", examples: "Hôtels, resorts, complexes touristiques, spas" },
  { name: "Plastique & Chimie", icon: "⚗️", examples: "Plasturgistes, fabricants d'emballages" },
  { name: "Métallurgie", icon: "⚙️", examples: "Fonderies, tôleries, usinage, traitement surface" },
  { name: "Logistique", icon: "📦", examples: "Entrepôts, plateformes, centres de distribution" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 hero-gradient solar-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealSection>
            <div className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full mb-6"
              style={{ background: "rgba(231,111,81,0.2)", border: "1px solid rgba(231,111,81,0.4)", color: "#F4A261" }}>
              <Settings className="w-4 h-4" />
              Nos services
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Une solution complète,<br />
              <span style={{ color: "#F4A261" }}>de l&apos;audit à la maintenance</span>
            </h1>
            <p className="text-white/80 text-xl max-w-3xl mx-auto">
              SolaroPeak prend en charge l&apos;intégralité de votre projet solaire industriel :
              dimensionnement, installation, financement et suivi longue durée.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, i) => (
              <div key={service.id} id={service.id}>
                <RevealSection
                  className={`grid lg:grid-cols-2 gap-16 items-center ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full mb-6"
                      style={{ background: service.bg, color: service.color }}>
                      <service.icon className="w-4 h-4" />
                      {service.subtitle}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.description}</p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: service.color }} />
                          <span className="text-gray-700 text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-6 mb-8">
                      <div className="text-sm">
                        <span className="font-semibold text-gray-700">Livrable :</span>{" "}
                        <span className="text-gray-500">{service.deliverable}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold text-gray-700">Délai :</span>{" "}
                        <span className="text-gray-500">{service.duration}</span>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:shadow-lg hover:scale-105"
                      style={{ background: service.color }}
                    >
                      {service.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Visual */}
                  <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="rounded-2xl p-10 flex items-center justify-center min-h-64"
                      style={{ background: `linear-gradient(135deg, ${service.bg}, white)`, border: `2px solid ${service.color}20` }}>
                      <div className="text-center">
                        <div className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6"
                          style={{ background: service.color }}>
                          <service.icon className="w-12 h-12 text-white" />
                        </div>
                        <div className="text-5xl font-bold mb-2" style={{ color: service.color }}>
                          {i === 0 ? "48h" : i === 1 ? ">50 kWc" : i === 2 ? "24/7" : "300K MAD"}
                        </div>
                        <div className="text-gray-500 text-sm">
                          {i === 0 ? "Délai de réponse" : i === 1 ? "Puissance minimale" : i === 2 ? "Monitoring continu" : "Subvention MASEN"}
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealSection>

                {i < services.length - 1 && (
                  <div className="border-b border-gray-100 mt-24" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section style={{ background: "#f8fdf9" }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Nos garanties</h2>
          </RevealSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((g, i) => (
              <RevealSection key={i} delay={i * 100}
                className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "#D8F3DC" }}>
                  <g.icon className="w-6 h-6" style={{ color: "#2D6A4F" }} />
                </div>
                <div className="font-bold text-gray-900 mb-1">{g.label}</div>
                <div className="text-sm text-gray-500">{g.desc}</div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Secteurs accompagnés</h2>
            <p className="text-gray-500 text-lg">
              Notre expertise couvre tous les secteurs industriels fortement consommateurs d&apos;électricité.
            </p>
          </RevealSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((s, i) => (
              <RevealSection key={i} delay={i * 80}
                className="service-card bg-white border border-gray-100 rounded-2xl p-6 hover:border-green-200">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{s.name}</h3>
                <p className="text-sm text-gray-500">{s.examples}</p>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-gradient">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <RevealSection>
            <h2 className="text-3xl font-bold text-white mb-4">
              Vous avez une question sur nos services ?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Nos ingénieurs sont disponibles pour répondre à toutes vos questions et
              réaliser une première évaluation gratuite de votre projet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg transition-all hover:shadow-xl hover:scale-105"
                style={{ background: "linear-gradient(135deg, #E76F51, #F4A261)" }}
              >
                Démarrer mon projet
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+212600000000"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-lg border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all"
              >
                <Phone className="w-5 h-5" />
                Appeler maintenant
              </a>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Process breadcrumb */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-500">
            <span className="font-medium text-gray-700">Parcours client :</span>
            {["Audit gratuit", "Dimensionnement", "Financement", "Installation", "Suivi SAV"].map((step, i, arr) => (
              <span key={step} className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full font-medium"
                  style={{ background: "#D8F3DC", color: "#2D6A4F" }}>
                  {step}
                </span>
                {i < arr.length - 1 && <ChevronRight className="w-4 h-4 text-gray-300" />}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
