import { ScrollReveal } from "./ScrollReveal";
import CTAButton from "./CTAButton";

const FinalCta = () => (
  <section id="final-cta" className="py-28 px-4 relative overflow-hidden">
    {/* Background glows */}
    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(153,100%,50%,0.04)] to-transparent pointer-events-none" />
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

    <div className="container max-w-3xl mx-auto text-center relative z-10">
      <ScrollReveal>
        <h2
          className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl mb-4"
          style={{ textWrap: "balance" as any }}
        >
          A decisão é sua.
        </h2>
        <p
          className="text-muted-foreground text-base sm:text-lg mb-10 max-w-xl mx-auto"
          style={{ textWrap: "pretty" as any }}
        >
          Você pode continuar gastando horas procurando material na internet... ou ter tudo pronto
          agora por R$37.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <ul className="flex flex-col items-center gap-3 mb-10 text-sm sm:text-base text-foreground">
          <li>✅ +50.000 arquivos profissionais prontos pra usar</li>
          <li>✅ Acesso imediato — começa a usar hoje</li>
          <li>✅ Garantia de 7 dias — risco zero</li>
        </ul>
      </ScrollReveal>

      <ScrollReveal delay={200} variant="scale">
        <div className="mb-6">
          <span className="text-destructive line-through text-lg mr-3">R$497</span>
          <span className="text-primary font-heading font-extrabold text-4xl sm:text-5xl">R$37</span>
        </div>

        <CTAButton text="GARANTIR MEU MEGA PACK AGORA →" />

        <div className="flex flex-wrap items-center justify-center gap-5 mt-7 text-muted-foreground text-xs sm:text-sm">
          <span>🔒 Compra Segura</span>
          <span>⚡ Acesso Imediato</span>
          <span>🛡️ Garantia 7 Dias</span>
        </div>

        <div className="flex items-center justify-center gap-3 mt-5 text-muted-foreground text-xs">
          <span className="px-2.5 py-1 bg-secondary rounded-md">PIX</span>
          <span className="px-2.5 py-1 bg-secondary rounded-md">Visa</span>
          <span className="px-2.5 py-1 bg-secondary rounded-md">Mastercard</span>
          <span className="px-2.5 py-1 bg-secondary rounded-md">Boleto</span>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default FinalCta;
