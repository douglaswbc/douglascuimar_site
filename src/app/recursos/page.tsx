import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recursos",
  description:
    "Materiais gratuitos sobre automação e IA: guias, planilhas de ROI, checklist de processos e mais recursos para PMEs.",
  openGraph: {
    title: "Recursos Gratuitos | Douglas Cuimar",
    description:
      "Guias, planilhas, checklists e materiais sobre automação e IA para PMEs.",
  },
};

const recursos = [
  {
    title: "Calculadora de ROI de Automação",
    desc: "Planilha interativa para calcular o retorno sobre investimento ao automatizar processos da sua empresa.",
    type: "Planilha",
  },
  {
    title: "Checklist: 50 Processos que Podem Ser Automatizados",
    desc: "Lista completa de processos operacionais comuns em PMEs e como automatizar cada um deles.",
    type: "PDF",
  },
  {
    title: "Guia: Como Escolher seu Primeiro Projeto de IA",
    desc: "Framework em 4 passos para identificar o projeto de IA com maior potencial de resultado na sua empresa.",
    type: "PDF",
  },
  {
    title: "Template: Briefing de Automação",
    desc: "Documento estruturado para descrever seu processo atual e o resultado esperado com a automação.",
    type: "Template",
  },
  {
    title: "Comparativo: Ferramentas de Automação (n8n vs Make vs Zapier)",
    desc: "Análise técnica das principais plataformas de automação no-code/low-code do mercado.",
    type: "PDF",
  },
  {
    title: "Case: Como uma clínica reduziu 40% das faltas com IA",
    desc: "Estudo de caso completo com dados reais de implementação de agente de IA em uma clínica.",
    type: "Case",
  },
];

export default function RecursosPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Recursos Gratuitos",
          description:
            "Materiais gratuitos sobre automação e IA para PMEs.",
        }}
      />

      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <h1 className="text-sm font-black text-emerald uppercase tracking-[0.4em] mb-4">
            Recursos
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
            Materiais{" "}
            <span className="italic text-emerald">Gratuitos</span>
          </h2>
          <p className="text-slate-400 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
            Guias, planilhas, checklists e estudos de caso para ajudar sua
            empresa na jornada de automação e IA.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recursos.map((rec) => (
              <div
                key={rec.title}
                className="p-8 rounded-[2rem] bg-surface-alt border border-slate-100 hover:border-emerald/30 hover:shadow-xl transition-all flex flex-col"
              >
                <span className="text-[10px] font-black text-emerald uppercase tracking-widest mb-4">
                  {rec.type}
                </span>
                <h3 className="text-xl font-bold text-navy mb-3">{rec.title}</h3>
                <p className="text-slate-500 leading-relaxed flex-1 mb-6">
                  {rec.desc}
                </p>
                <Link
                  href="/contato"
                  className="text-navy font-bold hover:text-emerald transition-colors"
                >
                  Baixar material →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
