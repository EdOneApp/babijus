# Ingrédients autour des bouteilles

Demande ajoutée : chaque ingrédient doit être indépendant et pouvoir défiler en spirale autour de sa bouteille. Les 20 PNG détourés sont dans assets/ingredients/. Les mélanges réutilisent les deux ingrédients, associés explicitement dans data/products.json. Pas de planche à recadrer.

Le laboratoire index.html contient une réalisation Three.js de cette logique. Sept sprites sont répartis sur une hélice autour du modèle ; les textures avec alpha sont orientées vers la caméra. Leur position Z les fait passer devant ou derrière la bouteille grâce au depth test.

Pour une progression de section p comprise entre 0 et 1 et un objet i sur N :

```js
const phase = i / N;
const theta = phase * Math.PI * 3.2 + p * Math.PI * 4;
x = Math.sin(theta) * 0.85;
y = -1.0 + phase * 2.2;
z = Math.cos(theta) * 0.78;
```

Le mouvement est réversible en remontant la page. Les PNG doivent garder leur ratio et leur alpha. Choisir 5–7 objets desktop et 3–4 mobile pour le site final. Les fragments peuvent réutiliser une texture avec taille et rotation variées ; ne pas afficher de grands rectangles opaques. Pour un enroulement continu sans disparition, garder la hauteur stable et faire varier theta. Pour un mouvement montant, ajouter un décalage Y et faire fondre l’opacité aux extrémités.

Échelle bouteille : 2,45 unités. Rayon d’hélice initial : 0,85. Ajuster le rayon et la taille de chaque fruit selon son encombrement visuel. Maintenir une zone centrale dégagée autour du nom de saveur. Aucun fruit ne doit masquer durablement l’étiquette ou un bouton.

Les sprites tournent autour de la bouteille ; leur propre dos ne peut pas être montré comme celui d’un objet volumétrique. Si une rotation 360° de chaque fruit sur lui-même est nécessaire, prévoir des modèles 3D supplémentaires. Les visuels présents sont conçus pour un effet d’orbite convaincant avec faible coût de rendu.
