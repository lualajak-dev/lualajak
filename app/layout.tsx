
import type { Metadata } from "next";
import {
  Syne,
  Plus_Jakarta_Sans,
  JetBrains_Mono,
} from "next/font/google";

import "./globals.css";
import ThemeProvider from "@/components/theme-provider";

const syne = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const siteUrl = "https://lualajak-dev.github.io/lualajak";

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),

  title: {
    default: "Lual Ajak | AI Engineer & Builder",
    template: "%s | Lual Ajak",
  },

  description:
    "Lual Ajak is an AI Engineer, founder and builder from South Sudan, focused on machine learning, natural language processing, and developing practical AI-powered products.",

  applicationName: "Lual Ajak",
  authors: [{ name: "Lual Ajak" }],
  creator: "Lual Ajak",
  publisher: "Lual Ajak",

  verification: {
    google: "n1A1h0PZgKPis9Qor3_ImiKuyTMYI_O8NYZpQSNCPrg",
  },

  keywords: [
    "Lual Ajak",
    "Lual Ajak AI Engineer",
    "AI Engineer South Sudan",
    "Artificial Intelligence",
    "Machine Learning",
    "Natural Language Processing",
    "NLP Engineer",
    "Python Developer",
    "FastAPI",
    "Retrieval Augmented Generation",
    "RAG",
    "AI Product Development",
    "FocalNote AI",
    "Juba South Sudan",
  ],

  alternates: {
    canonical: `${siteUrl}/`,
  },

  openGraph: {
    title: "Lual Ajak | AI Engineer & Builder",
    description:
      "Building intelligent systems. Exploring what's possible. Discover the projects, work and ideas of Lual Ajak.",
    url: `${siteUrl}/`,
    siteName: "Lual Ajak",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Lual Ajak — AI Engineer and Builder",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lual Ajak | AI Engineer & Builder",
    description:
      "Building intelligent systems. Exploring what's possible.",
    images: [`${siteUrl}/og-image.png`],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${jakarta.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
