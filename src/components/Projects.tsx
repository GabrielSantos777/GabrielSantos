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

const Projects = () => {
  const [activeFilterId, setActiveFilterId] = useState<ProjectFilterId>("all");
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filteredProjects = useMemo(
    () =>
      projects.filter(
        (project) => activeFilterId === "all" || project.filters.includes(activeFilterId),
      ),
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

  return (
    <section id="projects" className="section-shell border-t border-white/5">
      <div className="section-container">
        <span className="section-label">// projetos</span>
        <h2 className="section-title">O que construi</h2>
        <p className="section-description">
          Projetos reais com impacto mensuravel. Clique em qualquer projeto para ver detalhes da arquitetura e das
          decisoes tecnicas.
        </p>

        <div className="mb-10 flex flex-wrap gap-2">
          {projectFilters.map((projectFilter) => (
            <button
              key={projectFilter.id}
              type="button"
              onClick={() => setActiveFilterId(projectFilter.id)}
              className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] transition-all ${
                activeFilterId === projectFilter.id
                  ? "border-primary/35 bg-primary/10 text-primary"
                  : "border-white/10 text-muted-foreground hover:border-primary/30 hover:text-primary"
              }`}
            >
              {projectFilter.label}
            </button>
          ))}
        </div>

        {featuredProjects.length > 0 ? (
          <div className="grid gap-5 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-all hover:-translate-y-1 hover:border-primary/35"
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
                <div className="relative h-52 overflow-hidden bg-gradient-to-br from-card via-card to-primary/10">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="size-full object-cover opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
                    />
                  ) : null}
                  <span className="absolute left-4 top-4 rounded-md border border-primary/35 bg-black/60 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
                    Destaque
                  </span>
                </div>

                <div className="space-y-5 p-6">
                  <div>
                    <h3 className="font-display text-2xl font-extrabold tracking-tight text-foreground">{project.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {project.metrics.map((metric) => (
                      <div key={`${project.id}-${metric.label}`} className="space-y-1">
                        <p className="font-display text-xl font-extrabold text-primary">{metric.value}</p>
                        <p className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">{metric.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 5).map((techItem) => (
                      <span
                        key={`${project.id}-${techItem}`}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-muted-foreground"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <span className="rounded-md border border-primary/35 bg-primary/10 px-3 py-1.5 text-primary">
                      Ver detalhes
                    </span>
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        onClick={(event) => event.stopPropagation()}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="rounded-md border border-white/10 px-3 py-1.5 text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
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
          <p className="rounded-xl border border-dashed border-white/20 p-6 text-center text-sm text-muted-foreground">
            Nenhum projeto em destaque para esse filtro no momento.
          </p>
        )}

        <div className="mt-10">
          <h3 className="mb-4 font-display text-xl font-bold text-muted-foreground">Outros projetos</h3>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {compactProjects.map((project) => (
              <article
                key={project.id}
                className={`relative rounded-xl border p-5 transition-all ${
                  project.isComingSoon
                    ? "border-dashed border-white/15 bg-white/[0.02] opacity-70"
                    : "group cursor-pointer border-white/10 bg-white/[0.04] hover:-translate-y-1 hover:border-primary/30"
                }`}
                onClick={() => {
                  if (!project.isComingSoon) {
                    setSelectedProject(project);
                  }
                }}
                role={project.isComingSoon ? undefined : "button"}
                tabIndex={project.isComingSoon ? undefined : 0}
                onKeyDown={(event) => {
                  if (!project.isComingSoon && (event.key === "Enter" || event.key === " ")) {
                    event.preventDefault();
                    setSelectedProject(project);
                  }
                }}
              >
                <p className="text-3xl">{project.emoji}</p>
                <h4 className="mt-3 font-display text-lg font-bold text-foreground">{project.title}</h4>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((techItem) => (
                    <span
                      key={`${project.id}-${techItem}`}
                      className="rounded-full border border-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.08em] text-muted-foreground"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                {!project.isComingSoon ? (
                  <ArrowUpRight className="absolute right-4 top-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" size={16} />
                ) : null}
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
          <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto border-white/10 bg-card">
            {selectedProject ? (
              <>
                <DialogHeader>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-primary">{selectedProject.category}</p>
                  <DialogTitle className="font-display text-3xl font-extrabold tracking-tight">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-base leading-7 text-muted-foreground">
                    {selectedProject.summary}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                  <div className="overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-card to-primary/10">
                    {selectedProject.image ? (
                      <img src={selectedProject.image} alt={selectedProject.title} className="h-64 w-full object-cover" />
                    ) : (
                      <div className="grid h-64 place-items-center text-7xl">{selectedProject.emoji}</div>
                    )}
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {selectedProject.metrics.map((metric) => (
                      <div key={`${selectedProject.id}-${metric.label}`} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                        <p className="font-display text-2xl font-extrabold text-primary">{metric.value}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">{metric.label}</p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="mb-3 font-display text-lg font-bold text-foreground">Funcionalidades principais</h4>
                    <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
                      {selectedProject.features.map((feature) => (
                        <li key={feature} className="rounded-md border border-white/5 bg-white/[0.03] px-3 py-2">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-3 font-display text-lg font-bold text-foreground">Tecnologias utilizadas</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((techItem) => (
                        <span key={`${selectedProject.id}-${techItem}`} className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground">
                          {techItem}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {selectedProject.githubUrl ? (
                      <Button asChild variant="outline" className="gap-2 border-white/15 bg-white/[0.03] text-foreground hover:bg-white/[0.08]">
                        <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer noopener">
                          <Github size={16} /> GitHub
                        </a>
                      </Button>
                    ) : null}

                    {selectedProject.demoUrl ? (
                      <Button asChild className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
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

