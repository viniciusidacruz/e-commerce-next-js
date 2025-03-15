import Link from "next/link";
import Image from "next/image";
import { Plus } from "lucide-react";

import { ButtonIcon } from "../button-icon";
import { formatCurrency } from "@/helpers/utils";

import { CardProductProps } from "./types";

export function CardProduct(props: CardProductProps) {
  return (
    <div className="bg-white rounded-md p-4 sm:w-[275px]">
      <div className="w-full h-40 relative mb-4">
        <Image src={props.image} alt={props.title} fill />
      </div>

      <div className="flex gap-4 justify-between">
        <Link href={`/product/${props.id}`}>
          <h2 className="text-lg font-bold flex-1 line-clamp-2">
            {props.title}
          </h2>
        </Link>
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
