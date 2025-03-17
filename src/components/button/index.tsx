import { twMerge } from "tailwind-merge";
import { ButtonProps } from "./types";

export function Button({
  children,
  isLoading,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        "bg-slate-950 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-slate-800 transition-colors",
        className
      )}
      {...props}
    >
      {isLoading ? "Processando..." : children}
    </button>
  );
}
