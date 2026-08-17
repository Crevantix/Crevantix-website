import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyCrevantix } from "@/components/WhyCrevantix";
import { Showcase } from "@/components/Showcase";
import { CtaSection } from "@/components/CtaSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useReveal } from "@/hooks/use-reveal";

const TITLE = "Crevantix — Create. Connect. Convert.";
const DESCRIPTION =
  "Crevantix creates AI voice calling agents, AI video commercials, websites, web applications and memorable brand jingles for modern businesses.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#050505" },
      { property: "og:title", content: "Crevantix | Technology & Creative Solutions" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Crevantix | Technology & Creative Solutions" },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Crevantix",
          slogan: "Create. Connect. Convert.",
          description: DESCRIPTION,
          sameAs: [
            "https://www.instagram.com/crevantix",
            "https://www.facebook.com/Crevantix",
            "https://www.youtube.com/@Crevantix",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <WhyCrevantix />
        <Showcase />
        <CtaSection />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
