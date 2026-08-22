import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Coffee,
  Salad,
  CakeSlice,
  Laptop,
  Wifi,
  Heart,
  Star,
  MapPin,
  Phone,
  Instagram,
  Clock,
  Navigation,
  Sandwich,
  Quote,
} from "lucide-react";

import { Navbar } from "@/components/site/Navbar";
import { FloatingButtons } from "@/components/site/FloatingButtons";
import { Lightbox } from "@/components/site/Lightbox";

import heroImg from "@/assets/hero.jpg";
import ambienteImg from "@/assets/ambiente.jpg";
import cappuccinoImg from "@/assets/cappuccino.jpg";
import espressoImg from "@/assets/espresso.jpg";
import tortaImg from "@/assets/torta.jpg";
import boloImg from "@/assets/bolo.jpg";
import sanduicheImg from "@/assets/sanduiche.jpg";
import saladaImg from "@/assets/salada.jpg";
import externaImg from "@/assets/externa.jpg";
import atendimentoImg from "@/assets/atendimento.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        property: "og:image",
        content: heroImg,
      },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/5547992055587?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20do%20Caf%C3%A9%20Essencial.";
const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Rua+Arquiteto+Nilson+Edson+dos+Santos%2C+991+-+S%C3%A3o+Vicente%2C+Itaja%C3%AD+-+SC%2C+88309-401";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Rua+Arquiteto+Nilson+Edson+dos+Santos+991+S%C3%A3o+Vicente+Itaja%C3%AD+SC&output=embed";

const gallery = [
  { src: cappuccinoImg, alt: "Cappuccino com latte art", span: "row-span-2" },
  { src: tortaImg, alt: "Torta artesanal de chocolate", span: "" },
  { src: ambienteImg, alt: "Ambiente interno da cafeteria", span: "col-span-2" },
  { src: saladaImg, alt: "Salada saudável com suco natural", span: "" },
  { src: boloImg, alt: "Bolo com frutas vermelhas", span: "row-span-2" },
  { src: sanduicheImg, alt: "Sanduíche artesanal", span: "" },
  { src: espressoImg, alt: "Espresso servido em xícara branca", span: "" },
  { src: atendimentoImg, alt: "Atendimento acolhedor no balcão", span: "col-span-2" },
  { src: externaImg, alt: "Área externa com plantas", span: "" },
];

const diferenciais = [
  { icon: Coffee, title: "Cafés Especiais", text: "Grãos selecionados, extração precisa." },
  { icon: Salad, title: "Opções Saudáveis", text: "Refeições leves e naturais no seu dia." },
  { icon: CakeSlice, title: "Tortas Artesanais", text: "Feitas na casa, todos os dias." },
  { icon: Laptop, title: "Espaço Home-office", text: "Confortável para trabalhar sem pressa." },
  { icon: Wifi, title: "Wi-Fi Rápido", text: "Conexão estável para toda a sua rotina." },
  { icon: Heart, title: "Atendimento Acolhedor", text: "Feito por quem ama o que faz." },
];

type MenuCategory = {
  id: string;
  icon: typeof Coffee;
  label: string;
  items: { name: string; desc: string; price: string; img: string }[];
};

