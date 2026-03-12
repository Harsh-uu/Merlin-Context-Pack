import type { Metadata } from "next";
import "./globals.css";
import { myFont } from "./fonts";

export const metadata: Metadata = {
  title: "Merlin Context Packs",
  description: "Prompts that adopt to the website  you're on",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={myFont.variable}>
      <body className="bg-[#0b0c14]">{children}</body>
    </html>
  );
}
