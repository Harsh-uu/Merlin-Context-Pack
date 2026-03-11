import localFont from "next/font/local";

export const myFont = localFont({
  src: [
    {
      path: "../public/fonts/Helvetica.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
});