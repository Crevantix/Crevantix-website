import { Brain, MonitorSmartphone, Rocket, Lightbulb } from "lucide-react";

const ITEMS = [
  {
    icon: Brain,
    title: "Smart Technology",
    desc: "We build with modern, intelligent technology suited to how your business actually works.",
  },
  {
    icon: MonitorSmartphone,
    title: "Modern User Experiences",
    desc: "Clean, responsive interfaces designed for clarity, speed and comfortable use on any device.",
  },
  {
    icon: Rocket,
    title: "Built For Growth",
    desc: "Scalable foundations so your website, app or automation can grow along with your business.",
  },
  {
    icon: Lightbulb,
    title: "Creative Thinking",
    desc: "Creative direction and craft applied to every screen, frame and sound we produce.",
  },
];

export function WhyCrevantix() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <span className="text-gold text-[11px] tracking-[0.28em] uppercase">
            Why Crevantix
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Technology That Moves At Your Speed
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <div
              key={it.title}
              className="glass-card reveal group hover:border-gold/60 rounded-2xl p-6 hover:-translate-y-1.5"
              style={{ transitionDelay: `${i * 110}ms` }}
            >
              <it.icon
                size={24}
                className="text-gold transition-all duration-500 group-hover:-translate-y-1"
                style={{ filter: "drop-shadow(0 0 10px color-mix(in oklab, var(--gold) 55%, transparent))" }}
              />
              <h3 className="mt-5 inline-block text-lg font-semibold after:mt-1 after:block after:h-px after:w-0 after:bg-[var(--gold)] after:transition-all after:duration-500 group-hover:after:w-full">
                {it.title}
              </h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
