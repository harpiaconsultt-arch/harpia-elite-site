import { User } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imageUrl?: string;
}

const TeamMember = ({ name, role, description, imageUrl }: TeamMemberProps) => (
  <div className="bg-navy-light/50 rounded-xl p-6 lg:p-8 border border-silver/10 hover:border-silver/20 transition-colors">
    {/* Photo Container */}
    <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-5 rounded-full overflow-hidden border-2 border-silver/30 bg-navy">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={`${name} - ${role}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <User className="w-10 h-10 lg:w-12 lg:h-12 text-silver/50" aria-hidden="true" />
        </div>
      )}
    </div>

    {/* Info */}
    <h3 className="font-montserrat text-lg lg:text-xl font-semibold text-foreground mb-3 text-center">
      {name}
    </h3>
    <p className="font-montserrat text-silver/80 text-sm leading-relaxed text-center line-clamp-3 lg:line-clamp-2">
      {description}
    </p>
  </div>
);

const TeamSection = () => {
  const team = [
    {
      name: "Gustavo Santos – Engenheiro Civil",
      description: "Especialista em contenções e estabilidade de taludes, perito credenciado e engenheiro avaliador. Atuou em obras relevantes, incluindo o projeto de contenção do Morro da Forca em Ouro Preto.",
      imageUrl: undefined,
    },
    {
      name: "Lucas de Sá – Engenheiro Mecânico e Civil",
      description: "Engenheiro com formação em Mecânica, Segurança do Trabalho e Civil. Doutorando em Estruturas pela UFJF, com atuação técnica em análise e comportamento estrutural.",
      imageUrl: undefined,
    },
    {
      name: "Djalmir Silva – Arquiteto e Urbanista",
      description: "Arquiteto e urbanista, capitão da reserva da Aeronáutica e consultor do IPHAN, com atuação em patrimônio, fiscalização e gestão de intervenções urbanas.",
      imageUrl: undefined,
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-navy">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Nossa Equipe
          </h2>
          <p className="font-montserrat text-silver max-w-xl mx-auto">
            Profissionais especializados em laudos e perícias técnicas.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {team.map((member) => (
            <TeamMember
              key={member.name}
              {...member}
              role=""
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;