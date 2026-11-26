import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui";
import { site } from "@/lib/site";
export const metadata: Metadata = { title: "Mentions légales" };
export default function Legal() {
  return (
    <>
      <section className="page-hero legal-hero">
        <Eyebrow>EN TOUTE TRANSPARENCE</Eyebrow>
        <h1>
          Mentions
          <br />
          <em>légales.</em>
        </h1>
      </section>
      <article className="legal-content">
        <h2>Le projet</h2>
        <p>
          BABI JUS est un projet de présentation d’une collection de boissons.
          Le nom et les visuels sont des éléments de conception. Les
          disponibilités, formats et conditions commerciales sont confirmés
          directement avec le contact commercial.
        </p>
        <h2>Contact</h2>
        <p>
          Contact du projet : {site.commercial}.<br />
          Email : <a href={`mailto:${site.email}`}>{site.email}</a>.<br />
          Téléphone : <a href="tel:+2250748733365">{site.phone}</a>.
        </p>
        <h2>Éditeur</h2>
        <p>
          Les informations de la future entité exploitante — dénomination,
          adresse et immatriculation — seront précisées lors de la mise en
          activité commerciale. Ce site ne présente pas de paiement en ligne et
          ne confirme aucune commande automatiquement.
        </p>
        <h2>Hébergement</h2>
        <p>
          Site statique prévu pour être hébergé par GitHub Pages, service de
          GitHub. Informations :{" "}
          <a
            href="https://docs.github.com/fr/pages"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation GitHub Pages
          </a>
          .
        </p>
        <h2>Visuels et contenus</h2>
        <p>
          Les photographies et packagings sont des visuels de conception générés
          ou illustrés. Ils ne constituent pas une photographie contractuelle de
          produits commercialisés. Les informations figurant sur la bouteille
          réellement vendue prévalent pour les ingrédients, allergènes,
          quantités et la conservation.
        </p>
        <h2>Carte de démonstration</h2>
        <p>
          Les points de vente affichés sont fictifs et explicitement identifiés
          comme tels. Ils ne doivent pas être utilisés pour se rendre dans une
          boutique ou déterminer une disponibilité. Les cartes utilisent
          OpenStreetMap et des frontières issues de Natural Earth, avec
          attribution à leurs sources.
        </p>
        <h2>Utilisation du site</h2>
        <p>
          Les contenus présentent le projet et permettent de prendre contact.
          Toute proposition commerciale, livraison ou commande est convenue
          séparément avec le contact du projet.
        </p>
        <p className="legal-updated">
          Dernière mise à jour : 26 novembre 2026.
        </p>
      </article>
    </>
  );
}
