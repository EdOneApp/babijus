"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Wordmark } from "./ui";
import { orderHref } from "@/lib/site";
const links = [
  ["Les saveurs", "/nos-jus"],
  ["Notre histoire", "/notre-histoire"],
  ["Où nous trouver", "/points-de-vente"],
];
export default function Header() {
  const [open, setOpen] = useState(false),
    [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const toggle = useRef<HTMLButtonElement>(null),
    menu = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menu.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (e.key === "Tab") {
        const els = menu.current?.querySelectorAll<HTMLElement>("a,button");
        if (!els?.length) return;
        const first = els[0],
          last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", key);
    };
  }, [open]);
  return (
    <>
      <header
        className={`site-header ${scrolled ? "is-scrolled" : ""} ${pathname !== "/" ? "on-inner" : ""}`}
      >
        <Link
          href="/"
          className="logo-link"
          aria-label="BABI JUS, accueil"
          onClick={() => setOpen(false)}
        >
          <Wordmark />
        </Link>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {links.map(([name, path]) => (
            <Link
              href={path}
              key={path}
              aria-current={pathname.startsWith(path) ? "page" : undefined}
            >
              {name}
              <span />
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link href={orderHref()} className="order-link">
            On se régale ? <ArrowUpRight size={16} />
          </Link>
          <button
            className="menu-toggle"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            ref={toggle}
            onClick={() => setOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </header>
      {open && (
        <div
          className="mobile-menu"
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu principal"
          ref={menu}
        >
          <button
            className="menu-close"
            onClick={() => {
              setOpen(false);
              toggle.current?.focus();
            }}
            aria-label="Fermer le menu"
          >
            <X />
          </button>
          <p className="eyebrow">UN PEU DE BABI PAR ICI</p>
          {[...links, ["Parlons-nous", "/contact"]].map(([name, path], i) => (
            <Link href={path} key={path} onClick={() => setOpen(false)}>
              <small>0{i + 1}</small>
              {name}
              <ArrowUpRight />
            </Link>
          ))}
          <p>Le goût de chez nous. Le sourire en plus.</p>
        </div>
      )}
    </>
  );
}
