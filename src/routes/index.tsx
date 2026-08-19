import { createFileRoute } from "@tanstack/react-router";
import {
  Smartphone,
  Layers,
  Gamepad2,
  PenTool,
  BatteryFull,
  Camera,
  Tag,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Play,
  Star,
  Cpu,
  Bot,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProductCard } from "@/components/site/ProductCard";
import {
  featured,
  bestSellers,
  newArrivals,
  topCategories,
  bigCategories,
  brands,
  reviews,
  phoneImages,
} from "@/components/site/data";
import heroPhone from "@/assets/hero-phone.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NovaCell — Celulares de Alta Tecnologia com Preço Premium" },
      {
        name: "description",
        content:
          "Compre celulares top de linha, dobráveis, smartwatches e áudio premium na NovaCell. Lacrados, com garantia oficial e até 12x sem juros.",
      },
      { property: "og:title", content: "NovaCell — Celulares de Alta Tecnologia" },
      {
        property: "og:description",
        content: "Flagships, dobráveis e acessórios premium com frete grátis e garantia oficial.",
      },
    ],
  }),
  component: Index,
});

const iconMap = {
  smartphone: Smartphone,
  layers: Layers,
  gamepad: Gamepad2,
  pen: PenTool,
  fold: Smartphone,
  battery: BatteryFull,
  camera: Camera,
  tag: Tag,
} as const;

