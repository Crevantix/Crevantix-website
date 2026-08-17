export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="animate-glow-shift absolute top-1/2 left-1/2 h-[420px] w-[1100px] max-w-[140vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--gold) 24%, transparent), transparent)",
          }}
        />
      </div>
      <div className="reveal relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Have an Idea? <span className="text-gold-gradient">Let&apos;s Build It.</span>
        </h2>
        <p className="text-muted-foreground mx-auto mt-5 max-w-xl leading-relaxed">
          Tell Crevantix what you want to create and let&apos;s turn your idea into
          something powerful.
        </p>
        <a
          href="#contact"
          className="btn-gold mt-9 inline-flex rounded-full px-8 py-3.5 text-sm"
        >
          Start Your Project
        </a>
      </div>
    </section>
  );
}
