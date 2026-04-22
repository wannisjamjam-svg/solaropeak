import Link from "next/link";
import { Sun, Mail, Phone, MapPin, Linkedin, Facebook, Instagram, ArrowRight } from "lucide-react";

const services = [
  { href: "/services#audit", label: "Audit énergétique" },
  { href: "/services#installation", label: "Installation clé en main" },
  { href: "/services#maintenance", label: "Maintenance & SAV" },
  { href: "/services#administratif", label: "Accompagnement administratif" },
];

const pages = [
  { href: "/simulateur", label: "Simulateur d'économies" },
  { href: "/financement", label: "Solutions de financement" },
  { href: "/a-propos", label: "À propos de nous" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#1B4332" }} className="text-white">
      {/* CTA Banner */}
      <div style={{ background: "linear-gradient(135deg, #E76F51, #F4A261)" }} className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">Prêt à réduire votre facture énergétique ?</h3>
            <p className="text-white/90 mt-1">Obtenez votre étude de dimensionnement gratuite sous 48h.</p>
          </div>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105 whitespace-nowrap"
            style={{ color: "#E76F51" }}
          >
            Demander une étude gratuite
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #E76F51, #F4A261)" }}>
                <Sun className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-xl">
                Solaro<span style={{ color: "#F4A261" }}>Peak</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Installateur agréé ANRE spécialisé dans l&apos;énergie solaire photovoltaïque
              pour les PME industrielles marocaines.
            </p>
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-5">
              {["Agréé ANRE", "Certifié MASEN", "ISO 9001"].map((badge) => (
                <span key={badge}
                  className="text-xs px-3 py-1 rounded-full border font-medium"
                  style={{ borderColor: "#40916C", color: "#95d5b2" }}>
                  {badge}
                </span>
              ))}
            </div>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: <Linkedin className="w-4 h-4" />, href: "#", label: "LinkedIn" },
                { icon: <Facebook className="w-4 h-4" />, href: "#", label: "Facebook" },
                { icon: <Instagram className="w-4 h-4" />, href: "#", label: "Instagram" },
              ].map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-orange-500"
                  style={{ background: "rgba(255,255,255,0.08)" }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-5 pb-2 border-b" style={{ borderColor: "#40916C" }}>
              Nos Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href}
                    className="text-white/70 text-sm hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors"
                      style={{ background: "#40916C" }}></span>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-semibold text-white mb-5 pb-2 border-b" style={{ borderColor: "#40916C" }}>
              Navigation
            </h4>
            <ul className="space-y-3">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href}
                    className="text-white/70 text-sm hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "#40916C" }}></span>
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-5 pb-2 border-b" style={{ borderColor: "#40916C" }}>
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#F4A261" }} />
                <span className="text-white/70 text-sm">
                  Boulevard Zerktouni, Casablanca 20000, Maroc
                </span>
              </li>
              <li>
                <a href="tel:+212600000000"
                  className="flex items-center gap-3 text-white/70 text-sm hover:text-white transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "#F4A261" }} />
                  +212 6 00 00 00 00
                </a>
              </li>
              <li>
                <a href="mailto:contact@solaropeak.ma"
                  className="flex items-center gap-3 text-white/70 text-sm hover:text-white transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "#F4A261" }} />
                  contact@solaropeak.ma
                </a>
              </li>
              <li>
                <a href="https://wa.me/212600000000"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all hover:shadow-md"
                  style={{ background: "#25D366", color: "white" }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "#2D6A4F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} SolaroPeak (AlaqPowerSolutions). Tous droits réservés.
          </p>
          <div className="flex gap-4">
            {["Mentions légales", "Politique de confidentialité", "CGV"].map((item) => (
              <Link key={item} href="#"
                className="text-white/50 text-xs hover:text-white/80 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
