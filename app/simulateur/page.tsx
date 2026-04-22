import type { Metadata } from "next";
import SimulateurClient from "./SimulateurClient";

export const metadata: Metadata = {
  title: "Simulateur d'économies solaires – Calculez votre ROI",
  description:
    "Calculez gratuitement vos économies potentielles avec le solaire industriel. Estimez puissance kWc, économies annuelles en MAD, ROI et réduction CO₂ pour votre PME.",
};

export default function SimulateurPage() {
  return <SimulateurClient />;
}
