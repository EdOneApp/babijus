# Brief de réalisation — BABI JUS

Réaliser un site vitrine commercial ivoirien très visuel à partir du kit. Référence : Accent Boissons pour la mise en scène 3D, le rythme au scroll, la typographie monumentale et les surfaces colorées. Les compositions, contenus et éléments de marque doivent rester ceux de BABI JUS.

## Pages et sections

Accueil immersif : quatre bouteilles en profondeur, mot-symbole monumental en HTML, slogan et CTA « Découvrir les saveurs ». En-tête sobre, logo et bouton Commander si un vrai canal a été fourni. Chargement progressif avec fallback immédiatement lisible.

Parcours des six vedettes : Bissap, Gnamakoudji, Ananas, Mangue, Tomi, Bouye. Une section sticky par produit, bouteille au centre, titre et notes à gauche, phrase courte à droite. Les ingrédients respectifs orbitent en hélice autour du produit au scroll. Les objets avant/arrière partagent une scène 3D pour une occlusion correcte. Les détails de recette ne doivent être publiés qu’après validation par le producteur.

Collection : vingt-quatre propositions de saveurs, filtres « Classiques », « Fruits », « Mélanges », possibilité de fiche produit à terme. Ne pas charger vingt-quatre scènes en parallèle. Les fiches peuvent utiliser un rendu statique du GLB quand aucune photo spécifique n’existe.

Univers : photos éditoriales fruits et terrasse, histoire courte de marque, origine réelle à compléter. Les photos actuelles sont des concepts générés. Contact et distribution : ne placer sur la carte que les véritables points de vente fournis. Ne pas inventer de boutiques à Abidjan.

Footer : identité, contacts réels, mentions, confidentialité, réseaux réels. Prévoir contenus légaux selon l’activité au moment de la mise en ligne.

## Mise en mouvement

Voir MOTION.md et docs/SPIRALE.md. Conserver les objets entre les sections, interpoler les positions plutôt que détruire la scène à chaque passage. La spirale suit le scroll, revient en sens inverse au scroll remontant, et s’arrête avec prefers-reduced-motion. Pas d’audio automatique. Permettre la lecture même si le canvas échoue.

## Règles de composition

Desktop : grands titres sérif, photos/3D dominantes, marges fluides, textes courts, bouton ovale. Mobile : hiérarchiser titre → bouteille → texte. Réduire les fruits et leur rayon ; ne pas les placer sur les contrôles. S’assurer que la zone de lecture et l’étiquette restent visibles.

## Livraison attendue pour le futur développement

Un site responsive, réellement connecté au canal de vente fourni, sans boutons factices. Contrôler desktop et 390 px, navigation clavier, reduced-motion, échec WebGL, réseau lent, absence de débordement, chargement progressif et nettoyage des textures 3D. Le présent kit inclut seulement le laboratoire de preuve et les assets, pas un paiement ou back-office.
