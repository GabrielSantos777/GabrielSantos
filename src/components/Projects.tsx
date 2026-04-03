import { useMemo, useState } from "react";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  PortfolioProject,
  ProjectFilterId,
  projectFilters,
  projects,
} from "@/data/portfolio-data";
import { cn } from "@/lib/utils";

const styles = {
  section: "section-shell border-t border-white/5",
  filterRow: "mb-10 flex flex-wrap gap-2",
  filterButtonBase: "rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] transition-all",
  filterButtonActive: "border-primary/35 bg-primary/10 text-primary",
  filterButtonDefault: "border-white/10 text-muted-foreground hover:border-primary/30 hover:text-primary",
  featuredGrid: "grid gap-5 lg:grid-cols-2",
  featuredCard:
    "group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-all hover:-translate-y-1 hover:border-primary/35",
  featuredPreview: "relative h-52 overflow-hidden bg-gradient-to-br from-card via-card to-primary/10",
  featuredPreviewImage:
    "size-full object-cover opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-90",
  featuredBadge:
    "absolute left-4 top-4 rounded-md border border-primary/35 bg-black/60 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-primary",
  featuredBody: "space-y-5 p-6",
  featuredTitle: "font-display text-2xl font-extrabold tracking-tight text-foreground",
  featuredDescription: "mt-2 text-sm leading-7 text-muted-foreground",
  metricsRow: "flex flex-wrap gap-4",
  metricBlock: "space-y-1",
  metricValue: "font-display text-xl font-extrabold text-primary",
  metricLabel: "text-[11px] uppercase tracking-[0.12em] text-muted-foreground",
  techRow: "flex flex-wrap gap-2",
  techTag: "rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-muted-foreground",
  featuredLinks: "flex items-center gap-3 text-sm",
  detailPill: "rounded-md border border-primary/35 bg-primary/10 px-3 py-1.5 text-primary",
  githubPill:
    "rounded-md border border-white/10 px-3 py-1.5 text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary",
  emptyState: "rounded-xl border border-dashed border-white/20 p-6 text-center text-sm text-muted-foreground",
  compactSection: "mt-10",
  compactSectionTitle: "mb-4 font-display text-xl font-bold text-muted-foreground",
  compactGrid: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
  compactCardBase: "relative rounded-xl border p-5 transition-all",
  compactCardInteractive:
    "group cursor-pointer border-white/10 bg-white/[0.04] hover:-translate-y-1 hover:border-primary/30",
  compactCardComingSoon: "border-dashed border-white/15 bg-white/[0.02] opacity-70",
  compactEmoji: "text-3xl",
  compactTitle: "mt-3 font-display text-lg font-bold text-foreground",
  compactDescription: "mt-2 text-sm leading-6 text-muted-foreground",
  compactTechRow: "mt-4 flex flex-wrap gap-1.5",
  compactTechTag:
    "rounded-full border border-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.08em] text-muted-foreground",
  compactArrow:
    "absolute right-4 top-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary",
  dialogContent: "max-h-[90vh] max-w-4xl overflow-y-auto border-white/10 bg-card",
  dialogCategory: "font-mono text-xs uppercase tracking-[0.14em] text-primary",
  dialogTitle: "font-display text-3xl font-extrabold tracking-tight",
  dialogDescription: "text-base leading-7 text-muted-foreground",
  dialogBody: "space-y-6",
  dialogPreview: "overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-card to-primary/10",
  dialogPreviewImage: "h-64 w-full object-cover",
  dialogPreviewEmoji: "grid h-64 place-items-center text-7xl",
  dialogMetricsGrid: "grid gap-3 sm:grid-cols-3",
  dialogMetricCard: "rounded-lg border border-white/10 bg-white/[0.04] p-4",
  dialogMetricValue: "font-display text-2xl font-extrabold text-primary",
  dialogMetricLabel: "mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground",
  dialogSectionTitle: "mb-3 font-display text-lg font-bold text-foreground",
  dialogFeatureList: "space-y-2 text-sm leading-6 text-muted-foreground",
  dialogFeatureItem: "rounded-md border border-white/5 bg-white/[0.03] px-3 py-2",
  dialogTechRow: "flex flex-wrap gap-2",
  dialogTechTag: "rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground",
  dialogActions: "flex flex-wrap gap-3",
  dialogGithubButton: "gap-2 border-white/15 bg-white/[0.03] text-foreground hover:bg-white/[0.08]",
  dialogDemoButton: "gap-2 bg-primary text-primary-foreground hover:bg-primary/90",
};

