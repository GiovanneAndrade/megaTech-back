export type Product = 
  {
    id: number;
  }
;

export type Products = {
  name: string;
  price: string;
  images: string[];
  description: string;
};

export type CategoryProduct = {
  name: string;
  image: string;
  products: Products[];
};



