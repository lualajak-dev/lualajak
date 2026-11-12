
import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";

const links = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/#projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 md:px-8"
      >
        <Link
          href="/"
          aria-label="Lual Ajak homepage"
          className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-tight"
        >
          lual<span className="text-blue-500">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-[var(--muted)] transition hover:text-blue-500"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Link
            href="/contact"
            className="hidden rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500 sm:block"
          >
            Let's talk <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
