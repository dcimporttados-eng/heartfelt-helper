import { ScrollReveal } from "./ScrollReveal";
import CTAButton from "./CTAButton";

const FinalCta = () => (
  <section className="py-24 px-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(153,100%,50%,0.03)] to-transparent" />
    
    <div className="container max-w-3xl mx-auto text-center relative z-10">
      <ScrollReveal>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl mb-4" style={{ textWrap: "balance" as any }}>
          A decisão é sua.
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg mb-10 max-w-xl mx-auto" style={{ textWrap: "pretty" as any }}>
          Você pode continuar gastando horas procurando material na internet... ou ter tudo pronto agora por R$37.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <ul className="flex flex-col items-center gap-3 mb-10 text-sm sm:text-base text-foreground">
          <li>✅ +50.000 arquivos profissionais prontos pra usar</li>
          <li>✅ Acesso imediato — começa a usar hoje</li>
          <li>✅ Garantia de 7 dias — risco zero</li>
        </ul>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div className="mb-6">
          <span className="text-destructive line-through text-lg mr-3">R$497</span>
          <span className="text-primary font-heading font-extrabold text-4xl sm:text-5xl">R$37</span>
        </div>

        <CTAButton text="GARANTIR MEU MEGA PACK AGORA →" />

        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-muted-foreground text-xs sm:text-sm">
          <span>🔒 Compra Segura</span>
          <span>⚡ Acesso Imediato</span>
          <span>🛡️ Garantia 7 Dias</span>
        </div>

        <div className="flex items-center justify-center gap-3 mt-5 text-muted-foreground text-xs">
          <span>PIX</span>
          <span>•</span>
          <span>Visa</span>
          <span>•</span>
          <span>Mastercard</span>
          <span>•</span>
          <span>Boleto</span>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default FinalCta;
