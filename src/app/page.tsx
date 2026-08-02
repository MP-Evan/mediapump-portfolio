import Link from "next/link";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";

const offers = [
  {
    emoji: "🥉",
    name: "Basique",
    price: "1 000 €/mois",
    pitch: "8 vidéos/mois, pour sortir du chaos et tenir un rythme fixe.",
  },
  {
    emoji: "🥈",
    name: "Recommandé",
    price: "1 500 €/mois",
    pitch: "12 vidéos/mois + suivi Notion, pour publier presque tous les jours.",
    highlight: true,
  },
  {
    emoji: "🥇",
    name: "Premium",
    price: "2 500 €/mois",
    pitch: "20 vidéos/mois, stratégie éditoriale et reporting mensuel.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-24 pb-28 md:pt-36 md:pb-36">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]"
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-surface px-4 py-1.5 text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Montage vidéo pour coachs
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Je monte les vidéos qui font tourner{" "}
              <span className="text-gradient">ton feed de coach</span>, sans
              que tu aies à y toucher.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-base text-muted md:text-lg">
              Reels, TikTok et extraits de coaching, livrés prêts à poster
              chaque semaine. Toi tu coaches, moi je monte.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-accent px-7 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
              >
                Réserver un appel
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-surface px-7 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent"
              >
                Voir les offres
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Offers preview */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-sm text-accent">Les offres</p>
                <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight md:text-4xl">
                  3 formules, un seul objectif : tu postes sans monter
                </h2>
              </div>
              <Link
                href="/services"
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                Voir le détail →
              </Link>
            </div>
          </Reveal>

          <StaggerGroup className="grid gap-6 md:grid-cols-3">
            {offers.map((offer) => (
              <StaggerItem key={offer.name}>
                <div
                  className={`h-full rounded-2xl border p-8 transition-colors ${
                    offer.highlight
                      ? "border-accent/60 bg-accent/5"
                      : "border-surface bg-surface/30 hover:border-accent/50"
                  }`}
                >
                  <span className="text-2xl">{offer.emoji}</span>
                  <h3 className="mt-3 font-heading text-xl font-semibold">
                    {offer.name}
                  </h3>
                  <p className="mt-1 text-sm text-accent">{offer.price}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {offer.pitch}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Case studies teaser */}
      <section className="border-t border-surface/60 px-6 py-24">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm text-accent">Cas d&apos;études</p>
            <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight md:text-3xl">
              À venir cette semaine
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted">
              Les premiers résultats concrets arrivent bientôt sur la page
              projets.
            </p>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <Reveal>
          <div className="mx-auto max-w-4xl rounded-3xl border border-surface bg-surface/30 px-8 py-16 text-center">
            <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
              Prêt à ne plus jamais monter une vidéo toi-même ?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted">
              15 minutes pour voir si on est fait pour bosser ensemble.
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
    </div>
  );
}
