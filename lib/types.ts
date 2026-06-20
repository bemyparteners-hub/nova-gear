export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  categorySlug: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  stock: number;
  image: string;
  gallery: string[];
  shortDescription: string;
  longDescription: string;
  specs: Record<string, string>;
  badges: string[];
  rgb: string;
  recommended: boolean;
  officialUrl?: string;
  use: string;
};

export type CartLine = {
  product: Product;
  quantity: number;
};

export type Category = {
  slug: string;
  name: string;
  description: string;
  icon: string;
};
