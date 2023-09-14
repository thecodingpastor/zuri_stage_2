import Navbar from "@/components/Navbar";
import "./App.scss";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { poppins } from "@/fonts";

export const metadata: Metadata = {
  title: "MovieBox",
  description: "A web based app for movies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <main style={{ minHeight: "calc(100vh - 8rem)" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
