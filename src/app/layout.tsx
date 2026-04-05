import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Story Empire — Serialised Fiction That Hooks You",
  description:
    "Two worlds. New chapters every week. Spicy romantasy and cozy mystery, written to be unputdownable.",
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
      </body>
    </html>
  );
}
