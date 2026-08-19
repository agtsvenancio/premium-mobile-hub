import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const columns = [
  {
    title: "Institucional",
    links: ["Sobre a NovaCell", "Termos e Condições", "Política de Privacidade", "Trabalhe Conosco"],
  },
  {
    title: "Ajuda",
    links: ["Fale Conosco", "Envio e Entregas", "Trocas e Devoluções", "Garantia e Assistência"],
  },
  {
    title: "Categorias",
    links: ["Celulares Top de Linha", "Custo-Benefício", "Smartwatches", "Áudio Premium"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <span className="font-display text-xl font-extrabold">
            NOVA<span className="text-gradient-gold">CELL</span>
          </span>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Loja especializada em celulares de alta tecnologia, lacrados e com garantia oficial.
            Atendimento humano, entrega rápida e os melhores preços do Brasil.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-gold" aria-hidden="true" /> (11) 4002-8922
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-gold" aria-hidden="true" /> contato@novacell.com.br
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-gold" aria-hidden="true" /> Av. Paulista 1200 — São Paulo
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="/"
                className="grid size-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
                aria-label="Rede social"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold">{col.title}</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="/" className="hover:text-foreground">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {["Pix", "Visa", "Mastercard", "Elo", "Amex", "Boleto"].map((p) => (
              <span key={p} className="rounded border border-border bg-card px-2.5 py-1 font-semibold">
                {p}
              </span>
            ))}
          </div>
          <p>© 2026 NovaCell High Tech Store — CNPJ 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
}
