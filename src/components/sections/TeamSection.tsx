import { User } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imageUrl?: string;
  delay: string;
}

const TeamMember = ({ name, role, description, imageUrl, delay }: TeamMemberProps) => (
  <div className={`text-center opacity-0 animate-fade-up ${delay}`}>
    {/* Photo Container */}
    <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-6 rounded-full overflow-hidden border-2 border-silver/40 bg-navy-light">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={`${name} - ${role} - Engenheiro civil em Barbacena MG`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <User className="w-16 h-16 text-silver/50" aria-hidden="true" />
        </div>
      )}
    </div>

    {/* Info */}
    <h3 className="font-sans text-xl lg:text-2xl font-semibold text-foreground mb-2">
      {name}
    </h3>
    <p className="text-silver font-medium mb-3">
      {role}
    </p>
    <p className="text-silver/70 text-sm max-w-xs mx-auto leading-relaxed">
      {description}
    </p>
  </div>
);

const TeamSection = () => {
  const team = [
    {
      name: "Gustavo Armando dos Santos",
      role: "Diretor Técnico",
      description: "Engenheiro civil responsável por laudos técnicos, vistorias estruturais e avaliação de imóveis em Barbacena – MG.",
      imageUrl: undefined,
    },
    {
      name: "Engenheiro Sênior",
      role: "Especialista Estrutural",
      description: "Especialista em análises estruturais e laudos periciais de engenharia civil.",
      imageUrl: undefined,
    },
    {
      name: "Especialista em Inspeções",
      role: "Técnico de Campo",
      description: "Apoio em inspeções de campo e preparação de relatórios técnicos.",
      imageUrl: undefined,
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-navy">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 opacity-0 animate-fade-up">
            Nossa Equipe
          </h2>
          <p className="text-silver max-w-2xl mx-auto opacity-0 animate-fade-up animation-delay-100">
            Engenheiros civis especializados em laudos e perícias.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 lg:gap-16 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <TeamMember
              key={member.name}
              {...member}
              delay={`animation-delay-${(index + 2) * 100}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;