import { User } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  credentials: string;
  imageUrl?: string;
  delay: string;
}

const TeamMember = ({ name, role, credentials, imageUrl, delay }: TeamMemberProps) => (
  <div className={`text-center opacity-0 animate-fade-up ${delay}`}>
    {/* Photo Container */}
    <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-6 rounded-full overflow-hidden border-2 border-silver/40 bg-navy-light">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={`${name} - ${role}`}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <User className="w-16 h-16 text-silver/50" />
        </div>
      )}
    </div>

    {/* Info */}
    <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-2">
      {name}
    </h3>
    <p className="text-silver font-medium mb-1">
      {role}
    </p>
    <p className="text-silver/70 text-sm">
      {credentials}
    </p>
  </div>
);

const TeamSection = () => {
  const team = [
    {
      name: "Nome do Fundador",
      role: "Diretor Técnico",
      credentials: "Eng. Civil, MSc. Estruturas",
      imageUrl: undefined, // Replace with actual photo URL
    },
    {
      name: "Nome do Engenheiro",
      role: "Engenheiro Sênior",
      credentials: "Eng. Civil, Esp. Patologia",
      imageUrl: undefined, // Replace with actual photo URL
    },
    {
      name: "Nome do Especialista",
      role: "Especialista em Inspeções",
      credentials: "Eng. Civil, CREA-XX 00000",
      imageUrl: undefined, // Replace with actual photo URL
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-navy">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-silver text-sm font-medium tracking-[0.25em] uppercase mb-4 opacity-0 animate-fade-up">
            Especialistas
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 opacity-0 animate-fade-up animation-delay-100">
            Nossa Equipe
          </h2>
          <p className="text-silver max-w-2xl mx-auto opacity-0 animate-fade-up animation-delay-200">
            Profissionais altamente qualificados com décadas de experiência combinada em engenharia estrutural e inspeções técnicas.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <TeamMember
              key={member.name}
              {...member}
              delay={`animation-delay-${(index + 3) * 100}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
