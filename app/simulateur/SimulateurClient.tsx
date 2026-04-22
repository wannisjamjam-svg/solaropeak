"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, BarChart, Bar,
} from "recharts";
import {
  Zap, MapPin, Building2, Ruler, ArrowRight, TrendingDown,
  Leaf, Sun, BarChart3, Mail,
} from "lucide-react";

// Solar irradiance by city (kWh/kWp/year)
const CITIES: Record<string, { irr: number; label: string }> = {
  casablanca:   { irr: 1650, label: "Casablanca" },
  marrakech:    { irr: 1900, label: "Marrakech" },
  fes:          { irr: 1700, label: "Fès" },
  tanger:       { irr: 1580, label: "Tanger" },
  agadir:       { irr: 2000, label: "Agadir" },
  oujda:        { irr: 1800, label: "Oujda" },
  rabat:        { irr: 1620, label: "Rabat" },
  meknes:       { irr: 1750, label: "Meknès" },
  laayoune:     { irr: 2200, label: "Laâyoune" },
};

// Tariff by sector (MAD/kWh)
const SECTORS: Record<string, { tariff: number; label: string }> = {
  agro:      { tariff: 1.12, label: "Agro-industrie" },
  textile:   { tariff: 1.08, label: "Textile" },
  hotel:     { tariff: 1.18, label: "Hôtellerie" },
  plastics:  { tariff: 1.05, label: "Plastique & Chimie" },
  metal:     { tariff: 1.10, label: "Métallurgie" },
  logistics: { tariff: 1.02, label: "Logistique" },
  other:     { tariff: 1.07, label: "Autre industrie" },
};

const ONEE_INCREASE = 0.05; // 5%/year forecast
const DEGRADATION   = 0.005; // 0.5%/year panel degradation
const CO2_FACTOR    = 0.64;  // kg CO2/kWh (Morocco grid)

function compute(consumption: number, city: string, sector: string, roofArea: number) {
  if (!consumption || !city || !sector) return null;

  const { irr }    = CITIES[city];
  const { tariff } = SECTORS[sector];

  // Sizing: daily consumption → peak power
  const dailyKwh   = consumption / 30;
  const peakSun    = irr / 365;
  const systemEff  = 0.80; // losses: wiring, inverter, shading
  const kWcNeeded  = dailyKwh / (peakSun * systemEff);

  // Area check (7m² per kWp roughly)
  const kWcByRoof  = roofArea > 0 ? roofArea / 7 : kWcNeeded;
  const kWcFinal   = Math.min(kWcNeeded, kWcByRoof);

  // Annual production
  const annualProd = kWcFinal * irr * systemEff;

  // Self-consumption ratio (80% typical for industrial sites)
  const selfConsumption = 0.80;
  const usedProd   = annualProd * selfConsumption;

  // Annual savings (year 1)
  const annualSavingsMad = usedProd * tariff;

  // CO2 savings
  const co2Annual  = usedProd * CO2_FACTOR;

  // Cost estimate (MAD/kWc installed, turnkey industrial)
  const costPerKwc = 8000; // MAD
  const totalCost  = kWcFinal * costPerKwc;

  // ROI
  const roi = totalCost / annualSavingsMad;

  // 10-year projection
  const years = Array.from({ length: 11 }, (_, i) => {
    const yearProd   = annualProd * Math.pow(1 - DEGRADATION, i);
    const yearTariff = tariff * Math.pow(1 + ONEE_INCREASE, i);
    const yearSolar  = yearProd * selfConsumption * tariff; // fixed at install tariff
    const yearONEE   = consumption * 12 * yearTariff;
    const cumulSaving = usedProd * tariff * i; // simplified cumulative
    return {
      year: `An ${i}`,
      "Coût ONEE (MAD)": Math.round(yearONEE),
      "Coût solaire (MAD)": Math.round(totalCost + (i > 0 ? 500 * kWcFinal * 0.01 : 0)), // maintenance
      "Économie cumulée (MAD)": Math.round(cumulSaving),
      savings: Math.round(yearSolar),
    };
  });

  return {
    kWcFinal: Math.round(kWcFinal * 10) / 10,
    annualProd: Math.round(annualProd),
    annualSavingsMad: Math.round(annualSavingsMad),
    co2Annual: Math.round(co2Annual / 10) / 100, // tonnes
    roi: Math.round(roi * 10) / 10,
    totalCost: Math.round(totalCost),
    coverageRatio: Math.round((usedProd / (consumption * 12)) * 100),
    years,
  };
}

const CUSTOM_TOOLTIP_STYLE = {
  background: "#fff",
  border: "1px solid #e5e7eb",
  borderRadius: "12px",
  padding: "12px 16px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
};

