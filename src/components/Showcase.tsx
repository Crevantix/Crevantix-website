import web from "@/assets/Web_App_Builder-2.png";
import auto from "@/assets/Intelligent_Automation.png";
import creative from "@/assets/Creative_Experiences.png";


const CARDS = [
  {
    n: "01",
    title: "Web Experiences",
    desc: "Premium, responsive website and interface work built around your brand.",
    img: web,
    alt: "Layered gold light trails representing web experiences",
  },
  {
    n: "02",
    title: "Intelligent Automation",
    desc: "Connected digital workflows, communication systems and intelligent automation.",
    img: auto,
    alt: "Connected gold nodes representing intelligent automation",
  },
  {
    n: "03",
    title: "Creative Experiences",
    desc: "Video production, audio creation, branding and digital creativity.",
    img: creative,
    alt: "Gold waveform artwork representing creative experiences",
  },
];

export function Showcase() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <span className="text-gold text-[11px] tracking-[0.28em] uppercase">
            Showcase
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            What We Can Create
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {CARDS.map((c, i) => (
            <article
              key={c.title}
              className="glass-card gold-sweep reveal group hover:border-gold/60 relative overflow-hidden rounded-2xl hover:-translate-y-2 hover:shadow-[var(--shadow-gold)]"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <img
                src={c.img}
                alt={c.alt}
                width={1536}
                height={1024}
                loading="lazy"
                className="aspect-[3/2] w-full object-cover object-center transition-transform duration-[900ms] group-hover:scale-110"
              />
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(180deg, transparent, color-mix(in oklab, var(--gold) 16%, transparent))",
                }}
              />
              <div className="from-background relative bg-gradient-to-t to-transparent p-6">
                <span className="text-gold/80 text-xs tracking-widest">{c.n}</span>
                <h3 className="mt-2 text-xl font-semibold">{c.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
