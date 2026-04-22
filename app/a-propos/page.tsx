import type { Metadata } from "next";
import Link from "next/link";
import {
  Award, Users, Leaf, Zap, Shield, CheckCircle2, ArrowRight,
  Target, Eye, Heart, Building2, Sun,
} from "lucide-react";
import RevealSection from "@/components/RevealSection";
import AnimatedCounter from "@/components/AnimatedCounter";

export const metadata: Metadata = {
  title: "À propos – Notre histoire, certifications et équipe",
  description:
    "SolaroPeak (AlaqPowerSolutions) – Installateur agréé ANRE spécialisé en solaire industriel au Maroc. Découvrez notre histoire, nos certifications et notre équipe d'ingénieurs.",
};

const certifications = [
  {
    name: "Agréé ANRE",
    desc: "Autorisation d'exercer délivrée par l'Autorité Nationale de Régulation de l'Électricité",
    color: "#2D6A4F",
    bg: "#D8F3DC",
  },
  {
    name: "Partenaire MASEN",
    desc: "Installateur référencé par l'Agence Marocaine pour l'Énergie Durable",
    color: "#E76F51",
    bg: "#FDE8E1",
  },
  {
    name: "ISO 9001:2015",
    desc: "Système de management de la qualité certifié pour l'installation de systèmes solaires",
    color: "#40916C",
    bg: "#D8F3DC",
  },
  {
    name: "CEI 62446",
    desc: "Conformité aux normes internationales de test et documentation des systèmes PV",
    color: "#2D6A4F",
    bg: "#D8F3DC",
  },
];

const team = [
  {
    name: "Youssef Al-Aqil",
    role: "Directeur Général & Co-fondateur",
    expertise: "Ingénieur en énergie renouvelable, 15 ans d'expérience en solaire industriel",
    initials: "YA",
    color: "#2D6A4F",
  },
  {
    name: "Nadia Benali",
    role: "Directrice Technique",
    expertise: "Ingénieure PV, spécialiste dimensionnement PVsyst, ancienne SIE",
    initials: "NB",
    color: "#E76F51",
  },
  {
    name: "Khalid Mansouri",
    role: "Responsable Commercial PME",
    expertise: "10 ans dans le financement d'entreprises, expert crédit vert et subventions",
    initials: "KM",
    color: "#40916C",
  },
  {
    name: "Sanae Idrissi",
    role: "Ingénieure Études & Projets",
    expertise: "Simulation PV, audits énergétiques, normes ANRE et raccordements ONEE",
    initials: "SI",
    color: "#2D6A4F",
  },
  {
    name: "Omar El Fassi",
    role: "Chef de Chantier Senior",
    expertise: "12 ans d'installation industrielle, habilitations B2V, H1, BR",
    initials: "OE",
    color: "#E76F51",
  },
  {
    name: "Rim Cherkaoui",
    role: "Responsable SAV & Monitoring",
    expertise: "Ingénieure systèmes, supervision des plateformes de monitoring temps réel",
    initials: "RC",
    color: "#40916C",
  },
];

const milestones = [
  { year: "2017", event: "Fondation de AlaqPowerSolutions à Casablanca", detail: "Premiers projets résidentiels et tertiaires" },
  { year: "2019", event: "Obtention de l'agrément ANRE", detail: "Habilitation pour installations industrielles >50 kWc" },
  { year: "2020", event: "Premier projet industriel 100 kWc", detail: "Minoterie à Meknès – ROI atteint en 4 ans" },
  { year: "2021", event: "Partenariat MASEN officiel", detail: "Référencé comme installateur agréé pour le programme solaire industriel" },
  { year: "2022", event: "Lancement de la marque SolaroPeak", detail: "Repositionnement exclusif sur les PME industrielles" },
  { year: "2023", event: "Certification ISO 9001:2015", detail: "Systèmes de management qualité certifiés" },
  { year: "2024", event: "85 installations réalisées, 12 MWc cumulés", detail: "Présence dans toutes les régions du Maroc" },
];

