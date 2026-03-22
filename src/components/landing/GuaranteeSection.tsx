import { ScrollReveal } from "./ScrollReveal";

const GuaranteeSection = () => (
  <section className="py-24 px-4">
    <div className="container max-w-3xl mx-auto">
      <ScrollReveal variant="scale">
        {/* Gold gradient border */}
        <div className="p-px rounded-2xl bg-gradient-to-br from-[hsl(43,100%,50%,0.4)] via-[hsl(43,100%,50%,0.1)] to-transparent">
          <div className="rounded-2xl p-8 sm:p-10 bg-card text-center relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(43,100%,50%,0.04)] to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="text-5xl mb-5 animate-gentle-bounce inline-block">🛡️</div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl mb-5 text-gradient-gold">
                Garantia Incondicional de 7 Dias
              </h2>
              <p
                className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl mx-auto"
                style={{ textWrap: "pretty" as any }}
              >
                Aqui é simples: compra, olha tudo com calma por 7 dias. Se por qualquer motivo você
                achar que não valeu os R$37, manda uma mensagem e devolvemos{" "}
                <strong className="text-foreground">100% do seu dinheiro</strong>. Sem perguntas, sem
                burocracia. O risco é todo nosso.
              </p>
              <div className="flex items-center justify-center gap-6 mt-6 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  Risco zero
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  Sem perguntas
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                  Reembolso total
                </span>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default GuaranteeSection;
