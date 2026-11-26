# BABI JUS — kit créatif et technique

Projet préparé pour une entreprise ivoirienne de jus naturels. Nom proposé : **BABI JUS**, signature « Le goût de chez nous ». Référence visuelle étudiée : https://accentboissons.com/.

## Ce qui est fourni

- `assets/products/` : six bouteilles photographiques détourées (Bissap, Gnamakoudji, Ananas, Mangue, Tomi, Bouye), plus des compositions d’ingrédients complémentaires.
- `assets/ingredients/` : vingt ingrédients séparés, détaillés, sur fond transparent, utilisables indépendamment dans une spirale. Les mélanges réutilisent leurs ingrédients respectifs.
- `assets/labels/` : vingt-quatre étiquettes SVG modifiables et leurs exports PNG 1024 px.
- `assets/models/` : vingt-quatre modèles GLB originaux avec textures intégrées, bouteille, liquide, verre, capsule et étiquette séparés.
- `assets/lifestyle/` : deux scènes photographiques générées, terrasse et marché de fruits.
- `assets/web/` : copies WebP optimisées pour le site, en conservant les originaux PNG.
- `assets/brand/` : logo SVG, favicon et trois compositions hero desktop/mobile/réseaux ; `assets/backgrounds/` : quatre fonds vectoriels texturés.
- `data/products.json` : catalogue, couleurs, chemins et correspondance exacte saveur → ingrédients.
- `brand.md`, `MOTION.md`, `docs/ANALYSE-ACCENT.md`, `docs/SPIRALE.md` : identité, audit, architecture du mouvement et consignes d’intégration.
- `index.html` et `preview/` : laboratoire interactif pour vérifier les assets, le rendu 3D, le choix des parfums et les ingrédients en hélice au scroll. Ce n’est pas une boutique finalisée.
- `scripts/` : génération reproductible des fichiers vectoriels et modèles ; `docs/PROMPTS.md` : prompts des images générées.

## Ouvrir l’aperçu

Depuis ce dossier :

```sh
python3 -m http.server 8124 --bind 127.0.0.1
```

Puis ouvrir http://127.0.0.1:8124/ . Un serveur HTTP est nécessaire pour les modules JavaScript et les GLB ; le double-clic en `file://` ne suffit pas. Toutes les dépendances de l’aperçu sont locales. Three.js est fourni sous licence MIT dans `preview/vendor/THREE-LICENSE.txt`.

## Pour la réalisation du site

Lire CLAUDE.md en premier. Utiliser les compositions de l’audit et la chorégraphie décrite dans MOTION.md. Le point fort demandé est une bouteille animée au scroll, entourée de ses ingrédients en spirale avec passage devant et derrière. L’aperçu fournit cette base fonctionnelle.

Les 24 propositions ne constituent pas une liste exhaustive des jus africains et ne signifient pas que les recettes sont disponibles. Les six PNG sont des photos conceptuelles générées ; les GLB sont des modèles procéduraux de conception, pas des scans industriels de ces images. Pour les 18 autres parfums, les éléments produits fournis sont les étiquettes et les modèles 3D, sans photo générée dédiée. Les fruits orbitaux sont des sprites photographiques 2D avec profondeur, pas des fruits volumétriques.

Le logo est éditable et utilise une police système. Aucune police commerciale d’Accent n’est redistribuée. Les sources téléchargées dans references/ servent uniquement à l’analyse et ne doivent pas être déployées. Les images ont été créées avec l’outil intégré de génération d’images.

Avant commercialisation : confirmer la disponibilité du nom, les vrais produits, les recettes, le packaging, les informations de conservation et les mentions d’étiquetage. Ajouter les données de contact, les prix et les stocks réels au moment de construire le site marchand.
