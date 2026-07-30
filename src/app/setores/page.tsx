import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Setores",
  description:
    "Soluções de IA e automação para clínicas, óticas, advogados, contabilidade, imobiliárias e mais. Cada setor com casos de uso específicos.",
  alternates: { canonical: "./" },
  openGraph: {
    title: "IA por Setor | Douglas Cuimar",
    description:
      "Soluções de IA aplicadas ao seu setor: clínicas, óticas, advocacia, contabilidade e imobiliárias.",
  },
};

const setores = [
  {
    title: "Clínicas",
    href: "/setores/clinicas",
    desc: "Automação de confirmação de consultas, recuperação de pacientes e pré-atendimento inteligente.",
    items: [
      "Confirmação automática via WhatsApp",
      "Recuperação de pacientes inativos",
      "Pré-atendimento com IA",
      "Lembretes personalizados",
      "Integração com prontuário eletrônico",
    ],
  },
  {
    title: "Óticas",
    href: "/setores/oticas",
    desc: "Agendamento inteligente, lembretes de exames e campanhas de venda personalizadas.",
    items: [
      "Agendamento online inteligente",
      "Lembrete automático de retorno",
      "Campanhas de lentes e armações",
      "Follow-up pós-venda",
      "Gestão de garantia e manutenção",
    ],
  },
  {
    title: "Advogados",
    href: "/setores/advogados",
    desc: "Triagem automática de casos, organização documental e atendimento inicial 24/7.",
    items: [
      "Triagem automática de casos",
      "Organização de documentos e prazos",
      "Atendimento inicial 24/7 com IA",
      "Integração com sistemas jurídicos",
      "Alertas de prazos processuais",
    ],
  },
  {
    title: "Contabilidade",
    href: "/setores/contabilidade",
    desc: "Coleta automática de documentos fiscais, conciliação e emissão de guias com IA.",
    items: [
      "Coleta automática de documentos",
      "Conciliação bancária inteligente",
      "Emissão de guias automatizada",
      "Cobrança recorrente de honorários",
      "Dashboard do cliente em tempo real",
    ],
  },
  {
    title: "Imobiliárias",
    href: "/setores/imobiliarias",
    desc: "Qualificação de leads, agendamento de visitas e gestão automatizada de contratos.",
    items: [
      "Qualificação automática de leads",
      "Agendamento inteligente de visitas",
      "Gestão de contratos digital",
      "Follow-up automatizado",
      "Integração com portais imobiliários",
    ],
  },
];

export default function SetoresPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Setores de Atuação",
          description:
            "Soluções de IA e automação para diferentes setores empresariais.",
        }}
      />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Setores", href: "/setores" }]} />

      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <h1 className="text-sm font-black text-emerald uppercase tracking-[0.4em] mb-4">
            Casos de Uso
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-navy tracking-tighter">
            IA aplicada ao{" "}
            <span className="italic text-emerald">seu setor</span>
          </h2>
          <p className="text-slate-500 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
            Cada setor tem desafios únicos. Desenvolvemos soluções específicas
            que entendem as particularidades do seu negócio.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="space-y-16">
            {setores.map((setor, idx) => (
              <div
                key={setor.title}
                className={`flex flex-col ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <h3 className="text-3xl lg:text-4xl font-bold text-navy mb-6">
                    {setor.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed mb-8 text-lg">
                    {setor.desc}
                  </p>
                  <Link
                    href={setor.href}
                    className="inline-flex text-navy font-bold hover:text-emerald transition-colors items-center gap-2"
                  >
                    Ver soluções completas →
                  </Link>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="bg-surface-alt p-8 lg:p-10 rounded-[2rem] border border-slate-100">
                    <ul className="space-y-4">
                      {setor.items.map((item) => (
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

      <section className="py-20 lg:py-32 bg-navy text-white text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tighter">
            Seu setor não está na lista?
          </h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Atendemos dezenas de segmentos. Entre em contato para uma análise
            personalizada das necessidades do seu negócio.
          </p>
          <Link
            href="/contato"
            className="inline-flex bg-emerald text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-slate-800 transition-all shadow-2xl shadow-emerald/20"
          >
            Solicitar Análise Personalizada
          </Link>
        </div>
      </section>
    </>
  );
}
