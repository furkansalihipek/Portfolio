/* eslint-disable @next/next/no-page-custom-font -- Anta/Kode Mono not in next/font; link is root layout (site-wide). */
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Furkan İpek | Front-End Developer",
  description:
    "Portfolio of Furkan İpek — Computer Programming graduate and front-end developer.",
};

export default function RootLayout({ children }) {
  return (
    <html
      className={`${inter.variable} bg-background text-white list-none`}
      lang="en"
    >
      <head>
        <link rel="icon" href="icon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anta&family=Kode+Mono:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