export default function SimulateurClient() {
  const [form, setForm] = useState({
    consumption: "",
    sector: "",
    city: "",
    roofArea: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [emailForm, setEmailForm] = useState({ email: "", nom: "" });
  const [emailSent, setEmailSent] = useState(false);

  const result = useMemo(() => {
    if (!submitted) return null;
    return compute(
      parseFloat(form.consumption),
      form.city,
      form.sector,
      parseFloat(form.roofArea) || 0
    );
  }, [submitted, form]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Email study request:", { ...emailForm, simulation: result, form });
    setEmailSent(true);
  }

  function handleReset() {
    setSubmitted(false);
    setEmailSent(false);
    setForm({ consumption: "", sector: "", city: "", roofArea: "" });
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 hero-gradient solar-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full mb-6"
            style={{ background: "rgba(231,111,81,0.2)", border: "1px solid rgba(231,111,81,0.4)", color: "#F4A261" }}>
            <BarChart3 className="w-4 h-4" />
            Simulateur gratuit
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Calculez vos économies solaires
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            En 2 minutes, estimez votre puissance idéale, vos économies annuelles
            et votre retour sur investissement.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-10 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <Sun className="w-5 h-5" style={{ color: "#E76F51" }} />
              Renseignez votre situation
            </h2>
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6">
              {/* Consumption */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1.5">
                  <Zap className="w-4 h-4" style={{ color: "#2D6A4F" }} />
                  Consommation mensuelle ONEE (kWh)
                </label>
                <input
                  type="number"
                  min="1000"
                  max="2000000"
                  required
                  placeholder="ex. 50 000"
                  value={form.consumption}
                  onChange={(e) => setForm({ ...form, consumption: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 text-gray-900 text-base"
                  style={{ "--tw-ring-color": "#2D6A4F" } as React.CSSProperties}
                />
                <p className="text-xs text-gray-400 mt-1">Visible sur votre facture ONEE mensuelle</p>
              </div>

              {/* Sector */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1.5">
                  <Building2 className="w-4 h-4" style={{ color: "#2D6A4F" }} />
                  Secteur d&apos;activité
                </label>
                <select
                  required
                  value={form.sector}
                  onChange={(e) => setForm({ ...form, sector: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 text-gray-900 bg-white text-base"
                >
                  <option value="">Choisir un secteur</option>
                  {Object.entries(SECTORS).map(([k, v]) => (
                    <option key={k} value={k}>{v.label}</option>
                  ))}
                </select>
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" style={{ color: "#2D6A4F" }} />
                  Ville / Région
                </label>
                <select
                  required
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 text-gray-900 bg-white text-base"
                >
                  <option value="">Choisir une ville</option>
                  {Object.entries(CITIES).map(([k, v]) => (
                    <option key={k} value={k}>{v.label}</option>
                  ))}
                </select>
              </div>

              {/* Roof area */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1.5">
                  <Ruler className="w-4 h-4" style={{ color: "#2D6A4F" }} />
                  Surface de toiture disponible (m²)
                </label>
                <input
                  type="number"
                  min="50"
                  max="50000"
                  placeholder="ex. 2 000 (optionnel)"
                  value={form.roofArea}
                  onChange={(e) => setForm({ ...form, roofArea: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 text-gray-900 text-base"
                />
                <p className="text-xs text-gray-400 mt-1">Laissez vide pour ignorer la contrainte toiture</p>
              </div>

              <div className="sm:col-span-2 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 rounded-xl font-bold text-white text-lg transition-all hover:shadow-xl hover:scale-105 flex items-center gap-2 justify-center"
                  style={{ background: "linear-gradient(135deg, #E76F51, #F4A261)" }}
                >
                  Calculer mes économies
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>

          {/* Results */}
          {submitted && result && (
            <div id="results" className="space-y-8">
              {/* KPI Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    icon: Sun,
                    label: "Puissance recommandée",
                    value: `${result.kWcFinal} kWc`,
                    sub: `${result.annualProd.toLocaleString("fr-FR")} kWh/an produits`,
                    color: "#2D6A4F",
                    bg: "#D8F3DC",
                  },
                  {
                    icon: TrendingDown,
                    label: "Économie annuelle",
                    value: `${result.annualSavingsMad.toLocaleString("fr-FR")} MAD`,
                    sub: `Couverture ${result.coverageRatio}% de votre conso`,
                    color: "#E76F51",
                    bg: "#FDE8E1",
                  },
                  {
                    icon: BarChart3,
                    label: "Retour sur investissement",
                    value: `${result.roi} ans`,
                    sub: `Invest. estimé : ${(result.totalCost / 1000).toFixed(0)}K MAD`,
                    color: "#40916C",
                    bg: "#D8F3DC",
                  },
                  {
                    icon: Leaf,
                    label: "CO₂ évité",
                    value: `${result.co2Annual} t/an`,
                    sub: "Équiv. ~50 arbres plantés",
                    color: "#2D6A4F",
                    bg: "#D8F3DC",
                  },
                ].map((kpi, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: kpi.bg }}>
                      <kpi.icon className="w-5 h-5" style={{ color: kpi.color }} />
                    </div>
                    <div className="text-2xl font-bold mb-1" style={{ color: kpi.color }}>
                      {kpi.value}
                    </div>
                    <div className="text-xs font-semibold text-gray-700 mb-0.5">{kpi.label}</div>
                    <div className="text-xs text-gray-400">{kpi.sub}</div>
                  </div>
                ))}
              </div>

              {/* Charts */}
              <div className="grid lg:grid-cols-2 gap-6">
                {/* ONEE vs Solar cost over 10 years */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-1">Coût énergétique sur 10 ans</h3>
                  <p className="text-xs text-gray-400 mb-6">MAD/an – ONEE vs. coût solaire total</p>
                  <ResponsiveContainer width="100%" height={240}>
                    <AreaChart data={result.years}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                      <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} />
                      <Tooltip
                        contentStyle={CUSTOM_TOOLTIP_STYLE}
                        formatter={(v: number) => [`${v.toLocaleString("fr-FR")} MAD`, ""]}
                      />
                      <Legend />
                      <Area type="monotone" dataKey="Coût ONEE (MAD)"
                        stroke="#E76F51" fill="#FDE8E1" strokeWidth={2} />
                      <Area type="monotone" dataKey="Coût solaire (MAD)"
                        stroke="#2D6A4F" fill="#D8F3DC" strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* Annual savings */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-1">Économies annuelles projetées</h3>
                  <p className="text-xs text-gray-400 mb-6">MAD – avec hausse ONEE +5%/an</p>
                  <ResponsiveContainer width="100%" height={240}>
                    <BarChart data={result.years.slice(1)}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                      <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} />
                      <Tooltip
                        contentStyle={CUSTOM_TOOLTIP_STYLE}
                        formatter={(v: number) => [`${v.toLocaleString("fr-FR")} MAD`, "Économie"]}
                      />
                      <Bar dataKey="savings" name="Économie (MAD)" fill="#2D6A4F" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-700">
                <strong>Estimation indicative.</strong> Ces chiffres sont calculés sur la base de données
                moyennes (irradiance locale, tarifs ONEE sectoriels). Une étude personnalisée avec visite
                technique permet d&apos;affiner ces résultats de ±15%.
              </div>

              {/* Email CTA */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                {!emailSent ? (
                  <>
                    <div className="flex items-center gap-3 mb-2">
                      <Mail className="w-5 h-5" style={{ color: "#E76F51" }} />
                      <h3 className="font-bold text-gray-900">Recevoir mon étude détaillée par email</h3>
                    </div>
                    <p className="text-gray-500 text-sm mb-6">
                      Nos ingénieurs préparent une étude complète avec les marques de matériel,
                      le plan de financement et les démarches MASEN — gratuitement.
                    </p>
                    <form onSubmit={handleEmailSubmit} className="grid sm:grid-cols-3 gap-4">
                      <input
                        required
                        type="text"
                        placeholder="Votre nom"
                        value={emailForm.nom}
                        onChange={(e) => setEmailForm({ ...emailForm, nom: e.target.value })}
                        className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 text-gray-900"
                      />
                      <input
                        required
                        type="email"
                        placeholder="Votre email professionnel"
                        value={emailForm.email}
                        onChange={(e) => setEmailForm({ ...emailForm, email: e.target.value })}
                        className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 text-gray-900"
                      />
                      <button
                        type="submit"
                        className="px-6 py-3 rounded-xl font-bold text-white transition-all hover:shadow-lg flex items-center justify-center gap-2"
                        style={{ background: "linear-gradient(135deg, #E76F51, #F4A261)" }}
                      >
                        <Mail className="w-4 h-4" />
                        Envoyer
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                      style={{ background: "#D8F3DC" }}>
                      <svg className="w-6 h-6" style={{ color: "#2D6A4F" }} viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1">Demande envoyée !</h4>
                    <p className="text-gray-500 text-sm">
                      Vous recevrez votre étude détaillée sous 48h ouvrées.
                    </p>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg transition-all hover:shadow-xl hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #E76F51, #F4A261)" }}
                >
                  Démarrer mon projet maintenant
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button
                  onClick={handleReset}
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-green-400 hover:bg-green-50 transition-all"
                  style={{ color: "#2D6A4F" }}
                >
                  Refaire une simulation
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
