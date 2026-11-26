"use client";
import Link from "next/link";
import { RefreshCw, ArrowUpRight } from "lucide-react";
export default function ErrorPage({
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return (
    <section className="error-page">
      <span className="error-code">Oups.</span>
      <p className="eyebrow">PETITE PAUSE IMPRÉVUE</p>
      <h1>
        On reprend
        <br />
        <em>une gorgée ?</em>
      </h1>
      <p>Quelque chose ne s’est pas passé comme prévu. Réessayons.</p>
      <div className="error-actions">
        <button className="button" onClick={() => retry()}>
          Réessayer <RefreshCw size={17} />
        </button>
        <Link href="/" className="text-link">
          Retour à l’accueil <ArrowUpRight size={17} />
        </Link>
      </div>
    </section>
  );
}
