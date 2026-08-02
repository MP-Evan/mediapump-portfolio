import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Services — MediaPump",
  description:
    "3 formules de montage vidéo pour coachs : Basique, Recommandé et Premium.",
};

const tiers = [
  {
    emoji: "🥉",
    name: "Basique",
    price: "1 000 €/mois",
    highlight: false,
    montage: [
      "8 vidéos courtes/mois (Reels + TikTok), à partir des rushs fournis par le client",
      "Sous-titres dynamiques + habillage léger (charte graphique, intro/outro simple)",
      "Formats optimisés par plateforme (ratio, durée, hook visuel)",
      "1 aller-retour de retouche par vidéo",
    ],
    operationnel: [
      "Calendrier de publication mensuel (Google Sheet) avec dates + légendes proposées",
      "Livraison en 2 lots par mois, sous 5 jours ouvrés chacun",
    ],
    resultat:
      "Passage d'une publication chaotique à un rythme fixe de 2 vidéos/semaine garanties, sur 4 semaines consécutives.",
  },
  {
    emoji: "🥈",
    name: "Recommandé",
    price: "1 500 €/mois",
    highlight: true,
    montage: [
      "12 vidéos/mois (Reels/TikTok + 1 format long type extrait de coaching ou podcast)",
      "Tout le pack Basique +",
      "Banque de 20 hooks/idées de scripts fournie en début de mois",
      "2 allers-retours de retouche par vidéo",
    ],
    operationnel: [
      "Suivi de versions structuré (Notion) : statuts rushs reçus / en montage / à valider / validé / publié",
      "Relances automatisées par email pour récupération des rushs et validation des montages",
      "Calendrier de publication avec répartition par thématique",
      "Livraison en 4 lots/mois, sous 3 jours ouvrés chacun",
    ],
    resultat:
      "Rythme de publication quasi quotidien (5-6 vidéos/semaine cumulées) tenu pendant 30 jours sans qu'aucune vidéo ne soit en retard côté client.",
  },
  {
    emoji: "🥇",
    name: "Premium",
    price: "2 500 €/mois",
    highlight: false,
    montage: [
      "20 vidéos/mois (mix Reels/TikTok + 2 formats longs)",
      "Tout le pack Recommandé +",
      "Retouches illimitées (dans un délai raisonnable, sans abus)",
      "Priorité de livraison sous 48h",
    ],
    operationnel: [
      "Stratégie éditoriale mensuelle : calendrier avec thématiques, angles et CTA alignés sur les objectifs business du coach",
      "Système de relance automatisé complet (Notion/Airtable) couvrant tournage → validation → publication",
      "Dashboard de suivi de performance mensuel (vues, engagement, meilleurs formats)",
      "Call stratégique de 30 min/mois pour ajuster la ligne éditoriale",
    ],
    resultat:
      "Publication quotidienne autonome sur 30 jours + reporting mensuel de performance permettant d'identifier les formats qui génèrent le plus de demandes de coaching.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="px-6 pt-24 pb-16 md:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="text-sm text-accent">Les offres</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight md:text-5xl">
              3 formules, un seul objectif
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-xl text-muted">
              Tu fournis les rushs, je m&apos;occupe du montage, du rythme de
              publication et du suivi. Choisis le niveau qui correspond à ton
              volume de contenu.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto flex max-w-5xl flex-col gap-8">
          {tiers.map((tier, index) => (
            <Reveal key={tier.name} delay={index * 0.05}>
              <div
                className={`rounded-3xl border p-8 md:p-10 ${
                  tier.highlight
                    ? "border-accent/60 bg-accent/5"
                    : "border-surface bg-surface/30"
                }`}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-3xl">{tier.emoji}</span>
                  <h2 className="font-heading text-2xl font-semibold tracking-tight">
                    {tier.name}
                  </h2>
                  <span className="font-heading text-lg font-semibold text-accent">
                    {tier.price}
                  </span>
                  {tier.highlight && (
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-background">
                      Le plus choisi
                    </span>
                  )}
                </div>

                <div className="mt-8 grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="text-xs font-medium uppercase tracking-wide text-muted">
                      Montage vidéo
                    </h3>
                    <ul className="mt-4 flex flex-col gap-2.5">
                      {tier.montage.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2.5 text-sm leading-relaxed text-foreground"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xs font-medium uppercase tracking-wide text-muted">
                      Opérationnel
                    </h3>
                    <ul className="mt-4 flex flex-col gap-2.5">
                      {tier.operationnel.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2.5 text-sm leading-relaxed text-foreground"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-accent/30 bg-background/40 p-5">
                  <p className="text-sm font-medium text-accent">
                    ✅ Résultat mesurable
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {tier.resultat}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <Reveal>
          <div className="mx-auto max-w-4xl rounded-3xl border border-surface bg-surface/30 px-8 py-16 text-center">
            <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
              Pas sûr de quelle formule te correspond ?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted">
              15 minutes pour en parler, sans engagement.
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
