import { StateCreator } from "zustand";

import { CartSlice } from "./types";
import { initialState, getProductById } from "./utils";

export const createCartSlice: StateCreator<
  CartSlice,
  [["zustand/immer", never]],
  [],
  CartSlice
> = (set) => ({
  ...initialState,

  addItem: (item) => {
    set((state) => {
      const existingItem = getProductById(item.id, state.items);

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push(item);
      }

      state.total += item.price * item.quantity;
      state.totalItems += item.quantity;
      state.hasItems = state.items.length > 0;
    });
  },

  onChangeSearch: (search) => {
    set((state) => {
      state.search = search;
    });
  },

  removeItem: (id) => {
    set((state) => {
      const existingItem = getProductById(id, state.items);
      if (!existingItem) return;

      state.items = state.items.filter((item) => item.id !== id);
      state.total -= existingItem.price * existingItem.quantity;
      state.totalItems -= existingItem.quantity;
      state.hasItems = state.items.length > 0;
    });
  },

  incrementItem: (id) => {
    set((state) => {
      const existingItem = getProductById(id, state.items);
      if (!existingItem) return;

      existingItem.quantity += 1;
      state.total += existingItem.price;
      state.totalItems += 1;
      state.hasItems = state.items.length > 0;
    });
  },

  decrementItem: (id) => {
    set((state) => {
      const existingItem = getProductById(id, state.items);
      if (!existingItem) return;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity -= 1;
      }

      state.total -= existingItem.price;
      state.totalItems -= 1;
      state.hasItems = state.items.length > 0;
    });
  },

  clearCart: () => {
    set((state) => {
      Object.assign(state, initialState);
    });
  },
});
