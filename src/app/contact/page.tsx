import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact — MediaPump",
  description: "Contacte MediaPump pour discuter de ton contenu vidéo.",
};

const email = "evan.mediapump@gmail.com";

export default function ContactPage() {
  return (
    <div>
      <section className="px-6 pt-24 pb-16 md:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="text-sm text-accent">Contact</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight md:text-5xl">
              Dis-moi où tu en es
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-xl text-muted">
              Un mail suffit. Je réponds sous 24h.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <a
              href={`mailto:${email}`}
              className="group flex flex-col items-center gap-2 rounded-3xl border border-surface bg-surface/30 px-8 py-12 text-center transition-colors hover:border-accent/50"
            >
              <span className="text-xs uppercase tracking-wide text-muted">
                Écris-moi directement
              </span>
              <span className="font-heading text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent md:text-3xl">
                {email}
              </span>
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 flex items-center gap-4 text-xs text-muted">
              <span className="h-px flex-1 bg-surface" />
              ou remplis le formulaire
              <span className="h-px flex-1 bg-surface" />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
