import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "FAQ — Perguntas Frequentes",
  description:
    "Quanto custa um agente de IA? Funciona no WhatsApp? Preciso trocar meu sistema? Tire suas dúvidas sobre automação e IA.",
  alternates: { canonical: "./" },
  openGraph: {
    title: "FAQ | Douglas Cuimar",
    description:
      "Respostas para as dúvidas mais comuns sobre automação e IA empresarial.",
  },
};

const faqs = [
  {
    q: "Quanto custa um agente de IA?",
    a: "O investimento depende da complexidade do agente e das integrações necessárias. Nossos projetos começam a partir de R$ 4.997 para um agente inteligente completo. Para o MSP de IA (gestão contínua), o valor é a partir de R$ 997/mês. Cada caso é único — por isso oferecemos um diagnóstico gratuito para avaliar seu cenário específico.",
  },
  {
    q: "Quanto tempo leva para implantar?",
    a: "Depende do escopo. Uma Automação Express pode ser entregue em até 7 dias. Um Agente Inteligente completo leva de 2 a 4 semanas, incluindo configuração, integração com sistemas e treinamento da equipe. O diagnóstico leva de 3 a 5 dias úteis.",
  },
  {
    q: "A IA substitui funcionários?",
    a: "Não. Nosso objetivo é automatizar tarefas repetitivas e manuais para que sua equipe foque em atividades estratégicas que exigem julgamento humano. A IA é uma ferramenta de aumento de produtividade, não de substituição. As empresas que usam IA liberam seus times para trabalhar no que realmente importa.",
  },
  {
    q: "Funciona no WhatsApp?",
    a: "Sim. Nossos agentes de IA são integrados nativamente ao WhatsApp Business API, funcionando 24/7 com linguagem natural. O cliente conversa normalmente, sem saber que está falando com uma IA. Também integramos com Instagram e chat do site.",
  },
  {
    q: "Funciona no Instagram?",
    a: "Sim. Podemos conectar agentes de IA ao Direct do Instagram para responder mensagens, qualificar leads e agendar conversas automaticamente.",
  },
  {
    q: "Preciso trocar meu sistema atual?",
    a: "Não. Nossas soluções são projetadas para integrar com os sistemas que você já usa. Conectamos via API seu CRM, ERP, planilhas e ferramentas atuais. A automação funciona como uma camada inteligente entre seus sistemas existentes.",
  },
  {
    q: "Meus dados ficam seguros?",
    a: "Sim. Seguimos as diretrizes da LGPD e utilizamos infraestrutura com criptografia. Os dados dos seus clientes trafegam de forma segura entre os sistemas. Para setores regulados (como saúde e jurídico), implementamos camadas adicionais de compliance.",
  },
  {
    q: "Preciso de conhecimento técnico para operar?",
    a: "Não. Após a implantação, sua equipe recebe treinamento completo para operar as ferramentas. No plano MSP de IA, nós assumimos toda a parte técnica — sua equipe só precisa saber usar o resultado das automações.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "FAQ", href: "/faq" }]} />

      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <h1 className="text-sm font-black text-emerald uppercase tracking-[0.4em] mb-4">
            FAQ
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
            Perguntas{" "}
            <span className="italic text-emerald">Frequentes</span>
          </h2>
          <p className="text-slate-400 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
            Tire suas dúvidas sobre automação, inteligência artificial e como
            aplicamos essas tecnologias no seu negócio.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-surface-alt rounded-2xl border border-slate-100 overflow-hidden"
              >
                <summary className="p-6 lg:p-8 cursor-pointer font-bold text-navy text-lg flex justify-between items-center hover:text-emerald transition-colors list-none">
                  {faq.q}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-open:rotate-45 transition-transform shrink-0 ml-4"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </summary>
                <div className="px-6 lg:px-8 pb-6 lg:pb-8 text-slate-500 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-slate-500 mb-6">
              Não encontrou o que procurava?
            </p>
            <Link
              href="/contato"
              className="inline-flex bg-navy text-white px-10 py-5 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-navy/20"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