function SectionHeading({
  label,
  title,
  highlight,
  action,
}: {
  label: string;
  title: string;
  highlight?: string;
  action?: string;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
      <div>
        <span className="section-label">
          <Sparkles className="size-3.5" aria-hidden="true" /> {label}
        </span>
        <h2 className="mt-2 text-2xl font-extrabold uppercase sm:text-3xl">
          {title} {highlight ? <span className="text-gradient-gold">{highlight}</span> : null}
        </h2>
      </div>
      {action ? (
        <a
          href="/"
          className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-gold"
        >
          {action} <ChevronRight className="size-4" aria-hidden="true" />
        </a>
      ) : null}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-border">
          <img
            src={heroPhone}
            alt="Smartphone dobrável premium em preto fosco"
            width={1920}
            height={1008}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-5 px-4 py-24 sm:py-32">
            <span className="section-label">Lançamento exclusivo</span>
            <h1 className="max-w-xl text-4xl font-extrabold uppercase leading-[0.95] sm:text-6xl">
              Modelo Ultra X
              <span className="block text-gradient-gold">A Revolução</span>
            </h1>
            <p className="max-w-md text-sm text-muted-foreground sm:text-base">
              Tela dobrável 8.2", chip de 3nm e câmera de 200MP. O smartphone mais avançado da
              nossa história, disponível em preto fosco.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-md btn-gold px-7 py-3 text-sm uppercase tracking-wider">
                Comprar agora
              </button>
              <button className="rounded-md border border-gold/60 px-7 py-3 text-sm font-bold uppercase tracking-wider text-gold hover:bg-gold/10">
                Ver ficha técnica
              </button>
            </div>
          </div>
        </section>

        {/* TOP CATEGORY ICONS */}
        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-8">
            <SectionHeading label="Navegue rápido" title="Categorias" highlight="em destaque" />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
              {topCategories.map((cat) => {
                const Icon = iconMap[cat.icon as keyof typeof iconMap];
                return (
                  <a
                    key={cat.label}
                    href="/"
                    className="card-dark flex flex-col items-center gap-2 rounded-lg px-3 py-5 text-center"
                  >
                    <Icon className="size-6 text-gold" aria-hidden="true" />
                    <span className="text-xs font-semibold">{cat.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* NOVIDADES */}
        <section className="mx-auto max-w-7xl px-4 py-14">
          <SectionHeading label="Acabou de chegar" title="Novidades" action="Ver tudo" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {newArrivals.map((p, i) => (
              <ProductCard key={i} product={p} />
            ))}
          </div>
        </section>

        {/* COMPRAR POR CATEGORIA */}
        <section className="border-y border-border bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-14">
            <SectionHeading
              label="Explore a loja"
              title="Comprar por"
              highlight="categoria"
              action="Ver todas as categorias"
            />
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {bigCategories.map((cat, i) => (
                <a key={i} href="/" className="card-dark group overflow-hidden rounded-lg">
                  <img
                    src={cat.image}
                    alt={cat.label}
                    loading="lazy"
                    width={640}
                    height={640}
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="flex items-center justify-between gap-2 p-4">
                    <span className="text-sm font-bold">{cat.label}</span>
                    <ChevronRight className="size-4 text-gold" aria-hidden="true" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* TWO PROMO PANELS */}
        <section className="mx-auto grid max-w-7xl gap-4 px-4 py-14 md:grid-cols-2">
          <div className="card-dark rounded-lg p-8">
            <span className="section-label">
              <Cpu className="size-3.5" aria-hidden="true" /> Monte seu kit
            </span>
            <h3 className="mt-3 text-2xl font-extrabold uppercase">
              Escolha seu <span className="text-gradient-gold">setup completo</span>
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Celular + smartwatch + fones. Combine produtos e ganhe descontos progressivos de até
              18% no combo.
            </p>
            <button className="mt-6 rounded-md btn-gold px-6 py-2.5 text-xs uppercase tracking-wider">
              Montar meu kit
            </button>
          </div>
          <div className="card-dark rounded-lg p-8">
            <span className="section-label">
              <Bot className="size-3.5" aria-hidden="true" /> Assistente inteligente
            </span>
            <h3 className="mt-3 text-2xl font-extrabold uppercase">
              Compare com <span className="text-gradient-gold">IA</span>
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Diga como você usa o celular e nossa IA indica o modelo ideal comparando câmera,
              bateria e desempenho.
            </p>
            <button className="mt-6 rounded-md border border-gold/60 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-gold hover:bg-gold/10">
              Comparar agora
            </button>
          </div>
        </section>

        {/* DESTAQUES DO MÊS */}
        <section className="border-y border-border bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-14">
            <SectionHeading
              label="Seleção da equipe"
              title="Destaques"
              highlight="do mês"
              action="Ver todos"
            />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {featured.map((p, i) => (
                <ProductCard key={i} product={p} />
              ))}
            </div>
          </div>
        </section>

        {/* MAIS VENDIDOS */}
        <section className="mx-auto max-w-7xl px-4 py-14">
          <SectionHeading
            label="Ranking semanal"
            title="Mais vendidos"
            highlight="da semana"
            action="Ver ranking completo"
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {bestSellers.map((p, i) => (
              <ProductCard key={i} product={p} />
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-2">
            <button className="grid size-9 place-items-center rounded-md border border-border text-muted-foreground hover:border-gold hover:text-gold" aria-label="Página anterior">
              <ChevronLeft className="size-4" aria-hidden="true" />
            </button>
            {[1, 2, 3, 4].map((n) => (
              <button
                key={n}
                className={
                  n === 1
                    ? "grid size-9 place-items-center rounded-md btn-gold text-sm"
                    : "grid size-9 place-items-center rounded-md border border-border text-sm text-muted-foreground hover:border-gold hover:text-gold"
                }
              >
                {n}
              </button>
            ))}
            <button className="grid size-9 place-items-center rounded-md border border-border text-muted-foreground hover:border-gold hover:text-gold" aria-label="Próxima página">
              <ChevronRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </section>

        {/* VIDEO REVIEWS */}
        <section className="border-y border-border bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-14">
            <SectionHeading
              label="Prova social"
              title="Análises reais"
              highlight="dos nossos clientes"
              action="Ver canal"
            />
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {[
                { title: "Testei o Z Fold7 por 30 dias", img: phoneImages.zfold7 },
                { title: "S26 Ultra: vale o upgrade?", img: phoneImages.s26ultra },
                { title: "POCO X8 Pro no jogo pesado", img: phoneImages.pocoX8 },
                { title: "Moto G86: bateria infinita", img: phoneImages.motoG86 },
              ].map((v) => (
                <a key={v.title} href="/" className="card-dark group overflow-hidden rounded-lg">
                  <div className="relative aspect-video bg-surface-elevated">
                    <img
                      src={v.img}
                      alt={v.title}
                      loading="lazy"
                      className="size-full object-contain p-4"
                    />
                    <span className="absolute inset-0 grid place-items-center">
                      <span className="grid size-12 place-items-center rounded-full btn-gold">
                        <Play className="size-5 fill-current" aria-hidden="true" />
                      </span>
                    </span>
                  </div>
                  <p className="p-4 text-sm font-semibold">{v.title}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* METRICS */}
        <section className="mx-auto max-w-7xl px-4 py-14">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {[
              { value: "22", label: "Anos de mercado" },
              { value: "50K+", label: "Clientes satisfeitos" },
              { value: "120K+", label: "Celulares vendidos" },
              { value: "4.9★", label: "Avaliação média" },
            ].map((m) => (
              <div key={m.label} className="card-dark rounded-lg p-6 text-center">
                <span className="block text-3xl font-extrabold text-gradient-gold sm:text-4xl">
                  {m.value}
                </span>
                <span className="mt-1 block text-xs uppercase tracking-wider text-muted-foreground">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* BRANDS */}
        <section className="border-y border-border bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-14">
            <h2 className="text-center text-2xl font-extrabold uppercase sm:text-3xl">
              As melhores marcas <span className="text-gradient-gold">do mundo</span>
            </h2>
            <div className="mt-8 flex gap-3 overflow-x-auto pb-2 no-scrollbar">
              {brands.map((b) => (
                <span
                  key={b}
                  className="card-dark grid h-20 min-w-[150px] place-items-center rounded-lg px-6 font-display text-sm font-bold uppercase tracking-widest text-muted-foreground"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* TEXT TESTIMONIALS */}
        <section className="mx-auto max-w-7xl px-4 py-14">
          <h2 className="text-center text-2xl font-extrabold uppercase sm:text-3xl">
            Opiniões <span className="text-gradient-gold">de verdade</span>
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {reviews.map((r) => (
              <blockquote key={r.name} className="card-dark rounded-lg p-6">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">"{r.text}"</p>
                <footer className="mt-5 flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full btn-gold text-sm font-extrabold">
                    {r.name.charAt(0)}
                  </span>
                  <span className="text-sm font-bold">
                    {r.name}
                    <span className="block text-xs font-normal text-muted-foreground">{r.city}</span>
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* GOLD PROMO */}
        <section style={{ background: "var(--gradient-gold)" }}>
          <div className="mx-auto max-w-3xl px-4 py-16 text-center text-primary-foreground">
            <span className="text-xs font-bold uppercase tracking-[0.24em]">
              Oferta para novos clientes
            </span>
            <h2 className="mt-3 text-3xl font-extrabold uppercase leading-tight sm:text-4xl">
              Ganhe 5% off
              <span className="block">na primeira compra</span>
            </h2>
            <p className="mt-3 text-sm font-medium opacity-80">
              Cadastre seu e-mail e receba o cupom exclusivo para celulares e acessórios.
            </p>
            <form
              className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="promo-email" className="sr-only">
                E-mail
              </label>
              <input
                id="promo-email"
                type="email"
                placeholder="seu@email.com"
                className="flex-1 rounded-md bg-background/90 px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
              <button className="rounded-md bg-background px-6 py-3 text-xs font-bold uppercase tracking-wider text-foreground">
                Quero meu cupom
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
