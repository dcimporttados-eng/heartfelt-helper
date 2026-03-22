import { ScrollReveal } from "./ScrollReveal";

const MathSection = () => (
  <section className="py-20 px-4">
    <div className="container max-w-4xl mx-auto">
      <ScrollReveal>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-12" style={{ textWrap: "balance" as any }}>
          Faz a conta. Cada arquivo sai por menos de 1 centavo.
        </h2>
      </ScrollReveal>

      {/* Calculator visual */}
      <ScrollReveal delay={100}>
        <div className="bg-card rounded-2xl p-8 sm:p-10 card-glow max-w-md mx-auto mb-14 text-center space-y-3">
          <p className="font-heading font-bold text-xl text-foreground">+50.000 arquivos profissionais</p>
          <p className="font-heading font-bold text-xl text-muted-foreground">÷ R$37</p>
          <div className="h-px bg-border my-2" />
          <p className="font-heading font-extrabold text-3xl text-primary">= R$0,0007 por arquivo</p>
          <p className="text-muted-foreground text-sm mt-4">No mercado, só o pack de templates Canva custa R$297</p>
        </div>
      </ScrollReveal>

      {/* Comparison cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <ScrollReveal delay={150}>
          <div className="bg-card rounded-xl p-6 border border-destructive/20 text-center">
            <span className="text-destructive text-2xl mb-2 block">✗</span>
            <p className="font-heading font-bold text-foreground mb-1">Comprar separado</p>
            <p className="text-destructive font-heading font-bold text-xl">+R$2.000</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={250}>
          <div className="bg-card rounded-xl p-6 border border-destructive/20 text-center">
            <span className="text-destructive text-2xl mb-2 block">✗</span>
            <p className="font-heading font-bold text-foreground mb-1">Contratar designer</p>
            <p className="text-destructive font-heading font-bold text-xl">+R$3.000/mês</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={350}>
          <div className="bg-card rounded-xl p-6 border-2 border-primary/40 text-center glow-green relative">
            <span className="text-primary text-2xl mb-2 block">✓</span>
            <p className="font-heading font-bold text-foreground mb-1">Mega Pack Digital</p>
            <p className="text-primary font-heading font-bold text-xl">R$37 <span className="text-sm text-muted-foreground font-normal">(uma vez)</span></p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default MathSection;
