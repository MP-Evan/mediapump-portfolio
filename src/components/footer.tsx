import Link from "next/link";
import Logo from "@/components/logo";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/projets", label: "Projets" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-surface/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo className="h-[42px] w-auto" />
          <p className="mt-2 text-sm text-muted">
            Studio créatif — stratégie, production, croissance.
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-foreground transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-xs text-muted">
          © {new Date().getFullYear()} MediaPump. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
