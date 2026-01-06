import type { ReactNode } from "react";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Garber Bros, Inc.",
  description: "For over 55 years, Garber Bros Inc., based in Morgan City, LA, has been a leading provider of marine transportation services for the offshore oil and gas industry."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white text-slate-900 antialiased">
        <Header />
        <main className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
