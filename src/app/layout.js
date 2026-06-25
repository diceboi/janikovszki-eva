import { Nunito, Caveat, Inter } from "next/font/google";
import Script from "next/script";
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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="hu"
      className={`${nunito.variable} ${caveat.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=982057567970800&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '982057567970800');
          fbq('track', 'PageView');
        `}
      </Script>
    </html>
  );
}
