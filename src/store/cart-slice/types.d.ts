export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  total: number;
  search: string;
  totalItems: number;
  hasItems: boolean;
}

export interface CartActions {
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  incrementItem: (id: string) => void;
  decrementItem: (id: string) => void;
  clearCart: () => void;
  onChangeSearch: (search: string) => void;
}

export type CartSlice = CartState & CartActions;
