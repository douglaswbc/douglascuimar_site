"use client";

import { forwardRef } from "react";
import type { ScanResult } from "@/lib/scan-engine";

interface ReportTemplateProps {
  result: ScanResult;
}

const maturityColors: Record<string, string> = {
  iniciante: "#f59e0b",
  em_evolucao: "#3b82f6",
  avancado: "#6366f1",
  otimizado: "#10b981",
  lider: "#1e293b",
};

const priorityColors: Record<string, string> = {
  Alta: "#ef4444",
  Média: "#f59e0b",
  Baixa: "#94a3b8",
};

export const ReportTemplate = forwardRef<HTMLDivElement, ReportTemplateProps>(
  function ReportTemplate({ result }, ref) {
    const d = new Date();
    const date = `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
    const color = maturityColors[result.maturityLevel] || "#1e293b";

    return (
      <div
        ref={ref}
        style={{
          fontFamily: "Arial, sans-serif",
          color: "#1e293b",
          background: "#fff",
          maxWidth: "800px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        {/* Página 1 - Capa */}
        <div
          className="pdf-page"
          style={{
            pageBreakAfter: "always",
            padding: "60px 40px",
            textAlign: "center",
            minHeight: "90vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "24px",
              background: "linear-gradient(135deg, #0f172a, #10b981)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "40px",
            }}
          >
            <span
              style={{
                color: "#fff",
                fontSize: "36px",
                fontWeight: 900,
                letterSpacing: "-1px",
              }}
            >
              DC
            </span>
          </div>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: 900,
              color: "#0f172a",
              marginBottom: "12px",
              letterSpacing: "-1px",
            }}
          >
            AI Business Scan®
          </h1>
          <p style={{ fontSize: "16px", color: "#64748b", marginBottom: "40px" }}>
            Relatório Executivo de Maturidade em IA
          </p>
          <div
            style={{
              width: "120px",
              height: "4px",
              background: color,
              borderRadius: "2px",
              marginBottom: "40px",
            }}
          />
          <p style={{ fontSize: "20px", fontWeight: 700, color: "#0f172a", marginBottom: "8px" }}>
            {result.companyName}
          </p>
          <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "4px" }}>
            {result.companySegment}
          </p>
          <p style={{ fontSize: "14px", color: "#94a3b8" }}>{date}</p>
        </div>

        {/* Página 2 - Resumo Executivo */}
        <div
          className="pdf-page"
          style={{
            pageBreakAfter: "always",
            padding: "40px",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 900,
              color: "#0f172a",
              marginBottom: "24px",
              borderBottom: "3px solid #10b981",
              paddingBottom: "12px",
              display: "inline-block",
            }}
          >
            Resumo Executivo
          </h2>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "16px",
              padding: "24px",
              marginBottom: "24px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <p style={{ fontSize: "11px", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>
                  Score Geral
                </p>
                <span style={{ fontSize: "48px", fontWeight: 900, color: color }}>
                  {result.overallScore}
                </span>
                <span style={{ fontSize: "18px", color: "#cbd5e1" }}> /100</span>
              </div>
              <div>
                <p style={{ fontSize: "11px", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>
                  Nível de Maturidade
                </p>
                <span
                  style={{
                    display: "inline-block",
                    padding: "6px 16px",
                    borderRadius: "20px",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#fff",
                    background: color,
                  }}
                >
                  {result.maturityLabel}
                </span>
              </div>
            </div>
          </div>

          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "24px" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #e2e8f0" }}>
                <th style={{ textAlign: "left", padding: "8px 12px", fontSize: "10px", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Dimensão
                </th>
                <th style={{ textAlign: "center", padding: "8px 12px", fontSize: "10px", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Score
                </th>
                <th style={{ textAlign: "left", padding: "8px 12px" }}>
                </th>
              </tr>
            </thead>
            <tbody>
              {result.dimensions.map((d) => (
                <tr key={d.dimension} style={{ borderBottom: "1px solid #f1f5f9" }}>
                  <td style={{ padding: "10px 12px", fontWeight: 700, color: "#0f172a", fontSize: "13px" }}>
                    {d.label}
                  </td>
                  <td style={{ padding: "10px 12px", textAlign: "center" }}>
                    <span
                      style={{
                        fontWeight: 900,
                        fontSize: "16px",
                        color:
                          d.percentage >= 75
                            ? "#10b981"
                            : d.percentage >= 50
                              ? "#3b82f6"
                              : d.percentage >= 30
                                ? "#f59e0b"
                                : "#ef4444",
                      }}
                    >
                      {d.percentage}%
                    </span>
                  </td>
                  <td style={{ padding: "10px 12px" }}>
                    <div style={{ height: "8px", background: "#f1f5f9", borderRadius: "4px", overflow: "hidden", width: "150px" }}>
                      <div
                        style={{
                          height: "100%",
                          borderRadius: "4px",
                          background:
                            d.percentage >= 75
                              ? "#10b981"
                              : d.percentage >= 50
                                ? "#3b82f6"
                                : d.percentage >= 30
                                  ? "#f59e0b"
                                  : "#ef4444",
                          width: `${d.percentage}%`,
                        }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div
            style={{
              borderLeft: "4px solid #10b981",
              padding: "12px 16px",
              background: "#f0fdf4",
              borderRadius: "0 12px 12px 0",
            }}
          >
            <p style={{ fontSize: "11px", fontWeight: 700, color: "#065f46", marginBottom: "4px" }}>
              Próximo Passo Recomendado
            </p>
            <p style={{ fontSize: "13px", color: "#0f172a", fontWeight: 600 }}>
              {result.opportunities[0]?.title || "Agendar Diagnóstico de IA Estratégico"}
            </p>
          </div>
        </div>

        {/* Página 3 - Diagnóstico por Dimensão */}
        <div
          className="pdf-page"
          style={{
            pageBreakAfter: "always",
            padding: "40px",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 900,
              color: "#0f172a",
              marginBottom: "24px",
              borderBottom: "3px solid #10b981",
              paddingBottom: "12px",
              display: "inline-block",
            }}
          >
            Diagnóstico por Dimensão
          </h2>

          {result.dimensions.map((d) => (
            <div
              key={d.dimension}
              style={{
                marginBottom: "20px",
                padding: "16px",
                background: "#f8fafc",
                borderRadius: "12px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ fontWeight: 700, fontSize: "14px", color: "#0f172a" }}>
                  {d.label}
                </span>
                <span
                  style={{
                    fontWeight: 900,
                    fontSize: "14px",
                    color:
                      d.percentage >= 75
                        ? "#10b981"
                        : d.percentage >= 50
                          ? "#3b82f6"
                          : "#f59e0b",
                  }}
                >
                  {d.percentage}%
                </span>
              </div>
              <div style={{ height: "6px", background: "#e2e8f0", borderRadius: "3px", marginBottom: "12px" }}>
                <div
                  style={{
                    height: "100%",
                    borderRadius: "3px",
                    background:
                      d.percentage >= 75
                        ? "#10b981"
                        : d.percentage >= 50
                          ? "#3b82f6"
                          : "#f59e0b",
                    width: `${d.percentage}%`,
                  }}
                />
              </div>
              <p style={{ fontSize: "12px", color: "#64748b", lineHeight: "1.6" }}>
                {d.description}
              </p>
            </div>
          ))}
        </div>

        {/* Página 4 - Oportunidades */}
        <div
          className="pdf-page"
          style={{
            pageBreakAfter: "always",
            padding: "40px",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 900,
              color: "#0f172a",
              marginBottom: "24px",
              borderBottom: "3px solid #10b981",
              paddingBottom: "12px",
              display: "inline-block",
            }}
          >
            Oportunidades Identificadas
          </h2>

          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #0f172a" }}>
                <th style={{ textAlign: "left", padding: "8px 12px", fontSize: "10px", fontWeight: 700, color: "#0f172a", textTransform: "uppercase", letterSpacing: "1px" }}>
                  #ID
                </th>
                <th style={{ textAlign: "left", padding: "8px 12px", fontSize: "10px", fontWeight: 700, color: "#0f172a", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Processo
                </th>
                <th style={{ textAlign: "center", padding: "8px 12px", fontSize: "10px", fontWeight: 700, color: "#0f172a", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Impacto
                </th>
                <th style={{ textAlign: "center", padding: "8px 12px", fontSize: "10px", fontWeight: 700, color: "#0f172a", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Complexidade
                </th>
                <th style={{ textAlign: "center", padding: "8px 12px", fontSize: "10px", fontWeight: 700, color: "#0f172a", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Prioridade
                </th>
              </tr>
            </thead>
            <tbody>
              {result.opportunities.map((opp) => (
                <tr key={opp.id} style={{ borderBottom: "1px solid #e2e8f0" }}>
                  <td style={{ padding: "10px 12px", fontSize: "13px", fontWeight: 700, color: "#10b981" }}>
                    {opp.id}
                  </td>
                  <td style={{ padding: "10px 12px" }}>
                    <span style={{ fontSize: "13px", fontWeight: 600, color: "#0f172a" }}>
                      {opp.title}
                    </span>
                    <p style={{ fontSize: "10px", color: "#64748b", lineHeight: "1.4", marginTop: "4px" }}>
                      {opp.description}
                    </p>
                  </td>
                  <td style={{ padding: "10px 12px", textAlign: "center", fontSize: "14px" }}>
                    {"★".repeat(opp.impact)}{"☆".repeat(5 - opp.impact)}
                  </td>
                  <td style={{ padding: "10px 12px", textAlign: "center", fontSize: "14px" }}>
                    {"★".repeat(opp.difficulty)}{"☆".repeat(5 - opp.difficulty)}
                  </td>
                  <td style={{ padding: "10px 12px", textAlign: "center" }}>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "4px 10px",
                        borderRadius: "12px",
                        fontSize: "10px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        color: "#fff",
                        background: priorityColors[opp.priority],
                      }}
                    >
                      {opp.priority}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Página 5 - Economia Estimada */}
        <div
          className="pdf-page"
          style={{
            pageBreakAfter: "always",
            padding: "40px",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 900,
              color: "#0f172a",
              marginBottom: "24px",
              borderBottom: "3px solid #10b981",
              paddingBottom: "12px",
              display: "inline-block",
            }}
          >
            Economia Estimada
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginBottom: "40px",
              padding: "24px",
              background: "#f8fafc",
              borderRadius: "16px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "11px", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>
                Hoje
              </p>
              <p style={{ fontSize: "40px", fontWeight: 900, color: "#ef4444", lineHeight: "1" }}>
                {result.estimatedSavings.currentHours}h
              </p>
              <p style={{ fontSize: "11px", color: "#94a3b8" }}>/mês</p>
            </div>

            <div style={{ textAlign: "center", color: "#10b981" }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>

            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "11px", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>
                Após IA
              </p>
              <p style={{ fontSize: "40px", fontWeight: 900, color: "#10b981", lineHeight: "1" }}>
                {result.estimatedSavings.afterAutomationHours}h
              </p>
              <p style={{ fontSize: "11px", color: "#94a3b8" }}>/mês</p>
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              padding: "24px",
              background: "linear-gradient(135deg, #f0fdf4, #ecfdf5)",
              borderRadius: "16px",
              border: "2px solid #10b98120",
            }}
          >
            <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "8px" }}>
              Economia estimada de
            </p>
            <p style={{ fontSize: "42px", fontWeight: 900, color: "#10b981", lineHeight: "1", marginBottom: "4px" }}>
              {result.estimatedSavings.savedHours}h/mês
            </p>
            <p style={{ fontSize: "14px", color: "#64748b" }}>
              Redução de {result.estimatedSavings.savedPercentage}% do tempo operacional
            </p>
          </div>

          <p style={{ fontSize: "10px", color: "#94a3b8", textAlign: "center", marginTop: "24px", fontStyle: "italic" }}>
            Estimativa baseada nas respostas fornecidas. Valores reais dependem de diagnóstico estratégico completo.
          </p>
        </div>

        {/* Página 6 - Roadmap */}
        <div
          className="pdf-page"
          style={{
            pageBreakAfter: "always",
            padding: "40px",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 900,
              color: "#0f172a",
              marginBottom: "24px",
              borderBottom: "3px solid #10b981",
              paddingBottom: "12px",
              display: "inline-block",
            }}
          >
            Roadmap de Implementação
          </h2>

          <div style={{ position: "relative", paddingLeft: "40px" }}>
            <div
              style={{
                position: "absolute",
                left: "16px",
                top: "0",
                bottom: "0",
                width: "2px",
                background: "#e2e8f0",
              }}
            />

            {result.roadmap.map((phase, i) => (
              <div key={phase.label} style={{ marginBottom: "32px", position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    left: "-28px",
                    top: "4px",
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: i === 0 ? "#10b981" : i === result.roadmap.length - 1 ? "#6366f1" : "#3b82f6",
                    border: "3px solid #fff",
                    boxShadow: "0 0 0 2px #e2e8f0",
                  }}
                />
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "10px",
                    fontWeight: 700,
                    color: "#10b981",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    marginBottom: "4px",
                  }}
                >
                  {phase.timeframe}
                </span>
                <h3 style={{ fontSize: "18px", fontWeight: 900, color: "#0f172a", margin: "4px 0 12px" }}>
                  {phase.label}
                </h3>
                <ul style={{ paddingLeft: "20px", margin: 0 }}>
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: "13px",
                        color: "#475569",
                        marginBottom: "6px",
                        lineHeight: "1.5",
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Página 7 - Arquitetura Recomendada */}
        <div
          className="pdf-page"
          style={{
            pageBreakAfter: "always",
            padding: "40px",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 900,
              color: "#0f172a",
              marginBottom: "24px",
              borderBottom: "3px solid #10b981",
              paddingBottom: "12px",
              display: "inline-block",
            }}
          >
            Arquitetura Recomendada
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
              padding: "32px",
              background: "#f8fafc",
              borderRadius: "16px",
            }}
          >
            {[
              { label: "WhatsApp / Instagram / Site", color: "#25D366" },
              { label: "Agente de IA (Atendimento 24/7)", color: "#10b981" },
              { label: "n8n (Orquestrador de Automações)", color: "#ea580c" },
              { label: "CRM / ERP / Sistemas", color: "#3b82f6" },
              { label: "Dashboard Gerencial", color: "#6366f1" },
            ].map((layer, i) => (
              <div key={layer.label} style={{ width: "100%", textAlign: "center" }}>
                <div
                  style={{
                    display: "inline-block",
                    padding: "12px 32px",
                    borderRadius: "12px",
                    background: layer.color + "15",
                    border: `2px solid ${layer.color}30`,
                    color: "#0f172a",
                    fontSize: "14px",
                    fontWeight: 700,
                    minWidth: "60%",
                  }}
                >
                  {layer.label}
                </div>
                {i < 4 && (
                  <div style={{ textAlign: "center", color: "#94a3b8", fontSize: "20px", margin: "4px 0" }}>
                    ↓
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Página 8 - Plano Recomendado */}
        <div
          className="pdf-page"
          style={{
            pageBreakAfter: "always",
            padding: "40px",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 900,
              color: "#0f172a",
              marginBottom: "24px",
              borderBottom: "3px solid #10b981",
              paddingBottom: "12px",
              display: "inline-block",
            }}
          >
            Plano Recomendado
          </h2>

          <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "24px", lineHeight: "1.6" }}>
            Com base no nível de maturidade <strong>{result.maturityLabel}</strong> (Score {result.overallScore}/100),
            recomendamos o seguinte plano de serviços:
          </p>

          {[
            {
              name: "Diagnóstico de IA",
              phase: "Fase 1",
              desc: "Análise completa de 15-20 processos com roadmap personalizado e ROI estimado por processo.",
              price: "A partir de R$ 1.997",
            },
            {
              name: "Automação Express",
              phase: "Fase 1",
              desc: "Implementação rápida de automações pontuais em até 7 dias. Ideal para quick wins.",
              price: "A partir de R$ 2.997",
            },
            {
              name: "Agentes Inteligentes",
              phase: "Fase 2",
              desc: "Criação de agentes de IA personalizados para atendimento, vendas ou suporte 24/7.",
              price: "A partir de R$ 4.997",
            },
            {
              name: "MSP de IA",
              phase: "Fase 3",
              desc: "Gestão contínua de automações e agentes com monitoramento 24/7 e evolução mensal.",
              price: "A partir de R$ 997/mês",
            },
          ].map((svc) => (
            <div
              key={svc.name}
              style={{
                padding: "16px",
                marginBottom: "16px",
                background: "#f8fafc",
                borderRadius: "12px",
                borderLeft: "4px solid #10b981",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <div>
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: 700,
                      color: "#10b981",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    {svc.phase}
                  </span>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#0f172a", margin: "2px 0" }}>
                    {svc.name}
                  </h3>
                </div>
                <span style={{ fontSize: "13px", fontWeight: 700, color: "#10b981" }}>
                  {svc.price}
                </span>
              </div>
              <p style={{ fontSize: "12px", color: "#64748b", lineHeight: "1.5" }}>
                {svc.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Página 9 - Próximos Passos */}
        <div
          className="pdf-page"
          style={{
            pageBreakAfter: "always",
            padding: "40px",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 900,
              color: "#0f172a",
              marginBottom: "24px",
              borderBottom: "3px solid #10b981",
              paddingBottom: "12px",
              display: "inline-block",
            }}
          >
            Próximos Passos
          </h2>

          <div
            style={{
              textAlign: "center",
              padding: "40px 20px",
            }}
          >
            <p style={{ fontSize: "18px", color: "#0f172a", fontWeight: 700, marginBottom: "16px" }}>
              Agende uma reunião com nosso especialista
            </p>
            <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "32px", lineHeight: "1.6" }}>
              Apresentaremos este diagnóstico em detalhes e traçaremos juntos o plano de implementação
              ideal para {result.companyName}.
            </p>

            <div
              style={{
                display: "inline-block",
                padding: "24px",
                background: "#f8fafc",
                borderRadius: "16px",
                marginBottom: "24px",
              }}
            >
              <p style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a", marginBottom: "8px" }}>
                WhatsApp
              </p>
              <p style={{ fontSize: "18px", fontWeight: 900, color: "#25D366" }}>
                (11) 9 9414-2485
              </p>
            </div>

            <div
              style={{
                display: "inline-block",
                padding: "24px",
                background: "#f8fafc",
                borderRadius: "16px",
                marginLeft: "16px",
                marginBottom: "24px",
              }}
            >
              <p style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a", marginBottom: "8px" }}>
                E-mail
              </p>
              <p style={{ fontSize: "16px", fontWeight: 700, color: "#3b82f6" }}>
                contato@douglascuimar.com.br
              </p>
            </div>

            <div style={{ marginTop: "24px" }}>
              <p style={{ fontSize: "16px", fontWeight: 700, color: "#0f172a", marginBottom: "8px" }}>
                Escaneie para falar conosco
              </p>
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/5511994142485`}
                alt="QR Code WhatsApp"
                style={{ width: "150px", height: "150px" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);
