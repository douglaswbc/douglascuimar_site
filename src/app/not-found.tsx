import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Página não encontrada | Douglas Cuimar",
  description:
    "A página que você procura não existe. Volte ao site e descubra soluções de IA e automação para sua empresa.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-slate-800">
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="text-center max-w-lg">
            <p className="text-8xl font-black text-emerald mb-4">404</p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4 tracking-tighter">
              Página não encontrada
            </h1>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed">
              A página que você procura pode ter sido removida ou o link pode
              estar incorreto.
            </p>
            <Link
              href="/"
              className="inline-block bg-navy text-white px-8 py-4 rounded-2xl text-base font-bold hover:bg-slate-800 transition-all shadow-xl shadow-navy/20"
            >
              Voltar ao site
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
