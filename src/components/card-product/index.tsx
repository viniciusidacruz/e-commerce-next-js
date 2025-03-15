import Image from "next/image";
import { Plus } from "lucide-react";

import { formatCurrency } from "@/helpers/utils";

import { CardProductProps } from "./types";
import { ButtonIcon } from "../button-icon";

export function CardProduct(props: CardProductProps) {
  return (
    <div className="bg-white rounded-md p-4 sm:w-[375px]">
      <div className="w-full h-60 relative mb-4">
        <Image src={props.image} alt={props.title} fill />
      </div>

      <div className="flex gap-4">
        <h2 className="text-lg font-bold flex-1 line-clamp-2">{props.title}</h2>
        <ButtonIcon
          type="button"
          className="hover:scale-125 transition-all duration-300"
        >
          <Plus className="w-4 h-4" />
        </ButtonIcon>
      </div>

      <p className="text-sm my-4 text-gray-500 line-clamp-3">
        {props.description || "-"}
      </p>

      <p className="text-lg font-bold">{formatCurrency(props.price || 0)}</p>
    </div>
  );
}
