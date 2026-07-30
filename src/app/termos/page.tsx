import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos de uso do site Douglas Cuimar. Condições para utilização do site e serviços.",
  robots: { index: true, follow: false },
};

export default function TermosPage() {
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
          <h1 className="text-4xl font-bold text-navy mb-8">Termos de Uso</h1>

          <div className="bg-surface-alt p-8 md:p-12 rounded-3xl space-y-8">
            <section>
              <h2 className="text-xl font-bold text-navy mb-4">
                1. Aceitação dos Termos
              </h2>
              <p className="text-slate-500 leading-relaxed">
                Ao acessar este site, você concorda em cumprir estes termos de
                serviço, todas as leis e regulamentos aplicáveis.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy mb-4">
                2. Licença de Uso
              </h2>
              <p className="text-slate-500 leading-relaxed">
                É concedida permissão para baixar temporariamente uma cópia dos
                materiais no site Douglas Cuimar, apenas para visualização
                transitória pessoal e não comercial.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy mb-4">
                3. Isenção de Responsabilidade
              </h2>
              <p className="text-slate-500 leading-relaxed">
                Os materiais no site do Douglas Cuimar são fornecidos como estão.
                O serviço de automação e integração de sistemas depende de APIs
                de terceiros e variáveis técnicas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy mb-4">4. Limitações</h2>
              <p className="text-slate-500 leading-relaxed">
                Em nenhum caso o Douglas Cuimar ou seus fornecedores serão
                responsáveis por quaisquer danos decorrentes do uso ou da
                incapacidade de usar os materiais do site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy mb-4">
                5. Precisão dos Materiais
              </h2>
              <p className="text-slate-500 leading-relaxed">
                Os materiais exibidos no site podem incluir erros técnicos,
                tipográficos ou fotográficos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy mb-4">6. Foro</h2>
              <p className="text-slate-500 leading-relaxed">
                Estes termos e condições são regidos e interpretados de acordo
                com as leis brasileiras e você se submete à jurisdição exclusiva
                dos tribunais na Comarca de Belém - PA.
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
