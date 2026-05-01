import avatarImage from "@/assets/avatar_me.png";
import cvFile from "@/assets/Curriculo_Gabriel_Erick_Santos.pdf";
import planixImage from "@/assets/planix.png";
import olistImage from "@/assets/dashboard_olist.jpeg";
import logisticImage from "@/assets/logistic.png";
import saasPulseImage from "@/assets/saasPulse.jpg";
import pipelineImage from "@/assets/finance_dashboard.png";
import opinionImage from "@/assets/opinion.jpg";
import skysyncImage from "@/assets/skysync.jpg";

export type NavSection = {
  label: string;
  href: string;
};

export type HeroStat = {
  label: string;
  value: number;
  suffix?: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type TimelineItem = {
  icon: string;
  period: string;
  title: string;
  description: string;
};

export type SkillCategoryId = "all" | "frontend" | "backend" | "data" | "tools";

export type Skill = {
  iconImage: string;
  name: string;
  level: string;
  progress: number;
  tag: string;
};

export type SkillCategory = {
  id: Exclude<SkillCategoryId, "all">;
  label: string;
  skills: Skill[];
};

export type ProjectFilterId = "all" | "fullstack" | "data" | "automation";

export type ProjectMetric = {
  value: string;
  label: string;
};

export type ProjectMedia = {
  type: "image" | "video";
  src: string;
  poster?: string;
};

export type PortfolioProject = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  emoji: string;
  description: string;
  summary: string;
  metrics: ProjectMetric[];
  features: string[];
  tech: string[];
  filters: ProjectFilterId[];
  isFeatured: boolean;
  isComingSoon?: boolean;
  githubUrl?: string;
  demoUrl?: string;
  cardImage: string;
  modalMedia?: ProjectMedia;
};

export type ProjectFilter = {
  id: ProjectFilterId;
  label: string;
};

export type Article = {
  id: string;
  icon: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  href?: string;
  isComingSoon?: boolean;
};

export type ContactChannel = {
  id: "email" | "linkedin" | "github";
  label: string;
  value: string;
  href: string;
};

export const resumeFile = cvFile;
export const heroAvatar = avatarImage;

export const navSections: NavSection[] = [
  { label: "Sobre", href: "#about" },
  { label: "Habilidades", href: "#skills" },
  { label: "Projetos", href: "#projects" },
  { label: "Artigos", href: "#articles" },
  { label: "Contato", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/GabrielSantos777" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gabriel-santos-880200249",
  },
  { label: "Email", href: "mailto:gabrielsantos.erick@outlook.com" },
];

export const heroStats: HeroStat[] = [
  { label: "Projetos entregues", value: 6 },
  { label: "Tecnologias dominadas", value: 12 },
  { label: "Anos de idade", value: 22 },
  { label: "Anos de experiência", value: 2, suffix: "+" },
];

