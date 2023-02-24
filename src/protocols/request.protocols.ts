import { Product } from "./products.protocols";

export type Requests = {
  total: number;
  message: string;
  addressId: number;
  products: Array<Product>;
  userId: number;
};
