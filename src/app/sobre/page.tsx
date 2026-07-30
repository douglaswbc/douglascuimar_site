import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Douglas Cuimar — Estrategista em automação de processos e integração de sistemas com IA. n8n Expert e especialista em IA Generativa.",
  alternates: { canonical: "./" },
  openGraph: {
    title: "Sobre Douglas Cuimar",
    description:
      "Estrategista em automação e IA para PMEs. n8n Expert e especialista em IA Generativa.",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Douglas Cuimar",
  jobTitle: "Especialista em Automação e IA",
  description:
    "Estrategista em automação de processos e integração de sistemas com IA.",
  url: "https://douglascuimar.com.br",
  sameAs: [
    "https://www.instagram.com/douglas_cuimar",
    "https://www.youtube.com/@douglas_cuimar",
  ],
  image: "https://res.cloudinary.com/dvge9dx9p/image/upload/v1778507921/foto-perfil-dc_vbgdux.png",
  knowsAbout: [
    "Automação de Processos",
    "Inteligência Artificial",
    "Integração de Sistemas",
    "n8n",
    "Agentes de IA",
  ],
};

export default function SobrePage() {
  return (
    <>
      <JsonLd data={personSchema} />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Sobre", href: "/sobre" }]} />

      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-surface-alt">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-2/5">
              <div className="relative">
                <div className="absolute -inset-4 bg-emerald/10 rounded-[3rem] rotate-3" />
                <img
                  src="https://res.cloudinary.com/dvge9dx9p/image/upload/v1778507921/foto-perfil-dc_vbgdux.png"
                  alt="Douglas Cuimar - Especialista em Automação e IA"
                  className="relative rounded-[2.5rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover"
                />
              </div>
            </div>

            <div className="w-full lg:w-3/5">
              <h1 className="text-sm font-black text-emerald uppercase tracking-[0.4em] mb-4">
                Especialista
              </h1>
              <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-8 tracking-tighter">
                Douglas Cuimar
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-8">
                Estrategista em automação de processos e integração de sistemas
                com IA. Minha missão é transformar empresas lentas e burocráticas
                em operações altamente lucrativas e escaláveis através da
                tecnologia de ponta.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="text-2xl font-bold text-navy tracking-tight">
                    n8n Expert
                  </div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">
                    Workflows Complexos
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="text-2xl font-bold text-navy tracking-tight">
                    IA Generativa
                  </div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">
                    Agentes Autônomos
                  </div>
                </div>
              </div>

              <Link
                href="/contato"
                className="inline-flex bg-navy text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-navy/20"
              >
                Agendar Diagnóstico
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
