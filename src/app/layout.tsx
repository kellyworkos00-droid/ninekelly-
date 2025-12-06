import "../globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Logo from "../components/Logo";

export const metadata: Metadata = {
  title: "Elegant Steel East Africa ERP",
  description: "We Bring Quality to Your Place",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <header className="flex flex-col items-center py-8">
          <Logo />
          <h1 className="text-2xl font-bold mt-4">Elegant Steel East Africa</h1>
          <p className="text-sm text-gray-600">We Bring Quality to Your Place</p>
        </header>
        <main className="container mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
