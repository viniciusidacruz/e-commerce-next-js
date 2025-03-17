"use client";

import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { useShallow } from "zustand/shallow";

import { useStore } from "@/store";
import { CardCartItemProps } from "./types";
import { formatCurrency } from "@/helpers/utils";

import { ButtonIcon } from "../button-icon";

export function CardCartItem({ item }: CardCartItemProps) {
  const { decQty, incQty, removeItem } = useStore(
    useShallow((state) => ({
      decQty: state.decrementItem,
      incQty: state.incrementItem,
      removeItem: state.removeItem,
    }))
  );

  return (
    <li
      key={item.id}
      className="flex items-center gap-4 border-b pb-4 border-slate-300"
    >
      <div>
        <Image src={item.image} alt={item.name} width={100} height={100} />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold text-gray-700">{item.name}</h3>
        <p className="text-sm text-gray-500">
          {formatCurrency(item.price || 0)}
        </p>
        <p className="text-sm text-gray-500">Quantidade: {item.quantity}</p>
      </div>

      <div className="ml-auto flex flex-col gap-2 items-center">
        <div className="flex items-center gap-2">
          <ButtonIcon onClick={() => decQty(item.id)}>
            <Minus />
          </ButtonIcon>

          <ButtonIcon onClick={() => incQty(item.id)}>
            <Plus />
          </ButtonIcon>
        </div>

        <button
          type="button"
          className="text-red-500 text-sm cursor-pointer"
          onClick={() => removeItem(item.id)}
        >
          Remover
        </button>
      </div>
    </li>
  );
}
