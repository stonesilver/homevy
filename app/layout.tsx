import type { Metadata } from "next";
import { Manrope, Open_Sans } from "next/font/google";
import { ReactLenis } from "@/utils/lenis";
import "./globals.css";
import { cn } from "@/utils/utils";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const open_sans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boldo",
  description: "Save time by building fast with Boldo Template.",
  icons: {
    icon: [
      {
        url: "/boldo.svg",
        href: "/boldo.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body className={cn("flex min-h-dvh flex-col antialiased", manrope.variable, open_sans.variable)}>
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
