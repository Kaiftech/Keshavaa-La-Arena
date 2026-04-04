import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Keshavaa La Arena | Luxury River-Facing Apartments in Nerul, Goa",
  description: "Discover La Arena by Keshavaa Developers. Luxury 1, 2, 3 & 4 BHK river-facing apartments in Nerul, Goa. Rooftop infinity pool, fitness centre, and premium finishes. Inquire today for exclusive pricing.",
  keywords: ["Keshavaa Properties", "La Arena Goa", "Luxury Apartments Nerul", "Real Estate Goa", "River View Homes Goa", "Keshavaa Developers"],
  openGraph: {
    title: "Keshavaa La Arena | Luxury Living in Nerul, Goa",
    description: "Experience the pinnacle of luxury residential living at La Arena in Nerul, Goa.",
    url: "https://www.keshavaa-properties.site",
    siteName: "Keshavaa Properties",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import FloatingCTA from "@/components/FloatingCTA";
import StickyMobileBar from "@/components/StickyMobileBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NKLCMNCQ');`
        }} />
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NKLCMNCQ"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }} />
        {/* End Google Tag Manager (noscript) */}
        
        {children}
        <FloatingCTA />
        <StickyMobileBar />
      </body>
    </html>
  );
}
