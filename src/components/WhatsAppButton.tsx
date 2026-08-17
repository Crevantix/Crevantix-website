import { WHATSAPP_URL } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Crevantix on WhatsApp"
      className="group fixed right-[18px] bottom-[18px] z-50 flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110 sm:right-6 sm:bottom-6"
      style={{
        backgroundColor: "#25D366",
        boxShadow:
          "0 0 0 2px color-mix(in oklab, var(--gold) 65%, transparent), 0 0 26px -4px color-mix(in oklab, var(--gold) 60%, transparent)",
      }}
    >
      <svg viewBox="0 0 32 32" width="30" height="30" fill="#fff" aria-hidden="true">
        <path d="M16.04 3C9.4 3 4 8.4 4 15.04c0 2.12.55 4.19 1.6 6.02L4 29l8.13-1.55a12.02 12.02 0 0 0 3.9.65h.01C22.68 28.1 28 22.7 28 16.06 28 12.85 26.76 9.83 24.5 7.57A11.9 11.9 0 0 0 16.04 3Zm0 2.2c2.9 0 5.62 1.13 7.67 3.18a10.75 10.75 0 0 1 3.17 7.68c0 5.44-4.4 9.84-9.85 9.84-1.77 0-3.5-.47-5.02-1.37l-.36-.21-4.82.92.94-4.7-.23-.38a9.78 9.78 0 0 1-1.5-5.22c0-5.43 4.42-9.85 10-9.74Zm-5.4 5.05c-.25 0-.66.1-1 .47-.35.37-1.32 1.29-1.32 3.14s1.35 3.64 1.54 3.89c.19.25 2.62 4 6.36 5.46 3.11 1.2 3.74.96 4.42.9.68-.06 2.19-.9 2.5-1.76.31-.87.31-1.6.22-1.76-.09-.16-.34-.25-.71-.43-.37-.19-2.19-1.08-2.53-1.2-.34-.13-.59-.19-.83.18-.25.37-.96 1.2-1.18 1.45-.22.25-.43.28-.8.09-.37-.19-1.56-.57-2.98-1.83-1.1-.98-1.85-2.19-2.06-2.56-.22-.37-.03-.57.16-.75.17-.17.37-.43.56-.65.18-.22.24-.37.37-.62.12-.25.06-.47-.03-.65-.09-.19-.83-2.04-1.14-2.79-.3-.73-.6-.63-.83-.64h-.72Z" />
      </svg>
      <span className="border-border bg-background/95 text-gold-champagne pointer-events-none absolute right-[calc(100%+12px)] hidden rounded-full border px-3 py-1.5 text-xs whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block">
        Chat with Crevantix
      </span>
    </a>
  );
}
