import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IA para Contabilidade",
  description:
    "Coleta automática de documentos fiscais, conciliação inteligente e emissão de guias automatizada. Reduza o trabalho manual em até 70%.",
  openGraph: {
    title: "IA para Contabilidade | Douglas Cuimar",
    description:
      "Coleta automática de documentos, conciliação e emissão de guias com IA.",
  },
};

export default function ContabilidadePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Automação e IA para Contabilidade",
          provider: { "@type": "ProfessionalService", name: "Douglas Cuimar" },
          areaServed: { "@type": "Country", name: "Brasil" },
        }}
      />

      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h1 className="text-sm font-black text-emerald uppercase tracking-[0.4em] mb-4">
            Contabilidade
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.1]">
            Reduza o trabalho manual em até{" "}
            <span className="italic text-emerald">70%</span>
          </h2>
          <p className="text-slate-400 text-lg mt-8 max-w-2xl leading-relaxed">
            Automação de coleta de documentos, conciliação bancária e emissão de
            guias. Seu time contábil foca na análise, não na digitação.
          </p>
          <Link
            href="/contato"
            className="inline-flex mt-8 bg-emerald text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-emerald/20"
          >
            Agendar Diagnóstico
          </Link>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "Coleta Automática de Documentos",
                desc: "IA lembra os clientes de enviar documentos fiscais e organiza automaticamente por categoria, empresa e período.",
              },
              {
                title: "Conciliação Bancária Inteligente",
                desc: "Automação que cruza extratos bancários com lançamentos contábeis, identificando divergências em minutos.",
              },
              {
                title: "Emissão de Guias Automatizada",
                desc: "Cálculo e emissão automática de guias de impostos. Cobrança recorrente de honorários integrada ao financeiro.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-[2rem] bg-surface-alt border border-slate-100"
              >
                <h3 className="text-xl font-bold text-navy mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contato"
              className="inline-flex bg-navy text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-navy/20"
            >
              Quero automatizar meu escritório contábil
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
