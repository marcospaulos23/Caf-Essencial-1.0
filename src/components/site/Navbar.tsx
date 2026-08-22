import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#galeria", label: "Galeria" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showLogoModal, setShowLogoModal] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[color:var(--color-cream-soft)]/90 backdrop-blur-md shadow-[0_1px_20px_rgba(75,46,43,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowLogoModal(true)}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full"
            aria-label="Ampliar logo"
          >
            <img
              src="/favicon.ico"
              alt="Logo Café Essencial"
              className="h-11 w-11 rounded-full bg-white p-0.5 object-contain shadow-sm transition-transform hover:scale-105"
            />
          </button>
          <a
            href="#top"
            className={`font-display text-lg leading-tight transition-colors hover:opacity-80 ${
              scrolled ? "text-primary" : "text-white drop-shadow"
            }`}
          >
            Café Essencial
          </a>
        </div>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative text-sm transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full ${
                  scrolled ? "text-primary/80 hover:text-primary" : "text-white/90 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#cardapio"
              className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[color:var(--color-coffee-dark)] hover:shadow-lg"
            >
              Ver Cardápio
            </a>
          </li>
        </ul>

        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden rounded-full p-2 transition-colors ${
            scrolled ? "text-primary" : "text-white"
          }`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-[color:var(--color-cream-soft)] px-6 pb-6 pt-2 shadow-lg animate-fade-in-slow">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-primary transition-colors hover:bg-[color:var(--color-cream)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#cardapio"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground"
              >
                Ver Cardápio
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Modal da Logo Expandida */}
      {showLogoModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={() => setShowLogoModal(false)}
        >
          <div className="relative flex flex-col items-center animate-fade-up">
            <button 
              className="absolute -right-2 -top-2 rounded-full bg-white p-1.5 text-primary shadow-xl hover:bg-[color:var(--color-cream)] focus:outline-none transition-transform hover:scale-105"
              onClick={() => setShowLogoModal(false)}
            >
              <X className="h-5 w-5" />
            </button>
            <img 
              src="/favicon.ico" 
              alt="Logo Café Essencial Ampliada" 
              className="h-64 w-64 rounded-full bg-white p-4 shadow-2xl object-contain"
            />
            <div className="mt-6 text-center text-white drop-shadow-lg">
              <h2 className="font-display text-3xl font-semibold tracking-wide">
                Café Essencial
              </h2>
              <p className="mt-3 max-w-md text-base leading-relaxed text-white/95">
                A melhor cafeteria da cidade. Um espaço acolhedor pensado para quem ama cafés especiais, tortas artesanais e momentos inesquecíveis.
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}