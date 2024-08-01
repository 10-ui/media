import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import type { Metadata } from "next";
import { fonts } from "@/lib/fonts";
import logo from "@/public/logo.png";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | 10-ui",
    default: "Portfolio",
  },
  description: "Portfolio",
  icons: [
    {
      rel: "icon",
      url: logo.src,
      sizes: "32x32",
    },
  ],
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
        <Footer />
      </body>
    </html>
  );
}
