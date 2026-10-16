export interface Experience {
  id: string;
  company: string;
  role: string;
  i18nKey: string;
  period: { start: string; end?: string };
  summary: string;
  activities: string[];
  techs: string[];
  color?: string;
}

export const experiences: Experience[] = [
  {
    id: "builders",
    company: "Platform Builders",
    role: "Backend Developer Pleno",
    i18nKey: "experience.items.builders",
    period: { start: "2025-01" },
    summary:
      "Atuação como Desenvolvedor Backend no ecossistema .NET/C#, construindo e mantendo microsserviços escaláveis e soluções em nuvem.",
    activities: [
      "Desenvolvimento de microsserviços com .NET Core e .NET 6+",
      "Cache distribuído com Redis",
      "Integrações via MuleSoft",
      "Deploy e gestão na Google Cloud Platform (GCP)",
      "Arquitetura backend robusta e de alta disponibilidade",
      "Colaboração com práticas de DevOps e CI/CD",
    ],
    techs: [
      ".NET",
      "C#",
      "Redis",
      "MuleSoft",
      "Google Cloud",
      "Docker",
      "Kubernetes",
    ],
    color: "#1e88e5",
  },
  {
    id: "agenda",
    company: "Agenda Assessoria",
    role: "Desenvolvedor Full Stack",
    i18nKey: "experience.items.agenda",
    period: { start: "2024-10", end: "2025-01" },
    summary:
      "Desenvolvimento full stack de aplicações web, colaborando no desenho de APIs e front-end reativo.",
    activities: [
      "Criação de APIs REST",
      "Integração com serviços internos",
      "Melhorias de performance e monitoramento",
      "Apoio em CI/CD",
    ],
    techs: [".NET", "C#", "SQL Server", "React", "TypeScript"],
  },
  {
    id: "agro",
    company: "Agro Amazônia PA S.A.",
    role: "Analista de Suporte",
    i18nKey: "experience.items.agro",
    period: { start: "2021-01", end: "2024-10" },
    summary:
      "Suporte técnico e automação de rotinas internas, com foco em confiabilidade e documentação.",
    activities: [
      "Atendimento de chamados",
      "Automação de tarefas",
      "Documentação de processos",
      "Análise de incidentes",
    ],
    techs: ["ITSM", "Windows Server", "PowerShell"],
  },
];
