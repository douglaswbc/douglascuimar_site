import { JsonLd } from "@/components/JsonLd";
import { ContactForm } from "@/components/ContactForm";
import Link from "next/link";

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Douglas Cuimar | Automação e IA para Empresas",
  description:
    "Implantamos Inteligência Artificial que atende clientes, automatiza processos e integra seus sistemas para aumentar a produtividade.",
  about: {
    "@type": "ProfessionalService",
    name: "Douglas Cuimar",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={webPageSchema} />

      {/* HERO */}
      <section className="relative pt-28 pb-16 lg:pt-56 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%200h40v40H0V0zm1%201h38v38H1V1z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.05%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-3/5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald/10 border border-emerald/20 text-emerald font-bold text-[10px] mb-6 lg:mb-8 uppercase tracking-[0.2em]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald" />
                </span>
                Inteligência Artificial &amp; Automação
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-navy mb-6 lg:mb-8 leading-[1.1] tracking-tighter">
                Sua empresa perde tempo com{" "}
                <span className="text-emerald">tarefas repetitivas</span>?
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-slate-500 mb-10 lg:mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Implantamos Inteligência Artificial que atende clientes,
                automatiza processos e integra seus sistemas para aumentar a
                produtividade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 justify-center lg:justify-start">
                <Link
                  href="/contato"
                  className="bg-navy text-white px-8 py-4 rounded-2xl text-base font-bold hover:bg-slate-800 transition-all shadow-2xl shadow-navy/20 text-center"
                >
                  Agendar Diagnóstico
                </Link>
                <Link
                  href="/contato"
                  className="bg-white border-2 border-navy text-navy px-8 py-4 rounded-2xl text-base font-bold hover:bg-navy hover:text-white transition-all text-center"
                >
                  Solicitar Demonstração
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-2/5 relative mt-12 lg:mt-0">
              <div className="aspect-video rounded-3xl shadow-2xl overflow-hidden border-8 border-white bg-slate-900 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-navy/40 flex items-center justify-center z-10">
                  <svg
                    className="w-20 h-20 text-emerald"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <title>Automação</title>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=800"
                  alt="Ilustração de automação de processos com IA"
                  className="w-full h-full object-cover opacity-60"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO AJUDAMOS */}
      <section className="py-20 lg:py-32 bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-black text-emerald uppercase tracking-[0.4em] mb-4">
              Como Ajudamos
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tighter">
              Soluções de IA para{" "}
              <span className="italic text-emerald">cada área</span> da sua
              empresa
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "IA para Atendimento",
                desc: "Agentes inteligentes que respondem clientes 24/7 no WhatsApp, Instagram e site com linguagem natural.",
                icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
              },
              {
                title: "IA para Vendas",
                desc: "Qualificação automática de leads, follow-up inteligente e SDR virtual que nunca dorme.",
                icon: "M12 20V10M18 20V4M6 20v-6",
              },
              {
                title: "Automação Empresarial",
                desc: "Processos manuais transformados em workflows automáticos com n8n e Make. Elimine planilhas e retrabalho.",
                icon: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
              },
              {
                title: "Integração entre Sistemas",
                desc: "Conectamos seu CRM, ERP, WhatsApp e ferramentas para que os dados fluam sem intervenção humana.",
                icon: "M4 4v16M9 4v16M14 4v16M19 4v16",
              },
              {
                title: "Dashboards Inteligentes",
                desc: "Visualize em tempo real o desempenho dos seus processos automatizados e tome decisões baseadas em dados.",
                icon: "M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z",
              },
              {
                title: "MSP de IA",
                desc: "Gestão contínua das suas automações e agentes de IA. Monitoramos, ajustamos e evoluímos para você.",
                icon: "M12 6V4m0 2a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m-6 8a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2m0-6V4m6 6v10m6-2a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2m0-6V4",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-emerald/50 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-12 h-12 text-emerald mb-6"
                >
                  <path d={item.icon} />
                </svg>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOSSOS SERVIÇOS */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-black text-emerald uppercase tracking-[0.4em] mb-4">
              Nossos Serviços
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-navy tracking-tighter">
              Do diagnóstico à{" "}
              <span className="italic underline decoration-emerald decoration-4 underline-offset-8">
                operação autônoma
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Diagnóstico de IA",
                desc: "Análise completa dos seus processos. Identificamos gargalos, oportunidades de automação e entregamos um roadmap personalizado com ROI estimado.",
                price: "A partir de R$ 1.997",
              },
              {
                title: "Automação Express",
                desc: "Implementação rápida de automações pontuais. Ideal para resolver um problema específico em até 7 dias. Integração WhatsApp + CRM, notificações automáticas e mais.",
                price: "A partir de R$ 2.997",
              },
              {
                title: "Agentes Inteligentes",
                desc: "Criação de agentes de IA personalizados para atendimento, vendas ou suporte. Comportamento natural, integração com seus sistemas e memória de contexto.",
                price: "A partir de R$ 4.997",
              },
              {
                title: "MSP de IA",
                desc: "Gestão contínua como serviço. Monitoramos, ajustamos e evoluímos suas automações mensalmente. Suporte prioritário e relatórios de desempenho.",
                price: "A partir de R$ 997/mês",
              },
            ].map((svc) => (
              <div
                key={svc.title}
                className="p-8 lg:p-10 rounded-[2rem] bg-surface-alt border border-slate-100 hover:border-emerald/30 hover:shadow-xl transition-all"
              >
                <h4 className="text-2xl font-bold text-navy mb-4">
                  {svc.title}
                </h4>
                <p className="text-slate-500 leading-relaxed mb-6">{svc.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-emerald font-bold text-lg">
                    {svc.price}
                  </span>
                  <Link
                    href="/contato"
                    className="text-navy text-sm font-bold hover:text-emerald transition-colors"
                  >
                    Saiba mais →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASOS DE USO */}
      <section className="py-20 lg:py-32 bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-black text-emerald uppercase tracking-[0.4em] mb-4">
              Casos de Uso
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-navy tracking-tighter">
              IA aplicada ao{" "}
              <span className="italic text-emerald">seu setor</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                setor: "Clínicas",
                items: [
                  "Confirmação automática de consultas",
                  "Recuperação de pacientes inativos",
                  "Pré-atendimento com IA",
                ],
                href: "/setores/clinicas",
              },
              {
                setor: "Óticas",
                items: [
                  "Agendamento inteligente",
                  "Lembrete de retorno e exames",
                  "Campanhas personalizadas",
                ],
                href: "/setores/oticas",
              },
              {
                setor: "Advogados",
                items: [
                  "Triagem automática de casos",
                  "Organização de documentos",
                  "Atendimento inicial 24/7",
                ],
                href: "/setores/advogados",
              },
              {
                setor: "Contabilidade",
                items: [
                  "Coleta automática de documentos",
                  "Emissão de guias e relatórios",
                  "Cobranças automatizadas",
                ],
                href: "/setores/contabilidade",
              },
              {
                setor: "Imobiliárias",
                items: [
                  "Qualificação de leads",
                  "Agendamento de visitas",
                  "Gestão de contratos",
                ],
                href: "/setores/imobiliarias",
              },
            ].map((caso) => (
              <Link
                key={caso.setor}
                href={caso.href}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-emerald/50 hover:shadow-xl transition-all group"
              >
                <h4 className="text-xl font-bold text-navy mb-4 group-hover:text-emerald transition-colors">
                  {caso.setor}
                </h4>
                <ul className="space-y-2">
                  {caso.items.map((item) => (
                    <li
                      key={item}
                      className="text-slate-500 flex items-start gap-2"
                    >
                      <span className="text-emerald mt-1">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COMO TRABALHAMOS */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-black text-emerald uppercase tracking-[0.4em] mb-4">
              Como Trabalhamos
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-navy tracking-tighter">
              Da análise à{" "}
              <span className="italic text-emerald">evolução contínua</span>
            </h3>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block" />

            {[
              {
                step: "01",
                title: "Diagnóstico",
                desc: "Analisamos sua rotina interna para identificar cada processo repetitivo que pode ser delegado para uma automação ou IA.",
              },
              {
                step: "02",
                title: "Projeto",
                desc: "Desenhamos a arquitetura da solução, definimos as tecnologias e entregamos um cronograma detalhado com expectativa de ROI.",
              },
              {
                step: "03",
                title: "Implantação",
                desc: "Desenvolvemos as automações e agentes de IA, conectamos suas ferramentas e realizamos testes em ambiente controlado.",
              },
              {
                step: "04",
                title: "Treinamento",
                desc: "Capacitamos sua equipe para operar as novas ferramentas e entender os fluxos automatizados com confiança.",
              },
              {
                step: "05",
                title: "MSP de IA",
                desc: "Assumimos a gestão contínua: monitoramento 24/7, ajustes de performance, atualizações e evolução das automações.",
              },
            ].map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={item.step}
                  className="relative flex flex-col md:flex-row items-center gap-6 md:gap-0 mb-16 last:mb-0"
                >
                  <div
                    className={`flex-1 text-center ${
                      isLeft ? "md:text-right md:pr-16" : "md:text-left md:pl-16"
                    } ${isLeft ? "order-2 md:order-1" : "order-2"}`}
                  >
                    <h4 className="text-xl lg:text-2xl font-bold text-navy mb-3">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                  <div
                    className={`relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-xl ${
                      idx === 4 ? "bg-emerald" : "bg-navy"
                    } order-1`}
                  >
                    <span className="text-sm font-bold">{item.step}</span>
                  </div>
                  <div className={`flex-1 hidden md:block ${isLeft ? "order-3" : "order-1"}`} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRANSFORMAMOS */}
      <section className="py-20 lg:py-32 bg-navy text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-sm font-black text-emerald uppercase tracking-[0.4em] mb-4">
            Nossa Missão
          </h2>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.15] mb-10">
            Transformamos empresas através da{" "}
            <span className="italic text-emerald">Inteligência Artificial</span>
          </h3>
          <p className="text-slate-300 text-lg lg:text-xl leading-relaxed mb-8">
            Implantamos agentes inteligentes, automatizamos processos e integramos
            sistemas para que sua equipe produza mais, reduza custos e concentre
            esforços no que realmente gera valor.
          </p>
          <p className="text-slate-400 text-base lg:text-lg leading-relaxed">
            Do diagnóstico à operação contínua, atuamos como seu{" "}
            <span className="text-white font-semibold">parceiro estratégico em IA</span>.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 lg:py-32 bg-navy relative overflow-hidden">
        <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] bg-emerald/10 blur-[150px] rounded-full" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">
              O próximo nível do seu{" "}
              <span className="text-emerald italic">lucro</span> começa aqui.
            </h2>
            <p className="text-slate-400 text-lg lg:text-xl mb-10 leading-relaxed">
              Solicite seu diagnóstico gratuito e descubra quais processos
              podemos automatizar para liberar sua equipe para o que realmente
              importa.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-8 lg:p-12 rounded-[3rem] shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/5511994142485"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <title>WhatsApp</title>
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </a>
    </>
  );
}
