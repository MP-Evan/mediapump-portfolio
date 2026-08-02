import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Projets — MediaPump",
  description: "Cas d'études à venir.",
};

export default function ProjetsPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 py-24">
      <Reveal>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm text-accent">Cas d&apos;études</p>
          <h1 className="mt-3 font-heading text-3xl font-semibold tracking-tight md:text-4xl">
            Cas d&apos;études à venir cette semaine
          </h1>
          <p className="mx-auto mt-5 max-w-md text-muted">
            Les premiers résultats concrets arrivent bientôt. En attendant,
            discutons de ton projet.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-accent px-7 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
          >
            Réserver un appel
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
