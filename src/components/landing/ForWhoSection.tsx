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
  <section className="py-20 px-4">
    <div className="container max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ScrollReveal>
          <div className="bg-card rounded-2xl p-6 sm:p-8 border border-primary/15 h-full">
            <h3 className="font-heading font-bold text-xl mb-6 text-primary">Isso é pra você se:</h3>
            <ul className="space-y-4">
              {yesItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground text-sm sm:text-base">
                  <span className="text-primary flex-shrink-0 mt-0.5">✅</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div className="bg-card rounded-2xl p-6 sm:p-8 border border-destructive/15 h-full">
            <h3 className="font-heading font-bold text-xl mb-6 text-destructive">Isso NÃO é pra você se:</h3>
            <ul className="space-y-4">
              {noItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground text-sm sm:text-base">
                  <span className="text-destructive flex-shrink-0 mt-0.5">❌</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default ForWhoSection;
