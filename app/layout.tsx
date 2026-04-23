import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dgtechinfra.com"),
  title: "DHRITI Global - Technology, Infrastructure & Industrial Solutions | Hyderabad",
  description: "Integrated solutions across 15+ diverse sectors: Technology, Infrastructure, Manufacturing, Real Estate, Agriculture, Textiles, Food & Beverage, Retail, Trading, Wellness, Education, HR, Events, Consulting, and Finance. Based in Hyderabad, serving globally.",
  keywords: "technology solutions, infrastructure projects, manufacturing, real estate, agriculture technology, import export, retail systems, education, recruitment, Hyderabad, India",
  authors: [{ name: "DHRITI Global Technologies & Infrastructure Pvt Ltd" }],
  creator: "DHRITI Global Technologies & Infrastructure Pvt Ltd",
  publisher: "DHRITI Global Technologies & Infrastructure Pvt Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
    creator: "@dgtechinfra",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://dgtechinfra.com",
  },
  category: "Business Services",
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
