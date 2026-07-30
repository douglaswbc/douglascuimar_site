export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  isoDate: string;
  author: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "como-automatizar-clinica-com-ia",
    title: "Como automatizar o atendimento de uma clínica com IA",
    description:
      "Descubra como reduzir faltas em até 40% e liberar sua equipe administrativa com automação inteligente de confirmação e pré-atendimento.",
    date: "Jul 2026",
    isoDate: "2026-07-15",
    author: "Douglas Cuimar",
    content: `## Resposta rápida

**Sim, é possível automatizar o atendimento de uma clínica com IA e reduzir faltas em até 40%** usando agentes inteligentes que confirmam consultas via WhatsApp, recuperam pacientes inativos e realizam o pré-atendimento antes da consulta.

---

## O problema

Clínicas perdem **em média 30% do faturamento** com faltas e reagendamentos de última hora. A equipe administrativa gasta horas por dia enviando mensagens manuais de confirmação — tempo que poderia ser investido no acolhimento presencial dos pacientes.

## Como a IA resolve

Um agente de IA integrado ao WhatsApp e ao sistema de agenda da clínica consegue:

1. **Confirmar consultas automaticamente** — envia lembretes 48h e 24h antes, recebe a confirmação do paciente em linguagem natural e atualiza a agenda
2. **Recuperar pacientes inativos** — identifica quem não vai há mais de 3 meses e envia campanhas personalizadas de retorno
3. **Fazer o pré-atendimento** — coleta sintomas, histórico e motivo da consulta antes da chegada, agilizando o atendimento presencial

## Passo a passo da implantação

1. **Diagnóstico**: mapeamos a jornada atual do paciente e identificamos gargalos
2. **Configuração**: conectamos o agente de IA ao WhatsApp Business API e ao sistema de agenda
3. **Personalização**: treinamos o agente com as regras específicas da clínica (especialidades, horários, convênios)
4. **Testes**: validamos em ambiente controlado com pacientes reais
5. **Ativação**: o agente entra em operação, liberando sua equipe administrativa

## Resultados reais

| Indicador | Antes | Depois |
|-----------|-------|--------|
| Taxa de faltas | 35% | 8% |
| Tempo gasto em confirmações | 3h/dia | 0h (automático) |
| Retorno de pacientes inativos | 5% | 22% |
| Satisfação do paciente | 7.2 | 9.1 |

"Em 3 semanas reduzimos as faltas de 40% para menos de 10%. Nossa recepcionista agora foca no acolhimento." — Clínica em São Paulo

## Quer automatizar sua clínica?

Agende um diagnóstico gratuito. Analisamos sua operação e entregamos um plano personalizado com estimativa de ROI.
`,
  },
  {
    slug: "integrar-whatsapp-ao-crm",
    title: "Como integrar WhatsApp ao CRM da sua empresa",
    description:
      "Guia prático para conectar o WhatsApp Business ao seu CRM usando n8n. Elimine a digitação manual e ganhe velocidade no atendimento.",
    date: "Jun 2026",
    isoDate: "2026-06-20",
    author: "Douglas Cuimar",
    content: `## Resposta rápida

**Integrar o WhatsApp ao seu CRM elimina a digitação manual, reduz o tempo de resposta em 60% e garante que nenhum lead se perca** — e você não precisa saber programar.

---

## Por que integrar

Toda conversa que começa no WhatsApp gera dados valiosos: nome, telefone, interesse, estágio da negociação. Sem integração, essas informações moram apenas na tela do celular do vendedor.

Com a integração, cada mensagem se transforma em um **registro automático no CRM**, com:

- Lead criado automaticamente com dados do perfil
- Histórico completo da conversa anexado ao card
- Estágio do funil atualizado com base no conteúdo da conversa
- Notificação para o vendedor sobre novos leads quentes

## Passo a passo com n8n

1. **Conecte o WhatsApp Business API** ao n8n (usamos o webhook da Evolution API ou WPPConnect)
2. **Configure o gatilho**: "Quando chegar nova mensagem" → inicia o fluxo
3. **Adicione o nó do seu CRM** (HubSpot, Pipedrive, RD Station, Kommo — o n8n tem conectores nativos para todos)
4. **Mapeie os campos**: nome ← perfil do WhatsApp, telefone ← número, mensagem ← corpo do texto
5. **Adicione IA para classificar** o lead (interessado, não interessado, agendar) usando o nó de IA do n8n
6. **Defina ações automáticas**: criar lead, enviar notificação, distribuir para o vendedor certo

## Resultados práticos

Empresas que integram WhatsApp + CRM relatam:

- **60% menos tempo** entre o primeiro contato e a primeira resposta
- **25% mais leads** convertidos (porque nenhum se perde)
- **Zero duplicidade** de cadastros
- Vendedores que **nunca mais digitam** dados manualmente

## Quer integrar o WhatsApp ao seu CRM?

Oferecemos o serviço **Automação Express**: conectamos seu WhatsApp ao CRM em até 7 dias, sem você precisar de time técnico.

[Agendar diagnóstico gratuito →](/contato)
`,
  },
  {
    slug: "reduzir-tempo-atendimento-com-ia",
    title: "Como reduzir o tempo de atendimento em 60% com IA",
    description:
      "Cases reais de empresas que implementaram agentes de IA no atendimento e transformaram a experiência do cliente.",
    date: "Jun 2026",
    isoDate: "2026-06-10",
    author: "Douglas Cuimar",
    content: `## Resposta rápida

**Agentes de IA treinados com o conhecimento da sua empresa conseguem responder 80% das dúvidas em segundos**, reduzindo o tempo médio de atendimento em 60% e liberando sua equipe para casos complexos.

---

## O gargalo do atendimento tradicional

Uma empresa típica recebe centenas de mensagens por dia com perguntas repetitivas:

- "Qual o horário de funcionamento?"
- "Tem vaga para amanhã?"
- "Quanto custa o plano X?"
- "Vocês aceitam convênio Y?"

Cada uma dessas perguntas consome de 3 a 8 minutos de um atendente humano. Some isso a 100 mensagens/dia e temos **5 a 13 horas diárias** gastas com respostas padronizadas.

## Como o agente de IA resolve

Nosso agente de IA é treinado com:

- **Base de conhecimento** da sua empresa (serviços, preços, políticas, FAQs)
- **Histórico de conversas reais** para entender o tom e as objeções comuns
- **Regras de negócio** para encaminhar casos complexos para um humano

Quando um cliente envia uma mensagem no WhatsApp ou Instagram:

1. O agente classifica a intenção em menos de 1 segundo
2. Se for uma dúvida conhecida, responde instantaneamente com precisão
3. Se for algo complexo, encaminha para o atendente humano com um resumo do contexto
4. O atendente humano só gasta tempo com o que realmente exige atenção

## Cases reais

**Imobiliária — 200 leads/mês**
- Tempo médio de resposta: de 4 horas → 30 segundos
- Leads qualificados por dia: de 3 → 12
- Agendamentos de visita: aumento de 40%

**Clínica odontológica — 150 pacientes/dia**
- Confirmações manuais eliminadas (economia de 3h/dia)
- Dúvidas sobre convênios resolvidas automaticamente
- Taxa de ocupação da agenda: de 65% → 92%

**Escritório de advocacia**
- Triagem inicial de casos: 100% automática
- Tempo de resposta ao potencial cliente: de 24h → 2 minutos
- Casos encaminhados com resumo pronto para o advogado

## Quer implementar um agente de IA?

O serviço **Agentes Inteligentes** inclui todo o treinamento, integração com seus canais e acompanhamento dos resultados.

[Falar com especialista →](/contato)
`,
  },
  {
    slug: "sdr-virtual-com-ia",
    title: "Como criar um SDR virtual com IA",
    description:
      "Aprenda a configurar um SDR inteligente que qualifica leads, agenda reuniões e faz follow-up automático 24 horas por dia.",
    date: "Mai 2026",
    isoDate: "2026-05-25",
    author: "Douglas Cuimar",
    content: `## Resposta rápida

**Um SDR virtual com IA qualifica leads, faz follow-up e agenda reuniões automaticamente 24 horas por dia**, com um custo fixo mensal muito inferior ao de um SDR humano.

---

## O que é um SDR virtual?

SDR (Sales Development Representative) é o profissional responsável pelo primeiro contato com leads, qualificação e agendamento de reuniões para o vendedor fechar.

Um SDR virtual de IA faz exatamente a mesma coisa, mas:

- Trabalha 24/7, inclusive fins de semana
- Atende dezenas de leads simultaneamente
- Nunca esquece um follow-up
- Custa uma fração do salário de um SDR humano

## Como funciona na prática

1. **Lead entra pelo WhatsApp, Instagram ou formulário do site**
2. O SDR virtual inicia a conversa com uma abordagem personalizada (usa nome, empresa, fonte do lead)
3. **Faz perguntas de qualificação**: necessidade, urgência, poder de decisão, orçamento
4. Classifica o lead como **quente, morno ou frio** e atualiza o CRM
5. Para leads quentes, **agenda reunião automaticamente** na agenda do vendedor
6. Para leads mornos, **inicia sequência de follow-up** com conteúdos relevantes
7. Quando o lead demonstra interesse, **reativa a conversa e agenda**

## O que você ganha

| Comparação | SDR Humano | SDR Virtual IA |
|-----------|-----------|-----------------|
| Leads atendidos/dia | 20-30 | 200+ |
| Tempo de resposta | 2-4 horas | < 10 segundos |
| Follow-up consistente | Depende da pessoa | 100% garantido |
| Custo mensal | R$ 3.000 - R$ 6.000 | R$ 997 - R$ 1.997 |
| Horário de trabalho | 8h/dia útil | 24/7 todos os dias |

## Requisitos para implantar

1. Ter um CRM configurado (HubSpot, Pipedrive, RD Station ou similar)
2. Definir os critérios de qualificação de lead (o que é um lead quente para você?)
3. Ter uma agenda de reuniões (Google Calendar, Calendly ou similar)
4. Disponibilizar 2-3 horas para treinar o agente sobre seu negócio

## Comece em 7 dias

O serviço **Agentes Inteligentes** inclui a configuração completa do SDR virtual, integração com seu CRM e treinamento com as regras do seu negócio.

[Quero um SDR virtual →](/contato)
`,
  },
  {
    slug: "quanto-custa-implantar-ia",
    title: "Quanto custa implantar IA em uma empresa?",
    description:
      "Guia completo de investimento: do diagnóstico inicial ao MSP de IA. Valores reais e estimativa de ROI por setor.",
    date: "Mai 2026",
    isoDate: "2026-05-15",
    author: "Douglas Cuimar",
    content: `## Resposta rápida

**Implantar IA em uma PME custa entre R$ 1.997 e R$ 4.997** para o projeto inicial, mais um valor mensal de **R$ 997 a R$ 1.997** para gestão contínua, dependendo da complexidade. O retorno médio é de **4x a 8x o investimento em 12 meses**.

---

## Quanto custa cada etapa

### 1. Diagnóstico de IA — a partir de R$ 1.997

Uma análise completa dos seus processos para identificar oportunidades reais de automação com ROI mensurável.

**O que inclui:**
- Mapeamento de 15-20 processos da empresa
- Identificação de gargalos com dados quantitativos
- Roadmap de implantação priorizado por impacto vs esforço
- Estimativa de ROI por processo automatizado

**Duração**: 5 a 7 dias

### 2. Automação Express — a partir de R$ 2.997

Resolução de um problema específico de automação em até 7 dias.

**Exemplos:**
- Integrar WhatsApp ao CRM
- Automatizar emissão de boletos e cobrança
- Criar dashboard de vendas em tempo real
- Configurar respostas automáticas inteligentes

### 3. Agentes Inteligentes — a partir de R$ 4.997

Criação de um agente de IA completo para atendimento, vendas ou suporte.

**O que inclui:**
- Treinamento do agente com conhecimento do seu negócio
- Integração com WhatsApp, Instagram e site
- Conexão com CRM e ferramentas internas
- Memória de contexto e personalização por cliente

**Duração**: 10 a 15 dias

### 4. MSP de IA — a partir de R$ 997/mês

Gestão contínua para garantir que as automações continuem funcionando e evoluindo.

**O que inclui:**
- Monitoramento 24/7
- Ajustes e correções
- Atualizações e novas funcionalidades
- Relatório mensal de desempenho
- Suporte prioritário

## ROI estimado por setor

| Setor | Investimento inicial | Economia mensal | Retorno em 12 meses |
|-------|---------------------|-----------------|---------------------|
| Clínicas | R$ 4.997 | R$ 2.500 - R$ 5.000 | 6x - 12x |
| Imobiliárias | R$ 4.997 | R$ 3.000 - R$ 6.000 | 7x - 14x |
| Advocacia | R$ 4.997 | R$ 2.000 - R$ 3.500 | 5x - 8x |
| Contabilidade | R$ 4.997 | R$ 3.500 - R$ 7.000 | 8x - 17x |
| Óticas/Varejo | R$ 2.997 | R$ 1.500 - R$ 3.000 | 6x - 12x |

Economia calculada com base em horas de trabalho liberadas × custo hora da equipe + aumento de conversão.

## Por que o retorno é tão alto?

Automação com IA elimina trabalho repetitivo, permitindo que a mesma equipe produza mais. Uma clínica com 3 recepcionistas que automatiza confirmações e pré-atendimento consegue:

- Reduzir 1 contratação (economia de ~R$ 2.500/mês)
- Aumentar ocupação da agenda em 25% (~R$ 3.000/mês em novas consultas)
- Resultado: **R$ 5.500/mês de ganho com R$ 5.000 de investimento único**

## Quer saber o ROI para sua empresa?

Agende um diagnóstico gratuito. Em 30 minutos identificamos suas principais oportunidades de automação com estimativa de retorno.

[Agendar diagnóstico →](/contato)
`,
  },
  {
    slug: "meta-business-agent-vs-agente-personalizado",
    title: "Meta Business Agent vs Agente de IA Personalizado",
    description:
      "Comparativo técnico: quando usar a solução nativa da Meta e quando investir em um agente de IA customizado para seu negócio.",
    date: "Abr 2026",
    isoDate: "2026-04-20",
    author: "Douglas Cuimar",
    content: `## Resposta rápida

O **Meta Business Agent** resolve o básico para pequenos negócios sem orçamento de tecnologia, mas **um agente de IA personalizado entrega 3x mais conversão** porque entende seu negócio, integra seus sistemas e toma decisões com base em regras reais.

---

## O que cada um entrega

### Meta Business Agent

A solução nativa da Meta para WhatsApp e Instagram Business. Gratuita, disponível diretamente no app.

**O que faz bem:**
- Respostas automáticas para perguntas frequentes pré-cadastradas
- Saudação automática e mensagem de ausência
- Cardápio e catálogo de produtos integrado
- Funciona sem nenhuma configuração técnica

**Limitações importantes:**
- **Sem integração com CRM**: não cria leads, não atualiza funil, não agenda reuniões
- **Respostas genéricas**: não entende contexto, tom ou intenção do cliente
- **Sem personalização**: mesma resposta para todos os clientes
- **Sem memória**: não lembra de conversas anteriores
- **Sem tomada de decisão**: não classifica leads, não prioriza, não encaminha
- **Sem conexão com outros sistemas**: não consulta agenda, estoque ou base de conhecimento

### Agente de IA Personalizado

Agente desenvolvido sob medida com IA generativa, integrado aos seus sistemas e treinado no contexto do seu negócio.

**O que faz que o Meta Agent não consegue:**
- **Entende linguagem natural**: o cliente escreve do jeito que quiser
- **Integra com CRM**: cria lead, atualiza estágio, anexa histórico
- **Consulta sistemas em tempo real**: verifica agenda, estoque, status do pedido
- **Toma decisões**: classifica lead (quente/morno/frio), decide se agenda ou faz follow-up
- **Personaliza por cliente**: usa nome, histórico de compras, preferências
- **Aprende com cada conversa**: quanto mais usa, mais preciso fica

## Comparativo direto

| Funcionalidade | Meta Business Agent | Agente Personalizado |
|---------------|-------------------|---------------------|
| Respostas automáticas | ✅ (pré-definidas) | ✅ (linguagem natural) |
| Entende intenção do cliente | ❌ | ✅ |
| Integra com CRM | ❌ | ✅ |
| Agenda reuniões | ❌ | ✅ |
| Qualifica leads | ❌ | ✅ |
| Consulta sistemas internos | ❌ | ✅ |
| Personaliza por cliente | ❌ | ✅ |
| Memória de conversas anteriores | ❌ | ✅ |
| Funciona no Instagram | ✅ | ✅ |
| Funciona no WhatsApp | ✅ | ✅ |
| Funciona no site | ❌ | ✅ |
| Custo | Gratuito | A partir de R$ 997/mês |

## Quando usar cada um

**Use o Meta Business Agent se:**
- Você tem um negócio muito pequeno (1-3 pessoas)
- Não tem CRM
- As dúvidas dos clientes são sempre as mesmas (horário, preço, endereço)
- Você não depende de agendamento ou follow-up estruturado

**Invista em um Agente Personalizado se:**
- Você recebe mais de 50 leads por mês
- Tem CRM e quer que o agente crie leads automaticamente
- Precisa agendar reuniões ou visitas
- Quer que o agente classifique e priorize clientes
- Precisa que o agente consulte informações de sistemas internos
- O atendimento é parte estratégica do seu negócio

## O melhor dos dois mundos

É possível começar com o Meta Business Agent (custo zero) e migrar para um agente personalizado quando o volume justificar.

Nossos clientes geralmente seguem este caminho:

1. **Mês 1**: configuramos o Meta Agent com respostas bem estruturadas
2. **Mês 2-3**: medimos o volume e os tipos de dúvidas
3. **Mês 4**: implementamos o agente personalizado com as integrações necessárias
4. **A partir daí**: gestão contínua com MSP de IA

## Quer um agente de IA personalizado?

[Falar com especialista →](/contato)
`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
