import {
  type DimensionKey,
  type ScanQuestion,
  DIMENSION_LABELS,
  QUESTIONS,
} from "./scan-questions";

export type Answers = Record<string, string | string[]>;

export interface DimensionScore {
  dimension: DimensionKey;
  label: string;
  score: number;
  maxScore: number;
  percentage: number;
  description: string;
}

export interface Opportunity {
  id: number;
  title: string;
  impact: number;
  difficulty: number;
  priority: "Alta" | "Média" | "Baixa";
  description: string;
  roiEstimate: string;
}

export interface RoadmapPhase {
  label: string;
  timeframe: string;
  items: string[];
}

export interface ScanResult {
  overallScore: number;
  maturityLevel: string;
  maturityLabel: string;
  dimensions: DimensionScore[];
  opportunities: Opportunity[];
  roadmap: RoadmapPhase[];
  estimatedSavings: {
    currentHours: number;
    afterAutomationHours: number;
    savedHours: number;
    savedPercentage: number;
  };
  companyName: string;
  companySegment: string;
}

export function calculateResults(answers: Answers, maxPossible: Record<DimensionKey, number>): ScanResult {
  const dimensionScores: Record<DimensionKey, number> = {
    atendimento: 0,
    comercial: 0,
    operacoes: 0,
    tecnologia: 0,
    dados: 0,
    ia: 0,
    governanca: 0,
  };

  const dimensionCounts: Record<DimensionKey, number> = {
    atendimento: 0,
    comercial: 0,
    operacoes: 0,
    tecnologia: 0,
    dados: 0,
    ia: 0,
    governanca: 0,
  };

  const questionMap = new Map<string, ScanQuestion>();
  for (const q of QUESTIONS) {
    questionMap.set(q.id, q);
  }

  for (const [questionId, answer] of Object.entries(answers)) {
    const question = questionMap.get(questionId);
    if (!question || !question.options) continue;

    if (question.type === "multi") {
      const selectedValues = Array.isArray(answer) ? answer : [];
      for (const val of selectedValues) {
        const option = question.options.find((o) => o.value === val);
        if (!option) continue;
        for (const [dim, score] of Object.entries(option.scores)) {
          dimensionScores[dim as DimensionKey] += score;
          dimensionCounts[dim as DimensionKey]++;
        }
      }
    } else {
      const selectedValue = Array.isArray(answer) ? answer[0] : answer;
      if (!selectedValue) continue;
      const option = question.options.find((o) => o.value === selectedValue);
      if (!option) continue;
      for (const [dim, score] of Object.entries(option.scores)) {
        dimensionScores[dim as DimensionKey] += score;
        dimensionCounts[dim as DimensionKey]++;
      }
    }
  }

  const dimensions: DimensionScore[] = [];
  let totalPercentage = 0;
  let dimCount = 0;

  for (const dim of Object.keys(dimensionScores) as DimensionKey[]) {
    const max = maxPossible[dim] || 1;
    const rawScore = dimensionScores[dim];
    const normalizedMax = Math.max(1, maxPossible[dim] || rawScore || 1);
    const percentage = Math.round((rawScore / normalizedMax) * 100);

    if (dimensionCounts[dim] > 0) {
      totalPercentage += percentage;
      dimCount++;
    }

    dimensions.push({
      dimension: dim,
      label: DIMENSION_LABELS[dim],
      score: rawScore,
      maxScore: max,
      percentage: Math.min(100, percentage),
      description: getDimensionDescription(dim, Math.min(100, percentage)),
    });
  }

  const overallScore = dimCount > 0 ? Math.round(totalPercentage / dimCount) : 0;

  const { maturityLevel, maturityLabel } = getMaturityLevel(overallScore);

  const opportunities = generateOpportunities(dimensions, answers);
  const roadmap = generateRoadmap(dimensions, opportunities);
  const estimatedSavings = calculateSavings(answers, dimensions);

  const companyName = (answers["companyName"] as string) || "Sua Empresa";
  const companySegment = findSegmentLabel(answers["segmento"] as string);

  return {
    overallScore,
    maturityLevel,
    maturityLabel,
    dimensions,
    opportunities,
    roadmap,
    estimatedSavings,
    companyName,
    companySegment,
  };
}

function getMaturityLevel(score: number): { maturityLevel: string; maturityLabel: string } {
  if (score <= 29) return { maturityLevel: "iniciante", maturityLabel: "Iniciante" };
  if (score <= 49) return { maturityLevel: "em_evolucao", maturityLabel: "Em Evolução" };
  if (score <= 74) return { maturityLevel: "avancado", maturityLabel: "Avançado" };
  if (score <= 89) return { maturityLevel: "otimizado", maturityLabel: "Otimizado" };
  return { maturityLevel: "lider", maturityLabel: "Líder em IA" };
}

