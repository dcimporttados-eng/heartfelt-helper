import { ScrollReveal } from "./ScrollReveal";
import CTAButton from "./CTAButton";

const items = [
  { emoji: "📐", title: "+1.000 Templates Canva Editáveis", value: "R$297", sub: "Posts, stories, carrosséis, capas — prontos pra editar e postar" },
  { emoji: "🎨", title: "+20.000 Artes Profissionais", value: "R$197", sub: "Artes pra redes sociais de qualquer nicho" },
  { emoji: "🤖", title: "+2.100 Funis Typebot Prontos", value: "R$497", sub: "Funis de vendas, atendimento e qualificação — só importar e usar" },
  { emoji: "💬", title: "+200 Copies de Conversão WhatsApp", value: "R$147", sub: "Mensagens testadas que vendem. Cole no WhatsApp e feche vendas" },
  { emoji: "📊", title: "+15.000 Planilhas Profissionais", value: "R$197", sub: "Financeiro, gestão, marketing, RH — todos os nichos" },
  { emoji: "🌐", title: "+10.000 Páginas Elementor", value: "R$397", sub: "Landing pages, sites completos, portfólios — WordPress pronto" },
  { emoji: "🎬", title: "+500 Vídeos e Clipes", value: "R$97", sub: "Vídeos de conteúdo prontos pra usar nos seus Reels" },
  { emoji: "📱", title: "+10.000 Imagens e Vetores", value: "R$147", sub: "Banco de imagens premium pra qualquer projeto" },
  { emoji: "📦", title: "+20 Produtos Digitais Validados", value: "R$297", sub: "Produtos prontos pra você revender e lucrar" },
  { emoji: "🎯", title: "+2.500 Fornecedores Drop", value: "R$197", sub: "Lista completa de fornecedores nacionais e internacionais" },
  { emoji: "📚", title: "+25 Livros de Negócios", value: "R$97", sub: "Os melhores livros sobre marketing, vendas e mentalidade" },
  { emoji: "🏷️", title: "+150 Modelos de Crachás", value: "R$47", sub: "Frente e verso, editáveis no Canva" },
];

const ValueStack = () => (
  <section className="py-24 px-4">
    <div className="container max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-4" style={{ textWrap: "balance" as any }}>
          Olha Tudo Que Você Leva Hoje
        </h2>
        <p className="text-muted-foreground text-center text-sm sm:text-base mb-14">
          Cada item abaixo vale muito mais do que você está pagando pelo pack inteiro.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {items.map((item, i) => (
          <ScrollReveal key={i} delay={i * 60}>
            {/* Gradient border wrapper */}
            <div className="rounded-xl p-px value-card-border h-full">
              <div className="value-card rounded-xl p-5 sm:p-6 h-full relative group">
                <span className="absolute top-4 right-4 text-gradient-gold font-heading font-bold text-sm">
                  {item.value}
                </span>
                <div className="flex items-start gap-3 pr-16">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{item.emoji}</span>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-sm sm:text-base mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{item.sub}</p>
                  </div>
                </div>
                {/* Shine effect on hover */}
                <div className="value-card-shine" />
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Total */}
      <ScrollReveal delay={200}>
        <div className="mt-16 text-center">
          <div className="inline-block rounded-2xl p-px bg-gradient-to-br from-primary/30 to-primary/5 mb-8">
            <div className="bg-card rounded-2xl px-8 py-6 space-y-2">
              <p className="text-muted-foreground text-base">
                Valor total se comprasse separado:{" "}
                <span className="line-through text-destructive font-heading font-semibold">R$2.634</span>
              </p>
              <p className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground">
                Seu investimento hoje:{" "}
                <span className="text-primary">R$37</span>
              </p>
              <p className="text-primary font-heading font-bold text-base">
                Você economiza: R$2.597 — <span className="text-accent">95% de desconto</span>
              </p>
            </div>
          </div>
          <div>
            <CTAButton text="QUERO TUDO ISSO POR APENAS R$37 →" />
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ValueStack;
