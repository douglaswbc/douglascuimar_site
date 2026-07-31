"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { ProgressBar } from "./components/ProgressBar";
import { ResultsView } from "./components/ResultsView";
import { ReportTemplate } from "./components/ReportTemplate";
import {
  QUESTIONS,
  STEP_ORDER,
  STEP_LABELS,
  getMaxScores,
  type ScanQuestion,
} from "@/lib/scan-questions";
import { calculateResults, type Answers, type ScanResult } from "@/lib/scan-engine";
import { generatePDF } from "@/lib/scan-pdf";

const STORAGE_KEY = "ai_business_scan_answers";

const webhookUrl =
  "https://webhook.autofunil.com.br/webhook/form-contact-site-dc-labs-br";

export default function DiagnosticoIAPage() {
  const [hydrated, setHydrated] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [results, setResults] = useState<ScanResult | null>(null);
  const [downloading, setDownloading] = useState(false);
  const [pdfError, setPdfError] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactSending, setContactSending] = useState(false);
  const [contactError, setContactError] = useState(false);
  const [introDismissed, setIntroDismissed] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const reportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedAnswers = localStorage.getItem(STORAGE_KEY);
    if (savedAnswers) {
      try {
        setAnswers(JSON.parse(savedAnswers));
      } catch { /* ignore */ }
    }
    const savedStep = localStorage.getItem("ai_business_scan_step");
    if (savedStep) {
      const step = parseInt(savedStep, 10);
      if (!isNaN(step) && step > 0 && step < STEP_ORDER.length) {
        setStepIndex(step);
        setIntroDismissed(true);
      }
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  }, [answers, hydrated]);

  const currentCategory = STEP_ORDER[stepIndex];
  const currentQuestions = QUESTIONS.filter((q) => q.category === currentCategory);
  const isLastStep = stepIndex === STEP_ORDER.length - 1;

  const handleNext = useCallback(() => {
    if (isLastStep) {
      const maxScores = getMaxScores();
      const result = calculateResults(answers, maxScores);
      setResults(result);

      if (typeof window !== "undefined") {
        localStorage.removeItem("ai_business_scan_step");
      }
      return;
    }

    const nextIndex = stepIndex + 1;
    setStepIndex(nextIndex);
    if (typeof window !== "undefined") {
      localStorage.setItem("ai_business_scan_step", String(nextIndex));
    }
  }, [isLastStep, stepIndex, answers]);

  const handlePrev = useCallback(() => {
    if (stepIndex === 0) return;
    const prevIndex = stepIndex - 1;
    setStepIndex(prevIndex);
    if (typeof window !== "undefined") {
      localStorage.setItem("ai_business_scan_step", String(prevIndex));
    }
  }, [stepIndex]);

  const handleAnswer = useCallback(
    (questionId: string, value: string, multi = false) => {
      setAnswers((prev) => {
        if (multi) {
          const current = (prev[questionId] as string[]) || [];
          const next = current.includes(value)
            ? current.filter((v) => v !== value)
            : [...current, value];
          return { ...prev, [questionId]: next };
        }
        return { ...prev, [questionId]: value };
      });
    },
    []
  );

  const handleContactSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!results || !contactName || !contactEmail || !contactPhone) return;

      setContactSending(true);
      setContactError(false);

      const payload = {
        source: "ai-business-scan",
        name: contactName,
        email: contactEmail,
        phone: contactPhone,
        company: contactName,
        segmento: answers["segmento"] || "",
        colaboradores: answers["colaboradores"] || "",
        faturamento: answers["faturamento"] || "",
        overall_score: results.overallScore,
        maturity_level: results.maturityLabel,
        dimensions: results.dimensions.map((d) => ({
          dimension: d.label,
          score: d.percentage,
        })),
        top_opportunities: results.opportunities.slice(0, 3).map((o) => o.title),
        saved_hours_estimate: results.estimatedSavings.savedHours,
        answers,
      };

      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        setContactSubmitted(true);
        if (typeof window !== "undefined") {
          localStorage.removeItem(STORAGE_KEY);
        }
      } catch {
        setContactError(true);
        setTimeout(() => setContactError(false), 6000);
      } finally {
        setContactSending(false);
      }
    },
    [results, contactName, contactEmail, contactPhone, answers]
  );

  const handleDownloadPDF = useCallback(async () => {
    if (!reportRef.current || !results || !contactSubmitted) return;
    setDownloading(true);
    setPdfError(false);
    try {
      await new Promise((r) => setTimeout(r, 300));
      await generatePDF(reportRef.current, results);
    } catch {
      setPdfError(true);
      setTimeout(() => setPdfError(false), 6000);
    } finally {
      setDownloading(false);
    }
  }, [results, contactSubmitted]);

  const canAdvance = currentQuestions
    .every((q) => {
      if (q.type === "multi") return true;
      return !!answers[q.id];
    });

  const currentQuestionLabel = STEP_LABELS[currentCategory] || "";
  const stepLabels = STEP_ORDER.map((s) => STEP_LABELS[s] || s);

  if (results) {
    return (
      <>
        <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-navy text-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
            <h1 className="text-sm font-black text-emerald uppercase tracking-[0.4em] mb-4">
              Diagnóstico de IA
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
              Seu{" "}
              <span className="italic text-emerald">AI Business Scan®</span>
            </h2>
            <p className="text-slate-400 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              Relatório executivo com análise de maturidade, oportunidades priorizadas e roadmap.
            </p>
            {contactSubmitted && (
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 border border-emerald/20 text-emerald text-sm font-bold">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Relatório liberado para download
              </div>
            )}
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <ResultsView
              result={results}
              onDownloadPDF={handleDownloadPDF}
              downloading={downloading}
              pdfError={pdfError}
              showPDFButton={contactSubmitted}
            />
          </div>
        </section>

        {!contactSubmitted && (
          <section className="py-12 lg:py-20 bg-surface-alt">
            <div className="mx-auto max-w-xl px-4 sm:px-6">
              <div className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-xl border border-slate-100">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald/10 mb-4">
                    <svg className="w-7 h-7 text-emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">
                    Seus dados para o relatório
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Preencha abaixo para liberar o download do relatório executivo em PDF.
                  </p>
                </div>

                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-emerald outline-none transition-all font-bold text-navy"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                      E-mail corporativo
                    </label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-emerald outline-none transition-all font-bold text-navy"
                      placeholder="seu@email.com.br"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-emerald outline-none transition-all font-bold text-navy"
                      placeholder="(00) 00000-0000"
                    />
                  </div>

                  {contactError && (
                    <p className="text-red-500 text-sm text-center font-semibold">
                      Erro ao enviar. Tente novamente.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={contactSending || !contactName || !contactEmail || !contactPhone}
                    className="w-full bg-emerald text-white font-black py-5 rounded-2xl hover:bg-emerald/90 transition-all shadow-2xl shadow-emerald/20 text-base uppercase tracking-widest disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {contactSending ? "Enviando..." : "Enviar e Baixar Relatório"}
                  </button>
                  <p className="text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                    Seus dados estão seguros e não serão compartilhados.
                  </p>
                </form>
              </div>
            </div>
          </section>
        )}

        <section className="py-20 lg:py-32 bg-navy text-white relative overflow-hidden">
          <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] bg-emerald/10 blur-[150px] rounded-full" />
          <div className="mx-auto max-w-3xl px-4 sm:px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
              Quer um{" "}
              <span className="italic text-emerald">diagnóstico completo</span>?
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
              Agende uma reunião com nosso especialista para analisarmos cada processo da sua empresa em detalhes.
            </p>
            <a
              href="https://wa.me/5511994142485"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald text-navy px-10 py-5 rounded-2xl text-base font-black hover:bg-white transition-all shadow-2xl shadow-emerald/20"
            >
              Agendar Reunião pelo WhatsApp
            </a>
          </div>
        </section>

        {hydrated && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              zIndex: -1,
              opacity: 0,
              pointerEvents: "none",
            }}
          >
            <ReportTemplate ref={reportRef} result={results} />
          </div>
        )}
      </>
    );
  }

  if (!introDismissed) {
    return (
      <>
        <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 bg-navy text-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald/10 border border-emerald/20 text-emerald font-bold text-[10px] mb-6 uppercase tracking-[0.2em]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald" />
              </span>
              Nova Ferramenta
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight mb-6">
              AI Business Scan®
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-4 leading-relaxed">
              Descubra onde a Inteligência Artificial pode gerar mais produtividade e retorno para sua empresa.
            </p>
            <p className="text-slate-400 mb-10">
              Questionário de 6 etapas — 10 a 15 minutos — Relatório Executivo em PDF
            </p>
            <button
              onClick={() => setIntroDismissed(true)}
              className="bg-emerald text-navy px-10 py-5 rounded-2xl text-base font-black hover:bg-white transition-all shadow-2xl shadow-emerald/20"
            >
              Iniciar Diagnóstico Gratuito
            </button>
            <p className="text-xs text-slate-500 mt-4">
              Suas respostas são confidenciais. Nenhum dado será compartilhado.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-sm font-black text-emerald uppercase tracking-[0.4em] mb-4">
                O que você vai receber
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Score de Maturidade",
                  desc: "Avaliação em 7 dimensões: Atendimento, Comercial, Operações, Tecnologia, Dados, IA e Governança.",
                  icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
                },
                {
                  title: "Oportunidades Priorizadas",
                  desc: "Top 5 oportunidades com análise de impacto, complexidade e estimativa de ROI por processo.",
                  icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
                },
                {
                  title: "Roadmap & Relatório PDF",
                  desc: "Plano de implementação em fases (30/60/90/180 dias) entregue em relatório executivo profissional.",
                  icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="text-center p-8 rounded-[2rem] bg-surface-alt border border-slate-100"
                >
                  <svg
                    className="w-12 h-12 text-emerald mx-auto mb-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={item.icon} />
                  </svg>
                  <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-24 bg-navy text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-8">
            <h1 className="text-sm font-black text-emerald uppercase tracking-[0.4em] mb-4">
              AI Business Scan®
            </h1>
            <p className="text-slate-400 text-sm">
              Etapa {stepIndex + 1} de {STEP_ORDER.length}:{" "}
              <strong className="text-white">{currentQuestionLabel}</strong>
            </p>
          </div>

          <ProgressBar
            currentStep={stepIndex}
            totalSteps={STEP_ORDER.length}
            labels={stepLabels}
          />
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="space-y-4">
            {currentQuestions.map((q) => (
              <QuestionCard
                key={q.id}
                question={q}
                selected={
                  q.type === "multi"
                    ? ((answers[q.id] as string[]) || [])
                    : ((answers[q.id] as string) || "")
                }
                onSelect={(value) =>
                  handleAnswer(q.id, value, q.type === "multi")
                }
              />
            ))}
          </div>

          <div className="flex justify-between mt-12 pt-8 border-t border-slate-100">
            <button
              onClick={handlePrev}
              disabled={stepIndex === 0}
              className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all ${
                stepIndex === 0
                  ? "text-slate-300 cursor-not-allowed"
                  : "text-slate-500 hover:text-navy"
              }`}
            >
              ← Voltar
            </button>
            <button
              onClick={handleNext}
              disabled={!isLastStep && !canAdvance}
              className={`px-8 py-4 rounded-2xl text-base font-bold transition-all shadow-xl ${
                isLastStep
                  ? "bg-emerald text-white hover:bg-emerald/90 shadow-emerald/20"
                  : "bg-navy text-white hover:bg-slate-800 shadow-navy/20 disabled:opacity-50 disabled:cursor-not-allowed"
              }`}
            >
              {isLastStep ? "Gerar Diagnóstico" : "Próximo →"}
            </button>
          </div>

          {!isLastStep && !canAdvance && (
            <p className="text-center text-xs text-slate-400 mt-3">
              Selecione uma opção para avançar
            </p>
          )}
        </div>
      </section>
    </>
  );
}

function QuestionCard({
  question,
  selected,
  onSelect,
}: {
  question: ScanQuestion;
  selected: string | string[];
  onSelect: (value: string) => void;
}) {
  const isMulti = question.type === "multi";
  const selectedSet = new Set(
    isMulti ? (selected as string[]) : [selected as string].filter(Boolean)
  );

  return (
    <div className="rounded-[2rem] bg-surface-alt border border-slate-100 p-6 lg:p-8">
      <p className="text-base font-bold text-navy mb-5">{question.text}</p>
      {isMulti && (
        <p className="text-xs text-slate-400 mb-4 font-medium">
          Selecione todas as opções que se aplicam
        </p>
      )}
      {question.options && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {question.options.map((opt) => {
            const isSelected = selectedSet.has(opt.value);
            return (
              <button
                key={opt.value}
                onClick={() => onSelect(opt.value)}
                className={`text-left p-4 rounded-2xl border-2 transition-all text-sm ${
                  isSelected
                    ? "border-emerald bg-emerald/5 shadow-md"
                    : "border-transparent bg-white hover:border-slate-200 hover:shadow-sm"
                }`}
              >
                <span className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 w-5 h-5 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                      isSelected
                        ? "border-emerald bg-emerald"
                        : "border-slate-300"
                    }`}
                  >
                    {isSelected && (
                      <svg
                        className="w-3 h-3 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </span>
                  <span
                    className={`leading-relaxed ${
                      isSelected ? "text-navy font-semibold" : "text-slate-500"
                    }`}
                  >
                    {opt.label}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
