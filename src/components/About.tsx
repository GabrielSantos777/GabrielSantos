import { aboutTimeline } from "@/data/portfolio-data";

const styles = {
  section: "section-shell border-t border-white/5",
  container: "section-container grid gap-16 lg:grid-cols-2 lg:items-start",
  leftColumn: "space-y-6",
  heading: "section-title",
  copyBlock: "space-y-5 text-base leading-8 text-muted-foreground",
  emphasis: "text-foreground",
  quote:
    "rounded-r-xl border border-white/10 border-l-primary bg-card/60 px-5 py-4 text-sm italic leading-7 text-foreground",
  timelineColumn: "space-y-8",
  timelineRow: "relative flex gap-5 pb-8",
  timelineConnector: "absolute left-5 top-12 h-[calc(100%-1rem)] w-px bg-white/10",
  timelineIcon:
    "relative z-10 flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-lg",
  timelinePeriod:
    "font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground/75",
  timelineTitle: "mt-1 font-display text-lg font-bold text-foreground",
  timelineDescription: "mt-1 text-sm leading-6 text-muted-foreground",
};

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <span className="section-label">// sobre mim</span>
          <h2 className={styles.heading}>
            Código que
            <br />
            gera valor
          </h2>

          <div className={styles.copyBlock}>
            <p>
              Tenho <strong className={styles.emphasis}>22 anos</strong>, sou{" "}
              <strong className={styles.emphasis}>Desenvolvedor Full Stack</strong>{" "}
              e estudante de{" "}
              <strong className={styles.emphasis}>Ciências da Computação</strong>,
              com experiência na criação, manutenção e evolução de aplicações web
              escaláveis.
            </p>
            <p>
              Minha diferença está na fronteira entre{" "}
              <strong className={styles.emphasis}>desenvolvimento e dados</strong>
              : construo tanto a aplicação quanto a camada de analytics,
              entregando valor de ponta a ponta para o negócio.
            </p>
            <p>
              Trabalho com JavaScript, React, PHP, Python, Bootstrap, Git e SQL,
              além de automações com{" "}
              <strong className={styles.emphasis}>n8n</strong> e construção de
              dashboards no <strong className={styles.emphasis}>Power BI</strong>.
            </p>
          </div>

          <blockquote className={styles.quote}>
            "Busco integrar desenvolvimento de software e análise de dados para
            criar soluções inteligentes, automatizadas e orientadas a resultados."
          </blockquote>
        </div>

        <div className={styles.timelineColumn}>
          {aboutTimeline.map((timelineItem, timelineItemIndex) => (
            <div key={timelineItem.title} className={styles.timelineRow}>
              {timelineItemIndex !== aboutTimeline.length - 1 ? (
                <span className={styles.timelineConnector} aria-hidden />
              ) : null}

              <div className={styles.timelineIcon}>{timelineItem.icon}</div>

              <div>
                <p className={styles.timelinePeriod}>{timelineItem.period}</p>
                <h3 className={styles.timelineTitle}>{timelineItem.title}</h3>
                <p className={styles.timelineDescription}>
                  {timelineItem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
