import { ArrowRight } from "lucide-react";
import { articles } from "@/data/portfolio-data";

const Articles = () => {
  return (
    <section id="articles" className="section-shell border-t border-white/5">
      <div className="section-container">
        <span className="section-label">// artigos</span>
        <h2 className="section-title">
          Escrevendo sobre
          <br />
          tecnologia & dados
        </h2>
        <p className="section-description">
          Compartilho aprendizados, analises tecnicas e reflexoes sobre desenvolvimento e ciencia de dados.
        </p>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.id}
              className={`rounded-xl border p-5 transition-all ${
                article.isComingSoon
                  ? "border-dashed border-white/15 bg-white/[0.02] opacity-70"
                  : "border-white/10 bg-white/[0.04] hover:-translate-y-1 hover:border-primary/30"
              }`}
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-2xl">
                {article.icon}
              </div>

              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-primary">{article.category}</p>
              <h3 className="mt-2 font-display text-xl font-bold leading-tight text-foreground">{article.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{article.excerpt}</p>

              <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                <span>{article.readTime}</span>

                {article.href && !article.isComingSoon ? (
                  <a
                    href={article.href}
                    className="inline-flex items-center gap-1 text-primary transition-opacity hover:opacity-80"
                  >
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

