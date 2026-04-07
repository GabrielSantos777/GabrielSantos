import { useEffect, useMemo, useState } from "react";
import { SkillCategoryId, skillCategories } from "@/data/portfolio-data";
import { cn } from "@/lib/utils";

const styles = {
  section: "section-shell border-t border-white/5",
  tabList:
    "mb-10 mt-8 inline-flex flex-wrap gap-2 rounded-xl border border-white/10 bg-white/[0.04] p-1.5",
  tabButtonBase:
    "rounded-lg px-4 py-2 text-xs font-medium uppercase tracking-[0.1em] transition-all sm:text-sm",
  tabButtonActive: "border border-primary/35 bg-card text-foreground",
  tabButtonDefault: "text-muted-foreground hover:text-foreground",
  skillGrid: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
  skillCard:
    "group rounded-xl border border-white/10 bg-white/[0.04] p-5 transition-all hover:-translate-y-1 hover:border-primary/35",
  skillIconWrap:
    "mb-4 flex size-11 items-center justify-center rounded-lg bg-primary/10 p-2",
  skillIconImage: "size-full object-contain",
  skillTitle: "font-display text-lg font-bold text-foreground",
  skillLevel: "mt-1 text-sm text-muted-foreground",
  progressTrack: "mt-4 h-1.5 overflow-hidden rounded-full bg-white/10",
  progressFill: "h-full rounded-full bg-primary transition-all duration-700 ease-out",
  skillTag:
    "mt-3 inline-block font-mono text-[10px] uppercase tracking-[0.12em] text-primary",
};

const Skills = () => {
  const [activeCategoryId, setActiveCategoryId] =
    useState<SkillCategoryId>("frontend");
  const [shouldAnimateBars, setShouldAnimateBars] = useState(false);

  const skillTabs = useMemo(
    () => [
      { id: "all" as SkillCategoryId, label: "Todos" },
      ...skillCategories.map((category) => ({
        id: category.id as SkillCategoryId,
        label: category.label,
      })),
    ],
    [],
  );

  const activeSkills = useMemo(
    () =>
      activeCategoryId === "all"
        ? skillCategories.flatMap((category) => category.skills)
        : (skillCategories.find((category) => category.id === activeCategoryId)
            ?.skills ?? []),
    [activeCategoryId],
  );

  useEffect(() => {
    setShouldAnimateBars(false);
    const timeoutId = window.setTimeout(() => setShouldAnimateBars(true), 120);

    return () => window.clearTimeout(timeoutId);
  }, [activeCategoryId]);

  return (
    <section id="skills" className={styles.section}>
      <div className="section-container">
        <span className="section-label">// habilidades</span>
        <h2 className="section-title">Stack técnica</h2>
        <p className="section-description">
          Ferramentas e tecnologias organizadas por área de atuação e nível de
          proficiência.
        </p>

        <div className={styles.tabList}>
          {skillTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveCategoryId(tab.id)}
              className={cn(
                styles.tabButtonBase,
                activeCategoryId === tab.id
                  ? styles.tabButtonActive
                  : styles.tabButtonDefault,
              )}
              aria-pressed={activeCategoryId === tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className={styles.skillGrid}>
          {activeSkills.map((skill) => (
            <article key={skill.name} className={styles.skillCard}>
              <div className={styles.skillIconWrap}>
                <img
                  src={skill.iconImage}
                  alt={`Ícone de ${skill.name}`}
                  className={styles.skillIconImage}
                  loading="lazy"
                />
              </div>

              <h3 className={styles.skillTitle}>{skill.name}</h3>
              <p className={styles.skillLevel}>{skill.level}</p>

              <div className={styles.progressTrack}>
                <div
                  className={styles.progressFill}
                  style={{ width: shouldAnimateBars ? `${skill.progress}%` : "0%" }}
                />
              </div>

              <span className={styles.skillTag}>{skill.tag}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
