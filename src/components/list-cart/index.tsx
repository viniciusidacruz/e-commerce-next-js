"use client";

import Link from "next/link";
import { useShallow } from "zustand/react/shallow";

import { useStore } from "@/store";
import { CardCartItem } from "@/components";

export function ListCart() {
  const { items, hasItems } = useStore(
    useShallow((state) => ({
      items: state.items,
      hasItems: state.hasItems,
    }))
  );

  

  return (
    <ul className="w-full bg-white rounded-lg p-4 space-y-4 h-fit">
      {hasItems ? (
        items.map((item) => <CardCartItem key={item.id} item={item} />)
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-gray-500">Nenhum item no carrinho</p>

          <Link href="/" className="text-blue-500">
            Voltar para a loja
          </Link>
        </div>
      )}
    </ul>
  );
}
