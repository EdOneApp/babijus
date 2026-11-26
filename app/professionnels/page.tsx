import type { Metadata } from "next";
import Image from "next/image";
import { Eyebrow, ButtonLink, Flower } from "@/components/ui";
export const metadata: Metadata = { title: "Professionnels & revendeurs" };
export default function Professionals() {
  return (
    <>
      <section className="page-hero pro-hero">
        <Eyebrow>CAFÉS · RESTAURANTS · BOUTIQUES · ÉVÉNEMENTS</Eyebrow>
        <h1>
          Un peu de Babi
          <br />
          <em>dans tes projets.</em>
        </h1>
        <p>
          Tu as un lieu, une idée, une occasion à célébrer ?<br />
          Faisons connaissance.
        </p>
        <ButtonLink href="/contact?objet=professionnel">
          Parlons de ton projet
        </ButtonLink>
        <Flower />
      </section>
      <section className="pro-intro section-space">
        <Image
          src="/assets/web/lifestyle/abidjan-terrasse.webp"
          alt="Une table conviviale sur une terrasse"
          width={1200}
          height={800}
          sizes="(max-width:767px) 100vw,50vw"
        />
        <div data-reveal>
          <Eyebrow>LES BONNES RENCONTRES</Eyebrow>
          <h2>
            Des saveurs
            <br />
            qui ont <em>leur place.</em>
          </h2>
          <p>
            À la carte d’un restaurant, dans le frigo d’une boutique ou autour
            d’un événement : explorons ensemble les possibilités pour ton
            activité.
          </p>
        </div>
      </section>
      <section className="steps section-space">
        <Eyebrow>ON FAIT SIMPLE</Eyebrow>
        <h2>
          Trois pas pour
          <br />
          <em>faire connaissance.</em>
        </h2>
        {[
          [
            "Raconte-nous ton idée",
            "Ton activité, ta ville, les saveurs qui te tentent et les quantités envisagées.",
          ],
          [
            "On échange ensemble",
            "Disponibilités, formats et conditions : on précise ce qui correspond à ton besoin.",
          ],
          [
            "On prépare la suite",
            "Une proposition adaptée à ton projet, avant toute confirmation de commande.",
          ],
        ].map(([t, d], i) => (
          <div className="step" key={t}>
            <span>0{i + 1}</span>
            <h3>{t}</h3>
            <p>{d}</p>
          </div>
        ))}
      </section>
      <section className="center-cta section-space">
        <Flower />
        <h2>
          Les belles idées
          <br />
          <em>commencent par bonjour.</em>
        </h2>
        <ButtonLink href="/contact?objet=professionnel">
          On se parle ?
        </ButtonLink>
      </section>
    </>
  );
}
