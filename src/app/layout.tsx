import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Douglas Cuimar | Automação e IA para Empresas",
    template: "%s | Douglas Cuimar",
  },
  description:
    "Implantamos Inteligência Artificial que atende clientes, automatiza processos e integra seus sistemas para aumentar a produtividade. Especialistas em IA para PMEs.",
  metadataBase: new URL("https://douglascuimar.com.br"),
  alternates: {
    canonical: "./",
    types: {
      "application/rss+xml": "https://douglascuimar.com.br/rss.xml",
      "application/json": "https://douglascuimar.com.br/indice-conteudo.json",
    },
  },
  keywords: [
    "automação empresarial",
    "inteligência artificial",
    "IA para empresas",
    "agentes de IA",
    "n8n",
    "integração de sistemas",
    "chatbot WhatsApp",
    "automação de processos",
    "MSP de IA",
  ],
  authors: [{ name: "Douglas Cuimar" }],
  creator: "Douglas Cuimar",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Douglas Cuimar",
    title: "Douglas Cuimar | Automação e IA para Empresas",
    description:
      "Implantamos Inteligência Artificial que atende clientes, automatiza processos e integra seus sistemas para aumentar a produtividade.",
    images: [
      {
         url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Douglas Cuimar - Automação e IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Douglas Cuimar | Automação e IA para Empresas",
    description:
      "Implantamos Inteligência Artificial que atende clientes, automatiza processos e integra seus sistemas.",
     images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/assets/logotipo-dc.png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/assets/logotipo-dc.png" }],
  },

};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Douglas Cuimar",
  description:
    "Especialista em automação de processos e integração de sistemas com IA para PMEs.",
  url: "https://douglascuimar.com.br",
  telephone: "+55-11-99414-2485",
  email: "contato@douglascuimar.com.br",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Belém",
    addressRegion: "PA",
    addressCountry: "BR",
  },
  sameAs: [
    "https://www.instagram.com/douglas_cuimar",
    "https://www.youtube.com/@douglas_cuimar",
  ],
  areaServed: {
    "@type": "Country",
    name: "Brasil",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de Automação e IA",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Diagnóstico de IA",
          description: "Análise completa dos processos da empresa para identificar oportunidades de automação.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Automação Express",
          description: "Implementação rápida de automações pontuais com n8n e IA.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Agentes Inteligentes",
          description: "Criação de agentes de IA para atendimento, vendas e suporte.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "MSP de IA",
          description: "Gestão contínua de automações e agentes de IA como serviço.",
        },
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Douglas Cuimar",
  url: "https://douglascuimar.com.br",
  description:
    "Automação e Inteligência Artificial para PMEs. Agentes de IA, integração de sistemas e workflows automatizados.",
  inLanguage: "pt-BR",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://douglascuimar.com.br/?s={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-slate-800">
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
