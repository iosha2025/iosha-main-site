import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "IOSHA — Get Ordained as a Healing Minister | Sacred Healing Arts Ordination",
  description: "IOSHA ordains energy healers, herbalists, ceremonial ministers, and spiritual practitioners as clergy of the sacred healing arts. Perform weddings, funerals, healing ceremonies, and more — with recognized ministerial credentials in all 50 states.",
  keywords: [
    "ordained healing minister",
    "healing arts ordination",
    "become ordained minister",
    "energy healer ordination",
    "reiki minister credentials",
    "spiritual ordination online",
    "ordained healer",
    "interfaith ordination",
    "clergy credentials",
    "ministerial standing all 50 states",
    "get ordained",
    "sacred healing ordination",
    "herbalist ordained minister",
    "ceremonial minister",
    "online ordination healing",
  ],
  openGraph: {
    title: "IOSHA — Sacred Healing Arts Ordination",
    description: "Ordination for energy healers, herbalists, ceremonial ministers, and all healing practitioners. Credentials recognized in all 50 states.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${jakarta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
