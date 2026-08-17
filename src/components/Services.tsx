import { PhoneCall, Play, Globe, LayoutDashboard, Music4 } from "lucide-react";

import voice from "@/assets/AI_Voice_Calling_Agent.png";
import video from "@/assets/AI_Video_Commercials.png";
import website from "@/assets/Website_Builder.png";
import webapp from "@/assets/Web_App_Builder.png";
import jingle from "@/assets/Brand_Jingles.png";

const SERVICES = [
  {
    n: "01",
    title: "AI Voice Calling Agent",
    desc: "Automate customer conversations with intelligent AI voice agents that communicate naturally and help businesses handle calls at scale.",
    icon: PhoneCall,
    img: voice,
    alt: "AI Voice Calling Agent",
  },
  {
    n: "02",
    title: "AI Video Commercials",
    desc: "Create engaging AI-powered video commercials designed to capture attention and bring your brand story to life.",
    icon: Play,
    img: video,
    alt: "AI Video Commercials",
  },
  {
    n: "03",
    title: "Website Builder",
    desc: "Launch modern, responsive and conversion-focused websites designed around your brand and business goals.",
    icon: Globe,
    img: website,
    alt: "Website Builder",
  },
  {
    n: "04",
    title: "Web App Builder",
    desc: "Turn your ideas into powerful web applications with modern interfaces, intelligent workflows and scalable digital experiences.",
    icon: LayoutDashboard,
    img: webapp,
    alt: "Web App Builder",
  },
  {
    n: "05",
    title: "Brand Jingles",
    desc: "Create memorable custom brand jingles that give your business a distinctive sound and make your brand easier to remember.",
    icon: Music4,
    img: jingle,
    alt: "Brand Jingles",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <span className="text-gold text-[11px] tracking-[0.28em] uppercase">
            What We Create
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Solutions Built For What&apos;s Next
          </h2>

          <p className="text-muted-foreground mt-5 leading-relaxed">
            From intelligent communication to digital experiences and
            unforgettable brand content, Crevantix brings technology and
            creativity together.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className="glass-card gold-sweep reveal group hover:border-gold/60 rounded-2xl p-1 hover:-translate-y-2 hover:shadow-[var(--shadow-gold)]"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="relative overflow-hidden rounded-[14px]">
                <img
                  src={s.img}
                  alt={s.alt}
                  width={1536}
                  height={1024}
                  loading="lazy"
                  className="aspect-[3/2] w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                <span className="text-gold/80 absolute top-3 right-4 text-sm font-semibold tracking-widest">
                  {s.n}
                </span>
              </div>

              <div className="p-5">
                <s.icon
                  size={22}
                  className="text-gold transition-transform duration-500 group-hover:-translate-y-1"
                />

                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>

                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
