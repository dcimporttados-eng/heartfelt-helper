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
  <section className="py-20 px-4">
    <div className="container max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-14" style={{ textWrap: "balance" as any }}>
          Olha Tudo Que Você Leva Hoje
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <ScrollReveal key={i} delay={i * 80}>
            <div className="bg-card rounded-xl p-5 sm:p-6 card-glow relative group hover:border-primary/20 transition-colors duration-300 h-full">
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
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Total */}
      <ScrollReveal delay={200}>
        <div className="mt-14 text-center space-y-3">
          <p className="text-muted-foreground text-lg">
            Valor total se comprasse separado: <span className="line-through text-destructive">R$2.634</span>
          </p>
          <p className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground">
            Seu investimento hoje: <span className="text-primary">R$37</span>
          </p>
          <p className="text-primary font-heading font-bold text-lg">
            Você economiza: R$2.597 (95% de desconto)
          </p>
          <div className="pt-6">
            <CTAButton text="QUERO TUDO ISSO POR APENAS R$37 →" />
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ValueStack;
