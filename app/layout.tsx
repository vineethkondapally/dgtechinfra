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
  title: "DHRITI Global - Technology, Infrastructure & Industrial Solutions",
  description: "Integrated solutions across 15+ diverse sectors: Technology, Infrastructure, Manufacturing, Real Estate, Agriculture, Textiles, Food & Beverage, Retail, Trading, Wellness, Education, HR, Events, Consulting, and Finance.",
  keywords: "technology solutions, infrastructure projects, manufacturing, real estate, agriculture technology, import export, retail systems, education, recruitment",
  authors: [{ name: "DHRITI Global Technologies & Infrastructure Pvt Ltd" }],
  openGraph: {
    title: "DHRITI Global - Technology, Infrastructure & Industrial Solutions",
    description: "Multi-sector enterprise delivering integrated solutions across technology, infrastructure, manufacturing, and global trade.",
    url: "https://dgtechinfra.com",
    siteName: "DHRITI Global",
    images: [
      {
        url: "https://dgtechinfra.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "DHRITI Global",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DHRITI Global - Technology, Infrastructure & Industrial Solutions",
    description: "Integrated solutions across 15+ diverse sectors",
    images: ["https://dgtechinfra.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1.0",
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
