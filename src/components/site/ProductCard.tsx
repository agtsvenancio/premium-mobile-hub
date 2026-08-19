import { Star } from "lucide-react";
import type { Product } from "./data";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card-dark group flex flex-col overflow-hidden rounded-lg">
      <div className="relative bg-surface-elevated p-4">
        {product.badge ? (
          <span className="absolute left-3 top-3 rounded btn-gold px-2 py-0.5 text-[10px] font-bold uppercase">
            {product.badge}
          </span>
        ) : null}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="mx-auto h-40 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">{product.brand}</span>
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug">{product.name}</h3>
        <div className="flex items-center gap-1 text-gold" aria-label="Avaliação 5 de 5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-3 fill-current" aria-hidden="true" />
          ))}
          <span className="ml-1 text-[10px] text-muted-foreground">(128)</span>
        </div>
        <div className="mt-auto pt-2">
          {product.oldPrice ? (
            <span className="block text-xs text-muted-foreground line-through">{product.oldPrice}</span>
          ) : null}
          <span className="block text-lg font-extrabold text-gold">{product.price}</span>
          <span className="block text-[11px] text-muted-foreground">{product.installments}</span>
        </div>
        <div className="mt-3 flex flex-col gap-2">
          <button className="rounded-md btn-gold px-3 py-2 text-xs uppercase tracking-wider">
            Comprar
          </button>
          <button className="rounded-md border border-border px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:border-gold hover:text-gold">
            Ver detalhes
          </button>
        </div>
      </div>
    </article>
  );
}