const menu: MenuCategory[] = [
  {
    id: "cafes",
    icon: Coffee,
    label: "Cafés",
    items: [
      { name: "Espresso", desc: "Extração curta e encorpada.", price: "R$ 7", img: espressoImg },
      { name: "Cappuccino", desc: "Espresso, leite vaporizado e espuma aveludada.", price: "R$ 12", img: cappuccinoImg },
      { name: "Latte", desc: "Espresso com leite cremoso e leve doçura.", price: "R$ 13", img: cappuccinoImg },
      { name: "Mocha", desc: "Chocolate quente encontra espresso.", price: "R$ 15", img: espressoImg },
    ],
  },
  {
    id: "doces",
    icon: CakeSlice,
    label: "Doces",
    items: [
      { name: "Torta de Chocolate", desc: "Massa amanteigada e recheio cremoso.", price: "R$ 16", img: tortaImg },
      { name: "Bolo do Dia", desc: "Sempre fresquinho, direto do forno.", price: "R$ 12", img: boloImg },
      { name: "Cheesecake", desc: "Cream cheese com calda de frutas vermelhas.", price: "R$ 18", img: boloImg },
      { name: "Brownie", desc: "Denso, com chocolate 70% e nozes.", price: "R$ 10", img: tortaImg },
    ],
  },
  {
    id: "lanches",
    icon: Sandwich,
    label: "Lanches",
    items: [
      { name: "Sanduíche Essencial", desc: "Pão artesanal, queijo e ervas frescas.", price: "R$ 24", img: sanduicheImg },
      { name: "Torrada Rústica", desc: "Pão de fermentação natural com toppings.", price: "R$ 18", img: sanduicheImg },
      { name: "Pão de Queijo", desc: "Crocante por fora, macio por dentro.", price: "R$ 8", img: sanduicheImg },
      { name: "Croissant", desc: "Manteiga francesa e folhados perfeitos.", price: "R$ 14", img: sanduicheImg },
    ],
  },
  {
    id: "saudaveis",
    icon: Salad,
    label: "Saudáveis",
    items: [
      { name: "Salada da Casa", desc: "Folhas, grãos e molho especial.", price: "R$ 26", img: saladaImg },
      { name: "Suco Natural", desc: "Frutas frescas prensadas na hora.", price: "R$ 12", img: saladaImg },
      { name: "Bowl Fit", desc: "Proteínas, sementes e vegetais assados.", price: "R$ 29", img: saladaImg },
      { name: "Wrap Integral", desc: "Recheio leve com molho iogurte.", price: "R$ 22", img: saladaImg },
    ],
  },
];

const testimonials = [
  {
    name: "Lizandra Da Silva",
    text: "Ambiente muito agradável, atendimento excelente e comida deliciosa.",
  },
  {
    name: "Caroline Lourenço",
    text: "Café excelente, tortas maravilhosas e opções saudáveis.",
  },
  {
    name: "Rafael Mendes",
    text: "Meu lugar preferido para trabalhar na cidade. Silencioso e aconchegante.",
  },
];

const horarios = [
  { dia: "Segunda", hora: "Fechado" },
  { dia: "Terça", hora: "08:00 – 19:00" },
  { dia: "Quarta", hora: "08:00 – 19:00" },
  { dia: "Quinta", hora: "08:00 – 19:00" },
  { dia: "Sexta", hora: "08:00 – 19:00" },
  { dia: "Sábado", hora: "08:00 – 19:00" },
  { dia: "Domingo", hora: "Consultar funcionamento" },
];