const values = [
  { icon: Target, title: "Expertise technique", desc: "Nos ingénieurs dimensionnent chaque projet avec des outils de simulation certifiés (PVsyst, PVsol) pour garantir le rendement promis." },
  { icon: Shield, title: "Transparence totale", desc: "Devis détaillés, rapports de performance mensuels, ROI calculé et contractualisé. Pas de surprises." },
  { icon: Heart, title: "Engagement long terme", desc: "Nous ne disparaissons pas après l'installation. Nos contrats de maintenance assurent votre performance 10, 15, 25 ans." },
  { icon: Eye, title: "Innovation continue", desc: "Veille technologique permanente sur les nouveaux modules, onduleurs et systèmes de stockage pour vous proposer le meilleur." },
];

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 hero-gradient solar-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center">
            <div className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full mb-6"
              style={{ background: "rgba(231,111,81,0.2)", border: "1px solid rgba(231,111,81,0.4)", color: "#F4A261" }}>
              <Building2 className="w-4 h-4" />
              Notre histoire
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Nous aidons les PME marocaines<br />
              <span style={{ color: "#F4A261" }}>à prendre leur indépendance énergétique</span>
            </h1>
            <p className="text-white/80 text-xl max-w-3xl mx-auto">
              Depuis 2017, SolaroPeak (AlaqPowerSolutions) accompagne les industriels marocains
              dans leur transition énergétique avec rigueur, transparence et expertise.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Key figures */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: 85, suffix: "+", label: "Installations réalisées", icon: Building2, color: "#2D6A4F" },
              { value: 12000, suffix: " kWc", label: "Puissance installée", icon: Zap, color: "#E76F51" },
              { value: 7200, suffix: " t", label: "CO₂ évité par an", icon: Leaf, color: "#40916C" },
              { value: 45, suffix: "M MAD", label: "Économies générées", icon: Award, color: "#2D6A4F" },
            ].map((stat, i) => (
              <RevealSection key={i} delay={i * 100}
                className="text-center p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: stat.color + "15" }}>
                  <stat.icon className="w-7 h-7" style={{ color: stat.color }} />
                </div>
                <div className="text-4xl font-bold mb-2" style={{ color: stat.color }}>
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ background: "#f8fdf9" }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealSection>
              <div className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full mb-6"
                style={{ background: "#D8F3DC", color: "#2D6A4F" }}>
                <Sun className="w-4 h-4" />
                Notre mission
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Rendre l&apos;énergie solaire accessible<br />
                <span style={{ color: "#2D6A4F" }}>à toutes les PME industrielles</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                La hausse structurelle des tarifs ONEE représente une menace réelle pour
                la compétitivité des entreprises marocaines. Notre mission est de transformer
                cette contrainte en opportunité grâce au solaire photovoltaïque.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                SolaroPeak ne se contente pas d'installer des panneaux. Nous sommes votre
                partenaire énergétique de long terme : dimensionnement, financement,
                installation et suivi sur 25 ans.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Agréé ANRE depuis 2019",
                  "7 ans d'expertise industrielle",
                  "Présent dans 12+ régions",
                  "Equipe de 35 techniciens",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "#2D6A4F" }} />
                    {item}
                  </div>
                ))}
              </div>
            </RevealSection>

            {/* Visual: story panel */}
            <RevealSection delay={200}>
              <div className="relative">
                <div className="rounded-2xl p-8"
                  style={{ background: "linear-gradient(135deg, #1B4332, #2D6A4F)" }}>
                  <div className="text-white/60 text-sm font-semibold uppercase tracking-wide mb-6">Notre ADN</div>
                  <div className="space-y-6">
                    {[
                      { label: "Client au centre", pct: 100 },
                      { label: "Rigueur technique", pct: 98 },
                      { label: "Transparence financière", pct: 95 },
                      { label: "Innovation continue", pct: 90 },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-white font-medium">{item.label}</span>
                          <span style={{ color: "#95d5b2" }}>{item.pct}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <div className="h-2 rounded-full"
                            style={{ width: `${item.pct}%`, background: "linear-gradient(90deg, #95d5b2, #F4A261)" }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos valeurs</h2>
          </RevealSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <RevealSection key={i} delay={i * 100}
                className="service-card bg-white border border-gray-100 rounded-2xl p-6 text-center hover:border-green-200">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "#D8F3DC" }}>
                  <v.icon className="w-7 h-7" style={{ color: "#2D6A4F" }} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: "#f8fdf9" }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre parcours</h2>
          </RevealSection>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5" style={{ background: "#D8F3DC" }} />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <RevealSection key={i} delay={i * 80} className="flex gap-8 items-start pl-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xs font-bold text-white flex-shrink-0 relative z-10"
                      style={{ background: i % 2 === 0 ? "#2D6A4F" : "#E76F51" }}>
                      {m.year}
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-5 flex-1 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="font-bold text-gray-900 mb-1">{m.event}</div>
                    <div className="text-gray-500 text-sm">{m.detail}</div>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Agréments</h2>
            <p className="text-gray-500 text-lg">
              Nos qualifications garantissent la conformité et la qualité de chaque installation.
            </p>
          </RevealSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <RevealSection key={i} delay={i * 100}
                className="bg-white rounded-2xl p-6 border-2 text-center hover:shadow-lg transition-shadow"
                style={{ borderColor: cert.color + "30" }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: cert.bg }}>
                  <Award className="w-8 h-8" style={{ color: cert.color }} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{cert.desc}</p>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ background: "#f8fdf9" }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre équipe</h2>
            <p className="text-gray-500 text-lg">
              Des ingénieurs et techniciens passionnés, dédiés à votre réussite énergétique.
            </p>
          </RevealSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <RevealSection key={i} delay={i * 100}
                className="service-card bg-white rounded-2xl p-6 border border-gray-100 hover:border-green-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}99)` }}>
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{member.name}</h3>
                    <div className="text-sm font-medium" style={{ color: member.color }}>{member.role}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-500">{member.expertise}</p>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-gradient">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <RevealSection>
            <Users className="w-10 h-10 mx-auto mb-4 text-white opacity-80" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Rejoignez nos 85+ clients satisfaits
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Chaque projet est unique. Nos ingénieurs vous accompagnent de A à Z
              pour garantir le retour sur investissement que vous méritez.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg transition-all hover:shadow-xl hover:scale-105"
              style={{ background: "linear-gradient(135deg, #E76F51, #F4A261)" }}
            >
              Discuter de mon projet
              <ArrowRight className="w-5 h-5" />
            </Link>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
