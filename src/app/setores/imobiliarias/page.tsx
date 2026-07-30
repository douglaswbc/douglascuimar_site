import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IA para Imobiliárias",
  description:
    "Qualificação automática de leads, agendamento inteligente de visitas e gestão digital de contratos. Venda mais rápido com IA.",
  openGraph: {
    title: "IA para Imobiliárias | Douglas Cuimar",
    description:
      "Qualificação de leads, agendamento de visitas e gestão de contratos com IA.",
  },
};

export default function ImobiliariasPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Automação e IA para Imobiliárias",
          provider: { "@type": "ProfessionalService", name: "Douglas Cuimar" },
          areaServed: { "@type": "Country", name: "Brasil" },
        }}
      />

      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h1 className="text-sm font-black text-emerald uppercase tracking-[0.4em] mb-4">
            Imobiliárias
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.1]">
            Venda mais rápido com{" "}
            <span className="italic text-emerald">IA para imobiliárias</span>
          </h2>
          <p className="text-slate-400 text-lg mt-8 max-w-2xl leading-relaxed">
            Qualificação automática de leads, agendamento inteligente de visitas
            e gestão digital de contratos. Aumente a conversão e reduza o ciclo
            de vendas.
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
                title: "Qualificação de Leads",
                desc: "IA entrevista leads via WhatsApp, coleta perfil, orçamento e preferências. Só encaminha para o corretor leads prontos para comprar.",
              },
              {
                title: "Agendamento de Visitas",
                desc: "Sistema automático que cruza agenda do corretor com disponibilidade do cliente e confirma visitas sem ligações.",
              },
              {
                title: "Gestão de Contratos",
                desc: "Automação da jornada de documentação: propostas, contratos e acompanhamento de assinaturas digitais integrados.",
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
              Quero automatizar minha imobiliária
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
