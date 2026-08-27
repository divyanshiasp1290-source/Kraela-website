import { FaWhatsapp } from "react-icons/fa";
import { company } from "@/data/site";

export function WhatsAppButton() {
  const whatsappNumber = company.whatsapp.replace(/\D/g, "");
  const message = "Hello Kraela, I would like to enquire about your products.";

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Kraela on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed right-5 bottom-5 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-brand-green-deep/20 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold md:right-8 md:bottom-8"
    >
      <FaWhatsapp className="size-7" aria-hidden="true" />
    </a>
  );
}
