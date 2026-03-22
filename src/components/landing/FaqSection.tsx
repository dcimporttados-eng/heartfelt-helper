import { ScrollReveal } from "./ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Recebo tudo imediatamente?", a: "Sim. Em menos de 2 minutos após o pagamento você recebe o acesso completo no email." },
  { q: "Posso usar nos meus clientes e projetos?", a: "Sim! Todos os templates e artes são editáveis. Use no seu negócio, nos seus clientes, nos seus projetos." },
  { q: "Funciona no celular?", a: "Os templates Canva funcionam no app mobile. Planilhas e outros arquivos funcionam melhor no computador." },
  { q: "Tem suporte?", a: "Sim. Qualquer dúvida é só chamar no WhatsApp que a gente te ajuda." },
  { q: "Quais as formas de pagamento?", a: "PIX (aprovação instantânea), cartão de crédito em até 12x e boleto bancário. Tudo via Cakto." },
  { q: "E se eu não gostar?", a: "Você tem 7 dias pra testar. Não gostou? Devolvemos 100% do valor. Sem perguntas." },
  { q: "Posso revender os produtos digitais?", a: "Sim! Os 20 produtos digitais validados foram feitos pra isso — revenda e lucre." },
];

const FaqSection = () => (
  <section className="py-24 px-4">
    <div className="container max-w-3xl mx-auto">
      <ScrollReveal>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-3">
          Perguntas Frequentes
        </h2>
        <p className="text-foreground/50 text-center text-sm sm:text-base mb-12">
          Tire suas dúvidas antes de garantir o seu pack.
        </p>
      </ScrollReveal>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <ScrollReveal key={i} delay={i * 55}>
            <AccordionItem
              value={`faq-${i}`}
              className="faq-item rounded-xl border border-border px-5 bg-card/80 backdrop-blur-sm overflow-hidden transition-all duration-300 data-[state=open]:border-primary/35 data-[state=open]:bg-primary/[0.03]"
            >
              <AccordionTrigger className="font-heading font-semibold text-sm sm:text-base text-foreground/80 hover:no-underline hover:text-foreground py-5 transition-colors duration-200 data-[state=open]:text-primary [&[data-state=open]>span.faq-icon]:bg-primary/15 [&[data-state=open]>span.faq-icon]:text-primary">
                <span className="text-left">{faq.q}</span>
                <span className="faq-icon flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 ml-3">
                  <svg
                    className="w-3 h-3 transition-transform duration-300 [[data-state=open]_&]:rotate-45"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-foreground/55 text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          </ScrollReveal>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FaqSection;
