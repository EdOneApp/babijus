import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Wordmark, Flower } from "./ui";
import { site } from "@/lib/site";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <p>
          Un peu de soleil
          <br />
          dans ta boîte à idées.
        </p>
        <Link href="/contact" className="footer-contact">
          On se parle <ArrowUpRight />
        </Link>
        <Flower />
      </div>
      <div className="footer-grid">
        <div>
          <p className="eyebrow">NÉ D’UNE ENVIE DE CHEZ NOUS</p>
          <p>
            Des fruits, du caractère
            <br />
            et l’esprit d’Abidjan.
          </p>
        </div>
        <nav aria-label="Explorer">
          <Link href="/nos-jus">Toutes les saveurs</Link>
          <Link href="/notre-histoire">L’esprit Babi</Link>
          <Link href="/points-de-vente">Les bonnes adresses</Link>
        </nav>
        <nav aria-label="Informations">
          <Link href="/professionnels">Devenir revendeur</Link>
          <Link href="/faq">Les petites questions</Link>
          <Link href="/contact">Nous contacter</Link>
          {site.instagram && (
            <a href={site.instagram} target="_blank" rel="noopener noreferrer">
              Instagram ↗
            </a>
          )}
        </nav>
        <div className="footer-location">
          <span className="ci-flag" />
          Côte d’Ivoire
          <br />
          <small>Le goût de chez nous.</small>
        </div>
      </div>
      <Link
        href="/"
        className="footer-wordmark"
        aria-label="Retour à l’accueil"
      >
        <Wordmark large />
      </Link>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} BABI JUS</span>
        <div>
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/confidentialite">Confidentialité</Link>
        </div>
        <span>À savourer, tout simplement.</span>
      </div>
    </footer>
  );
}
