import { ScrollReveal } from "./ScrollReveal";

const GuaranteeSection = () => (
  <section className="py-20 px-4">
    <div className="container max-w-3xl mx-auto">
      <ScrollReveal>
        <div className="rounded-2xl p-8 sm:p-10 card-glow-gold border border-accent/20 bg-card text-center">
          <div className="text-5xl mb-5">🛡️</div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl mb-5 text-gradient-gold">
            Garantia Incondicional de 7 Dias
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl mx-auto" style={{ textWrap: "pretty" as any }}>
            Aqui é simples: compra, olha tudo com calma por 7 dias. Se por qualquer motivo você achar que não valeu os R$37, manda uma mensagem e devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. O risco é todo nosso.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default GuaranteeSection;
