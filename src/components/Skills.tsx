import { useEffect, useMemo, useState } from "react";
import { SkillCategoryId, skillCategories } from "@/data/portfolio-data";

const Skills = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<SkillCategoryId>("frontend");
  const [shouldAnimateBars, setShouldAnimateBars] = useState(false);

  const activeCategory = useMemo(
    () => skillCategories.find((category) => category.id === activeCategoryId) ?? skillCategories[0],
    [activeCategoryId],
  );

  useEffect(() => {
    setShouldAnimateBars(false);
    const timeoutId = window.setTimeout(() => setShouldAnimateBars(true), 120);

    return () => window.clearTimeout(timeoutId);
  }, [activeCategoryId]);

  return (
    <section id="skills" className="section-shell border-t border-white/5">
      <div className="section-container">
        <span className="section-label">// habilidades</span>
        <h2 className="section-title">Stack tecnica</h2>
        <p className="section-description">
          Ferramentas e tecnologias organizadas por area de atuacao e nivel de proficiencia.
        </p>

        <div className="mb-10 inline-flex flex-wrap gap-2 rounded-xl border border-white/10 bg-white/[0.04] p-1.5">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategoryId(category.id)}
              className={`rounded-lg px-4 py-2 text-xs font-medium uppercase tracking-[0.1em] transition-all sm:text-sm ${
                activeCategoryId === category.id
                  ? "border border-primary/35 bg-card text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-pressed={activeCategoryId === category.id}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {activeCategory.skills.map((skill) => (
            <article
              key={skill.name}
              className="group rounded-xl border border-white/10 bg-white/[0.04] p-5 transition-all hover:-translate-y-1 hover:border-primary/35"
            >
              <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-primary/10 text-2xl">
                {skill.icon}
              </div>

              <h3 className="font-display text-lg font-bold text-foreground">{skill.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{skill.level}</p>

              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-700 ease-out"
                  style={{ width: shouldAnimateBars ? `${skill.progress}%` : "0%" }}
                />
              </div>

              <span className="mt-3 inline-block font-mono text-[10px] uppercase tracking-[0.12em] text-primary">
                {skill.tag}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

