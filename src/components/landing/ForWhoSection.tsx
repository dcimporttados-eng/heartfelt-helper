import { ScrollReveal } from "./ScrollReveal";

const yesItems = [
  "Você é social media e precisa de artes prontas todo dia",
  "Está começando no digital e não sabe por onde começar",
  "Quer profissionalizar seu negócio sem gastar uma fortuna",
  "É freelancer e precisa entregar mais rápido pros clientes",
  "Quer revender produtos digitais e ter uma renda extra",
];

const noItems = [
  "Você não vai usar — vai deixar parado e reclamar depois",
  "Espera ficar rico do dia pra noite sem fazer nada",
  "Não tem 5 minutos pra acessar o material",
];

const ForWhoSection = () => (
  <section className="py-24 px-4">
    <div className="container max-w-4xl mx-auto">
      <ScrollReveal>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-12">
          Este Pack é Pra Você?
        </h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <ScrollReveal variant="left">
          <div className="p-px rounded-2xl bg-gradient-to-br from-primary/25 to-primary/5 h-full">
            <div className="bg-card rounded-2xl p-6 sm:p-8 h-full">
              <h3 className="font-heading font-bold text-xl mb-6 text-primary flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center text-sm">✓</span>
                Isso é pra você se:
              </h3>
              <ul className="space-y-4">
                {yesItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground text-sm sm:text-base">
                    <span className="text-primary flex-shrink-0 mt-0.5">✅</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={150} variant="right">
          <div className="p-px rounded-2xl bg-gradient-to-br from-destructive/20 to-destructive/5 h-full">
            <div className="bg-card rounded-2xl p-6 sm:p-8 h-full">
              <h3 className="font-heading font-bold text-xl mb-6 text-destructive flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-destructive/15 flex items-center justify-center text-sm">✗</span>
                Isso NÃO é pra você se:
              </h3>
              <ul className="space-y-4">
                {noItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground text-sm sm:text-base">
                    <span className="text-destructive flex-shrink-0 mt-0.5">❌</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default ForWhoSection;
