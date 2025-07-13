// src/app/layout.tsx
import "./[locale]/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ticket System",
  description: "Ticket System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
