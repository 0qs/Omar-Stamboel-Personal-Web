import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omar Stamboel — IT Strategy & UI/UX",
  description:
    "Portfolio of Omar Stamboel — Information Systems student at BINUS University, FS Strategy & Operations Intern at PwC SEA, UI/UX Designer. Based in Jakarta, Indonesia.",
  keywords: [
    "Omar Stamboel",
    "UI/UX Design",
    "IT Strategy",
    "PwC",
    "BINUS University",
    "Jakarta",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
