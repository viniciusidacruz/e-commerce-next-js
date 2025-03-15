import { twMerge } from "tailwind-merge";
import { ButtonIconProps } from "./types";

export function ButtonIcon(props: ButtonIconProps) {
  return (
    <button
      {...props}
      className={twMerge(
        "w-8 h-8 rounded-full bg-slate-950 text-white flex items-center justify-center text-xs cursor-pointer",
        props.className
      )}
    >
      {props.children}
    </button>
  );
}
