import CTAButton from "./CTAButton";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 px-4">
    {/* Gradient background */}
    <div className="absolute inset-0 bg-gradient-to-b from-[hsl(240,20%,5%)] via-background to-background" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

    <div className="relative z-10 max-w-3xl mx-auto text-center">
      {/* Urgency badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-body text-sm mb-8 animate-gentle-bounce">
        🔥 478 pessoas compraram esta semana
      </div>

      <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl leading-[1.1] mb-6 text-foreground" style={{ textWrap: "balance" as any }}>
        Mais de 50.000 Arquivos Prontos Para Você Usar no Seu Negócio Digital — Por Menos Que Uma Pizza
      </h1>

      <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed" style={{ textWrap: "pretty" as any }}>
        Templates Canva, funis prontos, copies de WhatsApp, planilhas, artes profissionais e mais. Tudo que levaria meses pra juntar, você acessa em 2 minutos.
      </p>

      {/* Pricing */}
      <div className="mb-6">
        <span className="text-destructive line-through text-lg mr-3 font-body">R$497</span>
        <span className="text-primary font-heading font-extrabold text-4xl sm:text-5xl">R$37</span>
      </div>
      <p className="text-muted-foreground text-sm mb-8">Isso dá menos de R$0,001 por arquivo</p>

      <CTAButton text="QUERO MEU MEGA PACK POR R$37 →" />

      <p className="text-muted-foreground text-xs sm:text-sm mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
        <span>✅ Acesso imediato</span>
        <span>✅ Garantia 7 dias</span>
        <span>✅ Pagamento seguro</span>
      </p>
    </div>
  </section>
);

export default HeroSection;
