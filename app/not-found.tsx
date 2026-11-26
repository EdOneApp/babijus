import Image from "next/image";
import { ButtonLink, Eyebrow, Flower } from "@/components/ui";
export default function NotFound() {
  return (
    <section className="error-page">
      <div className="error-art">
        <span>
          4<span>0</span>4
        </span>
        <Image
          src="/assets/web/ingredients/orange.webp"
          alt=""
          width={300}
          height={300}
        />
        <Flower />
      </div>
      <Eyebrow>ON A UN PEU PRESSÉ LE MAUVAIS FRUIT</Eyebrow>
      <h1>
        Cette page s’est
        <br />
        <em>fait la malle.</em>
      </h1>
      <p>Mais les bonnes saveurs, elles, sont toujours là.</p>
      <ButtonLink href="/">Retour au soleil</ButtonLink>
    </section>
  );
}