const Projects = () => {
  const [activeFilterId, setActiveFilterId] = useState<ProjectFilterId>("all");
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filteredProjects = useMemo(
    () => projects.filter((project) => activeFilterId === "all" || project.filters.includes(activeFilterId)),
    [activeFilterId],
  );

  const featuredProjects = useMemo(
    () => filteredProjects.filter((project) => project.isFeatured && !project.isComingSoon),
    [filteredProjects],
  );

  const compactProjects = useMemo(
    () => filteredProjects.filter((project) => !project.isFeatured),
    [filteredProjects],
  );

  const isInteractiveProject = (project: PortfolioProject) => !project.isComingSoon;

  return (
    <section id="projects" className={styles.section}>
      <div className="section-container">
        <span className="section-label">// projetos</span>
        <h2 className="section-title">O que construí</h2>
        <p className="section-description">
          Projetos reais com impacto mensurável. Clique em qualquer projeto para
          ver detalhes da arquitetura e das decisões técnicas.
        </p>

        <div className={styles.filterRow}>
          {projectFilters.map((projectFilter) => (
            <button
              key={projectFilter.id}
              type="button"
              onClick={() => setActiveFilterId(projectFilter.id)}
              className={cn(
                styles.filterButtonBase,
                activeFilterId === projectFilter.id ? styles.filterButtonActive : styles.filterButtonDefault,
              )}
            >
              {projectFilter.label}
            </button>
          ))}
        </div>

        {featuredProjects.length > 0 ? (
          <div className={styles.featuredGrid}>
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className={styles.featuredCard}
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedProject(project);
                  }
                }}
              >
                <div className={styles.featuredPreview}>
                  {project.image ? <img src={project.image} alt={project.title} className={styles.featuredPreviewImage} /> : null}
                  <span className={styles.featuredBadge}>Destaque</span>
                </div>

                <div className={styles.featuredBody}>
                  <div>
                    <h3 className={styles.featuredTitle}>{project.title}</h3>
                    <p className={styles.featuredDescription}>{project.description}</p>
                  </div>

                  <div className={styles.metricsRow}>
                    {project.metrics.map((metric) => (
                      <div key={`${project.id}-${metric.label}`} className={styles.metricBlock}>
                        <p className={styles.metricValue}>{metric.value}</p>
                        <p className={styles.metricLabel}>{metric.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className={styles.techRow}>
                    {project.tech.slice(0, 5).map((techItem) => (
                      <span key={`${project.id}-${techItem}`} className={styles.techTag}>
                        {techItem}
                      </span>
                    ))}
                  </div>

                  <div className={styles.featuredLinks}>
                    <span className={styles.detailPill}>Ver detalhes</span>
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        onClick={(event) => event.stopPropagation()}
                        target="_blank"
                        rel="noreferrer noopener"
                        className={styles.githubPill}
                      >
                        GitHub
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className={styles.emptyState}>Nenhum projeto em destaque para esse filtro no momento.</p>
        )}

        <div className={styles.compactSection}>
          <h3 className={styles.compactSectionTitle}>Outros projetos</h3>

          <div className={styles.compactGrid}>
            {compactProjects.map((project) => (
              <article
                key={project.id}
                className={cn(
                  styles.compactCardBase,
                  isInteractiveProject(project) ? styles.compactCardInteractive : styles.compactCardComingSoon,
                )}
                onClick={() => {
                  if (isInteractiveProject(project)) {
                    setSelectedProject(project);
                  }
                }}
                role={isInteractiveProject(project) ? "button" : undefined}
                tabIndex={isInteractiveProject(project) ? 0 : undefined}
                onKeyDown={(event) => {
                  if (isInteractiveProject(project) && (event.key === "Enter" || event.key === " ")) {
                    event.preventDefault();
                    setSelectedProject(project);
                  }
                }}
              >
                <p className={styles.compactEmoji}>{project.emoji}</p>
                <h4 className={styles.compactTitle}>{project.title}</h4>
                <p className={styles.compactDescription}>{project.description}</p>

                <div className={styles.compactTechRow}>
                  {project.tech.slice(0, 3).map((techItem) => (
                    <span key={`${project.id}-${techItem}`} className={styles.compactTechTag}>
                      {techItem}
                    </span>
                  ))}
                </div>

                {isInteractiveProject(project) ? <ArrowUpRight className={styles.compactArrow} size={16} /> : null}
              </article>
            ))}
          </div>
        </div>

        <Dialog
          open={Boolean(selectedProject)}
          onOpenChange={(isOpen) => {
            if (!isOpen) {
              setSelectedProject(null);
            }
          }}
        >
          <DialogContent className={styles.dialogContent}>
            {selectedProject ? (
              <>
                <DialogHeader>
                  <p className={styles.dialogCategory}>{selectedProject.category}</p>
                  <DialogTitle className={styles.dialogTitle}>{selectedProject.title}</DialogTitle>
                  <DialogDescription className={styles.dialogDescription}>{selectedProject.summary}</DialogDescription>
                </DialogHeader>

                <div className={styles.dialogBody}>
                  <div className={styles.dialogPreview}>
                    {selectedProject.image ? (
                      <img src={selectedProject.image} alt={selectedProject.title} className={styles.dialogPreviewImage} />
                    ) : (
                      <div className={styles.dialogPreviewEmoji}>{selectedProject.emoji}</div>
                    )}
                  </div>

                  <div className={styles.dialogMetricsGrid}>
                    {selectedProject.metrics.map((metric) => (
                      <div key={`${selectedProject.id}-${metric.label}`} className={styles.dialogMetricCard}>
                        <p className={styles.dialogMetricValue}>{metric.value}</p>
                        <p className={styles.dialogMetricLabel}>{metric.label}</p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className={styles.dialogSectionTitle}>Funcionalidades principais</h4>
                    <ul className={styles.dialogFeatureList}>
                      {selectedProject.features.map((feature) => (
                        <li key={feature} className={styles.dialogFeatureItem}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className={styles.dialogSectionTitle}>Tecnologias utilizadas</h4>
                    <div className={styles.dialogTechRow}>
                      {selectedProject.tech.map((techItem) => (
                        <span key={`${selectedProject.id}-${techItem}`} className={styles.dialogTechTag}>
                          {techItem}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.dialogActions}>
                    {selectedProject.githubUrl ? (
                      <Button asChild variant="outline" className={styles.dialogGithubButton}>
                        <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer noopener">
                          <Github size={16} /> GitHub
                        </a>
                      </Button>
                    ) : null}

                    {selectedProject.demoUrl ? (
                      <Button asChild className={styles.dialogDemoButton}>
                        <a href={selectedProject.demoUrl} target="_blank" rel="noreferrer noopener">
                          <ExternalLink size={16} /> Ver demo
                        </a>
                      </Button>
                    ) : null}
                  </div>
                </div>
              </>
            ) : null}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
