import CTAButton from "./CTAButton";

const HeroSection = () => (
  <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-20 px-4">
    {/* Base gradient */}
    <div className="absolute inset-0 bg-gradient-to-b from-[hsl(240,22%,5%)] via-background to-background" />

    {/* Animated orbs */}
    <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-primary/8 rounded-full blur-[180px] animate-float-slow pointer-events-none" />
    <div className="absolute top-1/4 right-[5%] w-[380px] h-[380px] bg-accent/5 rounded-full blur-[120px] animate-float-medium pointer-events-none" />
    <div className="absolute bottom-0 left-[10%] w-[280px] h-[280px] bg-primary/4 rounded-full blur-[100px] animate-float-fast pointer-events-none" />

    {/* Subtle dot grid */}
    <div
      className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />

    <div className="relative z-10 max-w-4xl mx-auto text-center">
      {/* Urgency badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/25 text-accent font-body text-sm mb-10 animate-gentle-bounce">
        🔥 478 pessoas compraram esta semana
      </div>

      <h1
        className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.05] tracking-tight mb-7"
        style={{ textWrap: "balance" as any }}
      >
        <span className="text-foreground">Mais de 50.000 Arquivos Prontos Para Você Usar no Seu Negócio Digital —</span>
        <span className="bg-gradient-to-r from-primary via-[hsl(153,100%,65%)] to-primary bg-clip-text text-transparent"> Por Menos Que Uma Pizza</span>
      </h1>

      <p
        className="text-foreground/60 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        style={{ textWrap: "pretty" as any }}
      >
        Templates Canva, funis prontos, copies de WhatsApp, planilhas, artes profissionais e mais. Tudo
        que levaria meses pra juntar, você acessa em 2 minutos.
      </p>

      {/* Pricing */}
      <div className="mb-5 flex items-center justify-center gap-4">
        <span className="text-destructive/80 line-through text-xl font-body">R$497</span>
        <span className="text-primary font-heading font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight leading-none">
          R$37
        </span>
      </div>
      <p className="text-foreground/40 text-sm mb-10 tracking-wide">Isso dá menos de R$0,001 por arquivo</p>

      <CTAButton text="QUERO MEU MEGA PACK POR R$37 →" />

      <p className="text-foreground/45 text-xs sm:text-sm mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        <span>✅ Acesso imediato</span>
        <span>✅ Garantia 7 dias</span>
        <span>✅ Pagamento seguro</span>
      </p>
    </div>
  </section>
);

export default HeroSection;
