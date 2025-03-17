"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useShallow } from "zustand/react/shallow";

import { useStore } from "@/store";
import { ShoppingCart } from "@/components";

export function Header() {
  const { onChangeSearch } = useStore(
    useShallow((state) => ({
      onChangeSearch: state.onChangeSearch,
    }))
  );

  return (
    <header className="w-full py-5">
      <div className="container mx-auto flex items-center justify-between flex-col md:flex-row gap-8">
        <Link href="/">E-commerce</Link>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white rounded-md p-2">
            <Search className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Buscar"
              className="outline-none"
              onChange={(event) => onChangeSearch(event.target.value)}
            />
          </div>

          <div className="flex items-center gap-2">
            <ShoppingCart />
          </div>
        </div>
      </div>
    </header>
  );
}
