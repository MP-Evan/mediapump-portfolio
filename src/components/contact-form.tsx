"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

const RECIPIENT = "evan06.eg@gmail.com";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)
      .value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement)
      .value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const mailSubject = subject.trim() || `Nouveau message de ${name}`;
    const mailBody = `De : ${name} (${email})\n\n${message}`;
    const mailtoUrl = `mailto:${RECIPIENT}?subject=${encodeURIComponent(
      mailSubject,
    )}&body=${encodeURIComponent(mailBody)}`;

    setSent(true);
    window.location.href = mailtoUrl;
  }

  return (
    <div className="rounded-2xl border border-surface bg-surface/30 p-8">
      {sent ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center justify-center py-16 text-center"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
            ✓
          </span>
          <h3 className="mt-4 font-heading text-xl font-semibold">
            Ta messagerie va s&apos;ouvrir
          </h3>
          <p className="mt-2 max-w-sm text-sm text-muted">
            Le message est déjà rempli, il ne reste plus qu&apos;à cliquer sur
            envoyer. Rien ne s&apos;ouvre ? Écris directement à {RECIPIENT}.
          </p>
        </motion.div>
      ) : (
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm text-muted">
                Nom
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Votre nom"
                className="rounded-lg border border-surface bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-muted">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="vous@exemple.com"
                className="rounded-lg border border-surface bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="text-sm text-muted">
              Sujet
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Objet de votre message"
              className="rounded-lg border border-surface bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm text-muted">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Parlez-nous de votre projet..."
              className="resize-none rounded-lg border border-surface bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent"
            />
          </div>

          <button
            type="submit"
            className="mt-2 self-start rounded-full bg-accent px-7 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
          >
            Envoyer le message
          </button>
        </motion.form>
      )}
    </div>
  );
}
