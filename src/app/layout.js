import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Furkan İpek",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html className="bg-background text-white list-none" lang="en">
      <head>
        <link rel="icon" href="icon.ico"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