function getDimensionDescription(dim: DimensionKey, percentage: number): string {
  const descriptions: Record<DimensionKey, [string, string, string]> = {
    atendimento: [
      "O atendimento é manual e sem padronização. Há grande oportunidade de automação com chatbot e IA.",
      "O atendimento possui alguma estrutura, mas ainda depende de intervenção humana para tarefas repetitivas.",
      "Atendimento bem estruturado, com canais definidos e potencial para IA generativa avançada.",
    ],
    comercial: [
      "Processo comercial depende de memória e esforço individual. CRM e follow-up são as principais lacunas.",
      "O comercial tem processos básicos, mas carece de automação na qualificação e follow-up de leads.",
      "Processo comercial maduro, com CRM integrado e potencial para SDR virtual com IA.",
    ],
    operacoes: [
      "Operações intensivas em trabalho manual e planilhas. Alto potencial de automação com n8n e workflows.",
      "Operações com automações pontuais, mas ainda com retrabalho e baixa integração entre sistemas.",
      "Operações eficientes, com sistemas integrados. Pronta para dashboards inteligentes e IA preditiva.",
    ],
    tecnologia: [
      "Stack tecnológico básico ou inexistente. Necessário estruturar base antes de automatizar.",
      "Stack tecnológico funcional, mas sem integração. Oportunidade de conectar sistemas via API e n8n.",
      "Stack tecnológico moderno e integrado. Pronta para camada de IA e automação avançada.",
    ],
    dados: [
      "Dados descentralizados em planilhas e anotações. Base de dados não estruturada para IA.",
      "Dados parcialmente organizados, mas sem analytics. Potencial para dashboards e BI.",
      "Dados estruturados e acessíveis. Pronta para IA analítica e modelos preditivos.",
    ],
    ia: [
      "IA ainda não é utilizada. Há grande potencial em todas as áreas da empresa.",
      "IA utilizada de forma pontual e informal. Oportunidade de estruturar uma estratégia integrada.",
      "IA já é parte das operações. Pronta para agentes autônomos e orquestração avançada.",
    ],
    governanca: [
      "Processos sem documentação ou padronização. Dificulta qualquer iniciativa de automação.",
      "Governança em desenvolvimento, com alguns processos documentados. Base para escalar automações.",
      "Governança bem estruturada com processos documentados e KPIs definidos. Pronta para MSP de IA.",
    ],
  };

  if (percentage <= 35) return descriptions[dim][0];
  if (percentage <= 70) return descriptions[dim][1];
  return descriptions[dim][2];
}

function generateOpportunities(
  dimensions: DimensionScore[],
  _answers: Answers
): Opportunity[] {
  const allOpportunities: Opportunity[] = [
    {
      id: 1,
      title: "Automatizar Atendimento via WhatsApp",
      impact: 5,
      difficulty: 2,
      priority: "Alta",
      description:
        "Implementar um agente de IA para responder dúvidas frequentes, confirmar consultas e fazer pré-atendimento 24/7 no WhatsApp.",
      roiEstimate: "Redução de 60% no tempo de primeira resposta e economia de 40+ horas/mês da equipe.",
    },
    {
      id: 2,
      title: "Implantar SDR Virtual com IA",
      impact: 5,
      difficulty: 3,
      priority: "Alta",
      description:
        "Agente de IA que qualifica leads automaticamente, agenda reuniões e registra tudo no CRM — 24 horas por dia.",
      roiEstimate: "Aumento de 20-40% na conversão de leads e follow-up garantido para 100% dos contatos.",
    },
    {
      id: 3,
      title: "Integrar WhatsApp ao CRM",
      impact: 4,
      difficulty: 2,
      priority: "Alta",
      description:
        "Conectar WhatsApp Business API ao CRM para que cada mensagem gere automaticamente um lead com histórico completo.",
      roiEstimate: "Fim da digitação manual e redução de 5-10 min por lead no cadastro.",
    },
    {
      id: 4,
      title: "Automatizar Propostas e Orçamentos",
      impact: 4,
      difficulty: 2,
      priority: "Média",
      description:
        "Gerar propostas comerciais automaticamente a partir de dados do CRM, com templates personalizados e envio automático.",
      roiEstimate: "Redução de 70% no tempo de elaboração de propostas.",
    },
    {
      id: 5,
      title: "Criar Dashboard Gerencial Inteligente",
      impact: 3,
      difficulty: 2,
      priority: "Média",
      description:
        "Centralizar dados de atendimento, vendas e operações em dashboards visuais com atualização em tempo real.",
      roiEstimate: "Decisões baseadas em dados, redução de 30% no tempo de análise gerencial.",
    },
    {
      id: 6,
      title: "Automatizar Follow-up de Leads",
      impact: 4,
      difficulty: 1,
      priority: "Alta",
      description:
        "Sequência automática de mensagens no WhatsApp e e-mail para leads que não avançaram no funil.",
      roiEstimate: "Recuperação de 15-25% dos leads que seriam perdidos por falta de follow-up.",
    },
    {
      id: 7,
      title: "Integrar ERP + CRM + WhatsApp",
      impact: 5,
      difficulty: 4,
      priority: "Média",
      description:
        "Criar um ecossistema onde dados fluem automaticamente entre ERP, CRM e canais de atendimento, eliminando retrabalho.",
      roiEstimate: "Economia de 100+ horas/mês em retrabalho e dupla digitação.",
    },
    {
      id: 8,
      title: "Automatizar Emissão de Boletos e Cobranças",
      impact: 3,
      difficulty: 2,
      priority: "Média",
      description:
        "Workflow automático para emissão, envio e cobrança de boletos com lembretes programados via WhatsApp.",
      roiEstimate: "Redução de 50% na inadimplência e economia de 20 horas/mês no financeiro.",
    },
    {
      id: 9,
      title: "Diagnóstico de IA Estratégico",
      impact: 3,
      difficulty: 1,
      priority: "Alta",
      description:
        "Análise completa de 15-20 processos da empresa para identificar todas as oportunidades de automação com ROI priorizado.",
      roiEstimate: "Roadmap claro de onde investir primeiro para obter o maior retorno em IA.",
    },
  ];

  const sorted = [...allOpportunities].sort((a, b) => {
    const scoreA = a.impact * 2 - a.difficulty;
    const scoreB = b.impact * 2 - b.difficulty;
    return scoreB - scoreA;
  });

  return sorted.slice(0, 5);
}

