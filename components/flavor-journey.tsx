"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { featured, asset } from "@/lib/products";
import { Eyebrow } from "./ui";
export default function FlavorJourney() {
  const root = useRef<HTMLElement>(null),
    bottle = useRef<HTMLDivElement>(null),
    orbit = useRef<HTMLDivElement>(null),
    progressLine = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(0);
  const indexRef = useRef(0);
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = root.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const p = Math.max(
        0,
        Math.min(0.99999, -rect.top / (el.offsetHeight - innerHeight)),
      );
      const index = Math.floor(p * featured.length);
      if (index !== indexRef.current) {
        indexRef.current = index;
        setActive(index);
      }
      const local = (p * featured.length) % 1;
      if (progressLine.current)
        progressLine.current.style.transform = `scaleX(${p})`;
      if (bottle.current)
        bottle.current.style.transform = reduced
          ? "none"
          : `translateY(${Math.sin(local * Math.PI * 2) * 8}px) rotate(${Math.sin(local * Math.PI * 2) * 4}deg)`;
      const width = innerWidth < 768 ? 90 : 145;
      orbit.current
        ?.querySelectorAll<HTMLElement>(".orbit-fruit")
        .forEach((el, i) => {
          const phase = i / 7;
          const theta =
            phase * Math.PI * 3.2 + (reduced ? 0 : local * Math.PI * 4);
          const z = Math.cos(theta);
          el.style.transform = `translate3d(${Math.sin(theta) * width}px,${-200 + phase * 400}px,0) rotate(${Math.sin(theta) * 18}deg) scale(${0.8 + (z + 1) * 0.15})`;
          el.style.zIndex = z > 0 ? "5" : "1";
          el.style.opacity = String(z > 0 ? 1 : 0.65);
        });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  useEffect(() => {
    window.dispatchEvent(new Event("scroll"));
  }, [active]);
  const p = featured[active];
  return (
    <section
      id="les-saveurs"
      className="flavor-journey"
      ref={root}
      aria-label="Découvrir nos six saveurs classiques"
    >
      <div
        className="flavor-stage"
        style={{ "--flavor": p.color } as React.CSSProperties}
      >
        <div className="flavor-stage-bg" />
        <div className="journey-top">
          <Eyebrow>LES CLASSIQUES DE CHEZ NOUS</Eyebrow>
          <span>
            0{active + 1} <span>/ 06</span>
          </span>
        </div>
        <div className="journey-content" key={p.id}>
          <div className="journey-title">
            <span className="tiny-number">LE GOÛT A DU CARACTÈRE</span>
            <h2>
              {p.name}
              <span>.</span>
            </h2>
            <p>{p.ingredientConcept}</p>
            <span className="flavor-note">{p.tastingNotes}</span>
          </div>
          <div className="journey-bottle-space">
            <div className="orbit" ref={orbit} aria-hidden="true">
              {Array.from({ length: 7 }, (_, i) => (
                <div className="orbit-fruit" key={i}>
                  <Image
                    src={asset(
                      p.ingredients[i % p.ingredients.length].imageWeb,
                    )}
                    alt=""
                    width={200}
                    height={200}
                  />
                </div>
              ))}
              <div className="journey-bottle" ref={bottle}>
                <Image
                  src={asset(p.photoWeb!)}
                  alt={`Bouteille BABI JUS ${p.name}`}
                  width={900}
                  height={1350}
                  sizes="(max-width:767px) 55vw, 33vw"
                />
              </div>
            </div>
            <div className="bottle-shadow" />
          </div>
          <div className="journey-description">
            <h3>{p.short}</h3>
            <p>{p.description}</p>
            <Link href={`/nos-jus/${p.id}`} className="text-link">
              Fais connaissance <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
        <div className="journey-bottom">
          <span>
            FAIS DÉFILER LES SAVEURS <ArrowDown size={13} />
          </span>
          <div className="journey-track">
            <span ref={progressLine} />
          </div>
          <Link href="/nos-jus">
            Toute la collection <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
