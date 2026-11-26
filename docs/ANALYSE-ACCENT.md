# Accent Boissons — audit de référence

Référence : https://accentboissons.com/ — observation le 26 novembre 2026, navigateur de bureau 1280 × 720, lecture des fichiers publics HTML/CSS/JS. Audit des sections et du mécanisme ; ce document ne prétend pas certifier tous les états du site ni ses systèmes internes.

## Structure observée

1. Chargement : capsule centrée, fond clair et compteur en pourcentage. Le chargement des ressources 3D précède la scène d’accueil.
2. Accueil : scène rouge corail, quatre bouteilles inclinées autour d’un très grand mot-symbole crème. La profondeur fait passer les bouteilles devant et derrière le texte. Bouton de commande ovale en haut à droite ; invitation à descendre.
3. Produits : parcours vertical successif de quatre références. Bouteille au centre, très grand titre sérif à gauche, composition sous le titre, phrase courte à droite. Un ingrédient en volume flotte au premier plan. Les transitions déplacent les objets et modifient la dominante du fond.
4. Points de vente : carte, recherche par code postal, liste paginée et liens d’itinéraire. La présence de cette interface est confirmée dans le DOM ; recherche et pagination non testées avec des données.
5. Photographies d’usage pleine largeur : rupture de rythme entre scènes typographiques.
6. Histoire : texte narratif et typographie monumentale, mise en page éditoriale.
7. Réemploi : objets flottants, bouteille et ingrédient autour du texte.
8. Contact : email, réseau social, signature, mentions et crédits.

## Système visuel

- Peu de cadres, grandes surfaces colorées, contraste entre sérif fine de très grande taille et sans-sérif géométrique.
- Polices déclarées : Editorial New Regular et Poppins Regular / Medium / Bold. Ne pas redistribuer la police commerciale Editorial New sans licence.
- Grain léger sur les surfaces, dégradés doux vers crème, photographies chaudes.
- Couleurs relevées dans la feuille de page : #ff5000, #ff6119, #ff8d59, #ffb491, #ffe9dc, #e5ddcc et blanc. Le rendu de la scène WebGL ajoute ses propres lumières et couleurs.
- Logo discret en navigation après l’introduction. Bouton ovale au trait fin, texte en capitales.
- Trois colonnes sur les fiches de bureau ; très grands interlignages serrés pour les titres.

## Fonctionnement technique confirmé dans les fichiers publics

Nuxt/Vue, moteur Three.js, GLTFLoader, GSAP / ScrollTrigger et Lenis sont présents. Modèle de scène : `/3d/accent_scene/accent_scene_v4-opti.glb`. Textures séparées pour les étiquettes, le papier et les ingrédients (AVIF / WebP). La scène n’est donc pas une simple vidéo ou quatre PNG pivotés. Le chargement compte les ressources. Le canvas WebGL est associé au parcours de la page.

Les CSS comportent des seuils à 768 et 1023 px. L’interface mobile n’a pas été observée directement : sa chorégraphie exacte reste à vérifier. Aucun effet sonore n’a été constaté pendant l’observation. Ne pas en ajouter au motif qu’un son aurait été vérifié.

## Transposition BABI JUS

Conserver le principe : hero sculptural, bouteilles indépendantes, progression au scroll, grands titres et alternance éditoriale / photo. Créer des compositions originales avec la marque BABI JUS, des bouteilles courtes et des étiquettes crème. Ne pas intégrer les textures, modèles, photos, logo ou contenus commerciaux d’Accent dans le futur site.

Les six vedettes : Bissap, Gnamakoudji, Ananas, Mangue, Tomi et Bouye. Limiter les scènes lourdes à quatre ou six vedettes ; les 24 concepts se découvrent ensuite dans le catalogue. La liste est extensible, pas une prétention à couvrir toutes les boissons d’Afrique.

## Limites et points à compléter avant mise en ligne

Nom BABI JUS proposé, disponibilité non vérifiée. Photos et produits générés = concepts, pas photos des produits réellement vendus. Recettes, contenance définitive, origine des fruits, prix, conservation, mentions alimentaires, coordonnées, vendeurs et politique de livraison doivent venir de l’entreprise. Ne pas reprendre les engagements bio, consigne ou faible teneur en sucre de la référence.

Les sources Accent téléchargées dans `references/` servent à l’audit uniquement. Ne pas les publier comme code du nouveau site.
