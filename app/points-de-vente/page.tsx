import type { Metadata } from "next";
import StoreMap from "@/components/store-map";
import { Eyebrow, ButtonLink } from "@/components/ui";
import "leaflet/dist/leaflet.css";
export const metadata: Metadata = {
  title: "Où nous trouver",
  description:
    "Explorez la carte de démonstration du réseau BABI JUS en Côte d’Ivoire.",
};
export default function Locations() {
  return (
    <>
      <section className="page-hero map-hero">
        <Eyebrow>LE GOÛT DE CHEZ NOUS, PRÈS DE CHEZ TOI</Eyebrow>
        <h1>
          Les bonnes
          <br />
          <em>adresses.</em>
        </h1>
        <p>Une envie de Babi ? Explorons la Côte d’Ivoire.</p>
      </section>
      <section className="map-section">
        <StoreMap />
      </section>
      <section className="center-cta section-space">
        <Eyebrow>ET SI ON SE RETROUVAIT CHEZ TOI ?</Eyebrow>
        <h2>
          Tu veux faire partie
          <br />
          <em>de l’aventure ?</em>
        </h2>
        <ButtonLink href="/professionnels">Devenir revendeur</ButtonLink>
      </section>
    </>
  );
}
