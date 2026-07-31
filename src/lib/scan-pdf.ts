import { jsPDF } from "jspdf";
import type { ScanResult } from "./scan-engine";

const NAVY = [15, 23, 42] as const;
const EMERALD = [16, 185, 129] as const;
const WHITE = [255, 255, 255] as const;
const GRAY = [100, 116, 139] as const;
const LIGHT_GRAY = [241, 245, 249] as const;
const RED = [239, 68, 68] as const;
const BLUE = [59, 130, 246] as const;
const AMBER = [245, 158, 11] as const;
const DARK = [30, 41, 59] as const;

const MARGIN = 20;
const PAGE_W = 210;
const CONTENT_W = PAGE_W - MARGIN * 2;

function hexToRgb(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
}

function drawHeader(pdf: jsPDF, y: number, title: string): number {
  pdf.setFontSize(20);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(...NAVY);
  pdf.text(title, MARGIN, y);

  pdf.setFillColor(...EMERALD);
  pdf.rect(MARGIN, y + 7, 40, 3, "F");

  return y + 16;
}

function dimColor(pct: number): readonly [number, number, number] {
  if (pct >= 75) return EMERALD;
  if (pct >= 50) return BLUE;
  if (pct >= 30) return AMBER;
  return RED;
}

function priorityColor(p: string): readonly [number, number, number] {
  if (p === "Alta") return RED;
  if (p === "Média") return AMBER;
  return GRAY;
}

function stars(n: number): string {
  return "\u2605".repeat(n) + "\u2606".repeat(5 - n);
}

