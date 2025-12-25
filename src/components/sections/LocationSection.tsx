import { useState } from "react";
import { MapPin, Phone, Clock, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const LocationSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    mensagem: "",
  });

  const phoneNumber = "5531982162913";

  // Google Maps embed URL for Barbacena - MG
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59582.89599567812!2d-43.8097437!3d-21.2257539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa30e7d79c4bddf%3A0x5c7c0c6c66a0e72c!2sBarbacena%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1680000000000!5m2!1spt-BR!2sbr";

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" aria-hidden="true" />,
      label: "Endereço",
      value: "Avenida Olegário Maciel, 470, Centro\nBarbacena – MG | CEP 36200-082",
    },
    {
      icon: <Phone className="w-5 h-5" aria-hidden="true" />,
      label: "Telefone",
      value: "(31) 98216-2913",
    },
    {
      icon: <Mail className="w-5 h-5" aria-hidden="true" />,
      label: "E-mail",
      value: "contato@harpiaconsultoria.eng.br",
    },
    {
      icon: <Clock className="w-5 h-5" aria-hidden="true" />,
      label: "Horário de Atendimento",
      value: "Segunda a Sexta: 8h às 18h\nSábado: 9h às 13h",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const nome = formData.nome.trim().slice(0, 100);
    const telefone = formData.telefone.trim().slice(0, 20);
    const mensagem = formData.mensagem.trim().slice(0, 500);

    if (!nome || !telefone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha seu nome e telefone.",
        variant: "destructive",
      });
      return;
    }

    // Build WhatsApp message
    const whatsappMessage = `Olá! Meu nome é ${nome}.
Telefone: ${telefone}
${mensagem ? `\nMensagem: ${mensagem}` : ""}

Gostaria de solicitar um orçamento para laudo técnico de engenharia.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    toast({
      title: "Redirecionando para o WhatsApp",
      description: "Complete o envio da mensagem no WhatsApp.",
    });

    // Clear form
    setFormData({ nome: "", telefone: "", mensagem: "" });
  };

  return (
    <section className="py-24 lg:py-32 bg-off-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-semibold text-card-foreground mb-6 opacity-0 animate-fade-up">
            Atendimento em Barbacena – MG
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto opacity-0 animate-fade-up animation-delay-100">
            Laudos técnicos, vistorias e perícias na região.
          </p>
        </header>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column: Contact Info + Form */}
            <div className="space-y-10 opacity-0 animate-fade-up animation-delay-200">
              {/* Contact Information */}
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg border border-silver/30 flex items-center justify-center text-silver-dark shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-silver-dark uppercase tracking-wider mb-1">
                        {info.label}
                      </p>
                      <p className="text-card-foreground whitespace-pre-line leading-relaxed">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Form Card */}
              <div className="bg-primary rounded-xl p-6 lg:p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-sans text-xl font-semibold text-foreground">
                      Solicite um Orçamento
                    </h3>
                    <p className="text-silver text-sm">
                      Resposta rápida via WhatsApp
                    </p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-silver-light mb-2">
                        Nome completo *
                      </label>
                      <Input
                        id="nome"
                        type="text"
                        name="nome"
                        placeholder="Digite seu nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        maxLength={100}
                        required
                        className="bg-navy-light border-silver/20 text-foreground placeholder:text-silver/50 focus:border-silver/40 h-12"
                        aria-label="Nome completo"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="telefone" className="block text-sm font-medium text-silver-light mb-2">
                        Telefone / WhatsApp *
                      </label>
                      <Input
                        id="telefone"
                        type="tel"
                        name="telefone"
                        placeholder="(00) 00000-0000"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        maxLength={20}
                        required
                        className="bg-navy-light border-silver/20 text-foreground placeholder:text-silver/50 focus:border-silver/40 h-12"
                        aria-label="Telefone para contato"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="mensagem" className="block text-sm font-medium text-silver-light mb-2">
                        Mensagem (opcional)
                      </label>
                      <Textarea
                        id="mensagem"
                        name="mensagem"
                        placeholder="Descreva brevemente sua necessidade..."
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        maxLength={500}
                        rows={4}
                        className="bg-navy-light border-silver/20 text-foreground placeholder:text-silver/50 focus:border-silver/40 resize-none"
                        aria-label="Mensagem opcional"
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold h-12 text-base shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" aria-hidden="true" />
                    Enviar via WhatsApp
                  </Button>
                  
                  <p className="text-center text-silver/60 text-xs mt-3">
                    Ao enviar, você será redirecionado para o WhatsApp
                  </p>
                </form>
              </div>
            </div>

            {/* Map */}
            <div className="opacity-0 animate-fade-up animation-delay-300">
              <div className="rounded-lg overflow-hidden shadow-card border border-border h-80 lg:h-full min-h-[400px]">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização em Barbacena MG - Laudos Técnicos de Engenharia Civil"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;