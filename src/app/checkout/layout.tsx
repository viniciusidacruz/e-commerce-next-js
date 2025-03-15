import type { Metadata } from "next";

import { Stepper } from "@/components";
import { Summary } from "@/components/summary";

export const metadata: Metadata = {
  title: "Checkout | E-commerce NEXT JS",
};

export default function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto">
      <Stepper
        className="my-10 justify-center"
        steps={[
          {
            label: "Carrinho",
            href: "/checkout/cart",
          },
          {
            label: "Pagamento",
            href: "/checkout/payment",
          },
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {children}

        <Summary />
      </div>
    </div>
  );
}
