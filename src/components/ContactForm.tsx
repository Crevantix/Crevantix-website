import { useState, type FormEvent } from "react";
import { Check, Loader2 } from "lucide-react";
import { SERVICE_NAMES } from "@/lib/site";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xljrloav";

type Errors = Record<string, string | undefined>;

const inputClass =
  "w-full rounded-xl border border-border bg-[oklch(0.17_0_0)] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all duration-300 focus:border-[var(--gold)] focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--gold)_18%,transparent)]";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    const next: Errors = {};

    if (!get("name")) next["name"] = "Please enter your full name.";
    const email = get("email");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
      next["email"] = "Please enter a valid email address.";
    const phone = get("phone_whatsapp");
    if (!/^[+\d][\d\s-]{7,17}$/.test(phone))
      next["phone_whatsapp"] = "Please enter a valid phone / WhatsApp number.";
    if (!get("service")) next["service"] = "Please select a service.";
    if (get("project_details").length < 10)
      next["project_details"] = "Please tell us a little more about your project.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSent(true);
        form.reset();
      } else {
        setFormError("Something went wrong. Please try again.");
      }
    } catch {
      setFormError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }


  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="reveal text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s Build Something Powerful
          </h2>
          <p className="text-muted-foreground mt-4">
            Tell us about your project and we&apos;ll get back to you.
          </p>
        </div>

        <div className="glass-card reveal mt-12 rounded-3xl p-6 sm:p-9">
          {sent ? (
            <div className="flex flex-col items-center py-12 text-center">
              <span
                className="border-gold/60 text-gold flex h-16 w-16 items-center justify-center rounded-full border"
                style={{
                  boxShadow: "var(--shadow-gold)",
                  animation: "cx-fade-up 0.6s cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                <Check size={30} />
              </span>
              <p
                className="mt-6 max-w-md text-lg"
                style={{ animation: "cx-fade-up 0.8s 0.15s cubic-bezier(0.22,1,0.36,1) backwards" }}
              >
                Thank you! Your project request has been received. We&apos;ll get back to
                you shortly.
              </p>
            </div>
          ) : (
            <form noValidate onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" id="name" error={errors["name"]} required>
                <input
                  id="name"
                  name="name"
                  maxLength={100}
                  placeholder="Enter your full name"
                  className={inputClass}
                />
              </Field>
              <Field label="Email Address" id="email" error={errors["email"]} required>
                <input
                  id="email"
                  name="email"
                  type="email"
                  maxLength={255}
                  placeholder="Enter your email address"
                  className={inputClass}
                />
              </Field>
              <Field label="Phone / WhatsApp" id="phone_whatsapp" error={errors["phone_whatsapp"]} required>
                <input
                  id="phone_whatsapp"
                  name="phone_whatsapp"
                  type="tel"
                  maxLength={20}
                  placeholder="+91 XXXXX XXXXX"
                  className={inputClass}
                />
              </Field>
              <Field label="Company / Business" id="company">
                <input
                  id="company"
                  name="company"
                  maxLength={120}
                  placeholder="Enter your company or business name"
                  className={inputClass}
                />
              </Field>
              <Field label="Select a Service" id="service" error={errors["service"]} required>
                <select id="service" name="service" defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    Select a service
                  </option>
                  {[...SERVICE_NAMES, "Other"].map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Budget Range" id="budget">
                <select id="budget" name="budget" defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    Select a budget range
                  </option>
                  {[
                    "Under ₹25,000",
                    "₹25,000 – ₹50,000",
                    "₹50,000 – ₹1,00,000",
                    "₹1,00,000+",
                    "Not Sure Yet",
                  ].map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </Field>
              <div className="sm:col-span-2">
                <Field label="Project Details" id="project_details" error={errors["project_details"]} required>
                  <textarea
                    id="project_details"
                    name="project_details"
                    rows={5}
                    maxLength={2000}
                    placeholder="Tell us what you would like to build..."
                    className={inputClass}
                  />
                </Field>
              </div>
              <div className="sm:col-span-2">
                {formError && (
                  <p className="text-destructive mb-3 text-center text-sm">{formError}</p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold w-full rounded-full px-8 py-3.5 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    "Send Project Request"
                  )}
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  error,
  required,
  children,
}: {
  label: string;
  id: string;
  error?: string | undefined;
  required?: boolean | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-foreground/90 mb-2 block text-sm font-medium">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      {children}
      {error && <p className="text-destructive mt-2 text-xs">{error}</p>}
    </div>
  );
}
