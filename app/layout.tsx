"use client";

import Navbar from "@/components/Navbar";
import "./App.scss";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";
import { poppins } from "@/fonts";

// import { Inter, Quicksand } from "next/font/google";
// const inter = Quicksand({ subsets: ["latin"] });

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
