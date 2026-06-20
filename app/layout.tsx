import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://nova-gear.local"),
  title: {
    default: "NOVA GEAR — Matériel gaming premium",
    template: "%s | NOVA GEAR",
  },
  description: "Marketplace premium de matériel gaming pour joueurs exigeants, streamers, créateurs de contenu et passionnés de setup haut de gamme.",
  openGraph: {
    title: "NOVA GEAR",
    description: "Gear up. Dominate the game.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="noise">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
