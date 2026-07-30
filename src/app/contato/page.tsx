import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Solicite um diagnóstico gratuito de automação e IA para sua empresa. Descubra quais processos podemos automatizar.",
  alternates: { canonical: "./" },
  openGraph: {
    title: "Solicite um Diagnóstico Gratuito | Douglas Cuimar",
    description:
      "Descubra quais processos da sua empresa podem ser automatizados com IA.",
  },
};

export default function ContatoPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contato Douglas Cuimar",
          description: "Solicite um diagnóstico gratuito de automação e IA.",
          url: "https://douglascuimar.com.br/contato",
        }}
      />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contato", href: "/contato" }]} />

      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] bg-emerald/10 blur-[150px] rounded-full" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-sm font-black text-emerald uppercase tracking-[0.4em] mb-4">
                Contato
              </h1>
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-tight">
                O próximo nível do seu{" "}
                <span className="italic text-emerald">lucro</span> começa aqui.
              </h2>
              <p className="text-slate-400 text-lg lg:text-xl mt-8 leading-relaxed">
                Preencha o formulário e receba um diagnóstico gratuito. Vamos
                identificar os processos da sua empresa com maior potencial de
                automação.
              </p>

              <div className="mt-12 space-y-6 text-left">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald/20 rounded-xl flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-emerald"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold">WhatsApp</p>
                    <a
                      href="https://wa.me/5511994142485"
                      className="text-slate-400 hover:text-emerald transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      (11) 9 9414-2485
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald/20 rounded-xl flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-emerald"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold">E-mail</p>
                    <a
                      href="mailto:contato@douglascuimar.com.br"
                      className="text-slate-400 hover:text-emerald transition-colors"
                    >
                      contato@douglascuimar.com.br
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="bg-white p-8 lg:p-12 rounded-[3rem] shadow-2xl">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface-alt">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h3 className="text-sm font-black text-emerald uppercase tracking-[0.4em] mb-6">
            Explore também
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/servicos"
              className="px-6 py-3 bg-white rounded-2xl text-navy font-bold border border-slate-100 hover:border-emerald/30 hover:text-emerald transition-all"
            >
              Serviços
            </Link>
            <Link
              href="/setores"
              className="px-6 py-3 bg-white rounded-2xl text-navy font-bold border border-slate-100 hover:border-emerald/30 hover:text-emerald transition-all"
            >
              Setores
            </Link>
            <Link
              href="/blog"
              className="px-6 py-3 bg-white rounded-2xl text-navy font-bold border border-slate-100 hover:border-emerald/30 hover:text-emerald transition-all"
            >
              Blog
            </Link>
            <Link
              href="/faq"
              className="px-6 py-3 bg-white rounded-2xl text-navy font-bold border border-slate-100 hover:border-emerald/30 hover:text-emerald transition-all"
            >
              FAQ
            </Link>
            <Link
              href="/recursos"
              className="px-6 py-3 bg-white rounded-2xl text-navy font-bold border border-slate-100 hover:border-emerald/30 hover:text-emerald transition-all"
            >
              Recursos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
