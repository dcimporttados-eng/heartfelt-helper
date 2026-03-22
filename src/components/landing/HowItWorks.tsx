import { ScrollReveal } from "./ScrollReveal";

const steps = [
  { num: "1", emoji: "🛒", title: "Clique no botão e faça o pagamento seguro via Cakto" },
  { num: "2", emoji: "📩", title: "Receba o acesso completo no seu email em menos de 2 minutos" },
  { num: "3", emoji: "🚀", title: "Abra, baixe e comece a usar hoje mesmo no seu negócio" },
];

const HowItWorks = () => (
  <section className="py-20 px-4">
    <div className="container max-w-4xl mx-auto text-center">
      <ScrollReveal>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-14">
          Simples Assim
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <ScrollReveal key={i} delay={i * 150}>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-3xl mb-5">
                {step.emoji}
              </div>
              <span className="text-primary font-heading font-extrabold text-sm tracking-wider mb-2">
                PASSO {step.num}
              </span>
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
