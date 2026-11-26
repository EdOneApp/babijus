import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Leaf, Sun, Heart } from "lucide-react";
import Hero from "@/components/hero";
import FlavorJourney from "@/components/flavor-journey";
import { ButtonLink, Eyebrow, Flower } from "@/components/ui";
export default function Home() {
  return (
    <>
      <Hero />
      <section className="intro section-space">
        <div className="intro-side">
          <Eyebrow>ÇA VIENT DU CŒUR</Eyebrow>
          <span className="tiny-number">01 — L’ESPRIT BABI</span>
        </div>
        <div data-reveal>
          <h2>
            On a mis du soleil
            <br />
            en bouteille.
            <br />
            <em>Et un peu de chez nous.</em>
          </h2>
          <div className="intro-bottom">
            <p>
              Les saveurs qu’on connaît par cœur. Celles qu’on a envie de
              redécouvrir. BABI JUS, c’est une invitation à prendre une pause, à
              partager et à se régaler.
            </p>
            <Flower />
          </div>
        </div>
      </section>
      <div className="marquee" aria-hidden="true">
        <div>
          {Array.from({ length: 4 }, (_, i) => (
            <span key={i}>
              DU FRUIT <Flower /> DU GOÛT <Flower /> DU BABI <Flower />
            </span>
          ))}
        </div>
      </div>
      <FlavorJourney />
      <section className="collection-teaser section-space">
        <div data-reveal>
          <Eyebrow>CHACUN SON PETIT FAIBLE</Eyebrow>
          <h2>
            Plutôt classique
            <br />
            ou <em>curieux ?</em>
          </h2>
          <p>
            Des incontournables aux mélanges qui réveillent les papilles. Il y a
            toujours une nouvelle saveur à explorer.
          </p>
          <ButtonLink href="/nos-jus">Trouve ton bonheur</ButtonLink>
        </div>
        <div className="fruit-collage" aria-hidden="true">
          <Image
            src="/assets/web/ingredients/mangue.webp"
            alt=""
            width={500}
            height={500}
            className="fruit-mango"
          />
          <Image
            src="/assets/web/ingredients/bissap.webp"
            alt=""
            width={400}
            height={400}
            className="fruit-bissap"
          />
          <Image
            src="/assets/web/ingredients/citron.webp"
            alt=""
            width={350}
            height={350}
            className="fruit-lemon"
          />
          <span>
            100%<small>bonne humeur</small>
          </span>
        </div>
      </section>
      <section className="full-photo">
        <Image
          src="/assets/web/lifestyle/abidjan-terrasse.webp"
          alt="Un moment de partage autour de jus fruités sur une terrasse"
          fill
          sizes="100vw"
        />
        <div>
          <Eyebrow>LES MEILLEURS MOMENTS SONT SIMPLES</Eyebrow>
          <h2>
            Ça se partage.
            <br />
            <em>Ça se savoure.</em>
          </h2>
        </div>
      </section>
      <section className="story-teaser section-space">
        <div className="story-photo" data-reveal>
          <Image
            src="/assets/web/lifestyle/fruits-marche.webp"
            alt="Ananas, mangues, gingembre et fruits d’Afrique de l’Ouest"
            fill
            sizes="(max-width:767px) 100vw, 45vw"
          />
          <span className="photo-stamp">
            LE GOÛT
            <br />
            DE CHEZ
            <br />
            NOUS <Sun size={30} />
          </span>
        </div>
        <div data-reveal>
          <Eyebrow>UNE HISTOIRE DE GOÛT</Eyebrow>
          <h2>
            Des racines.
            <br />
            Du caractère.
            <br />
            <em>Et toi, au milieu.</em>
          </h2>
          <p>
            Une marque imaginée avec l’énergie d’Abidjan et l’amour des saveurs
            d’Afrique. Ici, les grands classiques rencontrent les nouvelles
            envies.
          </p>
          <ButtonLink href="/notre-histoire">Découvre l’esprit Babi</ButtonLink>
        </div>
      </section>
      <section className="locator-teaser section-space" data-reveal>
        <Flower />
        <Eyebrow>JAMAIS LOIN D’UNE BONNE PAUSE</Eyebrow>
        <h2>
          On se retrouve
          <br />
          <em>près de chez toi ?</em>
        </h2>
        <ButtonLink href="/points-de-vente">Les bonnes adresses</ButtonLink>
        <p>Côte d’Ivoire, on se retrouve bientôt.</p>
      </section>
    </>
  );
}
