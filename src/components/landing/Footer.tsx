import { useState } from "react";

type ModalKey = "termos" | "privacidade" | "contato" | null;

const modalContent: Record<Exclude<ModalKey, null>, { title: string; body: JSX.Element }> = {
  termos: {
    title: "Termos de Uso",
    body: (
      <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
        <p>
          Ao adquirir o <strong className="text-foreground">Mega Pack Digital</strong>, você concorda com os seguintes termos:
        </p>
        <h3 className="text-foreground font-semibold">1. Licença de Uso</h3>
        <p>O acesso é pessoal e intransferível. Você pode usar os materiais em projetos próprios e de clientes, mas não pode revender o pack completo como produto idêntico.</p>
        <h3 className="text-foreground font-semibold">2. Produtos Digitais Validados</h3>
        <p>Os 20 produtos digitais incluídos possuem direito de revenda individual. Você pode comercializá-los separadamente.</p>
        <h3 className="text-foreground font-semibold">3. Garantia</h3>
        <p>Oferecemos garantia incondicional de 7 dias corridos a partir da data da compra. Basta entrar em contato para solicitar o reembolso total, sem perguntas.</p>
        <h3 className="text-foreground font-semibold">4. Entrega</h3>
        <p>O acesso é enviado ao e-mail cadastrado em até 2 minutos após a confirmação do pagamento.</p>
        <h3 className="text-foreground font-semibold">5. Propriedade Intelectual</h3>
        <p>Os materiais são licenciados, não vendidos. A propriedade intelectual dos arquivos originais pertence aos seus respectivos criadores.</p>
      </div>
    ),
  },
  privacidade: {
    title: "Política de Privacidade",
    body: (
      <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
        <p>
          Sua privacidade é importante para nós. Esta política explica como tratamos seus dados ao adquirir o{" "}
          <strong className="text-foreground">Mega Pack Digital</strong>.
        </p>
        <h3 className="text-foreground font-semibold">Dados coletados</h3>
        <p>Coletamos apenas nome e e-mail para entrega do produto e suporte pós-venda. As informações de pagamento são processadas diretamente pela Cakto, não armazenamos dados de cartão.</p>
        <h3 className="text-foreground font-semibold">Uso dos dados</h3>
        <p>Seus dados são usados exclusivamente para: entrega do produto, suporte ao cliente e, com seu consentimento, envio de novidades e ofertas relacionadas.</p>
        <h3 className="text-foreground font-semibold">Compartilhamento</h3>
        <p>Não vendemos nem compartilhamos seus dados com terceiros, exceto quando necessário para a entrega do produto (processador de pagamento).</p>
        <h3 className="text-foreground font-semibold">Seus direitos</h3>
        <p>Você pode solicitar a exclusão dos seus dados a qualquer momento pelo e-mail de contato. Atendemos em até 72 horas.</p>
        <h3 className="text-foreground font-semibold">Cookies</h3>
        <p>Este site pode usar cookies para análise de tráfego anônima. Nenhum dado pessoal é coletado sem sua ação.</p>
      </div>
    ),
  },
  contato: {
    title: "Contato",
    body: (
      <div className="space-y-5 text-sm text-muted-foreground leading-relaxed">
        <p>Estamos aqui para ajudar! Escolha o canal mais conveniente:</p>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
            <span className="text-xl">📩</span>
            <div>
              <p className="font-semibold text-foreground mb-1">E-mail</p>
              <p>suporte@megapackdigital.com.br</p>
              <p className="text-xs mt-1">Respondemos em até 24 horas nos dias úteis.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
            <span className="text-xl">💬</span>
            <div>
              <p className="font-semibold text-foreground mb-1">WhatsApp</p>
              <p>Disponível para clientes após a compra.</p>
              <p className="text-xs mt-1">Atendimento de segunda a sexta, das 9h às 18h.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
            <span className="text-xl">🛡️</span>
            <div>
              <p className="font-semibold text-foreground mb-1">Reembolso</p>
              <p>Para solicitar a garantia de 7 dias, entre em contato pelo e-mail com o assunto "Reembolso".</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
};

const Footer = () => {
  const [open, setOpen] = useState<ModalKey>(null);
  const modal = open ? modalContent[open] : null;

  return (
    <>
      <footer className="py-8 px-4 border-t border-border">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground text-xs sm:text-sm mb-3">
            Mega Pack Digital © 2026 — Todos os direitos reservados
          </p>
          <div className="flex items-center justify-center gap-4 text-muted-foreground text-xs">
            <button
              onClick={() => setOpen("termos")}
              className="hover:text-foreground transition-colors underline-offset-2 hover:underline"
            >
              Termos de Uso
            </button>
            <button
              onClick={() => setOpen("privacidade")}
              className="hover:text-foreground transition-colors underline-offset-2 hover:underline"
            >
              Política de Privacidade
            </button>
            <button
              onClick={() => setOpen("contato")}
              className="hover:text-foreground transition-colors underline-offset-2 hover:underline"
            >
              Contato
            </button>
          </div>
        </div>
      </footer>

      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(null)}
          />
          {/* Panel */}
          <div className="relative z-10 w-full max-w-lg bg-card border border-border rounded-2xl shadow-2xl max-h-[80vh] flex flex-col animate-fade-in">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border flex-shrink-0">
              <h2 className="font-heading font-bold text-lg text-foreground">{modal.title}</h2>
              <button
                onClick={() => setOpen(null)}
                className="text-muted-foreground hover:text-foreground transition-colors text-xl leading-none"
                aria-label="Fechar"
              >
                ✕
              </button>
            </div>
            <div className="px-6 py-5 overflow-y-auto">{modal.body}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
