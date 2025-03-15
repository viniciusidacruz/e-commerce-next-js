import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export function ShoppingCart() {
  return (
    <Link href="/checkout/cart" className="flex items-center gap-2">
      <ShoppingBag className="w-6 h-6 text-gray-500" />
      <span className="text-sm font-medium">0</span>
    </Link>
  );
}
