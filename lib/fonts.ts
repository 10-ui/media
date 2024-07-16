import {
  Noto_Sans_JP,
  Red_Hat_Display,
  Cinzel_Decorative,
  Luckiest_Guy,
} from "next/font/google";
import local from "next/font/local";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-red-hat-display",
});

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: "700",
  style: "normal",
  variable: "--font-cinzel-decorative",
});

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  variable: "--font-luckiest-guy",
});

const lineFont = local({
  src: [
    {
      path: "font/LINESeedJP_OTF_Th.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "font/LINESeedJP_OTF_Rg.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "font/LINESeedJP_OTF_Bd.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "font/LINESeedJP_OTF_Eb.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});

export const fonts = {
  notoSansJP,
  redHatDisplay,
  cinzelDecorative,
  lineFont,
  luckiestGuy,
};
