"use client";

import Link from "next/link";
import { Fragment } from "react";
import { useShallow } from "zustand/shallow";

import { useStore } from "@/store";
import { Button } from "@/components";
import { formatCurrency } from "@/helpers/utils";

export function Summary() {
  const { total, hasItems, totalItems } = useStore(
    useShallow((state) => ({
      hasItems: state.hasItems,
      total: state.total,
      totalItems: state.totalItems,
    }))
  );

  return (
    <aside className="bg-white rounded-lg p-4 h-fit">
      {hasItems ? (
        <Fragment>
          <div className="flex flex-col gap-4 border-b border-slate-200 mt-4 pb-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">Items</span>
              <span className="text-sm">{totalItems}</span>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-slate-200 pt-4">
            <span className="text-sm text-slate-500">Total da compra</span>
            <span className="text-sm font-bold">{formatCurrency(total)}</span>
          </div>

          <Button className="w-full mt-4">Finalizar compra</Button>
        </Fragment>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-gray-500">Adicione itens ao carrinho</p>

          <Link href="/" className="text-blue-500">
            Voltar para a loja
          </Link>
        </div>
      )}
    </aside>
  );
}
