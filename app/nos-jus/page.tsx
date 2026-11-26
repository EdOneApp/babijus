import type { Metadata } from "next";
import Catalog from "@/components/catalog";
import { Eyebrow, Flower } from "@/components/ui";
export const metadata: Metadata = {
  title: "Toutes les saveurs",
  description:
    "Bissap, gnamakoudji, fruits tropicaux et mélanges : découvrez la collection BABI JUS.",
};
export default function Products() {
  return (
    <>
      <section className="page-hero catalog-hero">
        <Eyebrow>LE PLUS DUR, C’EST DE CHOISIR</Eyebrow>
        <h1>
          À chaque envie,
          <br />
          <em>sa saveur.</em>
        </h1>
        <div className="page-hero-bottom">
          <p>
            Les grands classiques, les fruits qu’on aime
            <br />
            et les rencontres qui font sourire.
          </p>
          <Flower />
        </div>
      </section>
      <section className="catalog-section">
        <Catalog />
      </section>
      <aside className="small-banner">
        <p>Un café, un restaurant, une grande idée ?</p>
        <a href="/professionnels">Fais entrer Babi chez toi ↗</a>
      </aside>
    </>
  );
}
