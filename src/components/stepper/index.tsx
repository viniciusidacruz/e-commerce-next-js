"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

import { StepperProps } from "./types";

export function Stepper(props: StepperProps) {
  const pathname = usePathname();

  return (
    <div className={twMerge("flex items-center w-full", props.className)}>
      {props.steps.map((step, index) => {
        const isCurrent = pathname === step.href;

        return (
          <div key={step.label} className="flex items-center">
            <Link href={step.href} className="flex items-center gap-2 flex-col">
              <div
                className={twMerge(
                  isCurrent
                    ? "bg-slate-950 text-white"
                    : "border border-slate-950 text-slate-950",
                  "w-10 h-10 rounded-full flex items-center justify-center"
                )}
              >
                <span>{index + 1}</span>
              </div>

              <span className="text-slate-950">{step.label}</span>
            </Link>
            {index < props.steps.length - 1 && (
              <div className="w-24 h-[1px] bg-slate-300 mx-4" />
            )}
          </div>
        );
      })}
    </div>
  );
}
