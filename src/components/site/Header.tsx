import { Search, ShoppingCart, User, Heart, Menu, Truck, ShieldCheck, CreditCard } from "lucide-react";

const navLinks = [
  "Lançamentos",
  "Apple",
  "Samsung",
  "Xiaomi",
  "Motorola",
  "Acessórios",
  "Smartwatches",
  "Ofertas",
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur">
      <div className="border-b border-border/60 bg-surface">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1.5 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-2">
            <Truck className="size-3.5 text-gold" aria-hidden="true" />
            Frete grátis acima de R$ 999 para todo o Brasil
          </span>
          <span className="hidden items-center gap-5 sm:flex">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-3.5 text-gold" aria-hidden="true" /> 1 ano de garantia
            </span>
            <span className="flex items-center gap-1.5">
              <CreditCard className="size-3.5 text-gold" aria-hidden="true" /> Até 12x sem juros
            </span>
          </span>
        </div>
      </div>

      <div className="border-b border-border/60">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4">
          <a href="/" className="flex shrink-0 items-center gap-2">
            <span className="grid size-9 place-items-center rounded-md btn-gold text-sm font-extrabold">
              N
            </span>
            <span className="hidden font-display text-lg font-extrabold leading-none tracking-tight sm:block">
              NOVA<span className="text-gradient-gold">CELL</span>
              <span className="block text-[9px] font-medium tracking-[0.28em] text-muted-foreground">
                HIGH TECH STORE
              </span>
            </span>
          </a>

          <form
            className="flex flex-1 items-center overflow-hidden rounded-full border border-border bg-secondary/70 focus-within:border-gold"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="site-search" className="sr-only">
              Buscar
            </label>
            <input
              id="site-search"
              placeholder="Buscar por celulares, marcas..."
              className="w-full bg-transparent px-5 py-2.5 text-sm outline-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              aria-label="Buscar"
              className="m-1 grid size-9 place-items-center rounded-full btn-gold"
            >
              <Search className="size-4" aria-hidden="true" />
            </button>
          </form>

          <div className="flex items-center gap-1 sm:gap-3">
            <button className="hidden rounded-md p-2 text-muted-foreground hover:text-gold sm:block" aria-label="Favoritos">
              <Heart className="size-5" aria-hidden="true" />
            </button>
            <button className="flex items-center gap-2 rounded-md p-2 text-muted-foreground hover:text-gold" aria-label="Minha conta">
              <User className="size-5" aria-hidden="true" />
              <span className="hidden text-xs font-semibold leading-tight lg:block">
                Entrar
                <span className="block text-[10px] font-normal">minha conta</span>
              </span>
            </button>
            <button className="relative rounded-md p-2 text-muted-foreground hover:text-gold" aria-label="Carrinho">
              <ShoppingCart className="size-5" aria-hidden="true" />
              <span className="absolute -right-0.5 -top-0.5 grid size-4 place-items-center rounded-full btn-gold text-[10px]">
                2
              </span>
            </button>
          </div>
        </div>
      </div>

      <nav className="border-b border-border/60 bg-background/80">
        <div className="mx-auto flex max-w-7xl items-center gap-6 overflow-x-auto px-4 py-2.5 text-xs font-semibold uppercase tracking-wider no-scrollbar">
          <span className="flex items-center gap-2 text-gold">
            <Menu className="size-4" aria-hidden="true" /> Departamentos
          </span>
          {navLinks.map((link) => (
            <a key={link} href="/" className="whitespace-nowrap text-muted-foreground hover:text-foreground">
              {link}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
