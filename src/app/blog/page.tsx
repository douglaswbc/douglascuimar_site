import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Centro de conhecimento sobre IA, automação empresarial, integração de sistemas e produtividade. Artigos práticos para PMEs.",
  openGraph: {
    title: "Blog | Douglas Cuimar",
    description:
      "Centro de conhecimento sobre IA, automação e integração de sistemas para PMEs.",
  },
};

const posts = [
  {
    title: "Como automatizar o atendimento de uma clínica com IA",
    desc: "Descubra como reduzir faltas em até 40% e liberar sua equipe administrativa com automação inteligente de confirmação e pré-atendimento.",
    date: "Jul 2026",
    slug: "como-automatizar-clinica-com-ia",
  },
  {
    title: "Como integrar WhatsApp ao CRM da sua empresa",
    desc: "Guia prático para conectar o WhatsApp Business ao seu CRM usando n8n. Elimine a digitação manual e ganhe velocidade no atendimento.",
    date: "Jun 2026",
    slug: "integrar-whatsapp-ao-crm",
  },
  {
    title: "Como reduzir o tempo de atendimento em 60% com IA",
    desc: "Cases reais de empresas que implementaram agentes de IA no atendimento e transformaram a experiência do cliente.",
    date: "Jun 2026",
    slug: "reduzir-tempo-atendimento-com-ia",
  },
  {
    title: "Como criar um SDR virtual com IA",
    desc: "Aprenda a configurar um SDR inteligente que qualifica leads, agenda reuniões e faz follow-up automático 24 horas por dia.",
    date: "Mai 2026",
    slug: "sdr-virtual-com-ia",
  },
  {
    title: "Quanto custa implantar IA em uma empresa?",
    desc: "Guia completo de investimento: do diagnóstico inicial ao MSP de IA. Valores reais e estimativa de ROI por setor.",
    date: "Mai 2026",
    slug: "quanto-custa-implantar-ia",
  },
  {
    title: "Meta Business Agent vs Agente de IA Personalizado",
    desc: "Comparativo técnico: quando usar a solução nativa da Meta e quando investir em um agente de IA customizado para seu negócio.",
    date: "Abr 2026",
    slug: "meta-business-agent-vs-agente-personalizado",
  },
];

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Blog Douglas Cuimar",
          description:
            "Centro de conhecimento sobre IA, automação e integração de sistemas.",
          url: "https://douglascuimar.com.br/blog",
        }}
      />

      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <h1 className="text-sm font-black text-emerald uppercase tracking-[0.4em] mb-4">
            Blog
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
            Centro de{" "}
            <span className="italic text-emerald">Conhecimento</span>
          </h2>
          <p className="text-slate-400 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
            Artigos práticos sobre IA, automação, integração de sistemas e
            produtividade para PMEs.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="space-y-10">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="p-8 lg:p-10 rounded-[2rem] bg-surface-alt border border-slate-100 hover:border-emerald/30 transition-all"
              >
                <time className="text-[10px] font-black text-emerald uppercase tracking-widest">
                  {post.date}
                </time>
                <h3 className="text-2xl font-bold text-navy mt-3 mb-4">
                  {post.title}
                </h3>
                <p className="text-slate-500 leading-relaxed mb-6">{post.desc}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-navy font-bold hover:text-emerald transition-colors"
                >
                  Ler artigo →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
