import avatarImage from "@/assets/avatar_me.png";
import cvFile from "@/assets/Curriculo_Gabriel_Erick_Santos.pdf";
import planixImage from "@/assets/planix.jpeg";
import olistImage from "@/assets/dashboard_olist.jpeg";
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

export type SkillCategoryId = "frontend" | "backend" | "data" | "tools";

export type Skill = {
  icon: string;
  name: string;
  level: string;
  progress: number;
  tag: string;
};

export type SkillCategory = {
  id: SkillCategoryId;
  label: string;
  skills: Skill[];
};

export type ProjectFilterId = "all" | "fullstack" | "data" | "automation";

export type ProjectMetric = {
  value: string;
  label: string;
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
  image?: string;
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
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projects" },
  { label: "Artigos", href: "#articles" },
  { label: "Contato", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/GabrielSantos777" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gabriel-santos-880200249" },
  { label: "Email", href: "mailto:gabrielsantos.erick@outlook.com" },
];

export const heroStats: HeroStat[] = [
  { label: "Projetos entregues", value: 6 },
  { label: "Tecnologias dominadas", value: 12 },
  { label: "Anos de idade", value: 22 },
  { label: "Anos de experiencia", value: 2, suffix: "+" },
];

export const aboutTimeline: TimelineItem[] = [
  {
    icon: "🎓",
    period: "2022 - Presente",
    title: "Ciencias da Computacao",
    description:
      "Estudando algoritmos, estruturas de dados, sistemas distribuidos e engenharia de software.",
  },
  {
    icon: "💼",
    period: "2023 - Presente",
    title: "Desenvolvedor Full Stack",
    description:
      "Desenvolvimento end-to-end de aplicacoes web com foco em performance e escalabilidade.",
  },
  {
    icon: "📊",
    period: "2024 - Presente",
    title: "Data & Analytics",
    description:
      "Especializacao em analise de dados, BI, modelagem preditiva e visualizacao de dados.",
  },
  {
    icon: "🤖",
    period: "2025",
    title: "IA & Automacao",
    description:
      "Explorando LLMs, RAG e automacao inteligente com n8n e LangChain.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { icon: "⚛️", name: "React", level: "Avancado", progress: 90, tag: "Frontend" },
      { icon: "🎨", name: "HTML5 & CSS3", level: "Avancado", progress: 92, tag: "Frontend" },
      { icon: "⚡", name: "JavaScript", level: "Avancado", progress: 88, tag: "Frontend" },
      { icon: "🎯", name: "TypeScript", level: "Intermediario", progress: 70, tag: "Frontend" },
      { icon: "🌊", name: "Tailwind CSS", level: "Avancado", progress: 85, tag: "Frontend" },
      { icon: "🅱️", name: "Bootstrap", level: "Avancado", progress: 88, tag: "Frontend" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { icon: "🐍", name: "Python", level: "Avancado", progress: 85, tag: "Backend" },
      { icon: "🐘", name: "PHP", level: "Avancado", progress: 80, tag: "Backend" },
      { icon: "🟢", name: "Node.js", level: "Intermediario", progress: 72, tag: "Backend" },
      { icon: "🗄️", name: "SQL", level: "Avancado", progress: 85, tag: "Backend" },
      { icon: "🐘", name: "PostgreSQL", level: "Intermediario", progress: 75, tag: "Backend" },
      { icon: "🔥", name: "Supabase", level: "Intermediario", progress: 70, tag: "Backend" },
    ],
  },
  {
    id: "data",
    label: "Data & Analytics",
    skills: [
      { icon: "📊", name: "Power BI", level: "Avancado", progress: 88, tag: "Data Analysis" },
      { icon: "🐼", name: "Pandas", level: "Avancado", progress: 85, tag: "Data Analysis" },
      { icon: "🔢", name: "NumPy", level: "Intermediario", progress: 78, tag: "Data Analysis" },
      { icon: "📓", name: "Jupyter", level: "Avancado", progress: 88, tag: "Data Science" },
      { icon: "📈", name: "Streamlit", level: "Intermediario", progress: 72, tag: "Data Apps" },
      { icon: "📉", name: "Plotly", level: "Intermediario", progress: 75, tag: "Visualization" },
    ],
  },
  {
    id: "tools",
    label: "Ferramentas",
    skills: [
      { icon: "🔧", name: "Git & GitHub", level: "Avancado", progress: 90, tag: "DevOps" },
      { icon: "🤖", name: "n8n", level: "Intermediario", progress: 78, tag: "Automation" },
      { icon: "🐳", name: "Docker", level: "Basico-Intermediario", progress: 55, tag: "DevOps" },
      { icon: "🔍", name: "OCR & NLP", level: "Intermediario", progress: 65, tag: "AI Tools" },
      { icon: "🌐", name: "REST APIs", level: "Avancado", progress: 88, tag: "Integration" },
      { icon: "📦", name: "Vite / Webpack", level: "Intermediario", progress: 70, tag: "Tooling" },
    ],
  },
];

