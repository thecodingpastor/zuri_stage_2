import { Poppins, Open_Sans, Quicksand, DM_Sans } from "next/font/google";

export const poppins = Poppins({
  weight: ["300", "600", "700"],
  display: "swap",
  subsets: ["latin"],
  // variable: "--font-poppins",
});

export const quicksand = Quicksand({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});
export const open_sans = Open_Sans({
  weight: ["300", "400"],
  display: "swap",
  subsets: ["latin"],
});
export const dm_sans = DM_Sans({
  weight: ["300", "400"],
  display: "swap",
  subsets: ["latin"],
});
