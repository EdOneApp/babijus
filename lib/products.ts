import raw from "@/data/products.json";
export type Product = (typeof raw)[number] & {
  category: "Les classiques" | "Les fruits" | "Les mélanges";
  description: string;
  short: string;
};
const stories: Record<string, [string, string]> = {
  bissap: [
    "Le rouge qui a du caractère.",
    "Des calices d’hibiscus, une couleur profonde et cette note acidulée qu’on reconnaît entre mille. Le bissap, c’est toute une histoire de partage.",
  ],
  gnamakoudji: [
    "Petit nom. Grand caractère.",
    "Le gingembre donne le ton : une attaque vive, un parfum chaleureux et une finale qui ne passe pas inaperçue. Un classique de chez nous.",
  ],
  ananas: [
    "Un rayon de soleil en bouteille.",
    "Le parfum de l’ananas, sa douceur et son petit côté acidulé. Une escapade tropicale qui commence dès la première gorgée.",
  ],
  mangue: [
    "La douceur a trouvé son fruit.",
    "Une couleur éclatante et un caractère tout en rondeur. La mangue prend son temps pour laisser parler son parfum.",
  ],
  tomi: [
    "Le petit twist qui change tout.",
    "Le tamarin fait dialoguer douceur et acidité. Un goût familier qui rappelle les grandes pauses et les petits plaisirs.",
  ],
  bouye: [
    "La force tranquille du baobab.",
    "Le fruit du baobab inspire une boisson douce et veloutée. Une autre façon de découvrir la richesse des saveurs d’Afrique.",
  ],
};
export const products: Product[] = raw.map((p, i) => ({
  ...p,
  category: i < 6 ? "Les classiques" : i >= 18 ? "Les mélanges" : "Les fruits",
  short: stories[p.id]?.[0] || `${p.name}, tout simplement.`,
  description:
    stories[p.id]?.[1] ||
    `Une rencontre avec ${p.ingredientConcept.toLowerCase()}, pour explorer une autre facette des saveurs fruitées. ${p.tastingNotes.replace(" · ", ", ")} : le ton est donné.`,
}));
export const featured = products.slice(0, 6);
export const asset = (path: string) => "/" + path;
export const productImage = (p: Product) =>
  p.photoWeb ? asset(p.photoWeb) : `/assets/packshots/${p.id}.svg`;
export function getProduct(slug: string) {
  return products.find((p) => p.id === slug);
}
