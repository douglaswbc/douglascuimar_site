import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "IA para Óticas",
  description:
    "Agendamento inteligente, lembretes de retorno e campanhas personalizadas para óticas. Aumente o ticket médio e fidelize clientes com IA.",
  alternates: { canonical: "./" },
  openGraph: {
    title: "IA para Óticas | Douglas Cuimar",
    description:
      "Agendamento inteligente, lembretes de retorno e campanhas personalizadas com IA.",
  },
};

export default function OticasPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Automação e IA para Óticas",
          provider: { "@type": "ProfessionalService", name: "Douglas Cuimar" },
          areaServed: { "@type": "Country", name: "Brasil" },
        }}
      />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Setores", href: "/setores" }, { label: "IA para Óticas", href: "/setores/oticas" }]} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Quanto tempo leva para implantar IA na minha ótica?", acceptedAnswer: { "@type": "Answer", text: "O diagnóstico leva de 5 a 7 dias. A implantação completa do agente de IA, incluindo integração com sistema de gestão e WhatsApp, leva de 10 a 15 dias." } },
          { "@type": "Question", name: "Preciso trocar meu sistema de gestão?", acceptedAnswer: { "@type": "Answer", text: "Não. Integramos com ERPs de varejo e sistemas de agendamento que você já usa, incluindo sistemas legados." } },
          { "@type": "Question", name: "As campanhas personalizadas realmente funcionam?", acceptedAnswer: { "@type": "Answer", text: "Sim. Clientes que recebem campanhas baseadas no histórico de compras têm 3x mais chance de retornar à sua ótica." } },
          { "@type": "Question", name: "Quanto custa?", acceptedAnswer: { "@type": "Answer", text: "A partir de R$ 2.997 (Automação Express) ou R$ 4.997 (Agente completo), com mensalidade de MSP a partir de R$ 997 para gestão contínua. O retorno médio é de 6x o investimento em 12 meses." } },
        ]
      }} />

      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h1 className="text-sm font-black text-emerald uppercase tracking-[0.4em] mb-4">
            Óticas
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.1]">
            Aumente o ticket médio com{" "}
            <span className="italic text-emerald">IA para vendas</span>
          </h2>
          <p className="text-slate-400 text-lg mt-8 max-w-2xl leading-relaxed">
            Agendamento inteligente, lembretes automáticos de exames e
            campanhas personalizadas que aumentam sua receita por cliente.
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
                title: "Agendamento Inteligente",
                desc: "Sistema automático que agenda consultas e exames pelo WhatsApp. Cliente escolhe o melhor horário sem esperar atendente.",
              },
              {
                title: "Lembrete de Retorno",
                desc: "IA monitora a data dos últimos exames e envia lembretes personalizados quando está na hora de voltar à ótica.",
              },
              {
                title: "Campanhas Personalizadas",
                desc: "Agente de IA sugere lentes e armações baseado no histórico do cliente. Follow-up automático pós-venda.",
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
              Perguntas Frequentes sobre IA para Óticas
            </h3>
            <div className="space-y-3">
              {[
                {
                  q: "Quanto tempo leva para implantar IA na minha ótica?",
                  a: "O diagnóstico leva de 5 a 7 dias. A implantação completa do agente de IA, incluindo integração com sistema de gestão e WhatsApp, leva de 10 a 15 dias.",
                },
                {
                  q: "Preciso trocar meu sistema de gestão?",
                  a: "Não. Integramos com ERPs de varejo e sistemas de agendamento que você já usa, incluindo sistemas legados.",
                },
                {
                  q: "As campanhas personalizadas realmente funcionam?",
                  a: "Sim. Clientes que recebem campanhas baseadas no histórico de compras têm 3x mais chance de retornar à sua ótica.",
                },
                {
                  q: "Quanto custa?",
                  a: "A partir de R$ 2.997 (Automação Express) ou R$ 4.997 (Agente completo), com mensalidade de MSP a partir de R$ 997 para gestão contínua. O retorno médio é de 6x o investimento em 12 meses.",
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
              href="/blog/quanto-custa-implantar-ia"
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
              Quero automatizar minha ótica
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
