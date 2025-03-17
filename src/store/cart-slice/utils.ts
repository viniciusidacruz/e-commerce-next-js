import { CartItem, CartState } from "./types";

export const initialState: CartState = {
  items: [],
  total: 0,
  search: "",
  totalItems: 0,
  hasItems: false,
};

export const getProductById = (
  id: string,
  products: CartItem[]
): CartItem | null => {
  const product = products.find((product) => product.id === id);

  if (!product) return null;

  return product;
};
