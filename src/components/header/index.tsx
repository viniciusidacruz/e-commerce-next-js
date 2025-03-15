import Link from "next/link";
import { Search } from "lucide-react";

import { ShoppingCart } from "../shopping-cart";

export function Header() {
  return (
    <header className="w-full py-5">
      <div className="container mx-auto flex items-center justify-between flex-col md:flex-row gap-8">
        <Link href="/">E-commerce</Link>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white rounded-md p-2">
            <Search className="w-4 h-4 text-gray-500" />
            <input type="text" placeholder="Buscar" className="outline-none" />
          </div>

          <div className="flex items-center gap-2">
            <ShoppingCart />
          </div>
        </div>
      </div>
    </header>
  );
}
