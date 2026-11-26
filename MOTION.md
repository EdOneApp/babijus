# Chorégraphie du futur site

Direction inspirée du parcours Accent, compositions et assets originaux BABI JUS.

Hero : 100 svh desktop, groupe de quatre bouteilles (bissap, gingembre, ananas, mangue). Rotations Z -14°, +7°, -6°, +18°. Profondeurs distinctes, faible flottement de ±0,025 unité en 4 à 6 s. Mot-symbole HTML au centre ; séparer canvas arrière et calques avant si l’occlusion du titre est nécessaire. Éviter le texte imprimé dans une image de hero.

Scroll hero 0–1 : logo monumental s’efface, quatre positions convergent, la première bouteille occupe le centre. Pas de saut au changement de section. Camera fixe, animer surtout le groupe des objets.

Chaque vedette : section de 140–180 svh avec composition sticky de 100 svh. Dans son segment, arrivée 0–20 %, lecture stable 20–75 %, départ 75–100 %. Bouteille tourne Y de -0,25 à +0,25 rad ; ne jamais rendre l’étiquette illisible pendant le temps de lecture. Un ingrédient indépendant passe à l’avant, amplitude réduite sur mobile. Couleurs interpolées sur 600–900 ms ou directement par progression de scroll.

Titres : révélation par lignes, translation Y 32–60 px, 500–700 ms, décalage 60 ms. Éviter une animation lettre par lettre sur les paragraphes. Boutons : hover 180 ms, pas de déplacement du texte qui perturbe le clic.

Après les vedettes : catalogue 24 références, grille filtrable légère, photos éditoriales, histoire et contact. Les modèles 3D du catalogue se chargent à la demande, pas 24 contextes WebGL. Un seul renderer partagé.

Mobile : 390 px de large cible, bouteille ≤48 svh, titre au-dessus et composition en dessous. Pas de texte masqué par la bouteille ; aucun défilement horizontal. Utiliser un visuel PNG si WebGL indisponible. DPR plafonné à 1,5–2 ; textures 1K, pause rendu hors champ et onglet caché. Précharger seulement la première scène.

Accessibilité : prefers-reduced-motion supprime flottement, parallaxe et inertie. Scroll natif, navigation clavier, HTML sémantique, canvas décoratif aria-hidden, texte alternatif des photos. Ne pas bloquer la lecture derrière un loader dépendant de la 3D.

Les GLB ont des nœuds Bottle, Liquid, Glass, Cap et Label. Pivot racine au bas de la bouteille, hauteur 2,45 unités. Centrer le groupe vers Y=-1,225 pour pivoter autour du milieu. Capsule séparable. Modèles procéduraux de conception ; pas des scans du packaging réel. Les photos générées et le modèle partagent une direction mais ne sont pas une correspondance industrielle exacte.
