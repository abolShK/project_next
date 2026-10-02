"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "../style/globals.css";
import {CartPriovider} from "../context/CartContext"

import Footer from "../components/Footer";
import Header from "../components/Header";
import { SessionProvider } from "next-auth/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <SessionProvider >
        <CartPriovider >
        <Header />
        {children}
        <Footer />
        </CartPriovider>
        </SessionProvider>
      </body>
    </html>
  );
}