# babijus

Site BABI JUS construit avec **Next.js 16, React 19 et TypeScript**, exporté en site statique pour GitHub Pages.

## Développement

```sh
npm ci
npm run dev
```

## Vérifier et prévisualiser la production

```sh
npm test
npm run build
npm run typecheck
node scripts/check-export.mjs
npm start
```

Le serveur de prévisualisation ouvre http://127.0.0.1:3000. Choisir un autre port avec `PORT=8125 npm start`. Le dossier publié est `out/` ; il est généré par le build et ne doit pas être commité.

## Pages et fonctionnalités

- Accueil avec bouteilles photoréalistes, mouvements au scroll et six saveurs mises en scène dans un parcours sticky. Ingrédients indépendants en spirale avec passage devant et derrière la bouteille.
- Catalogue des 24 propositions de saveurs avec recherche sans accents, filtres et fiches individuelles.
- Vue 3D à 360° activée à la demande sur chaque fiche, avec fallback statique si WebGL n’est pas disponible.
- Histoire, professionnels, contact, FAQ, mentions légales et confidentialité.
- Carte interactive de Côte d’Ivoire, recherche, sélection par ville, marqueurs, liste synchronisée et géolocalisation facultative.
- Menu mobile avec gestion du focus, navigation clavier, liens d’évitement et mode de mouvements réduits.
- Page 404, gestion d’erreur React, état de chargement, métadonnées, Open Graph, robots et sitemap.
- Polices libres Fraunces et Manrope hébergées localement, images WebP optimisées, 3D chargée uniquement à la demande.

## Coordonnées et données

`lib/site.ts` contient les coordonnées fournies : Daniel Guedegbe, `danielguedegbe10027@gmail.com`, WhatsApp `+225 07 48 73 33 65`.

Le formulaire ne requiert pas de serveur : il prépare le message dans WhatsApp ou l’application email. L’utilisateur le relit et confirme lui-même l’envoi. Il ne simule pas une demande reçue.

**Les 12 points dans `data/stores.json` sont fictifs**, à la demande du porteur du projet. La carte, les fiches et les mentions le signalent explicitement. Remplacer ces données par les véritables adresses avant d’annoncer un réseau commercial réel. Le drapeau `demo` est obligatoire pour les points de démonstration. La publication ne signifie pas que ces commerces existent.

`data/products.json` rassemble les 24 propositions de saveurs, couleurs et ingrédients. `lib/products.ts` ajoute les textes et catégories. Six photos conceptuelles sont disponibles ; les autres visuels sont des illustrations du packaging. Aucun prix, stock ou bénéfice santé n’est inventé. Les recettes, mentions alimentaires et disponibilités se confirment avec le producteur.

BABI JUS reste un nom de conception : un nom proche existe déjà dans les boissons. Voir `brand.md`. Les informations d’immatriculation et de l’entité exploitante n’ont pas été fournies ; la page de mentions le précise.

## Publication GitHub Pages

Dépôt : https://github.com/EdOneApp/babijus

Le workflow `.github/workflows/deploy.yml` vérifie, compile, charge `out/` puis déploie sur Pages à chaque push sur `main`. Choisir **GitHub Actions** comme source dans Settings → Pages. GitHub Pages doit être disponible pour la visibilité et l’offre du dépôt.

Domaine prévu : **babijus.myoctogone.com**. Le fichier `public/CNAME` est fourni ; pour un déploiement Actions, configurer aussi le domaine dans les paramètres Pages. Le DNS du sous-domaine doit pointer en CNAME vers `edoneapp.github.io`. Activer HTTPS lorsque GitHub a émis le certificat. `NEXT_PUBLIC_SITE_URL` permet de changer les URLs de sitemap et métadonnées.

Les originaux générés sont dans `assets/`, leurs versions utilisées par le site dans `public/assets/`. `references/` et l’ancien laboratoire HTML sont exclus du dépôt et de la publication. Le kit d’assets d’origine est documenté dans `docs/KIT-ASSETS.md`.

## Licences et services

Fraunces et Manrope : SIL Open Font License, fichiers dans `public/fonts/`. Three.js et Leaflet : licences distribuées avec les dépendances. Données cartographiques OpenStreetMap avec attribution visible ; frontière Natural Earth. Aucune image, modèle, police commerciale ou script d’Accent n’est utilisé dans le site. L’audit est conservé dans `docs/ANALYSE-ACCENT.md`.
