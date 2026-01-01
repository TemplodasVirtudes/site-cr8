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
    // Se você tiver uma imagem da logo ou capa, coloque em public/og-image.jpg
    // images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
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

  // Ícones (Favicon)
  icons: {
    icon: "/favicon.ico", // Garanta que tem um arquivo favicon.ico na pasta public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

