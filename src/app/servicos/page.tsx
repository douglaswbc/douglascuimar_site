import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Do diagnóstico à operação autônoma: Diagnóstico de IA, Automação Express, Agentes Inteligentes e MSP de IA para sua empresa.",
  alternates: { canonical: "./" },
  openGraph: {
    title: "Serviços de Automação e IA | Douglas Cuimar",
    description:
      "Do diagnóstico à operação autônoma: soluções de IA personalizadas para sua empresa.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    { "@type": "Service", name: "Diagnóstico de IA", position: 1 },
    { "@type": "Service", name: "Automação Express", position: 2 },
    { "@type": "Service", name: "Agentes Inteligentes", position: 3 },
    { "@type": "Service", name: "MSP de IA", position: 4 },
  ],
};

const servicos = [
  {
    title: "Diagnóstico de IA",
    subtitle: "Descubra onde a IA gera mais resultado",
    desc: "Análise completa dos seus processos operacionais. Mapeamos cada etapa do seu negócio, identificamos gargalos manuais e oportunidades de automação com IA. Você recebe um roadmap personalizado com estimativa de ROI e cronograma de implementação.",
    price: "A partir de R$ 1.997",
    includes: [
      "Mapeamento completo de processos",
      "Relatório de oportunidades de automação",
      "Estimativa de ROI por processo",
      "Roadmap de implementação priorizado",
      "Apresentação executiva para decisores",
    ],
  },
  {
    title: "Automação Express",
    subtitle: "Resolva um problema específico em dias",
    desc: "Implementação rápida de automações pontuais com n8n e Make. Ideal para empresas que já sabem qual processo querem automatizar. Entregamos a solução funcionando em até 7 dias úteis.",
    price: "A partir de R$ 2.997",
    includes: [
      "1 fluxo de automação completo",
      "Integração com 2 ferramentas (CRM, ERP, WhatsApp, etc.)",
      "Testes e validação em produção",
      "Documentação do fluxo",
      "Suporte por 15 dias",
    ],
  },
  {
    title: "Agentes Inteligentes",
    subtitle: "IA que atende, vende e suporta 24/7",
    desc: "Criação de agentes de IA personalizados com comportamento natural e integração aos seus sistemas. Seu agente entende o contexto do negócio, acessa bases de conhecimento e realiza ações de forma autônoma.",
    price: "A partir de R$ 4.997",
    includes: [
      "Agente de IA personalizado (WhatsApp, Instagram ou Web)",
      "Base de conhecimento customizada",
      "Integração com CRM e sistemas",
      "Memória de contexto e histórico",
      "Painel de monitoramento de conversas",
      "Suporte por 30 dias",
    ],
  },
  {
    title: "MSP de IA",
    subtitle: "Gestão contínua das suas automações",
    desc: "Assumimos a operação e evolução das suas automações e agentes de IA. Monitoramento 24/7, ajustes de performance, atualizações de segurança e melhorias mensais. Você foca no seu negócio, nós cuidamos da tecnologia.",
    price: "A partir de R$ 997/mês",
    includes: [
      "Monitoramento 24/7 de todos os fluxos",
      "Ajustes e otimizações mensais",
      "Suporte prioritário (SLA 4h)",
      "Relatórios mensais de desempenho",
      "Evolução contínua dos agentes",
      "Backup e recuperação de desastres",
    ],
  },
];

export default function ServicosPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Serviços", href: "/servicos" }]} />

      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <h1 className="text-sm font-black text-emerald uppercase tracking-[0.4em] mb-4">
            Nossos Serviços
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
            Do diagnóstico à{" "}
            <span className="italic text-emerald">operação autônoma</span>
          </h2>
          <p className="text-slate-400 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
            Soluções modulares que evoluem com sua empresa. Comece pelo
            diagnóstico e escale até a gestão completa de IA como serviço.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="space-y-20">
            {servicos.map((svc, idx) => (
              <div
                key={svc.title}
                className={`flex flex-col ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <h3 className="text-sm font-black text-emerald uppercase tracking-[0.4em] mb-4">
                    {svc.subtitle}
                  </h3>
                  <h4 className="text-3xl lg:text-4xl font-bold text-navy mb-6">
                    {svc.title}
                  </h4>
                  <p className="text-slate-500 leading-relaxed mb-8 text-lg">
                    {svc.desc}
                  </p>
                  <Link
                    href="/contato"
                    className="inline-flex bg-navy text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-navy/20"
                  >
                    Contratar {svc.title}
                  </Link>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="bg-surface-alt p-8 lg:p-10 rounded-[2rem] border border-slate-100">
                    <div className="text-emerald font-bold text-2xl mb-6">
                      {svc.price}
                    </div>
                    <ul className="space-y-4">
                      {svc.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-slate-600"
                        >
                          <span className="text-emerald font-bold mt-0.5">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-surface-alt">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-navy text-center tracking-tighter mb-16">
            Resultados dos{" "}
            <span className="italic text-emerald">nossos clientes</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "40%", label: "Redução de faltas em clínicas" },
              { metric: "60%", label: "Menos tempo de atendimento" },
              { metric: "70%", label: "Redução de trabalho manual" },
              { metric: "4x", label: "ROI médio em 12 meses" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 text-center"
              >
                <p className="text-4xl md:text-5xl font-black text-emerald mb-3">
                  {item.metric}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-navy text-white text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tighter">
            Não sabe por onde começar?
          </h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Agende um diagnóstico gratuito e descubra quais processos da sua
            empresa têm maior potencial de automação.
          </p>
          <Link
            href="/contato"
            className="inline-flex bg-emerald text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-slate-800 transition-all shadow-2xl shadow-emerald/20"
          >
            Agendar Diagnóstico Gratuito
          </Link>
        </div>
      </section>
    </>
  );
}
