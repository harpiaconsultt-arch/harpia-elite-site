import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5531982162913";
  const message = "Olá! Gostaria de solicitar um orçamento para laudo técnico de engenharia.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contato via WhatsApp - Solicitar laudo técnico de engenharia"
      title="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-fade-up"
    >
      <MessageCircle className="w-7 h-7 text-white" fill="white" />
      <span className="sr-only">WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
