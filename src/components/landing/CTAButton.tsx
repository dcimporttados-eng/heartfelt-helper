const CTAButton = ({ text, className = "" }: { text: string; className?: string }) => (
  <a
    href="https://pay.cakto.com.br/3dq6xab_814972"
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-block bg-primary text-primary-foreground font-heading font-bold text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-5 rounded-xl animate-pulse-glow hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 ${className}`}
  >
    {text}
  </a>
);

export default CTAButton;
