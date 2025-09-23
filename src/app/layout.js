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

export const metadata = {
  title: "Miracle Abu",
  description: "A portfolio web application for Miracle Abu",
  openGraph: {
    title: "Miracle Abu",
    description: "A portfolio web application for Miracle Abu",
    url: "https://miracle-abu01.vercel.app/",
    siteName: "Miracle Abu Portfolio",
    images: [
      {
        url: "/portfolio_thumbnail.png", 
        width: 1200,
        height: 630,
        alt: "Miracle Abu Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miracle Abu",
    description: "A portfolio web application for Miracle Abu",
    images: ["https://miracle-abu01.vercel.app/portfolio_thumbnail.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
