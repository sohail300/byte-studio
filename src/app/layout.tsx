import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const monigueFont = localFont({
  src: "./fonts/Monigue.otf",
  variable: "--font-monigue",
});
const antonFont = localFont({
  src: "./fonts/Anton.ttf",
  variable: "--font-anton",
});
const ralewayFont = localFont({
  src: "./fonts/Raleway.ttf",
  variable: "--font-raleway",
});
const bebasNeueFont = localFont({
  src: "./fonts/BebasNeue.ttf",
  variable: "--font-bebas-neue",
});
const heinrichNeueFont = localFont({
  src: "./fonts/Heinrich.ttf",
  variable: "--font-heinrich",
});

export const metadata: Metadata = {
  title: "Byte Studio",
  description:
    "Byte Studio is a creative tech agency specializing in web development, mobile apps, and UI/UX design. We build sleek, user-focused digital experiences that look great and work flawlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-305X95P8YJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-305X95P8YJ');
          `}
        </Script>
      </head>

      <body
        className={`${monigueFont.variable} ${antonFont.variable} ${ralewayFont.variable} ${bebasNeueFont.variable} ${heinrichNeueFont.variable} antialiased scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
