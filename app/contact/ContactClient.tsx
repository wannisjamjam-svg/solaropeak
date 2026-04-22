"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone, Mail, MapPin, Clock, MessageCircle, Send,
  CheckCircle2, ArrowRight, Building2, Zap, User, FileText,
} from "lucide-react";
import RevealSection from "@/components/RevealSection";

const SECTORS = [
  "Agro-industrie", "Textile", "Hôtellerie", "Plastique & Chimie",
  "Métallurgie", "Logistique", "Autre industrie",
];

const CONSUMPTION_RANGES = [
  "Moins de 10 000 kWh/mois",
  "10 000 – 50 000 kWh/mois",
  "50 000 – 200 000 kWh/mois",
  "200 000 – 500 000 kWh/mois",
  "Plus de 500 000 kWh/mois",
  "Je ne sais pas encore",
];

type FormData = {
  nom: string;
  entreprise: string;
  secteur: string;
  email: string;
  telephone: string;
  consommation: string;
  message: string;
  rgpd: boolean;
};

const INITIAL: FormData = {
  nom: "", entreprise: "", secteur: "", email: "",
  telephone: "", consommation: "", message: "", rgpd: false,
};

export default function ContactClient() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function set(field: keyof FormData, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log("Contact form submitted:", form);
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 hero-gradient solar-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealSection>
            <div className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full mb-6"
              style={{ background: "rgba(231,111,81,0.2)", border: "1px solid rgba(231,111,81,0.4)", color: "#F4A261" }}>
              <Mail className="w-4 h-4" />
              Contactez-nous
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Démarrez votre projet solaire<br />
              <span style={{ color: "#F4A261" }}>avec une étude gratuite</span>
            </h1>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">
              Remplissez le formulaire ci-dessous. Nos ingénieurs vous recontactent
              sous 48h avec une première analyse personnalisée.
            </p>
          </RevealSection>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Contact info sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Contact details */}
              <RevealSection className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-5">Nos coordonnées</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "#D8F3DC" }}>
                      <Phone className="w-5 h-5" style={{ color: "#2D6A4F" }} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium mb-0.5">Téléphone</div>
                      <a href="tel:+212600000000"
                        className="font-semibold text-gray-900 hover:text-green-700 transition-colors">
                        +212 6 00 00 00 00
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "#FDE8E1" }}>
                      <MessageCircle className="w-5 h-5" style={{ color: "#E76F51" }} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium mb-0.5">WhatsApp</div>
                      <a href="https://wa.me/212600000000"
                        target="_blank" rel="noopener noreferrer"
                        className="font-semibold text-gray-900 hover:text-orange-500 transition-colors">
                        +212 6 00 00 00 00
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "#D8F3DC" }}>
                      <Mail className="w-5 h-5" style={{ color: "#2D6A4F" }} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium mb-0.5">Email</div>
                      <a href="mailto:contact@solaropeak.ma"
                        className="font-semibold text-gray-900 hover:text-green-700 transition-colors">
                        contact@solaropeak.ma
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "#D8F3DC" }}>
                      <MapPin className="w-5 h-5" style={{ color: "#2D6A4F" }} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium mb-0.5">Adresse</div>
                      <div className="font-semibold text-gray-900 text-sm leading-snug">
                        Boulevard Zerktouni, Casablanca 20000, Maroc
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "#D8F3DC" }}>
                      <Clock className="w-5 h-5" style={{ color: "#2D6A4F" }} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium mb-0.5">Horaires</div>
                      <div className="text-sm text-gray-700">
                        <div>Lun – Ven : 08h30 – 18h00</div>
                        <div>Sam : 09h00 – 13h00</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </RevealSection>

              {/* WhatsApp CTA */}
              <RevealSection delay={100}>
                <a
                  href="https://wa.me/212600000000?text=Bonjour%2C%20je%20souhaite%20une%20étude%20solaire%20pour%20mon%20entreprise."
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-5 rounded-2xl text-white font-semibold transition-all hover:shadow-lg hover:scale-105"
                  style={{ background: "#25D366" }}
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current flex-shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <div>
                    <div>Écrire sur WhatsApp</div>
                    <div className="text-white/80 text-xs font-normal">Réponse en moins d'1h</div>
                  </div>
                </a>
              </RevealSection>

              {/* Map placeholder */}
              <RevealSection delay={150}>
                <div className="rounded-2xl overflow-hidden border border-gray-200">
                  <div className="h-48 flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #D8F3DC, #95d5b2)" }}>
                    <div className="text-center">
                      <MapPin className="w-10 h-10 mx-auto mb-2" style={{ color: "#2D6A4F" }} />
                      <div className="font-semibold text-sm" style={{ color: "#2D6A4F" }}>
                        Casablanca, Maroc
                      </div>
                      <a
                        href="https://maps.google.com/?q=Casablanca+Morocco"
                        target="_blank" rel="noopener noreferrer"
                        className="text-xs underline mt-1 block" style={{ color: "#40916C" }}
                      >
                        Voir sur Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </RevealSection>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <RevealSection delay={100}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  {!submitted ? (
                    <>
                      <h2 className="text-xl font-bold text-gray-900 mb-2">Formulaire de contact</h2>
                      <p className="text-gray-500 text-sm mb-8">
                        Tous les champs marqués * sont obligatoires. Réponse garantie sous 48h ouvrées.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name + Company */}
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              <User className="w-4 h-4 inline mr-1.5" style={{ color: "#2D6A4F" }} />
                              Nom complet *
                            </label>
                            <input
                              required
                              type="text"
                              placeholder="Mohammed Alaoui"
                              value={form.nom}
                              onChange={(e) => set("nom", e.target.value)}
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              <Building2 className="w-4 h-4 inline mr-1.5" style={{ color: "#2D6A4F" }} />
                              Entreprise *
                            </label>
                            <input
                              required
                              type="text"
                              placeholder="Industrie Atlas SARL"
                              value={form.entreprise}
                              onChange={(e) => set("entreprise", e.target.value)}
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900"
                            />
                          </div>
                        </div>

                        {/* Email + Phone */}
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              <Mail className="w-4 h-4 inline mr-1.5" style={{ color: "#2D6A4F" }} />
                              Email professionnel *
                            </label>
                            <input
                              required
                              type="email"
                              placeholder="m.alaoui@entreprise.ma"
                              value={form.email}
                              onChange={(e) => set("email", e.target.value)}
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              <Phone className="w-4 h-4 inline mr-1.5" style={{ color: "#2D6A4F" }} />
                              Téléphone *
                            </label>
                            <input
                              required
                              type="tel"
                              placeholder="+212 6 XX XX XX XX"
                              value={form.telephone}
                              onChange={(e) => set("telephone", e.target.value)}
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900"
                            />
                          </div>
                        </div>

                        {/* Sector + Consumption */}
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Secteur d&apos;activité
                            </label>
                            <select
                              value={form.secteur}
                              onChange={(e) => set("secteur", e.target.value)}
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 bg-white"
                            >
                              <option value="">Choisir...</option>
                              {SECTORS.map((s) => <option key={s}>{s}</option>)}
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              <Zap className="w-4 h-4 inline mr-1.5" style={{ color: "#2D6A4F" }} />
                              Consommation mensuelle ONEE
                            </label>
                            <select
                              value={form.consommation}
                              onChange={(e) => set("consommation", e.target.value)}
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 bg-white"
                            >
                              <option value="">Choisir...</option>
                              {CONSUMPTION_RANGES.map((r) => <option key={r}>{r}</option>)}
                            </select>
                          </div>
                        </div>

                        {/* Message */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            <FileText className="w-4 h-4 inline mr-1.5" style={{ color: "#2D6A4F" }} />
                            Message (optionnel)
                          </label>
                          <textarea
                            rows={4}
                            placeholder="Décrivez votre projet, vos contraintes, vos questions..."
                            value={form.message}
                            onChange={(e) => set("message", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 resize-none"
                          />
                        </div>

                        {/* RGPD */}
                        <div className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            id="rgpd"
                            required
                            checked={form.rgpd}
                            onChange={(e) => set("rgpd", e.target.checked)}
                            className="mt-1 w-4 h-4 rounded border-gray-300 cursor-pointer"
                            style={{ accentColor: "#2D6A4F" }}
                          />
                          <label htmlFor="rgpd" className="text-sm text-gray-500 cursor-pointer">
                            J&apos;accepte que SolaroPeak conserve mes données pour traiter ma demande et
                            me recontacter. Conformément à la loi 09-08 sur la protection des données
                            personnelles au Maroc.
                          </label>
                        </div>

                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg transition-all hover:shadow-xl disabled:opacity-70"
                          style={{ background: loading ? "#ccc" : "linear-gradient(135deg, #E76F51, #F4A261)" }}
                        >
                          {loading ? (
                            <>
                              <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                              </svg>
                              Envoi en cours...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              Envoyer ma demande d&apos;étude gratuite
                            </>
                          )}
                        </button>
                      </form>
                    </>
                  ) : (
                    /* Success state */
                    <div className="text-center py-12">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                        style={{ background: "#D8F3DC" }}>
                        <CheckCircle2 className="w-10 h-10" style={{ color: "#2D6A4F" }} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        Demande envoyée avec succès !
                      </h3>
                      <p className="text-gray-500 text-lg mb-2">
                        Merci <strong>{form.nom}</strong>, votre demande a bien été reçue.
                      </p>
                      <p className="text-gray-400 mb-8">
                        Un ingénieur SolaroPeak vous contactera sous <strong>48h ouvrées</strong>{" "}
                        à l&apos;adresse <strong>{form.email}</strong>.
                      </p>
                      <div className="grid sm:grid-cols-3 gap-4 mb-10 text-sm">
                        {[
                          { icon: CheckCircle2, label: "Confirmation par email" },
                          { icon: Phone, label: "Appel dans 48h" },
                          { icon: FileText, label: "Étude personnalisée" },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-2 justify-center p-3 rounded-xl"
                            style={{ background: "#f8fdf9" }}>
                            <item.icon className="w-4 h-4" style={{ color: "#2D6A4F" }} />
                            <span className="text-gray-600">{item.label}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                          href="/simulateur"
                          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-md"
                          style={{ background: "#D8F3DC", color: "#2D6A4F" }}
                        >
                          Simuler mes économies
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => { setSubmitted(false); }}
                          className="px-6 py-3 rounded-xl font-semibold text-gray-600 border border-gray-200 hover:bg-gray-50 transition-colors"
                        >
                          Envoyer une autre demande
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ quick */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900">Questions fréquentes</h2>
          </RevealSection>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                q: "L'étude est-elle vraiment gratuite ?",
                a: "Oui, complètement. L'audit et le rapport de dimensionnement sont offerts, sans obligation de commande.",
              },
              {
                q: "Combien de temps prend une installation ?",
                a: "De 2 à 6 semaines selon la puissance. Les travaux se planifient pour ne pas perturber votre production.",
              },
              {
                q: "Faut-il un apport pour bénéficier du crédit vert ?",
                a: "Non obligatoire. Avec la garantie Fonds PME (70%), certaines banques financent à 100%.",
              },
              {
                q: "L'installation solaire nécessite-t-elle une autorisation ?",
                a: "Oui, une déclaration ANRE est requise pour les systèmes >50 kWc. SolaroPeak gère ce dossier.",
              },
            ].map((faq, i) => (
              <RevealSection key={i} delay={i * 80}
                className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-500">{faq.a}</p>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
