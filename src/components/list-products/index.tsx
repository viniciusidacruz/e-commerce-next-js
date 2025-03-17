"use client";

import { useShallow } from "zustand/react/shallow";

import { useStore } from "@/store";
import { Product } from "@/interfaces";

import { CardProduct } from "../card-product";

const products: Product[] = [
  {
    id: "1",
    title: "Produto 1",
    price: 100,
    image: "/assets/product-01.png",
    description: "Descrição do produto 1",
    brand: "Marca 1",
  },
  {
    id: "2",
    title: "Produto 2",
    price: 200,
    image: "/assets/product-02.png",
    description: "Descrição do produto 2",
    brand: "Marca 2",
  },
  {
    id: "3",
    title: "Produto 3",
    price: 300,
    image: "/assets/product-03.png",
    description: "Descrição do produto 3",
    brand: "Marca 3",
  },
  {
    id: "4",
    title: "Produto 4",
    price: 400,
    image: "/assets/product-04.jpg",
    description: "Descrição do produto 4",
    brand: "Marca 4",
  },
];

export function ListProducts() {
  const { search } = useStore(
    useShallow((state) => ({
      search: state.search,
    }))
  );

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const hasProducts = filteredProducts.length > 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {hasProducts ? (
        filteredProducts.map((product) => (
          <CardProduct key={product.id} {...product} />
        ))
      ) : (
        <div className="col-span-full flex items-center justify-center">
          <p className="text-gray-500">Nenhum produto encontrado</p>
        </div>
      )}
    </div>
  );
}
