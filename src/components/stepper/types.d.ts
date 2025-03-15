import { ComponentProps } from "react";

export type StepperProps = ComponentProps<"div"> & {
  steps: {
    label: string;
    href: string;
  }[];
};
