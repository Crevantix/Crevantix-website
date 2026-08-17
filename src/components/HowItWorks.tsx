const STEPS = [
  { n: "01", title: "Tell Us Your Idea", desc: "Share your business goal, concept or project requirements." },
  { n: "02", title: "Build & Create", desc: "We turn your idea into a polished digital or creative experience." },
  { n: "03", title: "Refine & Optimize", desc: "We refine the experience, functionality and user journey." },
  { n: "04", title: "Launch", desc: "Your solution is ready to go live and make an impact." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <span className="text-gold text-[11px] tracking-[0.28em] uppercase">
            How It Works
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            From Idea to Launch
          </h2>
        </div>

        <ol className="relative mt-16 grid gap-10 md:grid-cols-4">
          <span
            aria-hidden
            className="absolute top-6 left-6 hidden h-[calc(100%-3rem)] w-px md:top-6 md:left-0 md:h-px md:w-full md:block"
            style={{
              background:
                "linear-gradient(90deg, color-mix(in oklab, var(--gold) 60%, transparent), color-mix(in oklab, var(--gold) 10%, transparent))",
            }}
          />
          <span
            aria-hidden
            className="absolute top-0 left-6 h-full w-px md:hidden"
            style={{
              background:
                "linear-gradient(180deg, color-mix(in oklab, var(--gold) 55%, transparent), transparent)",
            }}
          />
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              className="reveal group relative pl-16 md:pt-14 md:pl-0"
              style={{ transitionDelay: `${i * 130}ms` }}
            >
              <span
                className="border-gold/50 text-gold bg-background absolute top-0 left-0 flex h-12 w-12 items-center justify-center rounded-full border text-sm font-semibold transition-all duration-500 group-hover:scale-110 group-hover:shadow-[var(--shadow-gold)]"
                style={{ boxShadow: "0 0 24px -10px var(--gold)" }}
              >
                {s.n}
              </span>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
