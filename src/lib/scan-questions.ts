export interface ScanQuestion {
  id: string;
  category: "perfil" | "atendimento" | "comercial" | "operacoes" | "tecnologia" | "ia";
  text: string;
  type: "single" | "multi" | "number" | "text";
  options?: {
    label: string;
    value: string;
    scores: Partial<Record<DimensionKey, number>>;
  }[];
  maxScore?: number;
}

const DIMENSIONS = [
  "atendimento",
  "comercial",
  "operacoes",
  "tecnologia",
  "dados",
  "ia",
  "governanca",
] as const;

export type DimensionKey = (typeof DIMENSIONS)[number];

export const DIMENSION_LABELS: Record<DimensionKey, string> = {
  atendimento: "Atendimento",
  comercial: "Comercial",
  operacoes: "Operações",
  tecnologia: "Tecnologia",
  dados: "Dados",
  ia: "IA",
  governanca: "Governança",
};

export const QUESTIONS: ScanQuestion[] = [
  // ============ PERFIL ============
  {
    id: "segmento",
    category: "perfil",
    text: "Qual o segmento da sua empresa?",
    type: "single",
    options: [
      { label: "Saúde (Clínicas, Consultórios, Hospitais)", value: "saude", scores: {} },
      { label: "Varejo / Óticas", value: "varejo", scores: {} },
      { label: "Jurídico (Advocacia, Escritórios)", value: "juridico", scores: {} },
      { label: "Contabilidade", value: "contabilidade", scores: {} },
      { label: "Imobiliária", value: "imobiliaria", scores: {} },
      { label: "Tecnologia / SaaS", value: "tecnologia", scores: {} },
      { label: "Indústria", value: "industria", scores: {} },
      { label: "Outro", value: "outro", scores: {} },
    ],
  },
  {
    id: "colaboradores",
    category: "perfil",
    text: "Quantos colaboradores sua empresa possui?",
    type: "single",
    options: [
      { label: "1 a 5", value: "1-5", scores: {} },
      { label: "6 a 20", value: "6-20", scores: {} },
      { label: "21 a 50", value: "21-50", scores: {} },
      { label: "51 a 200", value: "51-200", scores: {} },
      { label: "Mais de 200", value: "200+", scores: {} },
    ],
  },
  {
    id: "faturamento",
    category: "perfil",
    text: "Qual a faixa de faturamento mensal?",
    type: "single",
    options: [
      { label: "Até R$ 30 mil", value: "ate30k", scores: {} },
      { label: "R$ 30 mil a R$ 100 mil", value: "30-100k", scores: {} },
      { label: "R$ 100 mil a R$ 500 mil", value: "100-500k", scores: {} },
      { label: "R$ 500 mil a R$ 1 milhão", value: "500k-1m", scores: {} },
      { label: "Acima de R$ 1 milhão", value: "1m+", scores: {} },
    ],
  },
  {
    id: "tempo_mercado",
    category: "perfil",
    text: "Há quanto tempo a empresa está no mercado?",
    type: "single",
    options: [
      { label: "Menos de 1 ano", value: "<1", scores: {} },
      { label: "1 a 3 anos", value: "1-3", scores: {} },
      { label: "3 a 7 anos", value: "3-7", scores: {} },
      { label: "7 a 15 anos", value: "7-15", scores: {} },
      { label: "Mais de 15 anos", value: "15+", scores: {} },
    ],
  },

  // ============ ATENDIMENTO ============
  {
    id: "whatsapp",
    category: "atendimento",
    text: "A empresa utiliza WhatsApp para atendimento?",
    type: "single",
    options: [
      { label: "Não utiliza", value: "nao", scores: { atendimento: 0 } },
      { label: "WhatsApp pessoal dos colaboradores", value: "pessoal", scores: { atendimento: 1 } },
      { label: "WhatsApp Business (app)", value: "business_app", scores: { atendimento: 2 } },
      { label: "WhatsApp Business API (integrado)", value: "business_api", scores: { atendimento: 4 } },
    ],
  },
  {
    id: "volume_atendimentos",
    category: "atendimento",
    text: "Quantos atendimentos (mensagens) a empresa recebe por dia?",
    type: "single",
    options: [
      { label: "Menos de 10", value: "<10", scores: { atendimento: 1 } },
      { label: "10 a 50", value: "10-50", scores: { atendimento: 2 } },
      { label: "50 a 200", value: "50-200", scores: { atendimento: 3 } },
      { label: "Mais de 200", value: "200+", scores: { atendimento: 4 } },
    ],
  },
  {
    id: "atendimento_fora_horario",
    category: "atendimento",
    text: "A empresa atende fora do horário comercial (noite, fins de semana)?",
    type: "single",
    options: [
      { label: "Não atende", value: "nao", scores: { atendimento: 0 } },
      { label: "Às vezes, de forma reativa", value: "as_vezes", scores: { atendimento: 1 } },
      { label: "Possui plantão de atendimento", value: "plantao", scores: { atendimento: 2 } },
      { label: "Sim, com chatbot ou IA 24/7", value: "ia_24_7", scores: { atendimento: 4, ia: 3 } },
    ],
  },
  {
    id: "equipe_atendimento",
    category: "atendimento",
    text: "Existe uma equipe dedicada ao atendimento?",
    type: "single",
    options: [
      { label: "Não, os próprios sócios atendem", value: "socios", scores: { atendimento: 0, governanca: 0 } },
      { label: "1 pessoa dedicada", value: "1", scores: { atendimento: 2, governanca: 1 } },
      { label: "2 a 5 pessoas dedicadas", value: "2-5", scores: { atendimento: 3, governanca: 2 } },
      { label: "Mais de 5 pessoas", value: "5+", scores: { atendimento: 4, governanca: 3 } },
    ],
  },

  // ============ COMERCIAL ============
  {
    id: "crm",
    category: "comercial",
    text: "A empresa utiliza CRM?",
    type: "single",
    options: [
      { label: "Não utiliza CRM", value: "nao", scores: { comercial: 0, dados: 0 } },
      { label: "Planilha como CRM", value: "planilha", scores: { comercial: 1, dados: 1 } },
      { label: "CRM básico (HubSpot grátis, Pipedrive, etc.)", value: "basico", scores: { comercial: 2, dados: 2 } },
      { label: "CRM completo e integrado", value: "completo", scores: { comercial: 4, dados: 4, tecnologia: 3 } },
    ],
  },
  {
    id: "followup",
    category: "comercial",
    text: "A empresa faz follow-up de leads?",
    type: "single",
    options: [
      { label: "Não faz follow-up", value: "nao", scores: { comercial: 0 } },
      { label: "Faz manualmente, sem regularidade", value: "manual", scores: { comercial: 1 } },
      { label: "Faz manualmente com checklist", value: "checklist", scores: { comercial: 2, governanca: 2 } },
      { label: "Follow-up automatizado (CRM, IA, SDR)", value: "automatizado", scores: { comercial: 4, ia: 3, governanca: 3 } },
    ],
  },
  {
    id: "leads_mes",
    category: "comercial",
    text: "Quantos leads (contatos de potenciais clientes) a empresa recebe por mês?",
    type: "single",
    options: [
      { label: "Menos de 20", value: "<20", scores: { comercial: 1 } },
      { label: "20 a 50", value: "20-50", scores: { comercial: 2 } },
      { label: "50 a 200", value: "50-200", scores: { comercial: 3 } },
      { label: "Mais de 200", value: "200+", scores: { comercial: 4 } },
    ],
  },
  {
    id: "agendamento",
    category: "comercial",
    text: "Como a empresa agenda reuniões com clientes?",
    type: "single",
    options: [
      { label: "Troca de mensagens manual", value: "manual", scores: { comercial: 0, operacoes: 0 } },
      { label: "Agenda compartilhada (Google Calendar, etc.)", value: "calendario", scores: { comercial: 2, operacoes: 2, tecnologia: 2 } },
      { label: "Ferramenta de agendamento online (Calendly, etc.)", value: "ferramenta", scores: { comercial: 3, operacoes: 3, tecnologia: 3 } },
      { label: "Agendamento automatizado com IA", value: "ia", scores: { comercial: 4, operacoes: 4, tecnologia: 3, ia: 4 } },
    ],
  },

  // ============ OPERAÇÕES ============
  {
    id: "processos_manuais",
    category: "operacoes",
    text: "Quantos processos manuais (cópia, cola, digitação repetitiva) a empresa executa diariamente?",
    type: "single",
    options: [
      { label: "Quase tudo é manual", value: "quase_tudo", scores: { operacoes: 0 } },
      { label: "Vários processos manuais", value: "varios", scores: { operacoes: 1 } },
      { label: "Alguns processos manuais", value: "alguns", scores: { operacoes: 2 } },
      { label: "Poucos processos manuais", value: "poucos", scores: { operacoes: 3 } },
      { label: "Quase tudo automatizado", value: "automatizado", scores: { operacoes: 4, governanca: 4 } },
    ],
  },
  {
    id: "planilhas",
    category: "operacoes",
    text: "Qual o nível de dependência de planilhas?",
    type: "single",
    options: [
      { label: "Tudo é controlado por planilhas", value: "tudo", scores: { operacoes: 0, dados: 0 } },
      { label: "Planilhas são a principal ferramenta de gestão", value: "principal", scores: { operacoes: 1, dados: 1 } },
      { label: "Usa planilhas + alguns sistemas", value: "misto", scores: { operacoes: 2, dados: 2 } },
      { label: "Usa sistemas, planilhas são auxiliares", value: "auxiliar", scores: { operacoes: 3, dados: 3 } },
      { label: "Não depende de planilhas", value: "nao_depende", scores: { operacoes: 4, dados: 4, governanca: 3 } },
    ],
  },
  {
    id: "retrabalho",
    category: "operacoes",
    text: "Com que frequência ocorre retrabalho (corrigir erros de digitação, reinserir dados)?",
    type: "single",
    options: [
      { label: "Diariamente, várias vezes", value: "diario", scores: { operacoes: 0 } },
      { label: "Algumas vezes por semana", value: "semanal", scores: { operacoes: 1 } },
      { label: "Raramente", value: "raramente", scores: { operacoes: 2 } },
      { label: "Quase nunca", value: "nunca", scores: { operacoes: 4, governanca: 3 } },
    ],
  },
  {
    id: "integracoes",
    category: "operacoes",
    text: "Os sistemas da empresa são integrados entre si?",
    type: "single",
    options: [
      { label: "Nenhuma integração — sistemas isolados", value: "nenhuma", scores: { operacoes: 0, tecnologia: 0 } },
      { label: "Algumas integrações manuais (exportar/importar)", value: "manuais", scores: { operacoes: 1, tecnologia: 1 } },
      { label: "Integrações pontuais com ferramentas (n8n, Zapier, Make)", value: "pontuais", scores: { operacoes: 2, tecnologia: 2 } },
      { label: "Sistemas integrados via API", value: "api", scores: { operacoes: 3, tecnologia: 3 } },
      { label: "Ecossistema 100% integrado e automatizado", value: "ecossistema", scores: { operacoes: 4, tecnologia: 4, ia: 3 } },
    ],
  },

  // ============ TECNOLOGIA ============
  {
    id: "erp",
    category: "tecnologia",
    text: "A empresa utiliza ERP (sistema de gestão)?",
    type: "single",
    options: [
      { label: "Não utiliza", value: "nao", scores: { tecnologia: 0 } },
      { label: "ERP simples (Bling, Tiny, etc.)", value: "simples", scores: { tecnologia: 1 } },
      { label: "ERP consolidado (Totvs, Sankhya, Omie, etc.)", value: "consolidado", scores: { tecnologia: 3 } },
      { label: "ERP próprio ou altamente customizado", value: "proprio", scores: { tecnologia: 4 } },
    ],
  },
  {
    id: "google_ms",
    category: "tecnologia",
    text: "A empresa utiliza Google Workspace ou Microsoft 365?",
    type: "single",
    options: [
      { label: "Não utiliza", value: "nao", scores: { tecnologia: 0 } },
      { label: "Usa e-mail apenas", value: "email", scores: { tecnologia: 1 } },
      { label: "Usa e-mail + Drive/OneDrive", value: "drive", scores: { tecnologia: 2 } },
      { label: "Usa o pacote completo (Docs, Meet, Teams, etc.)", value: "completo", scores: { tecnologia: 3, governanca: 2 } },
    ],
  },
  {
    id: "site",
    category: "tecnologia",
    text: "A empresa possui site?",
    type: "single",
    options: [
      { label: "Não possui site", value: "nao", scores: { tecnologia: 0 } },
      { label: "Site institucional simples", value: "simples", scores: { tecnologia: 1 } },
      { label: "Site com landing pages e formulários", value: "landing", scores: { tecnologia: 2, comercial: 1 } },
      { label: "Site + blog + SEO estruturado", value: "completo", scores: { tecnologia: 4, comercial: 3 } },
    ],
  },
  {
    id: "ecommerce",
    category: "tecnologia",
    text: "A empresa possui e-commerce ou loja virtual?",
    type: "single",
    options: [
      { label: "Não possui", value: "nao", scores: { tecnologia: 0 } },
      { label: "Marketplace (Mercado Livre, Shopee, etc.)", value: "marketplace", scores: { tecnologia: 1 } },
      { label: "Loja virtual própria", value: "propria", scores: { tecnologia: 3 } },
      { label: "Loja virtual + marketplace integrados", value: "integrado", scores: { tecnologia: 4, operacoes: 2 } },
    ],
  },

  // ============ IA ============
  {
    id: "usa_ia",
    category: "ia",
    text: "A empresa já utiliza Inteligência Artificial?",
    type: "single",
    options: [
      { label: "Não utiliza IA", value: "nao", scores: { ia: 0 } },
      { label: "Usa ChatGPT / Copilot de forma informal", value: "informal", scores: { ia: 1 } },
      { label: "Usa algumas ferramentas com IA (Canva, HubSpot, etc.)", value: "ferramentas", scores: { ia: 2 } },
      { label: "Possui ferramentas próprias com IA integrada", value: "proprias", scores: { ia: 3, tecnologia: 3 } },
      { label: "IA é parte da estratégia da empresa (agentes, automações)", value: "estrategia", scores: { ia: 4, tecnologia: 4, governanca: 3 } },
    ],
  },
  {
    id: "areas_ia",
    category: "ia",
    text: "Em quais áreas a empresa já utiliza ou tem interesse em IA?",
    type: "multi",
    options: [
      { label: "Atendimento ao cliente", value: "atendimento", scores: { ia: 3, atendimento: 2 } },
      { label: "Vendas / Pré-vendas (SDR)", value: "vendas", scores: { ia: 3, comercial: 2 } },
      { label: "Marketing / Criação de conteúdo", value: "marketing", scores: { ia: 2 } },
      { label: "Financeiro / Análise de dados", value: "financeiro", scores: { ia: 2, dados: 2 } },
      { label: "Operações / Automação de processos", value: "operacoes", scores: { ia: 3, operacoes: 2 } },
      { label: "RH / Recrutamento", value: "rh", scores: { ia: 1 } },
      { label: "Nenhuma área específica ainda", value: "nenhuma", scores: { ia: 0 } },
    ],
  },
  {
    id: "dificuldades_ia",
    category: "ia",
    text: "Quais as principais dificuldades para adotar IA?",
    type: "multi",
    options: [
      { label: "Falta de conhecimento técnico", value: "conhecimento", scores: {} },
      { label: "Custo elevado", value: "custo", scores: {} },
      { label: "Não sabe por onde começar", value: "comecar", scores: {} },
      { label: "Resistência da equipe", value: "resistencia", scores: {} },
      { label: "Falta de integração com sistemas atuais", value: "integracao", scores: {} },
      { label: "Preocupação com segurança de dados", value: "seguranca", scores: {} },
    ],
  },
  {
    id: "expectativa_ia",
    category: "ia",
    text: "Qual a principal expectativa com a adoção de IA?",
    type: "single",
    options: [
      { label: "Reduzir custos operacionais", value: "custo", scores: {} },
      { label: "Aumentar produtividade da equipe", value: "produtividade", scores: {} },
      { label: "Melhorar experiência do cliente", value: "experiencia", scores: {} },
      { label: "Aumentar vendas / conversão", value: "vendas", scores: {} },
      { label: "Automatizar processos repetitivos", value: "automatizar", scores: {} },
    ],
  },
];

export function getMaxScores(): Record<DimensionKey, number> {
  const maxScores: Record<DimensionKey, number> = {
    atendimento: 0,
    comercial: 0,
    operacoes: 0,
    tecnologia: 0,
    dados: 0,
    ia: 0,
    governanca: 0,
  };

  for (const q of QUESTIONS) {
    if (!q.options) continue;
    for (const opt of q.options) {
      for (const [dim, score] of Object.entries(opt.scores)) {
        maxScores[dim as DimensionKey] = Math.max(
          maxScores[dim as DimensionKey] || 0,
          score
        );
      }
    }
  }

  return maxScores;
}

export const STEP_LABELS: Record<string, string> = {
  perfil: "Perfil",
  atendimento: "Atendimento",
  comercial: "Comercial",
  operacoes: "Operações",
  tecnologia: "Tecnologia",
  ia: "Inteligência Artificial",
};

export const STEP_ORDER = [
  "perfil",
  "atendimento",
  "comercial",
  "operacoes",
  "tecnologia",
  "ia",
] as const;
