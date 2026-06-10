import cuidadoImage from "@/assets/cuidado-aegis-premium.webp";

const MissionSection = () => {
  return (
    <section className="py-28 md:py-40 bg-[hsl(var(--sand))] overflow-hidden">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <img
              src={cuidadoImage}
              alt="Presença humana, discreta e atenta"
              className="w-full h-[480px] md:h-[600px] object-cover rounded-sm shadow-card"
              loading="lazy"
              width={1400}
              height={1600}
            />
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="eyebrow mb-6 block">Nossa essência</span>
            <h2 className="font-display text-3xl md:text-[2.5rem] lg:text-[3rem] leading-[1.12] text-foreground mb-10">
              Cuidar é, antes de tudo,{" "}
              <span className="italic text-[hsl(var(--teal-deep))]">manter intacto</span>{" "}
              aquilo que cada vida construiu.
            </h2>

            <div className="space-y-10">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="h-px w-10 bg-[hsl(var(--gold))]" />
                  <span className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--gold-deep))] font-semibold">
                    Missão
                  </span>
                </div>
                <p className="text-foreground/85 text-lg leading-[1.8] prose-justified">
                  Sustentar a continuidade da vida no lar, com presença humana, critério
                  clínico e respeito profundo pela história de cada pessoa cuidada.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="h-px w-10 bg-[hsl(var(--teal-deep))]" />
                  <span className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--teal-deep))] font-semibold">
                    Visão
                  </span>
                </div>
                <p className="text-foreground/85 text-lg leading-[1.8] prose-justified">
                  Ser a referência brasileira em assistência domiciliar privada, reconhecida
                  pela excelência discreta, pela coordenação clínica de enfermagem e pelo
                  acolhimento que transforma o cuidado em tranquilidade familiar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
