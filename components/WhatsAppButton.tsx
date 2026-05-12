import { siteConfig } from "@/data/siteConfig";

type WhatsAppButtonProps = {
  label?: string;
  message?: string;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

const variantClasses = {
  primary: "bg-eucalyptus text-white hover:bg-ink",
  secondary: "bg-ink text-white hover:bg-eucalyptus",
  light: "bg-white text-ink hover:bg-mist",
};

export function getWhatsAppUrl(message: string = siteConfig.whatsappMessage) {
  const phone = siteConfig.whatsappNumber.replace("+", "").replace(/\s/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function WhatsAppButton({
  label = "WhatsApp ile teklif al",
  message,
  variant = "primary",
  className = "",
}: WhatsAppButtonProps) {
  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${variantClasses[variant]} ${className}`}
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </a>
  );
}