export const aboutTimeline: TimelineItem[] = [
  {
    icon: "🎓",
    period: "2022 - Presente",
    title: "Ciências da Computação",
    description:
      "Estudando algoritmos, estruturas de dados, sistemas distribuídos e engenharia de software.",
  },
  {
    icon: "💼",
    period: "2023 - Presente",
    title: "Desenvolvedor Full Stack",
    description:
      "Desenvolvimento end-to-end de aplicações web com foco em performance e escalabilidade.",
  },
  {
    icon: "📊",
    period: "2024 - Presente",
    title: "Data & Analytics",
    description:
      "Especialização em análise de dados, BI, modelagem preditiva e visualização de dados.",
  },
  {
    icon: "🤖",
    period: "2025 - Presente",
    title: "IA & Automação",
    description:
      "Explorando LLMs, RAG e automação inteligente com n8n e LangChain.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      {
        iconImage: "/skills/html-5.svg",
        name: "HTML5",
        level: "Avançado",
        progress: 92,
        tag: "Frontend",
      },
      {
        iconImage: "/skills/css.svg",
        name: "CSS3",
        level: "Avançado",
        progress: 92,
        tag: "Frontend",
      },
      {
        iconImage: "/skills/tailwindcss-icon.svg",
        name: "Tailwind CSS",
        level: "Avançado",
        progress: 85,
        tag: "Frontend",
      },
      {
        iconImage: "/skills/javascript.svg",
        name: "JavaScript",
        level: "Avançado",
        progress: 88,
        tag: "Frontend",
      },
      {
        iconImage: "/skills/react.svg",
        name: "React",
        level: "Avançado",
        progress: 90,
        tag: "Frontend",
      },
      {
        iconImage: "/skills/nextjs-icon.svg",
        name: "Next.js",
        level: "Intermediário",
        progress: 70,
        tag: "Frontend",
      },
      {
        iconImage: "/skills/typescript-icon.svg",
        name: "TypeScript",
        level: "Intermediário",
        progress: 70,
        tag: "Frontend",
      },
      {
        iconImage: "/skills/bootstrap.svg",
        name: "Bootstrap",
        level: "Avançado",
        progress: 88,
        tag: "Frontend",
      },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      {
        iconImage: "/skills/python.svg",
        name: "Python",
        level: "Avançado",
        progress: 85,
        tag: "Backend",
      },
      {
        iconImage: "/skills/php.svg",
        name: "PHP",
        level: "Avançado",
        progress: 85,
        tag: "Backend",
      },
      {
        iconImage: "/skills/nodejs-icon.svg",
        name: "Node.js",
        level: "Intermediário",
        progress: 50,
        tag: "Backend",
      },
      {
        iconImage: "/skills/go.svg",
        name: "GO",
        level: "Iniciante",
        progress: 25,
        tag: "Backend",
      },
      {
        iconImage: "/skills/docker-icon.svg",
        name: "Docker",
        level: "Intermediário",
        progress: 55,
        tag: "Backend",
      },
      {
        iconImage: "/skills/nestjs.svg",
        name: "NestJS",
        level: "Intermediário",
        progress: 50,
        tag: "Backend",
      },
      {
        iconImage: "/skills/sql.svg",
        name: "SQL",
        level: "Avançado",
        progress: 85,
        tag: "Backend",
      },
      {
        iconImage: "/skills/postgresql.svg",
        name: "PostgreSQL",
        level: "Avançado",
        progress: 85,
        tag: "Backend",
      },
      {
        iconImage: "/skills/mysql.svg",
        name: "MySQL",
        level: "Avançado",
        progress: 85,
        tag: "Backend",
      },
      {
        iconImage: "/skills/prisma.svg",
        name: "Prisma",
        level: "Avançado",
        progress: 85,
        tag: "Backend",
      },
      {
        iconImage: "/skills/firebase-icon.svg",
        name: "Firebase",
        level: "Avançado",
        progress: 85,
        tag: "Backend",
      },
      {
        iconImage: "/skills/supabase-icon.svg",
        name: "Supabase",
        level: "Intermediário",
        progress: 85,
        tag: "Backend",
      },
    ],
  },
  {
    id: "data",
    label: "Data & Analytics",
    skills: [
      {
        iconImage: "/skills/python.svg",
        name: "Python",
        level: "Avançado",
        progress: 88,
        tag: "Data Analysis",
      },
      {
        iconImage: "/skills/sql.svg",
        name: "SQL",
        level: "Avançado",
        progress: 88,
        tag: "Data Analysis",
      },
      {
        iconImage: "/skills/dax.svg",
        name: "DAX",
        level: "Avançado",
        progress: 88,
        tag: "Data Analysis",
      },
      {
        iconImage: "/skills/microsoft-power-bi.svg",
        name: "Power BI",
        level: "Avançado",
        progress: 88,
        tag: "Data Analysis",
      },
      {
        iconImage: "/skills/tableau-icon.svg",
        name: "Tableau",
        level: "Avançado",
        progress: 88,
        tag: "Data Analysis",
      },
      {
        iconImage: "/skills/jupyter.svg",
        name: "Jupyter",
        level: "Avançado",
        progress: 88,
        tag: "Data Science",
      },
      {
        iconImage: "/skills/streamlit.svg",
        name: "Streamlit",
        level: "Intermediário",
        progress: 72,
        tag: "Data Apps",
      },
      {
        iconImage: "/skills/machine-learning.svg",
        name: "Machine Learning",
        level: "Intermediário",
        progress: 75,
        tag: "Data Science",
      },
    ],
  },
  {
    id: "tools",
    label: "Ferramentas",
    skills: [
      {
        iconImage: "/skills/git-icon.svg",
        name: "Git & GitHub",
        level: "Avançado",
        progress: 90,
        tag: "Tooling",
      },
      {
        iconImage: "/skills/n8n.svg",
        name: "n8n",
        level: "Intermediário",
        progress: 78,
        tag: "Automation",
      },
      {
        iconImage: "/skills/ocr-nlp.svg",
        name: "OCR & NLP",
        level: "Intermediário",
        progress: 65,
        tag: "AI Tools",
      },
      {
        iconImage: "/skills/restapi.svg",
        name: "REST APIs",
        level: "Avançado",
        progress: 88,
        tag: "Integration",
      },
      {
        iconImage: "/skills/vite-icon-dark.svg",
        name: "Vite",
        level: "Intermediário",
        progress: 70,
        tag: "Tooling",
      },
    ],
  },
];

