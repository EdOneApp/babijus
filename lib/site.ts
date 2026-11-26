export const site = {
  name: "BABI JUS",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://babijus.myoctogone.com",
  email: "danielguedegbe10027@gmail.com",
  whatsapp: "2250748733365",
  phone: "+225 07 48 73 33 65",
  commercial: "Daniel Guedegbe",
  instagram: "",
  company: "",
  address: "",
  registration: "",
};
export function orderHref(product?: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Bonjour Daniel ! Je souhaite avoir des informations ${product ? "sur BABI JUS " + product : "pour commander BABI JUS"}.`)}`;
}