function Index() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [activeMenu, setActiveMenu] = useState("cafes");
  const active = menu.find((m) => m.id === activeMenu)!;

  return (
    <div id="top" className="min-h-screen bg-[color:var(--color-cream-soft)] text-foreground">
      <Navbar />

      {/* HERO */}
      <section 
        className="sticky top-0 z-0 h-[100dvh] w-full overflow-hidden"
        style={{ transform: "translate3d(0,0,0)", willChange: "transform" }}
      >
        <img
          src={heroImg}
          alt="Interior da cafeteria Café Essencial"
          width={1920}
          height={1280}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-coffee-dark)]/70 via-[color:var(--color-coffee-dark)]/40 to-[color:var(--color-coffee-dark)]/80" />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center text-white">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] backdrop-blur animate-fade-up">
            Itajaí · SC · Passeio São Vicente
          </span>
          <h1 className="font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up">
            O sabor do café,
            <br />
            <span className="italic text-[color:var(--color-cream)]">o prazer de bons momentos.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/85 sm:text-lg animate-fade-up">
            Um espaço pensado para quem ama cafés especiais, comida saudável e um ambiente
            acolhedor em qualquer hora do dia.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3 animate-fade-up">
            <a
              href="#cardapio"
              className="rounded-full bg-[color:var(--color-cream)] px-7 py-3 text-sm font-medium text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-2xl"
            >
              Ver Cardápio
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/40 px-7 py-3 text-sm font-medium text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              Como Chegar
            </a>
          </div>
          <div className="mt-14 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 animate-fade-up">
            {[
              { Icon: Star, label: "4.3 no Google" },
              { Icon: Heart, label: "Ambiente aconchegante" },
              { Icon: Salad, label: "Opções saudáveis" },
              { Icon: Coffee, label: "Cafés especiais" },
            ].map((b) => (
              <div
                key={b.label}
                className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs text-white/90 backdrop-blur"
              >
                <b.Icon aria-hidden className="h-3.5 w-3.5" />
                <span>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="relative z-20 bg-[color:var(--color-cream-soft)] shadow-[0_-12px_40px_rgba(0,0,0,0.25)]">
        {/* SOBRE */}
        <section id="sobre" className="py-24 sm:py-32">
          <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[color:var(--color-olive)]">
                Sobre nós
              </p>
              <h2 className="font-display text-4xl leading-tight text-primary sm:text-5xl">
                Um lugar para <em className="text-[color:var(--color-olive)]">desacelerar</em>.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Na Café Essencial cada detalhe foi pensado para proporcionar uma experiência
                única. Servimos cafés especiais, tortas artesanais, refeições leves e opções
                saudáveis em um ambiente confortável — ideal para encontros, trabalho remoto
                ou uma pausa durante o dia.
              </p>
              <div className="mt-8 flex gap-8">
                <div>
                  <p className="font-display text-3xl text-primary">+5</p>
                  <p className="text-sm text-muted-foreground">anos servindo café</p>
                </div>
                <div className="border-l border-border pl-8">
                  <p className="font-display text-3xl text-primary">4.3★</p>
                  <p className="text-sm text-muted-foreground">19 avaliações no Google</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-[color:var(--color-cream)]" />
              <img
                src={atendimentoImg}
                alt="Barista servindo café"
                loading="lazy"
                width={900}
                height={1100}
                className="h-[520px] w-full rounded-2xl object-cover shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section id="diferenciais" className="bg-[color:var(--color-cream)] py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[color:var(--color-olive)]">
                Diferenciais
              </p>
              <h2 className="font-display text-4xl text-primary sm:text-5xl">
                O que nos torna especiais
              </h2>
            </div>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {diferenciais.map((d) => (
                <div
                  key={d.title}
                  className="group rounded-2xl border border-border bg-background p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--color-olive)]/40 hover:shadow-xl"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--color-cream)] text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <d.icon size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-xl text-primary">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALERIA */}
        <section id="galeria" className="py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[color:var(--color-olive)]">
                Galeria
              </p>
              <h2 className="font-display text-4xl text-primary sm:text-5xl">
                Um convite visual
              </h2>
              <p className="mt-4 text-muted-foreground">
                Clique nas imagens para ampliar.
              </p>
            </div>
            <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-4">
              {gallery.map((g, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(i)}
                  className={`group relative overflow-hidden rounded-2xl bg-[color:var(--color-cream)] shadow-sm transition-all hover:shadow-xl ${g.span}`}
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* AMBIENTE */}
        <section className="relative overflow-hidden">
          <img
            src={ambienteImg}
            alt="Ambiente da cafeteria"
            loading="lazy"
            width={1600}
            height={1000}
            className="h-[520px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-coffee-dark)]/90 via-[color:var(--color-coffee-dark)]/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-6xl px-6 pb-16 text-white">
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/70">
                O ambiente
              </p>
              <h2 className="max-w-3xl font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
                Um espaço criado para reunir pessoas, trabalhar com tranquilidade ou
                simplesmente aproveitar um excelente café.
              </h2>
            </div>
          </div>
        </section>

        {/* CARDÁPIO */}
        <section id="cardapio" className="bg-[color:var(--color-cream)] py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[color:var(--color-olive)]">
                Cardápio
              </p>
              <h2 className="font-display text-4xl text-primary sm:text-5xl">
                Feito com carinho, servido na medida
              </h2>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {menu.map((c) => {
                const Icon = c.icon;
                const isActive = activeMenu === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => setActiveMenu(c.id)}
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm transition-all ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-background text-primary hover:bg-white"
                    }`}
                  >
                    <Icon size={16} />
                    {c.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {active.items.map((it) => (
                <article
                  key={it.name}
                  className="group overflow-hidden rounded-2xl bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={it.img}
                      alt={it.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg text-primary">{it.name}</h3>
                      <span className="whitespace-nowrap rounded-full bg-[color:var(--color-cream)] px-3 py-1 text-xs font-medium text-primary">
                        {it.price}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {it.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* AVALIAÇÕES */}
        <section id="avaliacoes" className="py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[color:var(--color-olive)]">
                Avaliações
              </p>
              <h2 className="font-display text-4xl text-primary sm:text-5xl">
                Quem visita, volta.
              </h2>
              <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-[color:var(--color-cream)] px-6 py-3">
                <div className="flex items-center gap-0.5 text-[color:var(--color-gold)]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill="currentColor"
                      className={i > 3 ? "opacity-40" : ""}
                    />
                  ))}
                </div>
                <span className="font-display text-xl text-primary">4.3</span>
                <span className="text-sm text-muted-foreground">· 19 avaliações no Google</span>
              </div>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <figure
                  key={t.name}
                  className="relative rounded-2xl border border-border bg-background p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <Quote
                    className="absolute right-6 top-6 text-[color:var(--color-cream)]"
                    size={40}
                    strokeWidth={1}
                  />
                  <div className="mb-4 flex items-center gap-0.5 text-[color:var(--color-gold)]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <blockquote className="text-base leading-relaxed text-foreground">
                    "{t.text}"
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--color-cream)] font-display text-primary">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary">{t.name}</p>
                      <p className="text-xs text-muted-foreground">Cliente Google</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* LOCALIZAÇÃO + CONTATO */}
        <section id="localizacao" className="bg-[color:var(--color-cream)] py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-10 lg:grid-cols-5">
              <div className="lg:col-span-3 overflow-hidden rounded-2xl shadow-xl">
                <iframe
                  title="Mapa da cafeteria Café Essencial"
                  src={MAPS_EMBED}
                  className="h-[480px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div id="contato" className="lg:col-span-2 flex flex-col gap-6">
                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[color:var(--color-olive)]">
                    Localização
                  </p>
                  <h2 className="font-display text-3xl text-primary sm:text-4xl">
                    Nos encontre no Passeio São Vicente
                  </h2>
                </div>
                <ul className="space-y-4 text-sm">
                  <li className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-background text-primary">
                      <MapPin size={18} />
                    </span>
                    <div>
                      <p className="font-medium text-primary">Endereço</p>
                      <p className="text-muted-foreground">
                        Rua Arquiteto Nilson Edson dos Santos, 991
                        <br />
                        São Vicente, Itajaí – SC · CEP 88309-401
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-background text-primary">
                      <Phone size={18} />
                    </span>
                    <div>
                      <p className="font-medium text-primary">Telefone</p>
                      <a
                        href="tel:+5547992055587"
                        className="text-muted-foreground hover:text-primary"
                      >
                        (47) 99205-5587
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-background text-primary">
                      <Instagram size={18} />
                    </span>
                    <div>
                      <p className="font-medium text-primary">Instagram</p>
                      <a
                        href="https://instagram.com/cafeessencial.passeio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary"
                      >
                        @cafeessencial.passeio
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-background text-primary">
                      <Clock size={18} />
                    </span>
                    <div className="flex-1">
                      <p className="font-medium text-primary">Horário</p>
                      <ul className="mt-1 space-y-0.5 text-muted-foreground">
                        {horarios.map((h) => (
                          <li key={h.dia} className="flex justify-between gap-4">
                            <span>{h.dia}</span>
                            <span className="text-primary/80">{h.hora}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[color:var(--color-coffee-dark)] hover:shadow-lg"
                  >
                    <Navigation size={16} /> Como chegar
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background px-6 py-3 text-sm font-medium text-primary transition-all hover:-translate-y-0.5 hover:bg-white"
                  >
                    Falar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[color:var(--color-coffee-dark)] text-white/80">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--color-cream)] font-display text-primary">
                C
              </span>
              <span className="font-display text-xl text-white">Café Essencial</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Cafeteria Passeio São Vicente — cafés especiais, comida saudável e um espaço
              feito para acolher.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-white">Endereço</p>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Rua Arquiteto Nilson Edson dos Santos, 991
              <br />
              São Vicente, Itajaí – SC
              <br />
              CEP 88309-401
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-white">Contato</p>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              <li>
                <a href="tel:+5547992055587" className="hover:text-white">
                  (47) 99205-5587
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/cafeessencial.passeio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  @cafeessencial.passeio
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-white">Mapa</p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <MapPin size={14} /> Como chegar
            </a>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-white/50 sm:flex-row">
            <p>© {new Date().getFullYear()} Café Essencial. Todos os direitos reservados.</p>
            <p className="inline-flex items-center gap-1.5">
              Feito com <Coffee aria-hidden className="h-3.5 w-3.5" /> em Itajaí — SC
            </p>
          </div>
        </div>
      </footer>

      <FloatingButtons />
      <Lightbox
        images={gallery}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onPrev={() =>
          setLightbox((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length))
        }
        onNext={() =>
          setLightbox((i) => (i === null ? i : (i + 1) % gallery.length))
        }
      />
    </div>
  );
}
