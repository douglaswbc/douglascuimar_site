import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  const content = `# Douglas Cuimar — Automação e IA para PMEs

> Implantamos Inteligência Artificial que atende clientes, automatiza processos e integra seus sistemas. Especialistas em n8n, agentes de IA e integração de sistemas para pequenas e médias empresas no Brasil.

## Serviços

- [Diagnóstico de IA](https://douglascuimar.com.br/servicos): Análise completa dos processos e roadmap de automação com estimativa de ROI.
- [Automação Express](https://douglascuimar.com.br/servicos): Implementação rápida de automações pontuais em até 7 dias.
- [Agentes Inteligentes](https://douglascuimar.com.br/servicos): Criação de agentes de IA para atendimento, vendas e suporte 24/7.
- [MSP de IA](https://douglascuimar.com.br/servicos): Gestão contínua de automações e agentes de IA como serviço.

## Setores

- [IA para Clínicas](https://douglascuimar.com.br/setores/clinicas): Confirmação de consultas, recuperação de pacientes e pré-atendimento.
- [IA para Óticas](https://douglascuimar.com.br/setores/oticas): Agendamento, lembretes e campanhas personalizadas.
- [IA para Advogados](https://douglascuimar.com.br/setores/advogados): Triagem de casos, documentos e atendimento 24/7.
- [IA para Contabilidade](https://douglascuimar.com.br/setores/contabilidade): Coleta de documentos, conciliação e emissão de guias.
- [IA para Imobiliárias](https://douglascuimar.com.br/setores/imobiliarias): Qualificação de leads, visitas e contratos.

## Blog

- [Como Automatizar o Atendimento de uma Clínica com IA em 2026](https://douglascuimar.com.br/blog/como-automatizar-atendimento-clinica-com-ia): Confirmação automática, pré-atendimento e recuperação de pacientes.
- [Como integrar WhatsApp ao CRM](https://douglascuimar.com.br/blog/integrar-whatsapp-crm): Guia prático com webhook, n8n e IA.
- [Como reduzir significativamente o tempo de atendimento com IA](https://douglascuimar.com.br/blog/reduzir-tempo-atendimento-com-ia): Diagnóstico, automação e indicadores de atendimento.
- [Como criar um SDR virtual com IA](https://douglascuimar.com.br/blog/sdr-virtual-com-ia): Qualificação de leads e follow-up automático 24/7.
- [Quanto custa implantar IA em uma empresa?](https://douglascuimar.com.br/blog/quanto-custa-implantar-ia): Guia completo de investimento e ROI por setor.
- [Meta Business Agent vs Agente de IA Personalizado](https://douglascuimar.com.br/blog/meta-business-agent-vs-agente-personalizado): Comparativo técnico e quando investir.

## Conteúdo

- [Blog](https://douglascuimar.com.br/blog): Centro de conhecimento sobre IA e automação para PMEs.
- [FAQ](https://douglascuimar.com.br/faq): Perguntas frequentes sobre custo, prazo e funcionamento.
- [Recursos](https://douglascuimar.com.br/recursos): Guias, planilhas e materiais gratuitos.
- [Sobre](https://douglascuimar.com.br/sobre): Quem é Douglas Cuimar — n8n Expert e especialista em IA Generativa.
- [Contato](https://douglascuimar.com.br/contato): Solicite um diagnóstico gratuito.
- [RSS do Blog](https://douglascuimar.com.br/rss.xml)
- [Sitemap](https://douglascuimar.com.br/sitemap.xml)

## Contato

- WhatsApp: +55 11 99414-2485
- Email: contato@douglascuimar.com.br
- Instagram: https://www.instagram.com/douglas_cuimar
- YouTube: https://www.youtube.com/@douglas_cuimar
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
