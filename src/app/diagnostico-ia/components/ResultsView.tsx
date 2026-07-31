"use client";

import { RadarChart } from "./RadarChart";
import type { ScanResult } from "@/lib/scan-engine";

interface ResultsViewProps {
  result: ScanResult;
  onDownloadPDF: () => void;
  downloading?: boolean;
  pdfError?: boolean;
  showPDFButton?: boolean;
}

const maturityColors: Record<string, string> = {
  iniciante: "bg-amber-100 text-amber-700",
  em_evolucao: "bg-blue-100 text-blue-700",
  avancado: "bg-indigo-100 text-indigo-700",
  otimizado: "bg-emerald-100 text-emerald-700",
  lider: "bg-navy text-white",
};

const priorityColors: Record<string, string> = {
  Alta: "bg-red-100 text-red-600",
  Média: "bg-amber-100 text-amber-600",
  Baixa: "bg-slate-100 text-slate-500",
};

function StarRating({ value }: { value: number }) {
  return (
    <span className="inline-flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${star <= value ? "text-amber-400" : "text-slate-200"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

export function ResultsView({ result, onDownloadPDF, downloading = false, pdfError = false, showPDFButton = false }: ResultsViewProps) {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald/10 border border-emerald/20 text-emerald font-bold text-[10px] mb-4 uppercase tracking-[0.2em]">
          Resultado do Diagnóstico
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tighter mb-3">
          AI Business Score
        </h2>
        <div className="flex items-center justify-center gap-4">
          <span className="text-7xl font-black text-navy tracking-tighter">
            {result.overallScore}
          </span>
          <span className="text-2xl text-slate-300 font-light">/ 100</span>
        </div>
        <span
          className={`inline-block mt-3 px-5 py-1.5 rounded-full text-sm font-bold ${maturityColors[result.maturityLevel] || "bg-slate-100 text-slate-600"}`}
        >
          {result.maturityLabel}
        </span>
      </div>

      <div>
        <h3 className="text-xl font-bold text-navy text-center mb-6">
          Radar de Maturidade
        </h3>
        <RadarChart dimensions={result.dimensions} />
      </div>

      <div>
        <h3 className="text-xl font-bold text-navy mb-6">
          Score por Dimensão
        </h3>
        <div className="space-y-4">
          {result.dimensions.map((d) => (
            <div key={d.dimension}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-bold text-navy">{d.label}</span>
                <span className="text-sm font-black text-navy">{d.percentage}%</span>
              </div>
              <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${
                    d.percentage >= 75
                      ? "bg-emerald"
                      : d.percentage >= 50
                        ? "bg-blue-500"
                        : d.percentage >= 30
                          ? "bg-amber-400"
                          : "bg-red-400"
                  }`}
                  style={{ width: `${d.percentage}%` }}
                />
              </div>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {d.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-navy mb-6">
          Oportunidades Priorizadas
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-3 text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Oportunidade
                </th>
                <th className="text-center py-3 px-3 text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Impacto
                </th>
                <th className="text-center py-3 px-3 text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Complexidade
                </th>
                <th className="text-center py-3 px-3 text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Prioridade
                </th>
              </tr>
            </thead>
            <tbody>
              {result.opportunities.map((opp) => (
                <tr key={opp.id} className="border-b border-slate-100">
                  <td className="py-3 px-3">
                    <span className="font-bold text-navy">{opp.title}</span>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      {opp.description}
                    </p>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <StarRating value={opp.impact} />
                  </td>
                  <td className="py-3 px-3 text-center">
                    <StarRating value={opp.difficulty} />
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${priorityColors[opp.priority]}`}
                    >
                      {opp.priority}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-navy mb-6">
          Economia Estimada
        </h3>
        <div className="bg-surface-alt rounded-[2rem] p-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                Hoje
              </p>
              <p className="text-3xl font-black text-red-400">
                {result.estimatedSavings.currentHours}h
              </p>
              <p className="text-xs text-slate-400 mt-1">/mês</p>
            </div>
            <div className="flex items-center justify-center">
              <svg
                className="w-8 h-8 text-emerald"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                Após IA
              </p>
              <p className="text-3xl font-black text-emerald">
                {result.estimatedSavings.afterAutomationHours}h
              </p>
              <p className="text-xs text-slate-400 mt-1">/mês</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500">
              Economia estimada de{" "}
              <span className="font-black text-emerald text-lg">
                {result.estimatedSavings.savedHours}h/mês
              </span>{" "}
              ({result.estimatedSavings.savedPercentage}% de redução)
            </p>
            <p className="text-[10px] text-slate-400 mt-2 uppercase font-bold">
              Estimativa baseada nas respostas. Valores reais dependem de diagnóstico estratégico.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-navy mb-6">Roadmap</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {result.roadmap.map((phase) => (
            <div
              key={phase.label}
              className="bg-surface-alt rounded-2xl p-6 border border-slate-100"
            >
              <span className="text-[10px] font-black text-emerald uppercase tracking-widest">
                {phase.timeframe}
              </span>
              <h4 className="text-lg font-bold text-navy mt-2 mb-4">{phase.label}</h4>
              <ul className="space-y-2">
                {phase.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-slate-500 flex items-start gap-2"
                  >
                    <span className="text-emerald mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center pt-4">
        {showPDFButton ? (
          <>
            <button
              onClick={onDownloadPDF}
              disabled={downloading}
              className="bg-navy text-white px-10 py-5 rounded-2xl text-base font-bold hover:bg-slate-800 transition-all shadow-2xl shadow-navy/20 inline-flex items-center gap-3 disabled:opacity-70 disabled:cursor-wait"
            >
              {downloading ? (
                <>
                  <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="31.4 31.4" strokeLinecap="round" />
                  </svg>
                  Gerando PDF...
                </>
              ) : (
                <>
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Baixar Relatório em PDF
                </>
              )}
            </button>
            <p className="text-xs text-slate-400 mt-3">
              Relatório executivo com 9 páginas — diagnóstico completo, oportunidades e roadmap
            </p>
            {pdfError && (
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 text-red-600 text-sm font-bold">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
                Erro ao gerar o PDF. Tente novamente ou use o WhatsApp abaixo.
              </div>
            )}
          </>
        ) : (
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-bold">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Preencha seus dados abaixo para liberar o PDF
          </div>
        )}
      </div>
    </div>
  );
}
