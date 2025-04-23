import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import "./globals.css";
import Navbar from "@/components/navbar";
import Header from "@/components/header";


const urbanist = Urbanist ({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Rodrigo Landing Page 👨🏽‍💻",
  description: "Landing Page made by Rodrigo Aranda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={urbanist.className}>      
          <Navbar/>
          <Header/>
        {children}
      </body>
    </html>
  );
}