export const projectFilters: ProjectFilter[] = [
  { id: "all", label: "Todos" },
  { id: "fullstack", label: "Full Stack" },
  { id: "data", label: "Data & BI" },
  { id: "automation", label: "Automacao" },
];

export const projects: PortfolioProject[] = [
  {
    id: "planix",
    title: "Planix",
    subtitle: "// plataforma de gestao financeira",
    category: "Full Stack - Produto Web",
    emoji: "💰",
    description:
      "Plataforma completa de gestao financeira pessoal e empresarial. Controle de despesas, relatorios automaticos, OCR de recibos e automacao com n8n.",
    summary:
      "Plataforma completa de gestao financeira pessoal e empresarial desenvolvida com React, TypeScript e Supabase.",
    metrics: [
      { value: "98%", label: "Precisao OCR" },
      { value: "<1s", label: "Tempo de carga" },
      { value: "3x", label: "Produtividade" },
    ],
    features: [
      "Dashboard financeiro em tempo real com graficos interativos.",
      "OCR para captura automatica de despesas de recibos e notas fiscais.",
      "Automacao de relatorios periodicos e notificacoes com n8n.",
      "Controle de orcamentos por categoria com alertas de limite.",
      "Exportacao de dados em PDF e CSV com filtros avancados.",
      "Autenticacao segura com Row Level Security no Supabase.",
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
    image: planixImage,
  },
  {
    id: "olist",
    title: "Olist E-commerce Analytics",
    subtitle: "// analise de 100k+ pedidos",
    category: "Data Analytics - Business Intelligence",
    emoji: "📊",
    description:
      "Business Intelligence aplicado ao dataset de 100k+ pedidos com analise preditiva, segmentacao RFM e dashboard executivo no Power BI.",
    summary:
      "Projeto completo de Business Intelligence e Analise Preditiva no dataset publico do e-commerce Olist.",
    metrics: [
      { value: "100k+", label: "Registros processados" },
      { value: "R$16M", label: "Receita analisada" },
      { value: "94k", label: "Clientes segmentados" },
    ],
    features: [
      "Pipeline ETL com Python e Pandas para limpeza e transformacao de 9 datasets.",
      "Analise RFM para segmentacao de 94 mil clientes.",
      "Feature engineering para modelagem preditiva de churn.",
      "Dashboard executivo no Power BI com metricas financeiras e logisticas.",
      "Analise de sentimentos de reviews com NLP.",
      "Storytelling de dados com visualizacoes interativas.",
    ],
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Jupyter Notebook",
      "Power BI",
      "DAX",
      "Analise RFM",
      "Feature Engineering",
      "Git",
      "Data Storytelling",
    ],
    filters: ["data"],
    isFeatured: true,
    githubUrl: "https://github.com/GabrielSantos777/Analise_dados_ecommerce_Olist",
    image: olistImage,
  },
  {
    id: "saas",
    title: "SaaS Pulse",
    subtitle: "// inteligencia de negocio para SaaS",
    category: "Data & BI - Python",
    emoji: "📈",
    description:
      "BI para monitoramento de MRR, churn e metricas de saude financeira para plataformas SaaS.",
    summary:
      "Sistema de Business Intelligence focado no monitoramento de metricas vitais para SaaS.",
    metrics: [
      { value: "MRR", label: "Monitoramento" },
      { value: "Churn", label: "Analise detalhada" },
      { value: "100%", label: "Automatizado" },
    ],
    features: [
      "Simulacao de eventos de clientes com Faker.",
      "Motor de metricas para MRR e ticket medio.",
      "Analise detalhada de churn rate.",
      "Dashboard interativo com filtros dinamicos.",
      "Visualizacao de tendencias historicas.",
    ],
    tech: ["Python", "Pandas", "Streamlit", "Plotly", "Faker", "NumPy"],
    filters: ["data"],
    isFeatured: false,
    githubUrl: "https://github.com/GabrielSantos777/Pulse_Monitor_de_Metricas_Criticas",
    image: saasPulseImage,
  },
  {
    id: "pipeline",
    title: "Pipeline Financeiro",
    subtitle: "// engenharia de dados em producao",
    category: "Data Engineering - Full Stack",
    emoji: "🔄",
    description:
      "Engenharia de dados para coleta e monitoramento automatizado de series temporais USD/BRL.",
    summary:
      "Solucao completa de engenharia de dados para coleta, armazenamento e monitoramento financeiro automatizado.",
    metrics: [
      { value: "24/7", label: "Monitoramento" },
      { value: "USD/BRL", label: "Serie temporal" },
      { value: "Auto", label: "Alertas" },
    ],
    features: [
      "Coleta automatizada via API de cambio com agendamento cron.",
      "Armazenamento relacional com SQLAlchemy.",
      "Dashboard em tempo real com Plotly Dash.",
      "Alertas por email para variacoes significativas.",
      "Logging detalhado e tratamento de erros para robustez.",
    ],
    tech: ["Python", "Plotly Dash", "Pandas", "SQLAlchemy", "REST API"],
    filters: ["data", "automation"],
    isFeatured: false,
    githubUrl: "https://github.com/GabrielSantos777/FluxGuard_financeira_pipeline",
    image: pipelineImage,
  },
  {
    id: "opinion",
    title: "OpiniON",
    subtitle: "// analise de sentimentos com NLP",
    category: "NLP - Data Science",
    emoji: "💬",
    description:
      "Analise e visualizacao de sentimentos de comentarios de produtos usando NLP.",
    summary:
      "Projeto para coletar, analisar e visualizar comentarios de produtos com tecnicas de NLP.",
    metrics: [
      { value: "NLP", label: "Processamento" },
      { value: "3", label: "Classes de sentimento" },
      { value: "Visual", label: "Dashboard" },
    ],
    features: [
      "Coleta de comentarios via scraping e APIs.",
      "Analise de sentimentos com VADER.",
      "Visualizacao de distribuicao por sentimento.",
      "Word cloud e analise de frequencia de termos.",
      "Interface interativa para exploracao dos resultados.",
    ],
    tech: ["Python", "VADER", "NLP", "Pandas", "Matplotlib", "Seaborn"],
    filters: ["data"],
    isFeatured: false,
    githubUrl: "https://github.com/GabrielSantos777/OpiniON",
    image: opinionImage,
  },
  {
    id: "skysync",
    title: "SkySync",
    subtitle: "// clima em tempo real",
    category: "Full Stack - Web App",
    emoji: "🌤️",
    description:
      "Aplicacao web que exibe condicoes climaticas de cidades no mundo inteiro em tempo real.",
    summary:
      "Aplicacao web que mostra temperatura, umidade, vento e previsao com API meteorologica.",
    metrics: [
      { value: "196", label: "Paises suportados" },
      { value: "Real-time", label: "Dados ao vivo" },
      { value: "Fast", label: "Resposta da API" },
    ],
    features: [
      "Integracao com API de clima em tempo real.",
      "Busca por nome de cidade.",
      "Exibicao de temperatura, umidade e vento.",
      "Interface responsiva para desktop e mobile.",
      "Historico de buscas e geolocalizacao.",
    ],
    tech: ["JavaScript", "HTML5", "CSS3", "REST API"],
    filters: ["fullstack"],
    isFeatured: false,
    githubUrl: "https://github.com/GabrielSantos777/SkySync",
    image: skysyncImage,
  },
  {
    id: "rag-assistant",
    title: "RAG Assistant",
    subtitle: "// em breve",
    category: "AI Engineering",
    emoji: "🤖",
    description:
      "Assistente inteligente com LangChain, embeddings e base de conhecimento personalizada.",
    summary:
      "Em breve - assistente inteligente com recuperacao e geracao para consultas especializadas.",
    metrics: [],
    features: [],
    tech: ["LangChain", "OpenAI", "FastAPI"],
    filters: ["automation", "fullstack"],
    isFeatured: false,
    isComingSoon: true,
  },
  {
    id: "etl-pipeline",
    title: "ETL Pipeline",
    subtitle: "// em breve",
    category: "Data Engineering",
    emoji: "🔧",
    description:
      "Pipeline de dados com Airflow, dbt e BigQuery para analise de dados publicos.",
    summary:
      "Em breve - pipeline de engenharia de dados orientado a analytics.",
    metrics: [],
    features: [],
    tech: ["Airflow", "dbt", "BigQuery"],
    filters: ["data", "automation"],
    isFeatured: false,
    isComingSoon: true,
  },
];

