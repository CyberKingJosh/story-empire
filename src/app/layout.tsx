import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Story Empire — Serialised Fiction That Hooks You",
  description:
    "Four worlds. New chapters every week. Spicy romantasy, cozy mystery, BL dark romance, and 18+ dark romance. Chapter 1 always free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: "light" }} className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-[#1a1a1a]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
