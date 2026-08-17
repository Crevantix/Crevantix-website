import { Cpu, TrendingUp, Sparkles } from "lucide-react";
import round from "@/assets/crevantix-round.png";

const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 7.3 + 6) % 96}%`,
  delay: `${(i * 1.37) % 9}s`,
  duration: `${9 + ((i * 1.7) % 7)}s`,
  size: i % 3 === 0 ? 3 : 2,
}));

const NODES = [0, 60, 120, 180, 240, 300];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="animate-glow-shift absolute top-[-10%] left-1/2 h-[560px] w-[900px] max-w-[130vw] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--gold) 22%, transparent), transparent)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(color-mix(in oklab, var(--gold) 18%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, var(--gold) 18%, transparent) 1px, transparent 1px)",
            backgroundSize: "68px 68px",
            maskImage: "radial-gradient(circle at 50% 40%, black, transparent 72%)",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <div className="reveal">
          <span className="border-border text-gold-champagne inline-flex items-center rounded-full border px-4 py-1.5 text-[11px] tracking-[0.24em] uppercase">
            Technology &amp; Creative Solutions
          </span>
          <h1 className="mt-6 text-5xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-gold-gradient">Create.</span>{" "}
            <span className="text-gold-gradient">Connect.</span>{" "}
            <span className="text-gold-gradient">Convert.</span>
          </h1>
          <p className="text-foreground/90 mt-6 max-w-xl text-lg font-medium sm:text-xl">
            Build powerful digital experiences. Create intelligent connections. Make your
            brand unforgettable.
          </p>
          <p className="text-muted-foreground mt-4 max-w-xl leading-relaxed">
            Crevantix helps businesses create intelligent voice experiences, cinematic
            video commercials, modern websites, powerful web applications and memorable
            brand sounds.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="btn-gold rounded-full px-7 py-3.5 text-sm">
              Start Your Project
            </a>
            <a
              href="#services"
              className="btn-outline-gold rounded-full px-7 py-3.5 text-sm font-medium"
            >
              Explore Services
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {[
              { icon: Cpu, label: "Technology-Driven" },
              { icon: TrendingUp, label: "Built for Growth" },
              { icon: Sparkles, label: "Creative by Design" },
            ].map(({ icon: Icon, label }, i) => (
              <li
                key={label}
                className="text-muted-foreground flex items-center gap-2.5 text-sm"
                style={{
                  animation: "cx-fade-up 0.8s cubic-bezier(0.22,1,0.36,1) backwards",
                  animationDelay: `${0.5 + i * 0.18}s`,
                }}
              >
                <Icon size={16} className="text-gold" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Hero round logo composition */}
        <div className="relative mx-auto aspect-square w-full max-w-[520px]">
          <div className="animate-float absolute inset-0">
            <div
              aria-hidden
              className="animate-breathe absolute inset-[12%] rounded-full blur-2xl"
              style={{
                background:
                  "radial-gradient(closest-side, color-mix(in oklab, var(--gold) 40%, transparent), transparent)",
              }}
            />

            {/* orbital rings */}
            <div
              aria-hidden
              className="absolute inset-[2%] rounded-full border"
              style={{
                borderColor: "color-mix(in oklab, var(--gold) 28%, transparent)",
                animation: "cx-spin 46s linear infinite",
              }}
            >
              {NODES.map((deg) => (
                <span
                  key={deg}
                  className="absolute top-1/2 left-1/2 block h-1.5 w-1.5 rounded-full"
                  style={{
                    background: "var(--gold-soft)",
                    boxShadow: "0 0 12px var(--gold)",
                    transform: `rotate(${deg}deg) translateX(calc(50% + 12.2rem))`,
                  }}
                />
              ))}
            </div>
            <div
              aria-hidden
              className="absolute inset-[-6%] rounded-full border border-dashed"
              style={{
                borderColor: "color-mix(in oklab, var(--gold) 18%, transparent)",
                animation: "cx-spin-rev 78s linear infinite",
              }}
            />
            <div
              aria-hidden
              className="absolute inset-[14%] rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, color-mix(in oklab, var(--gold) 45%, transparent) 40deg, transparent 90deg)",
                mask: "radial-gradient(closest-side, transparent 96%, black 97%)",
                WebkitMask: "radial-gradient(closest-side, transparent 96%, black 97%)",
                animation: "cx-spin 11s linear infinite",
              }}
            />

            <img
              src={round}
              alt="Crevantix"
              width={1242}
              height={1242}
              className="absolute inset-[16%] h-[68%] w-[68%] object-contain"
              style={{
                mixBlendMode: "screen",
                filter:
                  "drop-shadow(0 0 40px color-mix(in oklab, var(--gold) 35%, transparent))",
                animation: "cx-fade-up 1.4s cubic-bezier(0.22,1,0.36,1) backwards",
              }}
            />
          </div>

          {/* particles */}
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            {PARTICLES.map((p, i) => (
              <span
                key={i}
                className="absolute bottom-0 block rounded-full"
                style={{
                  left: p.left,
                  width: p.size,
                  height: p.size,
                  background: "var(--gold-soft)",
                  boxShadow: "0 0 8px var(--gold)",
                  animation: `cx-drift ${p.duration} linear infinite`,
                  animationDelay: p.delay,
                }}
              />
            ))}
          </div>

          {/* floating UI cards */}
          <div
            aria-hidden
            className="glass-card animate-float absolute top-[8%] -left-2 hidden rounded-xl px-4 py-3 sm:block"
            style={{ animationDelay: "-3s" }}
          >
            <p className="text-gold-champagne text-[10px] tracking-[0.2em] uppercase">
              Voice Layer
            </p>
            <div className="mt-2 flex h-5 items-end gap-[3px]">
              {[0, 1, 2, 3, 4, 5, 6].map((b) => (
                <span
                  key={b}
                  className="w-[3px] rounded-full"
                  style={{
                    height: "100%",
                    background: "var(--gold)",
                    transformOrigin: "bottom",
                    animation: `cx-wave ${1.1 + b * 0.13}s ease-in-out infinite`,
                  }}
                />
              ))}
            </div>
          </div>
          <div
            aria-hidden
            className="glass-card animate-float absolute right-0 bottom-[10%] hidden rounded-xl px-4 py-3 sm:block"
            style={{ animationDelay: "-6s" }}
          >
            <p className="text-gold-champagne text-[10px] tracking-[0.2em] uppercase">
              Creative Engine
            </p>
            <div className="mt-2 h-1 w-28 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full w-1/2 rounded-full"
                style={{
                  background: "var(--gradient-gold)",
                  animation: "cx-glow-shift 6s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
