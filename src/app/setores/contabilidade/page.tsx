import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "IA para Contabilidade",
  description:
    "Coleta automática de documentos fiscais, conciliação inteligente e emissão de guias automatizada. Reduza o trabalho manual em até 70%.",
  alternates: { canonical: "./" },
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
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Setores", href: "/setores" }, { label: "IA para Contabilidade", href: "/setores/contabilidade" }]} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Quanto tempo para implantar no meu escritório contábil?", acceptedAnswer: { "@type": "Answer", text: "O diagnóstico leva de 5 a 7 dias. A implantação completa leva de 10 a 15 dias." } },
          { "@type": "Question", name: "Funciona com qualquer sistema contábil?", acceptedAnswer: { "@type": "Answer", text: "Sim. Integramos com Domínio, Alterdata, Questor e outros sistemas via API ou RPA." } },
          { "@type": "Question", name: "A automação reduz erros?", acceptedAnswer: { "@type": "Answer", text: "Sim. A coleta automática de documentos e conciliação elimina erros de digitação manual, reduzindo retrabalho em até 70%." } },
          { "@type": "Question", name: "Quanto custa?", acceptedAnswer: { "@type": "Answer", text: "A partir de R$ 4.997, com mensalidade de MSP a partir de R$ 997 para gestão contínua." } },
        ]
      }} />

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

          <div className="mt-20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-navy mb-8 text-center">
              Perguntas Frequentes sobre IA para Contabilidade
            </h3>
            <div className="space-y-3">
              {[
                {
                  q: "Quanto tempo para implantar no meu escritório contábil?",
                  a: "O diagnóstico leva de 5 a 7 dias. A implantação completa leva de 10 a 15 dias.",
                },
                {
                  q: "Funciona com qualquer sistema contábil?",
                  a: "Sim. Integramos com Domínio, Alterdata, Questor e outros sistemas via API ou RPA.",
                },
                {
                  q: "A automação reduz erros?",
                  a: "Sim. A coleta automática de documentos e conciliação elimina erros de digitação manual, reduzindo retrabalho em até 70%.",
                },
                {
                  q: "Quanto custa?",
                  a: "A partir de R$ 4.997, com mensalidade de MSP a partir de R$ 997 para gestão contínua.",
                },
              ].map((faq) => (
                <details
                  key={faq.q}
                  className="group bg-surface-alt rounded-2xl border border-slate-100"
                >
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-navy font-semibold list-none">
                    {faq.q}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="flex-shrink-0 ml-4 transition-transform group-open:rotate-45"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </summary>
                  <p className="px-6 pb-4 text-slate-500 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="text-center mt-16 mb-8">
            <p className="text-slate-400 text-sm mb-3">Quer se aprofundar?</p>
            <Link
              href="/blog/integrar-whatsapp-crm"
              className="text-navy font-bold hover:text-emerald transition-colors"
            >
              Leia o artigo completo sobre este tema →
            </Link>
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
