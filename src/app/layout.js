import { Nunito, Caveat, Inter } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito-family",
  subsets: ["latin", "latin-ext"],
  weight: ["700", "800", "900"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat-family",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter-family",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "Az érem két oldala — Janikovszky Éva emlékére",
  description:
    "A világ a feje tetejére fordult, de van, ami nem változik: a mindennapi, emberi helyzeteink. Janikovszky Éva születésének 100. évfordulóján.",
  keywords: [
    "Janikovszky Éva",
    "Az érem két oldala",
    "magyar könyv",
    "ebook",
    "humor",
    "nosztalgia",
  ],
  openGraph: {
    title: "Az érem két oldala — Janikovszky Éva emlékére",
    description:
      "A világ a feje tetejére fordult, de van, ami nem változik: a mindennapi, emberi helyzeteink.",
    type: "website",
    locale: "hu_HU",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="hu"
      className={`${nunito.variable} ${caveat.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
