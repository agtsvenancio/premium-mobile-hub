import s25fe from "@/assets/images_17.jpg.asset.json";
import s26ultra from "@/assets/images_18.jpg.asset.json";
import motoG86 from "@/assets/images_19.jpg.asset.json";
import pocoX8 from "@/assets/images_20.jpg.asset.json";
import zfold7 from "@/assets/images_21.jpg.asset.json";
import catFlagship from "@/assets/cat-flagship.jpg";
import catValue from "@/assets/cat-value.jpg";
import catAccessories from "@/assets/cat-accessories.jpg";
import catWatch from "@/assets/cat-watch.jpg";
import catAudio from "@/assets/cat-audio.jpg";
import catGaming from "@/assets/cat-gaming.jpg";
import catPower from "@/assets/cat-power.jpg";

export type Product = {
  name: string;
  brand: string;
  image: string;
  price: string;
  oldPrice?: string;
  installments: string;
  badge?: string;
};

export const phoneImages = {
  s25fe: s25fe.url,
  s26ultra: s26ultra.url,
  motoG86: motoG86.url,
  pocoX8: pocoX8.url,
  zfold7: zfold7.url,
};

const pool: Product[] = [
  {
    name: "Galaxy S26 Ultra 512GB Titanium Violet",
    brand: "Samsung",
    image: s26ultra.url,
    price: "R$ 8.499,00",
    oldPrice: "R$ 9.999,00",
    installments: "12x R$ 708,25 sem juros",
    badge: "-15%",
  },
  {
    name: "Galaxy Z Fold7 5G 256GB Navy",
    brand: "Samsung",
    image: zfold7.url,
    price: "R$ 11.299,00",
    oldPrice: "R$ 12.799,00",
    installments: "12x R$ 941,58 sem juros",
    badge: "Novo",
  },
  {
    name: "Galaxy S25 FE 5G 256GB Graphite",
    brand: "Samsung",
    image: s25fe.url,
    price: "R$ 3.899,00",
    oldPrice: "R$ 4.499,00",
    installments: "10x R$ 389,90 sem juros",
    badge: "-13%",
  },
  {
    name: "POCO X8 Pro 5G 12GB + 512GB Black",
    brand: "Xiaomi",
    image: pocoX8.url,
    price: "R$ 2.299,00",
    oldPrice: "R$ 2.699,00",
    installments: "10x R$ 229,90 sem juros",
    badge: "Top",
  },
  {
    name: "Moto G86 5G 256GB Deep Blue",
    brand: "Motorola",
    image: motoG86.url,
    price: "R$ 1.799,00",
    oldPrice: "R$ 2.099,00",
    installments: "10x R$ 179,90 sem juros",
    badge: "-14%",
  },
];

function cycle(count: number, offset = 0): Product[] {
  return Array.from({ length: count }, (_, i) => pool[(i + offset) % pool.length]!);
}

export const featured = cycle(8, 0);
export const bestSellers = cycle(10, 2);
export const newArrivals = cycle(6, 1);

export const topCategories = [
  { label: "iPhones", icon: "smartphone" },
  { label: "Samsung Galaxy", icon: "layers" },
  { label: "Celulares Gamer", icon: "gamepad" },
  { label: "Caneta Stylus", icon: "pen" },
  { label: "Dobráveis", icon: "fold" },
  { label: "Bateria Gigante", icon: "battery" },
  { label: "Câmera Pro", icon: "camera" },
  { label: "Custo-Benefício", icon: "tag" },
];

export const bigCategories = [
  { label: "Celulares Top de Linha", image: catFlagship },
  { label: "Custo-Benefício", image: catValue },
  { label: "Acessórios Essenciais", image: catAccessories },
  { label: "Smartwatches", image: catWatch },
  { label: "Áudio Premium", image: catAudio },
  { label: "Linha Gamer", image: catGaming },
  { label: "Carregadores & Power", image: catPower },
  { label: "Seminovos Certificados", image: catFlagship },
];

export const brands = [
  "Apple",
  "Samsung",
  "Google",
  "OnePlus",
  "Sony",
  "Xiaomi",
  "Motorola",
  "Asus",
  "Nothing",
  "Honor",
  "Realme",
  "Oppo",
];

export const reviews = [
  {
    name: "Bruno Almeida",
    city: "São Paulo, SP",
    text: "Comprei o Z Fold7 e chegou em 2 dias, lacrado e com nota. Atendimento impecável do início ao fim.",
  },
  {
    name: "Carla Menezes",
    city: "Belo Horizonte, MG",
    text: "Melhor preço que encontrei no S26 Ultra. A equipe me ajudou a escolher a versão de armazenamento certa.",
  },
  {
    name: "Diego Ferraz",
    city: "Curitiba, PR",
    text: "Segundo aparelho que compro aqui. Embalagem premium, garantia real e frete rápido.",
  },
];
