import type { Metadata } from "next";

import { Header } from "@/components";

import "./globals.css";

export const metadata: Metadata = {
  title: "E-commerce NEXT JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
