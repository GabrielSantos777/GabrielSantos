import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import planix from "@/assets/planix.jpeg";
import opinion from "@/assets/opinion.jpg";
import skysync from "@/assets/skysync.jpg";
import saasPulse from "@/assets/saasPulse.jpg";
import finance_dashboard from "@/assets/finance_dashboard.png";
import dashboard_olist from "@/assets/dashboard_olist.jpeg";

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "planix",
      title: "Planix",
      description: "Plataforma completa de gestão financeira pessoal e empresarial que permite aos usuários controlar suas finanças de forma inteligente e automatizada.",
      fullDescription: "O sistema oferece controle detalhado de despesas, receitas, investimentos e cartões de crédito, com relatórios avançados e integração com WhatsApp para registro rápido de transações.\n • Controle de múltiplas contas bancárias (corrente, poupança, investimentos).\n • Sistema de metas financeiras. \n • Dashboard interativo com gráficos em tempo real. \n • Bot inteligente para consultas rápidas e Registro de despesas e receitas por mensagem. \n • Automação via n8nBot inteligente para consultas rápida. \n Acesse: https://planix.space/landing",
      image: planix,
      technologies: [
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
        "OCR"
      ],
      githubUrl: "https://github.com/GabrielSantos777/planix",
      demoUrl: "https://planix.space/landing",
      featured: true,
    },
    {
      id: "olist-sales-analysis",
      title: "Olist E-commerce Analytics",
      description: "Projeto completo de Business Intelligence (BI) e Análise Preditiva aplicado ao dataset de vendas do E-commerce Olist, focado em otimização logística e segmentação de clientes.",
      fullDescription: "O sistema transformou nove arquivos brutos de transação em insights acionáveis, culminando em um Dashboard interativo. A análise incluiu o ciclo completo de ETL, Feature Engineering e modelagem estratégica.\n • Segmentação RFM: Identificação e classificação de clientes de alto valor (VIPs) e clientes em risco (Churn Risk).\n • Análise de Tendência: Visualização da sazonalidade de vendas e identificação dos picos de Q4 (Black Friday).\n • Performance Logística: Cálculo do Tempo de Entrega Real vs. Estimado para otimizar a operação.\n • KPIs Robustos: Criação de medidas DAX ultra-seguras (usando SUMX) para garantir a precisão de KPIs como Receita Total (corrigida de R$ 16,4 Milhões) e Ticket Médio, resolvendo problemas complexos de duplicação de dados.\n • ETL e Limpeza de Dados: Consolidação e tratamento de 97.500 pedidos únicos com Python/Pandas.",
      image: dashboard_olist,
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Jupyter Notebook",
        "Power BI",
        "DAX (Data Analysis Expressions)",
        "Análise RFM (Recência, Frequência, Valor Monetário)",
        "Feature Engineering",
        "Git",
        "Data Storytelling"
      ],
      githubUrl: "https://github.com/GabrielSantos777/Analise_dados_ecommerce_Olist",
      demoUrl: "",
      featured: true,
    },
    {
      id: "saas-pulse",
      title: "SaaS Pulse",
      description: "Sistema de Business Intelligence focado no monitoramento de métricas vitais de saúde financeira para plataformas SaaS, como MRR e Churn.",
      fullDescription: "O projeto transforma logs brutos de eventos em inteligência estratégica, permitindo que gestores visualizem o crescimento e a retenção de clientes em tempo real.\n • Simulação estatística de eventos de clientes (assinaturas, upgrades e cancelamentos) usando Faker.\n • Motor de métricas automatizado para cálculo de MRR (Receita Recorrente Mensal) e Ticket Médio.\n • Análise detalhada de Churn Rate para identificação de gargalos na retenção.\n • Dashboard interativo com filtros dinâmicos de período e KPIs de performance.\n • Visualização de tendências históricas com gráficos de linha e barras para suporte à decisão.",
      image: saasPulse,
      technologies: [
        "Python",
        "Pandas",
        "Streamlit",
        "Plotly",
        "Faker",
        "NumPy",
        "Data Analytics",
        "Business Intelligence"
      ],
      githubUrl: "https://github.com/GabrielSantos777/Pulse_Monitor_de_Metricas_Criticas",
      demoUrl: "", 
      featured: true,
    },
    {
      id: "financial-data-pipeline",
      title: "Pipeline de Dados Full-Stack e Monitoramento Financeiro",
      description: "Solução completa de Engenharia de Dados para coleta, armazenamento e monitoramento automatizado de séries temporais de cotação de moedas (USD/BRL).",
      fullDescription: "O projeto focou em construir um sistema de dados pronto para produção, integrando tecnologias de backend e frontend. \n \
        \n • **Pipeline ETL Automatizada:** Processo agendado em Python/Pandas que extrai dados de API externa e os carrega de forma robusta no PostgreSQL. \n \
        \n • **Módulo de Sistema em Go (Golang):** Implementação de um microserviço em Go para consultas rápidas ao banco e busca do valor mais recente, demonstrando proficiência em linguagens de sistema. \n \
        \n • **Análise de Anomalias:** Lógica de negócio em Python que calcula a Média Móvel dos últimos 7 dias e dispara alertas se a cotação ultrapassar um threshold de variação. \n \
        \n • **Dashboard Interativo (Plotly Dash):** Construção de um *frontend* web puramente em Python, conectado ao PostgreSQL, para visualização em tempo real da série temporal histórica.",
      image: finance_dashboard,
      technologies: [
        "Python",
        "Go (Golang)",
        "PostgreSQL",
        "SQLAlchemy",
        "Plotly Dash",
        "Pandas",
        "Agendamento (Cron/Scheduler)",
        "ETL Automation"
      ],
      githubUrl: "https://github.com/GabrielSantos777/FluxGuard_financeira_pipeline",
      demoUrl: "",
      featured: true,
    },
    {
      id: "opinion",
      title: "OpiniON",
      description: "O OpiniON é um projeto desenvolvido para coletar, analisar e visualizar comentários de produtos disponíveis online",
      fullDescription: "OpiniON é uma ferramenta de análise de sentimentos que utiliza técnicas de Processamento de Linguagem Natural (NLP) para extrair insights de comentários e reviews. O OpiniON realiza as seguintes etapas: \n • Coleta de Comentários: Automatiza a extração de avaliações de produtos em plataformas online, no caso foi usado o site da Amazon.\n • Análise de Sentimentos: Utiliza uma API do Gemini para classificar os comentários em três categorias: Positivo, Neutro ou Negativo. \n • Armazenamento de Dados: Salva os comentários e seus respectivos sentimentos em um banco de dados SQLite. \n • Visualização Gráfica: Gera um gráfico de barras para representar a distribuiçãodos sentimentos dos comentários coletados;",
      image: opinion,
      technologies: ["Python", "SQLite", "Selenium", "Matplotlib", "Gemini", "Regex"],
      githubUrl: "https://github.com/GabrielSantos777/OpiniON",
      featured: true,
    },
    {
      id: "skysync",
      title: "SkySync",
      description: "SkySync é uma aplicação web que exibe a condição climática de todas as cidades, estados ou países do mundo..",
      fullDescription: "SkySync é uma aplicação web que exibe a condição climática de todas as cidades, estados ou países do mundo. Obtendo tanto os dados da temperatura atual, velocidade do vento e o nível de umidade. \n O SkySync realiza as seguintes funções: \n • Coleta da Temperatura atual. \n • Coleta da Velocidade do vento. \n • Nível de umidade;",
      image: skysync,
      technologies: ["HTLM5", "CSS3", "JavaScript", "Open Weather API"],
      githubUrl: "https://github.com/GabrielSantos777/SkySync",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const allProjects = projects;

  return (
    <section id="projects" className="bg-card/50">
      <div className="section-container">
        <h2 className="section-title">Projetos</h2>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Destaques</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-card border border-border rounded-lg overflow-hidden card-hover animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
                </div>

                <div className="p-6 space-y-4">
                  <h4 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Todos os projetos</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-card border border-border rounded-lg overflow-hidden card-hover animate-slide-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-4">
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                  <DialogDescription className="text-base">
                    {selectedProject.fullDescription}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full rounded-lg"
                  />

                  <div>
                    <h4 className="font-semibold mb-2">Tecnologias:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {selectedProject.githubUrl && (
                      <Button
                        asChild
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary/10"
                      >
                        <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {selectedProject.demoUrl && (
                      <Button
                        asChild
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
