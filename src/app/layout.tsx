import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReduxProvider } from './store/provider';
import AuthInitializer from './components/AuthInit';
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "BiteLink - Simplify and Share Your Links",
  description: "BiteLink is a fast, reliable URL shortener that makes sharing links easier than ever. Create short, memorable links and track their performance in real-time.",
  keywords: "URL shortener, link shortener, BiteLink, short links, link management, analytics",
  openGraph: {
    title: "BiteLink - Simplify and Share Your Links",
    description: "Turn long URLs into short, easy-to-share links with BiteLink, and track clicks instantly.",
    url: "https://bitelink.in",
    type: "website",
    images: [
      {
        url: "https://bitelink.in/icon.jpg",
        width: 1200,
        height: 630,
        alt: "BiteLink - URL Shortener",
      },
    ],
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider><AuthInitializer />
        {children}</ReduxProvider>
      </body>
    </html>
  );
}