function generateRoadmap(
  dimensions: DimensionScore[],
  opportunities: Opportunity[]
): RoadmapPhase[] {
  const lowest = [...dimensions].sort((a, b) => a.percentage - b.percentage);

  return [
    {
      label: "Quick Wins",
      timeframe: "Próximos 30 dias",
      items: [
        opportunities[0]?.title || "Diagnóstico de IA",
        "Integrar WhatsApp ao CRM (Automação Express)",
        "Configurar respostas automáticas no WhatsApp",
      ],
    },
    {
      label: "Automações",
      timeframe: "Próximos 60 dias",
      items: [
        opportunities[1]?.title || "Automatizar follow-up de leads",
        "Implementar dashboard de vendas em tempo real",
        `Estruturar processos de ${lowest[0]?.label || "atendimento"}`,
      ],
    },
    {
      label: "Agentes de IA",
      timeframe: "Próximos 90 dias",
      items: [
        "Implantar SDR Virtual com IA para qualificação de leads",
        "Criar agente de IA para atendimento 24/7",
        "Automatizar integração ERP + CRM",
      ],
    },
    {
      label: "MSP de IA",
      timeframe: "Próximos 180 dias",
      items: [
        "Gestão contínua de automações (MSP de IA)",
        "Expansão de agentes de IA para novos canais",
        "IA preditiva para tomada de decisão estratégica",
      ],
    },
  ];
}

function calculateSavings(
  answers: Answers,
  dimensions: DimensionScore[]
): { currentHours: number; afterAutomationHours: number; savedHours: number; savedPercentage: number } {
  const colaboradores = answers["colaboradores"] as string;
  const volumeAtendimento = answers["volume_atendimentos"] as string;

  let baseHours = 160;

  switch (colaboradores) {
    case "1-5": baseHours = 80; break;
    case "6-20": baseHours = 160; break;
    case "21-50": baseHours = 320; break;
    case "51-200": baseHours = 600; break;
    case "200+": baseHours = 1200; break;
  }

  let volumeMultiplier = 1;
  switch (volumeAtendimento) {
    case "<10": volumeMultiplier = 0.5; break;
    case "10-50": volumeMultiplier = 1; break;
    case "50-200": volumeMultiplier = 1.5; break;
    case "200+": volumeMultiplier = 2; break;
  }

  const currentHours = Math.round(baseHours * volumeMultiplier);

  const avgScore =
    dimensions.reduce((sum, d) => sum + d.percentage, 0) /
    Math.max(1, dimensions.length);

  const reductionFactor = avgScore < 30 ? 0.15 : avgScore < 50 ? 0.25 : avgScore < 70 ? 0.35 : 0.40;
  const savedHours = Math.round(currentHours * reductionFactor);
  const afterAutomationHours = currentHours - savedHours;
  const savedPercentage = Math.round((savedHours / Math.max(1, currentHours)) * 100);

  return {
    currentHours,
    afterAutomationHours,
    savedHours,
    savedPercentage,
  };
}

function findSegmentLabel(value: string): string {
  if (!value) return "";
  const q = QUESTIONS.find((q) => q.id === "segmento");
  const opt = q?.options?.find((o) => o.value === value);
  return opt?.label || value;
}
