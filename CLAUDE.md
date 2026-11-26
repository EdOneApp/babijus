# BABI JUS — site Next.js

Le site est maintenant construit en Next.js 16 App Router, React 19, TypeScript, export statique GitHub Pages. Lire README.md, brand.md, MOTION.md avant modification. Consulter les guides locaux de node_modules/next/dist/docs pour les API de cette version.

Conserver `output: 'export'`, les 24 chemins statiques et les images non optimisées côté serveur, car GitHub Pages ne fournit pas de runtime Node. Pas de Route Handler dynamique, d’API SMTP ou de Server Action de contact. Le formulaire prépare un message WhatsApp ou un email, sans prétendre l’avoir envoyé.

Le propriétaire a fourni ses coordonnées dans lib/site.ts et a demandé des points fictifs pour la carte. Garder le caractère fictif évident dans l’interface tant que data/stores.json contient des démonstrations. Ne pas inventer de prix, stock, certification, origine exacte ni données d’immatriculation.

Composants d’animation : hero.tsx (GSAP), flavor-journey.tsx (hélice au scroll), bottle-viewer.tsx (Three.js chargé sur action). Préserver les contrôles reduced-motion, la lisibilité des étiquettes et le fallback statique. Nettoyer RAF, observateurs, listeners et textures à chaque démontage.

Le dépôt cible est EdOneApp/babijus, branche main. Domaine babijus.myoctogone.com. Vérifier npm test, npm run build et node scripts/check-export.mjs avant publication. Ne jamais commiter .env, .next, node_modules ou out. Les références d’Accent ne doivent pas être publiées.
