import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export function Wordmark({ large = false }: { large?: boolean }) {
  return (
    <span className={`wordmark ${large ? "wordmark-large" : ""}`}>
      babi<span className="wordmark-dot">.</span>
      <span className="wordmark-small">JUS</span>
    </span>
  );
}
export function ButtonLink({
  href,
  children,
  light = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`button ${light ? "button-light" : ""} ${className}`}
    >
      <span>{children}</span>
      <ArrowUpRight size={18} />
    </Link>
  );
}
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      <span />
      {children}
    </p>
  );
}
export function Flower({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`flower ${className}`}
      aria-hidden="true"
      viewBox="0 0 100 100"
    >
      <path
        d="M50 4C68-5 75 16 69 29C91 20 105 40 84 51C108 66 87 85 70 73C78 96 56 108 49 84C35 105 14 88 26 70C3 76-5 53 18 47C-3 32 15 14 33 27C25 6 43-3 50 4Z"
        fill="currentColor"
      />
      <circle cx="50" cy="50" r="9" fill="var(--cream)" />
    </svg>
  );
}