export const articles: Article[] = [
  {
    id: "rfm",
    icon: "📊",
    category: "Data Analytics",
    title: "Analise RFM: como segmentei 94 mil clientes e aumentei a assertividade do marketing",
    excerpt:
      "Um walkthrough da analise RFM aplicada ao dataset da Olist, com codigo Python e visualizacoes no Power BI.",
    readTime: "8 min de leitura",
    href: "#",
  },
  {
    id: "planix-architecture",
    icon: "⚛️",
    category: "Full Stack",
    title: "Arquitetando um app financeiro com React, Supabase e Edge Functions",
    excerpt:
      "As decisoes de arquitetura por tras do Planix, do banco de dados ao frontend.",
    readTime: "12 min de leitura",
    href: "#",
  },
  {
    id: "n8n",
    icon: "🤖",
    category: "Automacao",
    title: "Como automatizei meu workflow de dados com n8n e salvei 10h por semana",
    excerpt:
      "Guia pratico para construir pipelines de automacao que processam e notificam em tempo real.",
    readTime: "6 min de leitura",
    href: "#",
  },
  {
    id: "power-bi",
    icon: "📈",
    category: "Business Intelligence",
    title: "Power BI do zero ao avancado: DAX, modelagem e storytelling com dados",
    excerpt:
      "Aprendizados na construcao de dashboards de BI para e-commerce e metricas SaaS.",
    readTime: "15 min de leitura",
    href: "#",
  },
  {
    id: "pandas",
    icon: "🐍",
    category: "Python & Data",
    title: "Pandas alem do basico: tecnicas avancadas para analise de grandes datasets",
    excerpt:
      "Chunk processing, otimizacao de memoria e operacoes vetorizadas em datasets de 100k+ registros.",
    readTime: "10 min de leitura",
    href: "#",
  },
  {
    id: "rag-article",
    icon: "✏️",
    category: "Em breve",
    title: "Construindo um assistente RAG com LangChain e OpenAI do zero",
    excerpt:
      "Um guia completo para criar sistemas de recuperacao e geracao com LLMs, embeddings e vector databases.",
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
