import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Manrope,
  Noto_Sans_Devanagari,
} from "next/font/google";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { baseMetadata } from "@/lib/metadata";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-sks-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Manrope({
  variable: "--font-sks-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const hindiFont = Noto_Sans_Devanagari({
  variable: "--font-sks-hindi",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${displayFont.variable} ${bodyFont.variable} ${hindiFont.variable} h-full overflow-x-hidden antialiased`}
      lang="en"
    >
      <body className="min-h-full overflow-x-hidden bg-background text-foreground">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
