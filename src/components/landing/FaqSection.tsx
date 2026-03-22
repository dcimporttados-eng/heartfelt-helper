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
  <section className="py-20 px-4">
    <div className="container max-w-3xl mx-auto">
      <ScrollReveal>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-12">
          Perguntas Frequentes
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-5">
              <AccordionTrigger className="font-heading font-semibold text-sm sm:text-base text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollReveal>
    </div>
  </section>
);

export default FaqSection;
