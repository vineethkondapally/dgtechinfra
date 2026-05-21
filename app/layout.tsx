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
  title: "DG techinfra - Technology, Infrastructure & Industrial Solutions | Hyderabad",
  description: "Integrated solutions across 15+ diverse sectors: Technology, Infrastructure, Manufacturing, Real Estate, Agriculture, Textiles, Food & Beverage, Retail, Trading, Wellness, Education, HR, Events, Consulting, and Finance. Based in Hyderabad, serving globally.",
  keywords: "DG techinfra, technology solutions, infrastructure projects, manufacturing, real estate, agriculture technology, import export, retail systems, education, recruitment, Hyderabad, India",
  authors: [{ name: "DG techinfra" }],
  creator: "DG techinfra",
  publisher: "DG techinfra",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "DG techinfra - Technology, Infrastructure & Industrial Solutions",
    description: "Multi-sector enterprise delivering integrated solutions across technology, infrastructure, manufacturing, and global trade.",
    url: "https://dgtechinfra.com",
    siteName: "DG techinfra",
    images: [
      {
        url: "https://dgtechinfra.com/logo.svg",
        width: 340,
        height: 80,
        alt: "DG techinfra logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DG techinfra - Technology, Infrastructure & Industrial Solutions",
    description: "Integrated solutions across 15+ diverse sectors",
    images: ["https://dgtechinfra.com/logo.svg"],
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
  other: {
    "google-site-verification": "googleef39532fea4ceb687",
    "og:image": "https://dgtechinfra.com/logo.svg",
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
