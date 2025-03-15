import { ShoppingBag } from "lucide-react";

export function ShoppingCart() {
  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="w-6 h-6 text-gray-500" />
      <span className="text-sm font-medium">0</span>
    </div>
  );
}
