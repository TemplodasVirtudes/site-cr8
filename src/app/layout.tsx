import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cr8estrategiasdigitais.com.br"),
  title: {
    default: "CR8 Estratégias Digitais | Operação e Automação de Cursos",
    template: "%s | CR8 Estratégias Digitais"
  },
  description: "Transformamos cursos e serviços em estruturas digitais que vendem. Landing Pages, Automação e Processos Comerciais de elite.",
  
  // Como aparece no Google/WhatsApp (Open Graph)
  openGraph: {
    title: "CR8 Estratégias Digitais",
    description: "Estruturas digitais de alta performance para cursos e profissionais.",
    url: "https://www.cr8estrategiasdigitais.com.br",
    siteName: "CR8",
    locale: "pt_BR",
    type: "website",
  },
  
  // Robôs de busca
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // AJUSTE 1: Mudamos para pt-BR
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* AJUSTE 2: O Cartão de Visita para IAs (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "CR8 Estratégias Digitais",
              "url": "https://www.cr8estrategiasdigitais.com.br",
              "description": "Consultoria especializada em estruturação de bastidores, automação e gestão operacional para coordenadores de cursos e infoprodutores.",
              "areaServed": "Brasil",
              "knowsAbout": [
                "Gestão Educacional",
                "Automação de Marketing",
                "Estruturação de Cursos",
                "Processos Operacionais",
                "Recuperação de Vendas"
              ],
              "priceRange": "$$$"
            }),
          }}
        />
      </body>
    </html>
  );
}