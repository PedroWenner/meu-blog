import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLng = localStorage.getItem("lng") || "pt";

const resources = {
  pt: {
    translation: {
      name: "Pedro Wenner",
      role: "Desenvolvedor full-stack",
      nav: {
        about: "Sobre",
        projects: "Projetos",
        experience: "Experiência",
        skills: "Habilidades",
        contact: "Contato",
      },
      about:
        "Desenvolvedor Full-Stack com sólida experiência em desenvolvimento back-end. (C#, .NET, ASP.NET Core) e front-end (React, Vue.js). Especialista em desenvolvimento mobile multiplataforma com Flutter e .NET MAUI, além de automação de processos e sistemas ERP/legados (TLPP/ADVPL). Com uma carreira focada em transformar desafios complexos em soluções tecnológicas eficientes, possuo expertise em bancos de dados SQL e NoSQL, microsserviços com Node.js (NestJS) e ferramentas de automação como n8n. Comprometido com a entrega de código limpo, bem arquitetado e alinhado aos objetivos de negócio, buscando atuar como líder técnico e contribuir para a estratégia de inovação.",
      experience: {
        intro:
          "Ao longo da minha carreira, atuei em diferentes contextos e responsabilidades. Abaixo um resumo das experiências.",
        activitiesTitle: "Principais Atividades:",
        techsTitle: "Tecnologias Utilizadas:",
        present: "Presente",
        monthsShort: [
          "Jan",
          "Fev",
          "Mar",
          "Abr",
          "Mai",
          "Jun",
          "Jul",
          "Ago",
          "Set",
          "Out",
          "Nov",
          "Dez",
        ],
        items: {
          builders: {
            role: "Backend Developer Pleno",
            summary:
              "Atuação como Desenvolvedor Backend no ecossistema .NET/C#, construindo e mantendo microsserviços escaláveis e soluções em nuvem.",
            activities: [
              "Desenvolvimento de microsserviços com .NET Core e .NET 6+",
              "Cache distribuído com Redis",
              "Integrações via MuleSoft",
              "Deploy e gestão na Google Cloud Platform (GCP)",
              "Arquitetura backend de alta disponibilidade",
              "Práticas de DevOps e CI/CD",
            ],
          },
          agenda: {
            role: "Desenvolvedor Full Stack",
            summary:
              "Desenvolvimento full stack de aplicações web, com desenho de APIs e front-end reativo.",
            activities: [
              "Criação de APIs REST",
              "Integrações com serviços internos",
              "Melhorias de performance e monitoramento",
              "Apoio em pipelines de CI/CD",
            ],
          },
          agro: {
            role: "Analista de Suporte",
            summary:
              "Suporte técnico e automação de rotinas internas, com foco em confiabilidade e documentação.",
            activities: [
              "Atendimento de chamados",
              "Automação de tarefas",
              "Documentação de processos",
              "Análise de incidentes",
            ],
          },
        },
      },
      skills: {
        intro:
          "As tecnologias e ferramentas que domino e utilizo em meus projetos.",
        categories: {
          backend: "Backend",
          frontend: "Frontend",
          mobile: "Mobile",
          devops: "DevOps & Tools",
        },
        items: {
          ".net": ".NET / .NET Core",
          csharp: "C#",
          aspnet: "ASP.NET",
          efcore: "Entity Framework",
          sqlserver: "SQL Server",
          postgres: "PostgreSQL",
          mongodb: "MongoDB",
          redis: "Redis",
          docker: "Docker",
          k8s: "Kubernetes",
          node: "Node.js",
          nestjs: "NestJS",
          prisma: "Prisma",
          react: "React",
          ts: "TypeScript",
          js: "JavaScript",
          html: "HTML5",
          css: "CSS3",
          mui: "Material UI",
          vite: "Vite",
          webpack: "Webpack",
          zod: "Zod",
          flutter: "Flutter",
          dart: "Dart",
          reactnative: "React Native",
          git: "Git",
          github: "GitHub",
          gitlab: "GitLab",
          azdevops: "Azure DevOps",
          aws: "AWS",
          linux: "Linux",
          bash: "Bash",
          n8n: "n8n",
          advpl: "ADVPL",
          php: "PHP",
          laravel: "Laravel",
          angular: "Angular",
          vue: "Vue.Js",
        },
      },
      contact: {
        title: "Contato",
        intro:
          "Entre em contato comigo através dos canais abaixo. Estou sempre aberto a novas oportunidades e conversas sobre tecnologia.",
        cta: "Clique para acessar",
        items: {
          email: { title: "Email" },
          linkedin: { title: "LinkedIn" },
          github: { title: "GitHub" },
          tiktok: { title: "TikTok" },
        },
      },
      projects: {
        intro: "Abaixo alguns projetos recentes. Em breve adiciono mais detalhes e cases.",
        btn: { github: "Ver no GitHub", nuget: "Ver no NuGet", live: "Acessar" },
        breadcrumb: { home: "Início", projects: "Projetos" },
        detail: {
          technologies: "Tecnologias:",
          about: "Sobre o Projeto",
          features: "Principais Funcionalidades"
        },
        items: {
          toolsharp: {
            title: "ToolSharp",
            desc: "Extensões para tarefas assíncronas. Biblioteca de utilitários para Task em .NET.",
            about:
              "ToolSharp é uma biblioteca leve de métodos de extensão para Task em .NET, projetada para simplificar o uso de tarefas assíncronas com mais segurança, clareza e menos código repetitivo. Ela permite executar tarefas de forma desacoplada (fire-and-forget) com tratamento de erros integrado, possibilitando aplicações assíncronas mais limpas e robustas.",
            features: {
              0: "Métodos de extensão para Task",
              1: "Execução desacoplada (fire-and-forget)",
              2: "Tratamento de erros integrado",
              3: "Código mais limpo e seguro"
            }
          }
        }
      },
    },
  },
  en: {
    translation: {
      name: "Pedro Wenner",
      role: "Full-stack developer",
      nav: {
        about: "About",
        projects: "Projects",
        experience: "Experience",
        skills: "Skills",
        contact: "Contact",
      },
      about:
        "Full-Stack Developer with solid experience in back-end development (C#, .NET, ASP.NET Core) and front-end (React, Vue.js). Specialist in cross-platform mobile development with Flutter and .NET MAUI, plus process automation and ERP/legacy systems (TLPP/ADVPL). With a career focused on transforming complex challenges into efficient technological solutions, I have expertise in SQL and NoSQL databases, microservices with Node.js (NestJS) and automation tools like n8n. Committed to delivering clean, well-architected code aligned with business objectives, seeking to act as a technical leader and contribute to innovation strategy.",
      experience: {
        intro:
          "Throughout my career, I have worked in different contexts and responsibilities. Below is a summary of my experience.",
        activitiesTitle: "Main Activities:",
        techsTitle: "Technologies Used:",
        present: "Present",
        monthsShort: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        items: {
          builders: {
            role: "Backend Developer (Mid-level)",
            summary:
              "Backend development in the .NET/C# ecosystem, building and maintaining scalable microservices and cloud solutions.",
            activities: [
              "Developing microservices with .NET Core and .NET 6+",
              "Distributed caching with Redis",
              "Integrations using MuleSoft",
              "Deploying and operating on Google Cloud Platform (GCP)",
              "High-availability backend architecture",
              "DevOps practices and CI/CD",
            ],
          },
          agenda: {
            role: "Full Stack Developer",
            summary:
              "Full-stack web development, API design and reactive front-end.",
            activities: [
              "Building REST APIs",
              "Integrating with internal services",
              "Performance improvements and monitoring",
              "Supporting CI/CD pipelines",
            ],
          },
          agro: {
            role: "Support Analyst",
            summary:
              "Technical support and automation of internal processes, focused on reliability and documentation.",
            activities: [
              "Handling support tickets",
              "Task automation",
              "Process documentation",
              "Incident analysis",
            ],
          },
        },
      },
      skills: {
        intro: "Technologies and tools I use and master in my projects.",
        categories: {
          backend: "Backend",
          frontend: "Frontend",
          mobile: "Mobile",
          devops: "DevOps & Tools",
        },
        items: {
          ".net": ".NET / .NET Core",
          csharp: "C#",
          aspnet: "ASP.NET",
          efcore: "Entity Framework",
          sqlserver: "SQL Server",
          postgres: "PostgreSQL",
          mongodb: "MongoDB",
          redis: "Redis",
          docker: "Docker",
          k8s: "Kubernetes",
          node: "Node.js",
          nestjs: "NestJS",
          prisma: "Prisma",
          react: "React",
          ts: "TypeScript",
          js: "JavaScript",
          html: "HTML5",
          css: "CSS3",
          mui: "Material UI",
          vite: "Vite",
          webpack: "Webpack",
          zod: "Zod",
          flutter: "Flutter",
          dart: "Dart",
          reactnative: "React Native",
          git: "Git",
          github: "GitHub",
          gitlab: "GitLab",
          azdevops: "Azure DevOps",
          aws: "AWS",
          linux: "Linux",
          bash: "Bash",
          n8n: "n8n",
          advpl: "ADVPL",
          php: "PHP",
          laravel: "Laravel",
          angular: "Angular",
          vue: "Vue.Js",
        },
      },
      contact: {
        title: "Contact",
        intro:
          "Get in touch through the channels below. I'm always open to new opportunities and tech discussions.",
        cta: "Click to open",
        items: {
          email: { title: "Email" },
          linkedin: { title: "LinkedIn" },
          github: { title: "GitHub" },
          tiktok: { title: "TikTok" },
        },
      },
      projects: {
        intro: "Here are a few recent projects. More details and case studies coming soon.",
        btn: { github: "View on GitHub", nuget: "View on NuGet", live: "Open" },
        breadcrumb: { home: "Home", projects: "Projects" },
        detail: {
          technologies: "Technologies:",
          about: "About the Project",
          features: "Key Features"
        },
        items: {
          toolsharp: {
            title: "ToolSharp",
            desc: "Async task extensions. Utility library for Task in .NET.",
            about:
              "ToolSharp is a lightweight extension library for .NET Task designed to make async usage safer and clearer with less boilerplate. It enables fire-and-forget execution with integrated error handling, leading to cleaner and more robust async apps.",
            features: {
              0: "Extension methods for Task",
              1: "Fire-and-forget execution",
              2: "Integrated error handling",
              3: "Cleaner and safer code"
            }
          }
        }
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: savedLng,
  fallbackLng: "pt",
  interpolation: { escapeValue: false },
});

export default i18n;
