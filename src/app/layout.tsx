import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nevbar from "@/components/Nevbar";
import StarsCanvas from "@/components/Starbackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aizaz",
  description: "NevBar testings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <StarsCanvas/>
        <Nevbar/>
        {children}</body>
    </html>
  );
}
