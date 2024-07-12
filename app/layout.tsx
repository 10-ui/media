import type { Metadata } from "next";
import Header from "@/components/common/header";
import { fonts } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className={fonts.notoSansJP.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
