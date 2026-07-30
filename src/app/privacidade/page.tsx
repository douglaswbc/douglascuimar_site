import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de privacidade do site Douglas Cuimar. Saiba como coletamos, usamos e protegemos seus dados.",
  robots: { index: true, follow: false },
};

export default function PrivacidadePage() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Link
            href="/"
            className="text-sm font-bold text-navy hover:text-emerald transition-colors mb-8 inline-block"
          >
            ← Voltar ao Site
          </Link>
          <h1 className="text-4xl font-bold text-navy mb-8">
            Política de Privacidade
          </h1>

          <div className="bg-surface-alt p-8 md:p-12 rounded-3xl space-y-8">
            <section>
              <h2 className="text-xl font-bold text-navy mb-4">1. Introdução</h2>
              <p className="text-slate-500 leading-relaxed">
                A sua privacidade é importante para nós. É política do Douglas
                Cuimar respeitar a sua privacidade em relação a qualquer
                informação sua que possamos coletar no site Douglas Cuimar, e
                outros sites que possuímos e operamos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy mb-4">
                2. Coleta de Dados
              </h2>
              <p className="text-slate-500 leading-relaxed">
                Solicitamos informações pessoais apenas quando realmente
                precisamos delas para lhe fornecer um serviço (como o diagnóstico
                de automação e processos). Fazemo-lo por meios justos e legais,
                com o seu conhecimento e consentimento.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy mb-4">
                3. Uso das Informações
              </h2>
              <p className="text-slate-500 leading-relaxed">
                Os dados coletados através do nosso formulário de contato são
                utilizados exclusivamente para entrar em contato com o potencial
                cliente, realizar análises técnicas de processos internos e
                viabilidade de automação, e enviar propostas de serviços de IA e
                integração.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy mb-4">
                4. Cookies e Rastreamento
              </h2>
              <p className="text-slate-500 leading-relaxed">
                Utilizamos cookies e tecnologias de rastreamento (como Google
                Analytics e Facebook Pixel) para entender o comportamento dos
                visitantes e melhorar a experiência do usuário.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy mb-4">
                5. Segurança dos Dados
              </h2>
              <p className="text-slate-500 leading-relaxed">
                Apenas retemos as informações coletadas pelo tempo necessário
                para fornecer o serviço solicitado. Quando armazenamos dados,
                protegemos dentro de meios comercialmente aceitáveis para evitar
                perdas, roubos, acesso não autorizado, divulgação, cópia, uso ou
                modificação.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy mb-4">
                6. LGPD (Lei Geral de Proteção de Dados)
              </h2>
              <p className="text-slate-500 leading-relaxed">
                Em conformidade com a LGPD, garantimos aos usuários o direito de
                acessar, corrigir ou excluir seus dados pessoais de nossa base a
                qualquer momento, mediante solicitação formal via e-mail.
              </p>
            </section>

            <section className="pt-8 border-t border-slate-200 text-sm text-slate-400">
              Última atualização: Julho de 2026.
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
