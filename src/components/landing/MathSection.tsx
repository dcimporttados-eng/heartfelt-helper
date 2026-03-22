import { ScrollReveal } from "./ScrollReveal";

const MathSection = () => (
  <section className="py-24 px-4">
    <div className="container max-w-4xl mx-auto">
      <ScrollReveal>
        <h2
          className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-4"
          style={{ textWrap: "balance" as any }}
        >
          Faz a conta. Cada arquivo sai por menos de 1 centavo.
        </h2>
        <p className="text-muted-foreground text-center text-sm sm:text-base mb-12">
          A matemática não mente.
        </p>
      </ScrollReveal>

      {/* Calculator visual */}
      <ScrollReveal delay={100}>
        <div className="max-w-md mx-auto mb-14">
          <div className="p-px rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5">
            <div className="bg-card rounded-2xl p-8 sm:p-10 text-center space-y-3">
              <p className="font-heading font-bold text-xl text-foreground">+50.000 arquivos profissionais</p>
              <p className="font-heading font-bold text-xl text-muted-foreground">÷ R$37</p>
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-2" />
              <p className="font-heading font-extrabold text-3xl text-primary">= R$0,0007 por arquivo</p>
              <p className="text-muted-foreground text-sm mt-4">
                No mercado, só o pack de templates Canva custa R$297
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Comparison cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <ScrollReveal delay={150}>
          <div className="bg-card rounded-xl p-6 border border-destructive/20 text-center h-full hover:border-destructive/40 transition-colors duration-300">
            <span className="text-destructive text-2xl mb-3 block">✗</span>
            <p className="font-heading font-bold text-foreground mb-1">Comprar separado</p>
            <p className="text-destructive font-heading font-bold text-xl">+R$2.000</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={250}>
          <div className="bg-card rounded-xl p-6 border border-destructive/20 text-center h-full hover:border-destructive/40 transition-colors duration-300">
            <span className="text-destructive text-2xl mb-3 block">✗</span>
            <p className="font-heading font-bold text-foreground mb-1">Contratar designer</p>
            <p className="text-destructive font-heading font-bold text-xl">+R$3.000/mês</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={350}>
          <div className="bg-card rounded-xl p-6 border-2 border-primary/40 text-center glow-green relative h-full hover:border-primary/60 transition-colors duration-300">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-primary text-primary-foreground text-xs font-heading font-bold rounded-full">
              MELHOR OPÇÃO
            </div>
            <span className="text-primary text-2xl mb-3 block">✓</span>
            <p className="font-heading font-bold text-foreground mb-1">Mega Pack Digital</p>
            <p className="text-primary font-heading font-bold text-xl">
              R$37 <span className="text-sm text-muted-foreground font-normal">(uma vez)</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default MathSection;
