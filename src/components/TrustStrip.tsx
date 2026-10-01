const commitments = [
  "Enfermeiro Gerontólogo à frente",
  "Coordenação clínica de enfermagem",
  "Cuidadores selecionados e treinados",
  "Atendimento em SP e MG",
];

const TrustStrip = () => (
  <section aria-label="Compromissos da Aegis Care" className="border-b border-border bg-background py-10 md:py-12">
    <div className="container-editorial grid grid-cols-2 lg:grid-cols-4 gap-y-8">
      {commitments.map((item, index) => (
        <p key={item} className="border-l border-border pl-5 pr-4 text-sm md:text-base font-display leading-snug text-foreground">
          <span className="block text-xs text-[hsl(var(--teal-deep))] mb-3 tabular-nums">{String(index + 1).padStart(2, "0")}</span>
          {item}
        </p>
      ))}
    </div>
  </section>
);

export default TrustStrip;