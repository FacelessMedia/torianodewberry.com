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
  title: "Toriano Dewberry | Optician, Entrepreneur & Eye Care Innovator",
  description:
    "Toriano Dewberry is a licensed optician, entrepreneur, and CEO of MyEyeRx.net and Dewberry Optical. Dedicated to revolutionizing eye care access and bringing vision services to underserved communities in Detroit.",
  keywords: [
    "Toriano Dewberry",
    "MyEyeRx",
    "Dewberry Optical",
    "optician",
    "eye care",
    "Detroit",
    "Michigan",
    "entrepreneur",
    "community eye care",
    "school eye exams",
  ],
  openGraph: {
    title: "Toriano Dewberry | Optician, Entrepreneur & Eye Care Innovator",
    description:
      "Licensed optician, entrepreneur, and CEO of MyEyeRx.net — revolutionizing eye care access and serving communities across Detroit.",
    url: "https://torianodewberry.com",
    siteName: "Toriano Dewberry",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