export const projectFilters: ProjectFilter[] = [
  { id: "all", label: "Todos" },
  { id: "fullstack", label: "Full Stack" },
  { id: "data", label: "Data & BI" },
  { id: "automation", label: "Automação" },
];

export const projects: PortfolioProject[] = [
  {
    id: "planix",
    title: "Planix",
    subtitle: "// plataforma de gestão financeira",
    category: "Full Stack - Produto Web",
    emoji: "",
    description:
      "Plataforma completa de gestão financeira pessoal e empresarial. Controle de despesas, relatórios automáticos, OCR de recibos e automação com n8n.",
    summary:
      "Plataforma completa de gestão financeira pessoal e empresarial desenvolvida com React, TypeScript e Supabase.",
    metrics: [
      { value: "98%", label: "Precisão OCR" },
      { value: "<1s", label: "Tempo de carga" },
      { value: "3x", label: "Produtividade" },
    ],
    features: [
      "Dashboard financeiro em tempo real com gráficos interativos.",
      "OCR para captura automática de despesas de recibos e notas fiscais.",
      "Automação de relatórios periódicos e notificações com n8n.",
      "Controle de orçamentos por categoria com alertas de limite.",
      "Exportação de dados em PDF e CSV com filtros avançados.",
      "Autenticação segura com Row Level Security no Supabase.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Recharts",
      "React Query",
      "Supabase",
      "PostgreSQL",
      "Edge Functions",
      "n8n",
      "OCR",
    ],
    filters: ["fullstack", "automation"],
    isFeatured: true,
    githubUrl: "https://github.com/GabrielSantos777/planix",
    demoUrl: "https://planix.space/landing",
    cardImage: planixImage,
    modalMedia: { type: "video", src: "/project-media/planix-demo.mp4" },
  },
  {
    id: "olist",
    title: "Olist E-commerce Analytics",
    subtitle: "// análise de 100k+ pedidos",
    category: "Data Analytics - Business Intelligence",
    emoji: "",
    description:
      "Business Intelligence aplicado ao dataset de 100k+ pedidos com análise preditiva, segmentação RFM e dashboard executivo no Power BI.",
    summary:
      "Projeto completo de Business Intelligence e análise preditiva no dataset público do e-commerce Olist.",
    metrics: [
      { value: "100k+", label: "Registros processados" },
      { value: "R$16M", label: "Receita analisada" },
      { value: "94k", label: "Clientes segmentados" },
    ],
    features: [
      "Pipeline ETL com Python e Pandas para limpeza e transformação de 9 datasets.",
      "Análise RFM para segmentação de 94 mil clientes.",
      "Feature engineering para modelagem preditiva de churn.",
      "Dashboard executivo no Power BI com métricas financeiras e logísticas.",
      "Análise de sentimentos de reviews com NLP.",
      "Storytelling de dados com visualizações interativas.",
    ],
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Jupyter Notebook",
      "Power BI",
      "DAX",
      "Análise RFM",
      "Feature Engineering",
      "Git",
      "Data Storytelling",
    ],
    filters: ["data"],
    isFeatured: true,
    githubUrl:
      "https://github.com/GabrielSantos777/Analise_dados_ecommerce_Olist",
    cardImage: olistImage,
    modalMedia: { type: "image", src: "/project-media/olist-detail.svg" },
  },
  {
    id: "logistic-analise-vendas",
    title: "Painel de Analise de Vendas",
    subtitle: "// dashboard full-stack com filtros dinamicos",
    category: "Data Analytics - Business Intelligence",
    emoji: "",
    description:
      "Dashboard analitico full-stack com React + FastAPI para explorar vendas, clientes, produtos e performance por pais em um dataset historico.",
    summary:
      "Projeto de BI aplicado a dados de vendas, com API analitica em FastAPI, transformacoes em pandas e visualizacoes interativas no frontend.",
    metrics: [
      { value: "2.823", label: "Registros processados" },
      { value: "US$10.03M", label: "Receita analisada" },
      { value: "307", label: "Pedidos analisados" },
    ],
    features: [
      "Pipeline de limpeza e tipagem com pandas (datas e tratamento de valores ausentes).",
      "API FastAPI com endpoints de KPIs, receita mensal, categorias, top produtos, top clientes e vendas por pais.",
      "Filtros globais por periodo, categoria e pais aplicados em todos os widgets.",
      "KPIs principais: receita total, total de pedidos, ticket medio e clientes unicos.",
      "Visualizacoes interativas com Recharts para analise temporal e comparativa.",
      "Carregamento otimizado com Promise.all no frontend e cache do dataset com lru_cache no backend.",
      "Layout responsivo com estados de loading (skeleton) e tratamento de erro amigavel.",
      "Ambiente containerizado com Docker e Docker Compose para execucao local.",
    ],
    tech: [
      "React 19",
      "Vite",
      "JavaScript (ESM)",
      "Axios",
      "Recharts",
      "FastAPI",
      "Python",
      "pandas",
      "Docker",
      "Docker Compose",
    ],
    filters: ["data"],
    isFeatured: false,
    githubUrl: "https://github.com/GabrielSantos777/logistic_analise_vendas",
    cardImage: logisticImage,
    modalMedia: {
      type: "video",
      src: "/public/project-media/logisticVideo.mp4",
    },
  },
  {
    id: "saas",
    title: "SaaS Pulse",
    subtitle: "// inteligência de negócio para SaaS",
    category: "Data & BI - Python",
    emoji: "",
    description:
      "BI para monitoramento de MRR, churn e métricas de saúde financeira para plataformas SaaS.",
    summary:
      "Sistema de Business Intelligence focado no monitoramento de métricas vitais para SaaS.",
    metrics: [
      { value: "MRR", label: "Monitoramento" },
      { value: "Churn", label: "Análise detalhada" },
      { value: "100%", label: "Automatizado" },
    ],
    features: [
      "Simulação de eventos de clientes com Faker.",
      "Motor de métricas para MRR e ticket médio.",
      "Análise detalhada de churn rate.",
      "Dashboard interativo com filtros dinâmicos.",
      "Visualização de tendências históricas.",
    ],
    tech: ["Python", "Pandas", "Streamlit", "Plotly", "Faker", "NumPy"],
    filters: ["data"],
    isFeatured: false,
    githubUrl:
      "https://github.com/GabrielSantos777/Pulse_Monitor_de_Metricas_Criticas",
    cardImage: saasPulseImage,
    modalMedia: { type: "image", src: "/project-media/saas-detail.svg" },
  },
  {
    id: "pipeline",
    title: "Pipeline Financeiro",
    subtitle: "// engenharia de dados em produção",
    category: "Data Engineering - Full Stack",
    emoji: "",
    description:
      "Engenharia de dados para coleta e monitoramento automatizado de séries temporais USD/BRL.",
    summary:
      "Solução completa de engenharia de dados para coleta, armazenamento e monitoramento financeiro automatizado.",
    metrics: [
      { value: "24/7", label: "Monitoramento" },
      { value: "USD/BRL", label: "Série temporal" },
      { value: "Auto", label: "Alertas" },
    ],
    features: [
      "Coleta automatizada via API de câmbio com agendamento cron.",
      "Armazenamento relacional com SQLAlchemy.",
      "Dashboard em tempo real com Plotly Dash.",
      "Alertas por email para variações significativas.",
      "Logging detalhado e tratamento de erros para robustez.",
    ],
    tech: ["Python", "Plotly Dash", "Pandas", "SQLAlchemy", "REST API"],
    filters: ["data", "automation"],
    isFeatured: false,
    githubUrl:
      "https://github.com/GabrielSantos777/FluxGuard_financeira_pipeline",
    cardImage: pipelineImage,
    modalMedia: { type: "image", src: "/project-media/pipeline-detail.svg" },
  },
  {
    id: "opinion",
    title: "OpiniON",
    subtitle: "// análise de sentimentos com NLP",
    category: "NLP - Data Science",
    emoji: "",
    description:
      "Análise e visualização de sentimentos de comentários de produtos usando NLP.",
    summary:
      "Projeto para coletar, analisar e visualizar comentários de produtos com técnicas de NLP.",
    metrics: [
      { value: "NLP", label: "Processamento" },
      { value: "3", label: "Classes de sentimento" },
      { value: "Visual", label: "Dashboard" },
    ],
    features: [
      "Coleta de comentários via scraping e APIs.",
      "Análise de sentimentos com VADER.",
      "Visualização de distribuição por sentimento.",
      "Word cloud e análise de frequência de termos.",
      "Interface interativa para exploração dos resultados.",
    ],
    tech: ["Python", "VADER", "NLP", "Pandas", "Matplotlib", "Seaborn"],
    filters: ["data"],
    isFeatured: false,
    githubUrl: "https://github.com/GabrielSantos777/OpiniON",
    cardImage: opinionImage,
    modalMedia: { type: "image", src: "/project-media/opinion-detail.svg" },
  },
  {
    id: "skysync",
    title: "SkySync",
    subtitle: "// clima em tempo real",
    category: "Full Stack - Web App",
    emoji: "",
    description:
      "Aplicação web que exibe condições climáticas de cidades no mundo inteiro em tempo real.",
    summary:
      "Aplicação web que mostra temperatura, umidade, vento e previsão com API meteorológica.",
    metrics: [
      { value: "196", label: "Países suportados" },
      { value: "Real-time", label: "Dados ao vivo" },
      { value: "Fast", label: "Resposta da API" },
    ],
    features: [
      "Integração com API de clima em tempo real.",
      "Busca por nome de cidade.",
      "Exibição de temperatura, umidade e vento.",
      "Interface responsiva para desktop e mobile.",
      "Histórico de buscas e geolocalização.",
    ],
    tech: ["JavaScript", "HTML5", "CSS3", "REST API"],
    filters: ["fullstack"],
    isFeatured: false,
    githubUrl: "https://github.com/GabrielSantos777/SkySync",
    cardImage: skysyncImage,
    modalMedia: { type: "image", src: "/project-media/skysync-detail.svg" },
  },
  {
    id: "rag-assistant",
    title: "RAG Assistant",
    subtitle: "// em breve",
    category: "AI Engineering",
    emoji: "",
    description:
      "Assistente inteligente com LangChain, embeddings e base de conhecimento personalizada.",
    summary:
      "Em breve - assistente inteligente com recuperação e geração para consultas especializadas.",
    metrics: [],
    features: [],
    tech: ["LangChain", "OpenAI", "FastAPI"],
    filters: ["automation", "fullstack"],
    isFeatured: false,
    isComingSoon: true,
    cardImage: "/project-media/rag-cover.svg",
    modalMedia: { type: "image", src: "/project-media/rag-detail.svg" },
  },
  {
    id: "etl-pipeline",
    title: "ETL Pipeline",
    subtitle: "// em breve",
    category: "Data Engineering",
    emoji: "🔧",
    description:
      "Pipeline de dados com Airflow, dbt e BigQuery para análise de dados públicos.",
    summary:
      "Em breve - pipeline de engenharia de dados orientado a analytics.",
    metrics: [],
    features: [],
    tech: ["Airflow", "dbt", "BigQuery"],
    filters: ["data", "automation"],
    isFeatured: false,
    isComingSoon: true,
    cardImage: "/project-media/etl-cover.svg",
    modalMedia: { type: "image", src: "/project-media/etl-detail.svg" },
  },
];

