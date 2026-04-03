import { ArrowRight } from "lucide-react";
import { articles } from "@/data/portfolio-data";
import { cn } from "@/lib/utils";

const styles = {
  section: "section-shell border-t border-white/5",
  grid: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
  articleCardBase: "rounded-xl border p-5 transition-all",
  articleCardDefault: "border-white/10 bg-white/[0.04] hover:-translate-y-1 hover:border-primary/30",
  articleCardComingSoon: "border-dashed border-white/15 bg-white/[0.02] opacity-70",
  articleIcon: "mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-2xl",
  articleCategory: "font-mono text-[11px] uppercase tracking-[0.12em] text-primary",
  articleTitle: "mt-2 font-display text-xl font-bold leading-tight text-foreground",
  articleExcerpt: "mt-3 text-sm leading-7 text-muted-foreground",
  articleMeta: "mt-5 flex items-center justify-between text-xs text-muted-foreground",
  articleLink: "inline-flex items-center gap-1 text-primary transition-opacity hover:opacity-80",
};

const Articles = () => {
  return (
    <section id="articles" className={styles.section}>
      <div className="section-container">
        <span className="section-label">// artigos</span>
        <h2 className="section-title">
          Escrevendo sobre
          <br />
          tecnologia & dados
        </h2>
        <p className="section-description">
          Compartilho aprendizados, análises técnicas e reflexões sobre
          desenvolvimento e ciência de dados.
        </p>

        <div className={styles.grid}>
          {articles.map((article) => (
            <article
              key={article.id}
              className={cn(
                styles.articleCardBase,
                article.isComingSoon ? styles.articleCardComingSoon : styles.articleCardDefault,
              )}
            >
              <div className={styles.articleIcon}>{article.icon}</div>

              <p className={styles.articleCategory}>{article.category}</p>
              <h3 className={styles.articleTitle}>{article.title}</h3>
              <p className={styles.articleExcerpt}>{article.excerpt}</p>

              <div className={styles.articleMeta}>
                <span>{article.readTime}</span>

                {article.href && !article.isComingSoon ? (
                  <a href={article.href} className={styles.articleLink}>
                    Ler artigo <ArrowRight size={14} />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
