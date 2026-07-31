import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "IA para Clínicas",
  description:
    "Automatize confirmação de consultas, recuperação de pacientes inativos e pré-atendimento com IA. Reduza faltas em até 40% e libere sua equipe.",
  alternates: { canonical: "./" },
  openGraph: {
    title: "IA para Clínicas | Douglas Cuimar",
    description:
      "Automatize a confirmação de consultas, recuperação de pacientes e pré-atendimento com IA.",
  },
};

export default function ClinicasPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Automação e IA para Clínicas",
          provider: { "@type": "ProfessionalService", name: "Douglas Cuimar" },
          areaServed: { "@type": "Country", name: "Brasil" },
          description:
            "Soluções de automação e inteligência artificial para clínicas médicas, odontológicas e de saúde.",
        }}
      />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Setores", href: "/setores" }, { label: "IA para Clínicas", href: "/setores/clinicas" }]} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Quanto tempo leva para implantar a IA na minha clínica?", acceptedAnswer: { "@type": "Answer", text: "O diagnóstico leva de 5 a 7 dias. A implantação completa do agente de IA, incluindo integração com seu sistema de agenda e WhatsApp, leva de 10 a 15 dias." } },
          { "@type": "Question", name: "Preciso trocar meu sistema de agenda atual?", acceptedAnswer: { "@type": "Answer", text: "Não. O agente de IA se integra aos sistemas de agenda mais usados por clínicas brasileiras, incluindo sistemas legados. A integração é feita via API ou automação de tela (RPA)." } },
          { "@type": "Question", name: "Os pacientes aceitam bem o atendimento por IA?", acceptedAnswer: { "@type": "Answer", text: "Sim. Nossos agentes conversam com linguagem natural e personalizada. A taxa de satisfação é de 91%, maior que atendimento puramente humano em algumas clínicas." } },
          { "@type": "Question", name: "Quanto custa o serviço?", acceptedAnswer: { "@type": "Answer", text: "O projeto de implantação custa a partir de R$ 4.997, com mensalidade de MSP a partir de R$ 997 para gestão contínua. O retorno médio é de 6x o investimento em 12 meses." } },
        ]
      }} />

      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-3/5">
              <h1 className="text-sm font-black text-emerald uppercase tracking-[0.4em] mb-4">
                Clínicas
              </h1>
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.1]">
                Reduza faltas em até{" "}
                <span className="italic text-emerald">40%</span> com IA
              </h2>
              <p className="text-slate-400 text-lg mt-8 leading-relaxed">
                Automação inteligente que confirma consultas, recupera pacientes
                inativos e faz o pré-atendimento, liberando sua equipe para o
                cuidado com o paciente.
              </p>
              <Link
                href="/contato"
                className="inline-flex mt-8 bg-emerald text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-emerald/20"
              >
                Agendar Diagnóstico
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "Confirmação Automática",
                desc: "Mensagens via WhatsApp 24h antes da consulta. Paciente confirma ou reagenda sem intervenção humana. Redução de 40% nas faltas.",
              },
              {
                title: "Recuperação de Pacientes",
                desc: "IA identifica pacientes inativos há mais de 3 meses e inicia conversas personalizadas para reativar o relacionamento.",
              },
              {
                title: "Pré-Atendimento Inteligente",
                desc: "Agente de IA coleta sintomas, motivo da consulta e histórico antes mesmo do paciente chegar à clínica.",
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
              Perguntas Frequentes sobre IA para Clínicas
            </h3>
            <div className="space-y-3">
              {[
                {
                  q: "Quanto tempo leva para implantar a IA na minha clínica?",
                  a: "O diagnóstico leva de 5 a 7 dias. A implantação completa do agente de IA, incluindo integração com seu sistema de agenda e WhatsApp, leva de 10 a 15 dias.",
                },
                {
                  q: "Preciso trocar meu sistema de agenda atual?",
                  a: "Não. O agente de IA se integra aos sistemas de agenda mais usados por clínicas brasileiras, incluindo sistemas legados. A integração é feita via API ou automação de tela (RPA).",
                },
                {
                  q: "Os pacientes aceitam bem o atendimento por IA?",
                  a: "Sim. Nossos agentes conversam com linguagem natural e personalizada. A taxa de satisfação é de 91%, maior que atendimento puramente humano em algumas clínicas.",
                },
                {
                  q: "Quanto custa o serviço?",
                  a: "O projeto de implantação custa a partir de R$ 4.997, com mensalidade de MSP a partir de R$ 997 para gestão contínua. O retorno médio é de 6x o investimento em 12 meses.",
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
              href="/blog/como-automatizar-atendimento-clinica-com-ia"
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
              Quero automatizar minha clínica
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
