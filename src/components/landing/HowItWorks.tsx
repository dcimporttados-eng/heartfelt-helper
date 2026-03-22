import { ScrollReveal } from "./ScrollReveal";

const steps = [
  { num: "1", emoji: "🛒", title: "Clique no botão e faça o pagamento seguro via Cakto" },
  { num: "2", emoji: "📩", title: "Receba o acesso completo no seu email em menos de 2 minutos" },
  { num: "3", emoji: "🚀", title: "Abra, baixe e comece a usar hoje mesmo no seu negócio" },
];

const HowItWorks = () => (
  <section className="py-24 px-4">
    <div className="container max-w-4xl mx-auto text-center">
      <ScrollReveal>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
          Simples Assim
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base mb-14">
          Três passos e você já tem tudo na mão.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
        {/* Connector line (desktop only) */}
        <div className="hidden sm:block absolute top-8 left-[calc(16.6%+2rem)] right-[calc(16.6%+2rem)] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {steps.map((step, i) => (
          <ScrollReveal key={i} delay={i * 150} variant="scale">
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary/50 border border-border flex items-center justify-center text-3xl mb-5 group-hover:border-primary/30 group-hover:shadow-[0_0_20px_hsla(153,100%,50%,0.15)] transition-all duration-300">
                {step.emoji}
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-heading font-extrabold flex items-center justify-center">
                  {step.num}
                </span>
              </div>
              <p className="text-foreground font-body text-sm sm:text-base leading-relaxed">
                {step.title}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
