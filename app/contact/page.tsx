import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact – Demandez votre étude solaire gratuite",
  description:
    "Contactez SolaroPeak pour votre projet solaire industriel. Étude gratuite sous 48h. Bureau à Casablanca. Disponible par téléphone, email et WhatsApp.",
};

export default function ContactPage() {
  return <ContactClient />;
}
