import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "IA para Imobiliárias",
  description:
    "Qualificação automática de leads, agendamento inteligente de visitas e gestão digital de contratos. Venda mais rápido com IA.",
  alternates: { canonical: "./" },
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
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Setores", href: "/setores" }, { label: "IA para Imobiliárias", href: "/setores/imobiliarias" }]} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Quanto tempo para implantar?", acceptedAnswer: { "@type": "Answer", text: "O diagnóstico leva de 5 a 7 dias. A implantação completa do agente de IA leva de 10 a 15 dias." } },
          { "@type": "Question", name: "Funciona com meu CRM?", acceptedAnswer: { "@type": "Answer", text: "Sim. Integramos com os principais CRMs imobiliários do mercado brasileiro." } },
          { "@type": "Question", name: "Como a IA qualifica os leads?", acceptedAnswer: { "@type": "Answer", text: "O agente analisa intenção, urgência, orçamento e poder de decisão, classificando cada lead automaticamente." } },
          { "@type": "Question", name: "Quanto custa?", acceptedAnswer: { "@type": "Answer", text: "A partir de R$ 4.997, com mensalidade de MSP a partir de R$ 997 para gestão contínua." } },
        ]
      }} />

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

          <div className="mt-20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-navy mb-8 text-center">
              Perguntas Frequentes sobre IA para Imobiliárias
            </h3>
            <div className="space-y-3">
              {[
                {
                  q: "Quanto tempo para implantar?",
                  a: "O diagnóstico leva de 5 a 7 dias. A implantação completa do agente de IA leva de 10 a 15 dias.",
                },
                {
                  q: "Funciona com meu CRM?",
                  a: "Sim. Integramos com os principais CRMs imobiliários do mercado brasileiro.",
                },
                {
                  q: "Como a IA qualifica os leads?",
                  a: "O agente analisa intenção, urgência, orçamento e poder de decisão, classificando cada lead automaticamente.",
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
              href="/blog/sdr-virtual-com-ia"
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
              Quero automatizar minha imobiliária
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
