"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useShallow } from "zustand/shallow";

import { useStore } from "@/store";

export function ShoppingCart() {
  const { totalItems, hasItems } = useStore(
    useShallow((state) => ({
      totalItems: state.totalItems,
      hasItems: state.hasItems,
    }))
  );

  return (
    <Link
      href={hasItems ? "/checkout/cart" : "/"}
      className="flex items-center gap-2"
    >
      <ShoppingBag className="w-6 h-6 text-gray-500" />
      <span className="text-sm font-medium">{totalItems}</span>
    </Link>
  );
}
