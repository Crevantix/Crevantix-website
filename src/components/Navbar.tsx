import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/crevantix-horizontal.png";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 border-b border-border backdrop-blur-xl"
          : "bg-background/30 border-b border-transparent backdrop-blur-md"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8"
      >
        <a href="#home" className="shrink-0" aria-label="Crevantix home">
          <img
            src={logo}
            alt="Crevantix"
            width={1536}
            height={1024}
            className="h-9 w-auto object-contain mix-blend-screen sm:h-11"
          />
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-muted-foreground hover:text-gold-champagne relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-[var(--gold)] after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="btn-gold hidden rounded-full px-5 py-2.5 text-sm sm:inline-flex"
          >
            Start a Project
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="text-gold-champagne border-border inline-flex h-10 w-10 items-center justify-center rounded-full border md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-border transition-[max-height,opacity] duration-500 md:hidden ${
          open ? "max-h-96 border-t opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="bg-background/95 flex flex-col gap-1 px-5 py-4 backdrop-blur-xl">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground/90 hover:text-gold-champagne block rounded-lg px-3 py-3 text-base transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-gold mt-2 block rounded-full px-5 py-3 text-center text-sm"
            >
              Start a Project
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