export async function generatePDF(result: ScanResult): Promise<void> {
  const pdf = new jsPDF("p", "mm", "a4");

  const d = new Date();
  const date = `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
  const safeName = result.companyName.replace(/[^a-zA-Z0-9_-]/g, "_") || "empresa";

  // ═══════════════ PAGE 1 — CAPA ═══════════════
  pdf.setFillColor(...NAVY);
  pdf.rect(0, 0, PAGE_W, 90, "F");

  pdf.setFontSize(11);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(...EMERALD);
  pdf.text("DOUGLAS CUIMAR", MARGIN, 28);

  pdf.setFontSize(9);
  pdf.setFont("helvetica", "normal");
  pdf.setTextColor(...GRAY);
  pdf.text("ASSESSORIA EM INTELIGENCIA ARTIFICIAL", MARGIN, 36);

  pdf.setFontSize(26);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(...WHITE);
  pdf.text("AI Business Scan", MARGIN, 65);

  pdf.setFontSize(10);
  pdf.setFont("helvetica", "normal");
  pdf.setTextColor(...GRAY);
  pdf.text("Relatorio Executivo de Maturidade em IA", MARGIN, 78);

  pdf.setFontSize(18);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(...NAVY);
  pdf.text(result.companyName, MARGIN, 130);

  pdf.setFontSize(11);
  pdf.setFont("helvetica", "normal");
  pdf.setTextColor(...GRAY);
  pdf.text(result.companySegment || "", MARGIN, 142);
  pdf.text(date, MARGIN, 150);

  pdf.setFillColor(...EMERALD);
  pdf.rect(MARGIN, 165, 50, 6, "F");
  pdf.setFontSize(9);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(...WHITE);
  pdf.text("DIAGNOSTICO DE IA", MARGIN + 25, 169.3, { align: "center" });

  // ═══════════════ PAGE 2 — RESUMO EXECUTIVO ═══════════════
  pdf.addPage();
  let y = drawHeader(pdf, 25, "Resumo Executivo");

  y += 6;
  pdf.setFillColor(...LIGHT_GRAY);
  pdf.rect(MARGIN, y, CONTENT_W, 36, "F");

  pdf.setFontSize(40);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(...dimColor(result.overallScore));
  pdf.text(String(result.overallScore), MARGIN + 10, y + 24);

  pdf.setFontSize(11);
  pdf.setFont("helvetica", "normal");
  pdf.setTextColor(...GRAY);
  pdf.text("/100", MARGIN + 38, y + 24);

  const matColor = hexToRgb(
    result.maturityLevel === "iniciante" ? "#f59e0b" :
    result.maturityLevel === "em_evolucao" ? "#3b82f6" :
    result.maturityLevel === "avancado" ? "#6366f1" :
    result.maturityLevel === "otimizado" ? "#10b981" : "#1e293b"
  );

  pdf.setFillColor(...matColor);
  const badgeText = result.maturityLabel.toUpperCase();
  const badgeW = pdf.getTextWidth(badgeText) + 16;
  pdf.rect(PAGE_W - MARGIN - badgeW - 4, y + 8, badgeW, 8, "F");
  pdf.setFontSize(9);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(...WHITE);
  pdf.text(badgeText, PAGE_W - MARGIN - badgeW / 2 - 4, y + 13.5, { align: "center" });

  y += 48;

  pdf.setFontSize(9);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(...GRAY);
  pdf.text("DIMENSAO", MARGIN, y);
  pdf.text("SCORE", MARGIN + 90, y);

  pdf.setDrawColor(220, 220, 220);
  pdf.line(MARGIN, y + 3, PAGE_W - MARGIN, y + 3);

  for (const dim of result.dimensions) {
    y += 10;
    pdf.setFontSize(10);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(...NAVY);
    pdf.text(dim.label, MARGIN + 2, y);

    pdf.setFontSize(10);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(...dimColor(dim.percentage));
    pdf.text(`${dim.percentage}%`, MARGIN + 90, y);

    pdf.setFillColor(...LIGHT_GRAY);
    pdf.rect(MARGIN + 105, y - 3.5, 65, 5, "F");
    pdf.setFillColor(...dimColor(dim.percentage));
    pdf.rect(MARGIN + 105, y - 3.5, 65 * (dim.percentage / 100), 5, "F");
  }

  y += 16;
  pdf.setFontSize(9);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(...EMERALD);
  pdf.setFillColor(236, 253, 243);
  pdf.rect(MARGIN, y, CONTENT_W, 14, "F");
  pdf.text(`Proximo Passo: ${result.opportunities[0]?.title || "Agendar Diagnostico de IA"}`, MARGIN + 6, y + 9);

  // ═══════════════ PAGE 3 — DIAGNOSTICO ═══════════════
  pdf.addPage();
  y = drawHeader(pdf, 25, "Diagnostico por Dimensao");

  for (const dim of result.dimensions) {
    if (y > 250) {
      pdf.addPage();
      y = 25;
    }
    y += 6;
    pdf.setFillColor(...LIGHT_GRAY);
    pdf.rect(MARGIN, y, CONTENT_W, 28, "F");

    pdf.setFontSize(12);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(...NAVY);
    pdf.text(dim.label, MARGIN + 6, y + 10);

    pdf.setFontSize(14);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(...dimColor(dim.percentage));
    pdf.text(`${dim.percentage}%`, PAGE_W - MARGIN - 6, y + 10, { align: "right" });

    pdf.setFillColor(226, 232, 240);
    pdf.rect(MARGIN + 6, y + 14, CONTENT_W - 12, 4, "F");
    pdf.setFillColor(...dimColor(dim.percentage));
    pdf.rect(MARGIN + 6, y + 14, (CONTENT_W - 12) * (dim.percentage / 100), 4, "F");

    const desc = pdf.splitTextToSize(dim.description, CONTENT_W - 40);
    pdf.setFontSize(8);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(...GRAY);
    pdf.text(desc, MARGIN + 6, y + 24);
    y += 34;
  }

  // ═══════════════ PAGE 4 — OPORTUNIDADES ═══════════════
  pdf.addPage();
  y = drawHeader(pdf, 25, "Oportunidades Identificadas");
  y += 4;

  pdf.setFontSize(7);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(...GRAY);
  pdf.text("#ID", MARGIN, y);
  pdf.text("PROCESSO", MARGIN + 12, y);
  pdf.text("IMPACTO", MARGIN + 128, y);
  pdf.text("COMPLEX.", MARGIN + 148, y);
  pdf.text("PRIORIDADE", MARGIN + 168, y);

  pdf.setDrawColor(200, 200, 200);
  pdf.line(MARGIN, y + 3, PAGE_W - MARGIN, y + 3);

  for (const opp of result.opportunities) {
    if (y > 240) {
      pdf.addPage();
      y = 25;
    }
    y += 8;
    pdf.setFontSize(14);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(...EMERALD);
    pdf.text(String(opp.id), MARGIN, y);

    pdf.setFontSize(10);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(...NAVY);
    pdf.text(opp.title, MARGIN + 12, y);

    const desc = pdf.splitTextToSize(opp.description, CONTENT_W - 80);
    pdf.setFontSize(7);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(...GRAY);
    pdf.text(desc, MARGIN + 12, y + 5);

    pdf.setFontSize(8);
    pdf.setTextColor(...NAVY);
    pdf.text(stars(opp.impact), MARGIN + 128, y);
    pdf.text(stars(opp.difficulty), MARGIN + 148, y);

    pdf.setFillColor(...priorityColor(opp.priority));
    pdf.rect(MARGIN + 168, y - 4.5, 18, 6, "F");
    pdf.setFontSize(7);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(...WHITE);
    pdf.text(opp.priority.toUpperCase(), MARGIN + 177, y - 0.5, { align: "center" });

    y += 16;
  }

  // ═══════════════ PAGE 5 — ECONOMIA ═══════════════
  pdf.addPage();
  y = drawHeader(pdf, 25, "Economia Estimada");
  y += 10;

  pdf.setFillColor(...LIGHT_GRAY);
  pdf.rect(MARGIN, y, CONTENT_W, 40, "F");

  pdf.setFontSize(32);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(...RED);
  pdf.text(`${result.estimatedSavings.currentHours}h`, MARGIN + 14, y + 26);

  pdf.setFontSize(8);
  pdf.setFont("helvetica", "normal");
  pdf.setTextColor(...GRAY);
  pdf.text("/mes", MARGIN + 14, y + 34);
  pdf.text("Hoje", MARGIN + 14, y + 14);

  pdf.setFontSize(14);
  pdf.setTextColor(...EMERALD);
  pdf.text("\u2192", PAGE_W / 2, y + 22, { align: "center" });

  pdf.setFontSize(32);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(...EMERALD);
  pdf.text(`${result.estimatedSavings.afterAutomationHours}h`, PAGE_W - MARGIN - 14, y + 26, { align: "right" });

  pdf.setFontSize(8);
  pdf.setFont("helvetica", "normal");
  pdf.setTextColor(...GRAY);
  pdf.text("/mes", PAGE_W - MARGIN - 14, y + 34, { align: "right" });
  pdf.text("Apos IA", PAGE_W - MARGIN - 14, y + 14, { align: "right" });

  y += 60;
  pdf.setFillColor(236, 253, 243);
  pdf.rect(MARGIN, y, CONTENT_W, 30, "F");

  pdf.setFontSize(13);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(...NAVY);
  pdf.text("Economia estimada de", PAGE_W / 2, y + 12, { align: "center" });

  pdf.setFontSize(28);
  pdf.setTextColor(...EMERALD);
  pdf.text(`${result.estimatedSavings.savedHours}h/mes`, PAGE_W / 2, y + 24, { align: "center" });

  y += 42;
  pdf.setFontSize(9);
  pdf.setTextColor(...GRAY);
  pdf.text(
    pdf.splitTextToSize(
      `Reducao de ${result.estimatedSavings.savedPercentage}% do tempo operacional. Estimativa baseada nas respostas fornecidas. Valores reais dependem de diagnostico estrategico completo.`,
      CONTENT_W
    ),
    MARGIN,
    y
  );

  // ═══════════════ PAGE 6 — ROADMAP ═══════════════
  pdf.addPage();
  y = drawHeader(pdf, 25, "Roadmap de Implementacao");
  y += 6;

  for (let i = 0; i < result.roadmap.length; i++) {
    const phase = result.roadmap[i];
    if (y > 240) {
      pdf.addPage();
      y = 25;
    }

    const dotColors: [number, number, number][] = [EMERALD as any, BLUE as any, BLUE as any, [99, 102, 241] as any];

    pdf.setFillColor(...dotColors[i]);
    pdf.circle(MARGIN + 4, y + 3, 3, "F");

    pdf.setFontSize(8);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(...EMERALD);
    pdf.text(phase.timeframe.toUpperCase(), MARGIN + 14, y + 2);

    pdf.setFontSize(13);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(...NAVY);
    pdf.text(phase.label, MARGIN + 14, y + 9);

    pdf.setFontSize(9);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(...GRAY);

    let itemY = y + 16;
    for (const item of phase.items) {
      const lines = pdf.splitTextToSize(`\u2022  ${item}`, CONTENT_W - 22);
      pdf.text(lines, MARGIN + 14, itemY);
      itemY += lines.length * 5 + 3;
    }

    y = itemY + 6;
  }

  // ═══════════════ PAGE 7 — ARQUITETURA ═══════════════
  pdf.addPage();
  y = drawHeader(pdf, 25, "Arquitetura Recomendada");
  y += 10;

  const layers = [
    { label: "WhatsApp / Instagram / Site", color: [37, 211, 102] },
    { label: "Agente de IA (Atendimento 24/7)", color: EMERALD },
    { label: "n8n (Orquestrador)", color: [234, 88, 12] },
    { label: "CRM / ERP / Sistemas", color: BLUE },
    { label: "Dashboard Gerencial", color: [99, 102, 241] },
  ];

  for (let i = 0; i < layers.length; i++) {
    const layer = layers[i];
    const boxW = 120;
    const boxX = (PAGE_W - boxW) / 2;

    pdf.setFillColor(245, 247, 250);
    pdf.rect(boxX, y, boxW, 14, "F");
    pdf.setDrawColor(layer.color[0], layer.color[1], layer.color[2]);
    pdf.rect(boxX, y, boxW, 14, "S");

    pdf.setFontSize(10);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(...DARK);
    pdf.text(layer.label, PAGE_W / 2, y + 9, { align: "center" });

    y += 14;
    if (i < layers.length - 1) {
      pdf.setFontSize(12);
      pdf.setTextColor(...GRAY);
      pdf.text("\u2193", PAGE_W / 2, y + 6, { align: "center" });
      y += 10;
    }
  }

  // ═══════════════ PAGE 8 — PLANO RECOMENDADO ═══════════════
  pdf.addPage();
  y = drawHeader(pdf, 25, "Plano Recomendado");
  y += 4;

  pdf.setFontSize(9);
  pdf.setFont("helvetica", "normal");
  pdf.setTextColor(...GRAY);
  const planIntro = pdf.splitTextToSize(
    `Com base no nivel de maturidade ${result.maturityLabel} (Score ${result.overallScore}/100), recomendamos o seguinte plano:`,
    CONTENT_W
  );
  pdf.text(planIntro, MARGIN, y);
  y += planIntro.length * 5 + 6;

  const servicos = [
    { name: "Diagnostico de IA", phase: "FASE 1", desc: "Analise de 15-20 processos com roadmap e ROI estimado.", price: "A partir de R$ 1.997" },
    { name: "Automacao Express", phase: "FASE 1", desc: "Implementacao rapida em ate 7 dias. Quick wins.", price: "A partir de R$ 2.997" },
    { name: "Agentes Inteligentes", phase: "FASE 2", desc: "Criacao de agentes de IA para atendimento 24/7.", price: "A partir de R$ 4.997" },
    { name: "MSP de IA", phase: "FASE 3", desc: "Gestao continua com monitoramento e evolucao mensal.", price: "A partir de R$ 997/mes" },
  ];

  for (const svc of servicos) {
    if (y > 250) {
      pdf.addPage();
      y = 25;
    }
    pdf.setFillColor(...LIGHT_GRAY);
    pdf.rect(MARGIN, y, CONTENT_W, 22, "F");

    pdf.setFontSize(7);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(...EMERALD);
    pdf.text(svc.phase, MARGIN + 6, y + 5);

    pdf.setFontSize(11);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(...NAVY);
    pdf.text(svc.name, MARGIN + 6, y + 11);

    pdf.setFontSize(8);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(...GRAY);
    pdf.text(svc.desc, MARGIN + 6, y + 17);

    pdf.setFontSize(10);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(...EMERALD);
    pdf.text(svc.price, PAGE_W - MARGIN - 6, y + 13, { align: "right" });

    y += 30;
  }

  // ═══════════════ PAGE 9 — PROXIMOS PASSOS ═══════════════
  pdf.addPage();
  y = drawHeader(pdf, 25, "Proximos Passos");
  y += 10;

  pdf.setFontSize(14);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(...NAVY);
  pdf.text("Agende uma reuniao com nosso especialista", PAGE_W / 2, y, { align: "center" });

  y += 8;
  pdf.setFontSize(10);
  pdf.setFont("helvetica", "normal");
  pdf.setTextColor(...GRAY);
  const msg = pdf.splitTextToSize(
    `Apresentaremos este diagnostico em detalhes e tracaremos juntos o plano de implementacao ideal para ${result.companyName}.`,
    CONTENT_W - 40
  );
  pdf.text(msg, MARGIN + 20, y);

  y += 28;
  pdf.setFillColor(...LIGHT_GRAY);
  pdf.rect(MARGIN + 20, y, 70, 28, "F");

  pdf.setFontSize(9);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(...NAVY);
  pdf.text("WhatsApp", MARGIN + 55, y + 10, { align: "center" });

  pdf.setFontSize(14);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(37, 211, 102);
  pdf.text("(11) 9 9414-2485", MARGIN + 55, y + 20, { align: "center" });

  pdf.setFillColor(...LIGHT_GRAY);
  pdf.rect(PAGE_W - MARGIN - 20 - 70, y, 70, 28, "F");

  pdf.setFontSize(9);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(...NAVY);
  pdf.text("E-mail", PAGE_W - MARGIN - 20 - 35, y + 10, { align: "center" });

  pdf.setFontSize(12);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(...BLUE);
  pdf.text("contato@douglascuimar.com.br", PAGE_W - MARGIN - 20 - 35, y + 20, { align: "center" });

  y += 44;
  pdf.setFontSize(10);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(...NAVY);
  pdf.text("Escaneie o QR Code para falar conosco", PAGE_W / 2, y, { align: "center" });

  y += 6;
  try {
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://wa.me/5511994142485`;
    const response = await fetch(qrUrl);
    if (response.ok) {
      const blob = await response.blob();
      const base64 = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(blob);
      });
      pdf.addImage(base64, "PNG", (PAGE_W - 30) / 2, y, 30, 30);
    }
  } catch { /* QR code optional */ }

  // Save
  pdf.save(`AI_Business_Scan_${safeName}_${date.replace(/\//g, "-")}.pdf`);
}