export const articles: Article[] = [
  {
    id: "rfm",
    icon: "📊",
    category: "Data Analytics",
    title:
      "Análise RFM: como segmentei 94 mil clientes e aumentei a assertividade do marketing",
    excerpt:
      "Um walkthrough da análise RFM aplicada ao dataset da Olist, com código Python e visualizações no Power BI.",
    readTime: "8 min de leitura",
    href: "#",
  },
  {
    id: "planix-architecture",
    icon: "⚛️",
    category: "Full Stack",
    title:
      "Arquitetando um app financeiro com React, Supabase e Edge Functions",
    excerpt:
      "As decisões de arquitetura por trás do Planix, do banco de dados ao frontend.",
    readTime: "12 min de leitura",
    href: "#",
  },
  {
    id: "n8n",
    icon: "🤖",
    category: "Automação",
    title:
      "Como automatizei meu workflow de dados com n8n e salvei 10h por semana",
    excerpt:
      "Guia prático para construir pipelines de automação que processam e notificam em tempo real.",
    readTime: "6 min de leitura",
    href: "#",
  },
  {
    id: "power-bi",
    icon: "📈",
    category: "Business Intelligence",
    title:
      "Power BI do zero ao avançado: DAX, modelagem e storytelling com dados",
    excerpt:
      "Aprendizados na construção de dashboards de BI para e-commerce e métricas SaaS.",
    readTime: "15 min de leitura",
    href: "#",
  },
  {
    id: "pandas",
    icon: "🐍",
    category: "Python & Data",
    title:
      "Pandas além do básico: técnicas avançadas para análise de grandes datasets",
    excerpt:
      "Chunk processing, otimização de memória e operações vetorizadas em datasets de 100k+ registros.",
    readTime: "10 min de leitura",
    href: "#",
  },
  {
    id: "rag-article",
    icon: "✏️",
    category: "Em breve",
    title: "Construindo um assistente RAG com LangChain e OpenAI do zero",
    excerpt:
      "Um guia completo para criar sistemas de recuperação e geração com LLMs, embeddings e vector databases.",
    readTime: "Em escrita",
    isComingSoon: true,
  },
];

export const contactChannels: ContactChannel[] = [
  {
    id: "email",
    label: "Email",
    value: "gabrielsantos.erick@outlook.com",
    href: "mailto:gabrielsantos.erick@outlook.com",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/gabriel-santos-880200249",
    href: "https://www.linkedin.com/in/gabriel-santos-880200249",
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/GabrielSantos777",
    href: "https://github.com/GabrielSantos777",
  },
];
