"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, Check, Mail, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
export default function ContactForm() {
  const params = useSearchParams();
  const [channel, setChannel] = useState<"whatsapp" | "email">("whatsapp"),
    [prepared, setPrepared] = useState(false);
  const [error, setError] = useState("");
  function submit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const d = new FormData(e.currentTarget);
    const name = String(d.get("name") || "").trim(),
      email = String(d.get("email") || "").trim(),
      message = String(d.get("message") || "").trim(),
      subject = String(d.get("subject") || "");
    if (name.length < 2 || message.length < 10 || !email.includes("@")) {
      setError(
        "Ajoute ton nom, un email valide et un message d’au moins 10 caractères.",
      );
      return;
    }
    const text = `Bonjour Daniel,\n\n${message}\n\nObjet : ${subject}\n${name}\nEmail : ${email}${d.get("phone") ? "\nTéléphone : " + d.get("phone") : ""}`;
    if (channel === "whatsapp")
      window.open(
        `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`,
        "_blank",
        "noopener,noreferrer",
      );
    else
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("BABI JUS — " + subject)}&body=${encodeURIComponent(text)}`;
    setPrepared(true);
  }
  return (
    <form onSubmit={submit} className="contact-form">
      <div className="form-row">
        <label>
          Ton nom <span>*</span>
          <input
            name="name"
            required
            minLength={2}
            maxLength={100}
            autoComplete="name"
            placeholder="Comment t’appelles-tu ?"
          />
        </label>
        <label>
          Ton email <span>*</span>
          <input
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            placeholder="toi@exemple.com"
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          Ton téléphone <small>(facultatif)</small>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={30}
            placeholder="+225…"
          />
        </label>
        <label>
          On parle de quoi ?
          <select
            name="subject"
            defaultValue={
              params.get("objet") === "professionnel"
                ? "Devenir revendeur"
                : params.get("saveur")
                  ? "Une commande"
                  : "Une petite question"
            }
          >
            <option>Une petite question</option>
            <option>Une commande</option>
            <option>Devenir revendeur</option>
            <option>Un événement</option>
            <option>Une collaboration</option>
          </select>
        </label>
      </div>
      <label>
        Ton message <span>*</span>
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={3000}
          rows={5}
          defaultValue={
            params.get("saveur")
              ? `Bonjour, j’aimerais découvrir la saveur ${params.get("saveur")}.`
              : ""
          }
          placeholder="Une envie, une idée, une question…"
        />
      </label>
      <fieldset className="channel-picker">
        <legend>Comment souhaites-tu continuer ?</legend>
        <label>
          <input
            type="radio"
            name="channel"
            checked={channel === "whatsapp"}
            onChange={() => setChannel("whatsapp")}
          />
          <MessageCircle size={16} /> WhatsApp
        </label>
        <label>
          <input
            type="radio"
            name="channel"
            checked={channel === "email"}
            onChange={() => setChannel("email")}
          />
          <Mail size={16} /> Email
        </label>
      </fieldset>
      <label className="consent">
        <input type="checkbox" required />{" "}
        <span>
          J’accepte de partager ces informations avec Daniel pour qu’il réponde
          à ma demande. <a href="/confidentialite/">En savoir plus.</a>
        </span>
      </label>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      <button type="submit" className="button">
        Continuer {channel === "whatsapp" ? "sur WhatsApp" : "par email"}
        <ArrowUpRight size={18} />
      </button>
      <p className="form-disclaimer">
        Ton message sera préparé dans{" "}
        {channel === "whatsapp" ? "WhatsApp" : "ton application email"}. Tu
        pourras le relire avant de l’envoyer.
      </p>
      {prepared && (
        <div className="form-prepared" role="status">
          <Check size={18} />
          <p>
            Ton message est prêt. Termine l’envoi dans l’application ouverte. Si
            elle ne s’est pas ouverte, utilise les coordonnées de Daniel
            ci-contre.
          </p>
        </div>
      )}
    </form>
  );
}
