import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "IA para Advogados",
  description:
    "Triagem automática de casos, organização de documentos e atendimento inicial 24/7 com IA. Ganhe tempo para o que realmente importa.",
  alternates: { canonical: "./" },
  openGraph: {
    title: "IA para Advogados | Douglas Cuimar",
    description:
      "Triagem automática de casos, organização documental e atendimento 24/7 com IA.",
  },
};

export default function AdvogadosPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Automação e IA para Advogados",
          provider: { "@type": "ProfessionalService", name: "Douglas Cuimar" },
          areaServed: { "@type": "Country", name: "Brasil" },
        }}
      />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Setores", href: "/setores" }, { label: "IA para Advogados", href: "/setores/advogados" }]} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Quanto tempo para implantar no meu escritório?", acceptedAnswer: { "@type": "Answer", text: "O diagnóstico leva de 5 a 7 dias. A implantação completa do agente de IA, incluindo integração com sistemas jurídicos, leva de 10 a 15 dias." } },
          { "@type": "Question", name: "A IA entende termos jurídicos?", acceptedAnswer: { "@type": "Answer", text: "Sim. O agente é treinado com a terminologia específica do seu escritório e áreas de atuação." } },
          { "@type": "Question", name: "Os dados dos clientes ficam seguros?", acceptedAnswer: { "@type": "Answer", text: "Sim. Todos os dados são criptografados e seguem a LGPD. O agente não armazena informações sigilosas de casos." } },
          { "@type": "Question", name: "Quanto custa?", acceptedAnswer: { "@type": "Answer", text: "A partir de R$ 4.997 para implantação, com mensalidade de MSP a partir de R$ 997 para gestão contínua." } },
        ]
      }} />

      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h1 className="text-sm font-black text-emerald uppercase tracking-[0.4em] mb-4">
            Advogados
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.1]">
            Triagem automática e atendimento{" "}
            <span className="italic text-emerald">24/7</span>
          </h2>
          <p className="text-slate-400 text-lg mt-8 max-w-2xl leading-relaxed">
            IA que faz a triagem de casos, organiza documentos e atende clientes
            a qualquer hora, permitindo que você foque na estratégia jurídica.
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
                title: "Triagem Automática de Casos",
                desc: "IA entrevista o potencial cliente, coleta informações do caso e classifica por área do direito, urgência e viabilidade.",
              },
              {
                title: "Organização de Documentos",
                desc: "Sistema que organiza automaticamente petições, contratos e documentos. Alertas de prazos processuais integrados.",
              },
              {
                title: "Atendimento Inicial 24/7",
                desc: "Agente de IA que atende clientes a qualquer hora via WhatsApp, tira dúvidas iniciais e agenda reuniões com o advogado.",
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
              Perguntas Frequentes sobre IA para Advogados
            </h3>
            <div className="space-y-3">
              {[
                {
                  q: "Quanto tempo para implantar no meu escritório?",
                  a: "O diagnóstico leva de 5 a 7 dias. A implantação completa do agente de IA, incluindo integração com sistemas jurídicos, leva de 10 a 15 dias.",
                },
                {
                  q: "A IA entende termos jurídicos?",
                  a: "Sim. O agente é treinado com a terminologia específica do seu escritório e áreas de atuação.",
                },
                {
                  q: "Os dados dos clientes ficam seguros?",
                  a: "Sim. Todos os dados são criptografados e seguem a LGPD. O agente não armazena informações sigilosas de casos.",
                },
                {
                  q: "Quanto custa?",
                  a: "A partir de R$ 4.997 para implantação, com mensalidade de MSP a partir de R$ 997 para gestão contínua.",
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
              Quero automatizar meu escritório
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
