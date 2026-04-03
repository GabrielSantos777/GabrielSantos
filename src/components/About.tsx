import { aboutTimeline } from "@/data/portfolio-data";

const About = () => {
  return (
    <section id="about" className="section-shell border-t border-white/5">
      <div className="section-container grid gap-16 lg:grid-cols-2 lg:items-start">
        <div className="space-y-6">
          <span className="section-label">// sobre mim</span>
          <h2 className="section-title">
            Codigo que
            <br />
            gera valor
          </h2>

          <div className="space-y-5 text-base leading-8 text-muted-foreground">
            <p>
              Tenho <strong className="text-foreground">22 anos</strong>, sou{" "}
              <strong className="text-foreground">Desenvolvedor Full Stack</strong> e estudante de{" "}
              <strong className="text-foreground">Ciencias da Computacao</strong>, com experiencia na criacao,
              manutencao e evolucao de aplicacoes web escalaveis.
            </p>
            <p>
              Minha diferenca esta na fronteira entre <strong className="text-foreground">desenvolvimento e dados</strong>:
              construo tanto a aplicacao quanto a camada de analytics, entregando valor de ponta a ponta para o
              negocio.
            </p>
            <p>
              Trabalho com JavaScript, React, PHP, Python, Bootstrap, Git e SQL, alem de automacoes com{" "}
              <strong className="text-foreground">n8n</strong> e construcao de dashboards no{" "}
              <strong className="text-foreground">Power BI</strong>.
            </p>
          </div>

          <blockquote className="rounded-r-xl border border-white/10 border-l-primary bg-card/60 px-5 py-4 text-sm italic leading-7 text-foreground">
            "Busco integrar desenvolvimento de software e analise de dados para criar solucoes inteligentes,
            automatizadas e orientadas a resultados."
          </blockquote>
        </div>

        <div className="space-y-8">
          {aboutTimeline.map((timelineItem, timelineItemIndex) => (
            <div key={timelineItem.title} className="relative flex gap-5 pb-8">
              {timelineItemIndex !== aboutTimeline.length - 1 ? (
                <span className="absolute left-5 top-12 h-[calc(100%-1rem)] w-px bg-white/10" aria-hidden />
              ) : null}

              <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-lg">
                {timelineItem.icon}
              </div>

              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground/75">
                  {timelineItem.period}
                </p>
                <h3 className="mt-1 font-display text-lg font-bold text-foreground">{timelineItem.title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{timelineItem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

