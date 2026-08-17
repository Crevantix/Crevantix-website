import { Instagram, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/crevantix-horizontal.png";
import { SERVICE_NAMES, SOCIALS } from "@/lib/site";

const ICONS = { Instagram, Facebook, YouTube: Youtube } as const;

export function Footer() {
  return (
    <footer className="border-border relative border-t">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <img
            src={logo}
            alt="Crevantix"
            width={1536}
            height={1024}
            loading="lazy"
            className="h-12 w-auto object-contain mix-blend-screen"
          />
          <p className="text-gold-champagne mt-4 text-sm tracking-[0.2em] uppercase">
            Create. Connect. Convert.
          </p>
          <p className="text-muted-foreground mt-4 max-w-sm text-sm leading-relaxed">
            Technology and creative solutions for businesses ready to build what's next.
          </p>
          <div className="mt-7">
            <p className="text-foreground text-xs font-semibold tracking-[0.18em] uppercase">
              Follow Crevantix
            </p>
            <div className="mt-3 flex gap-3">
              {SOCIALS.map((s) => {
                const Icon = ICONS[s.name as keyof typeof ICONS];
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="border-border text-muted-foreground hover:text-gold hover:border-gold flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 hover:shadow-[var(--shadow-gold)]"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <FooterCol
          title="Company"
          items={[
            { label: "Home", href: "#home" },
            { label: "Services", href: "#services" },
            { label: "How It Works", href: "#how-it-works" },
            { label: "Contact", href: "#contact" },
          ]}
        />
        <FooterCol
          title="Services"
          items={SERVICE_NAMES.map((s) => ({ label: s, href: "#services" }))}
        />
        <FooterCol
          title="Contact"
          items={[
            { label: "Start a Project", href: "#contact" },
            { label: "Contact Us", href: "#contact" },
          ]}
        />
      </div>

      <div className="hairline mx-auto max-w-7xl" />
      <div className="text-muted-foreground mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs sm:flex-row sm:px-8">
        <p>© 2026 Crevantix. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#contact" className="hover:text-gold-champagne transition-colors">
            Privacy Policy
          </a>
          <a href="#contact" className="hover:text-gold-champagne transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-foreground text-xs font-semibold tracking-[0.18em] uppercase">
        {title}
      </p>
      <ul className="mt-4 space-y-3">
        {items.map((i) => (
          <li key={i.label}>
            <a
              href={i.href}
              className="text-muted-foreground hover:text-gold-champagne text-sm transition-colors"
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
