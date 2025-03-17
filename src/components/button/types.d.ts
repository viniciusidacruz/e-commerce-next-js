import { ComponentProps } from "react";

export type ButtonProps = ComponentProps<"button"> & {
  isLoading?: boolean;
};
