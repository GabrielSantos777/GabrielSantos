import { useEffect, useMemo, useState } from "react";
import { ArrowRight, RefreshCcw } from "lucide-react";
import { Article, articles as fallbackArticles } from "@/data/portfolio-data";
import { cn } from "@/lib/utils";

const styles = {
  section: "section-shell border-t border-white/5",
  grid: "grid gap-4 md:grid-cols-2 xl:grid-cols-3 mt-8",
  articleCardBase: "rounded-xl border p-5 transition-all",
  articleCardDefault:
    "border-white/10 bg-white/[0.04] hover:-translate-y-1 hover:border-primary/30",
  articleCardComingSoon:
    "border-dashed border-white/15 bg-white/[0.02] opacity-70",
  articleIcon:
    "mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-2xl",
  articleCategory: "font-mono text-[11px] uppercase tracking-[0.12em] text-primary",
  articleTitle: "mt-2 font-display text-xl font-bold leading-tight text-foreground",
  articleExcerpt: "mt-3 text-sm leading-7 text-muted-foreground",
  articleMeta: "mt-5 flex items-center justify-between text-xs text-muted-foreground",
  articleLink:
    "inline-flex items-center gap-1 text-primary transition-opacity hover:opacity-80",
  loadingState:
    "rounded-xl border border-white/10 bg-white/[0.04] p-5 text-sm text-muted-foreground",
  errorState:
    "rounded-xl border border-dashed border-amber-400/40 bg-amber-400/10 p-5 text-sm text-amber-200",
};

type FeedArticle = Article;

type Rss2JsonItem = {
  guid?: string;
  link?: string;
  title?: string;
  description?: string;
  content?: string;
  categories?: string[];
};

type Rss2JsonPayload = {
  status?: string;
  items?: Rss2JsonItem[];
  message?: string;
};

const stripHtmlTags = (content: string) =>
  content
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const estimateReadTime = (content: string) => {
  const words = stripHtmlTags(content).split(" ").filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min de leitura`;
};

const mapRss2JsonItems = (items: Rss2JsonItem[], maxItems: number): FeedArticle[] =>
  items.slice(0, maxItems).map((item) => {
    const excerptSource = item.description || item.content || "";
    const excerptText = stripHtmlTags(excerptSource);

    return {
      id: item.guid || item.link || item.title || crypto.randomUUID(),
      icon: "📝",
      category: item.categories?.[0] || "Medium",
      title: item.title || "Artigo sem título",
      excerpt:
        excerptText.length > 160
          ? `${excerptText.slice(0, 157)}...`
          : excerptText || "Clique para ler o artigo completo.",
      readTime: estimateReadTime(excerptSource),
      href: item.link,
      isComingSoon: false,
    };
  });

const mapXmlItems = (xmlText: string, maxItems: number): FeedArticle[] => {
  const parser = new DOMParser();
  const documentNode = parser.parseFromString(xmlText, "text/xml");

  const rssItemNodes = Array.from(documentNode.querySelectorAll("item"));
  if (rssItemNodes.length > 0) {
    return rssItemNodes.slice(0, maxItems).map((itemNode) => {
      const title = itemNode.querySelector("title")?.textContent?.trim() || "Artigo sem título";
      const link = itemNode.querySelector("link")?.textContent?.trim() || "#";
      const descriptionRaw =
        itemNode.querySelector("content\\:encoded")?.textContent ||
        itemNode.querySelector("description")?.textContent ||
        "";
      const category = itemNode.querySelector("category")?.textContent?.trim() || "Medium";
      const excerptText = stripHtmlTags(descriptionRaw);

      return {
        id: itemNode.querySelector("guid")?.textContent?.trim() || link || title,
        icon: "📝",
        category,
        title,
        excerpt:
          excerptText.length > 160
            ? `${excerptText.slice(0, 157)}...`
            : excerptText || "Clique para ler o artigo completo.",
        readTime: estimateReadTime(descriptionRaw),
        href: link,
        isComingSoon: false,
      };
    });
  }

  const atomEntryNodes = Array.from(documentNode.querySelectorAll("entry"));
  if (atomEntryNodes.length > 0) {
    return atomEntryNodes.slice(0, maxItems).map((entryNode) => {
      const title = entryNode.querySelector("title")?.textContent?.trim() || "Artigo sem título";
      const link =
        entryNode.querySelector("link")?.getAttribute("href") ||
        entryNode.querySelector("link")?.textContent?.trim() ||
        "#";
      const summaryRaw =
        entryNode.querySelector("content")?.textContent ||
        entryNode.querySelector("summary")?.textContent ||
        "";
      const category =
        entryNode.querySelector("category")?.getAttribute("term") ||
        entryNode.querySelector("category")?.textContent?.trim() ||
        "Medium";
      const excerptText = stripHtmlTags(summaryRaw);

      return {
        id: entryNode.querySelector("id")?.textContent?.trim() || link || title,
        icon: "📝",
        category,
        title,
        excerpt:
          excerptText.length > 160
            ? `${excerptText.slice(0, 157)}...`
            : excerptText || "Clique para ler o artigo completo.",
        readTime: estimateReadTime(summaryRaw),
        href: link,
        isComingSoon: false,
      };
    });
  }

  return [];
};

const withCacheBuster = (urlValue: string, cacheKey: string) => {
  const parsedUrl = new URL(ensureHttps(urlValue));
  parsedUrl.searchParams.set("cb", cacheKey);
  return parsedUrl.toString();
};

const ensureHttps = (urlLike: string) => {
  if (urlLike.startsWith("http://") || urlLike.startsWith("https://")) {
    return urlLike;
  }
  return `https://${urlLike}`;
};

const normalizeMediumFeedUrl = (feedUrlFromEnv?: string, mediumHandleFromEnv?: string) => {
  const normalizeMediumUrlPath = (urlValue: string) => {
    const safeUrl = ensureHttps(urlValue);
    const parsedUrl = new URL(safeUrl);

    if (!parsedUrl.hostname.includes("medium.com")) {
      return safeUrl;
    }

    const pathname = parsedUrl.pathname.replace(/\/+$/, "");
    if (!pathname || pathname === "/") {
      return safeUrl;
    }

    if (pathname.startsWith("/feed/")) {
      return `https://medium.com${pathname}`;
    }

    return `https://medium.com/feed${pathname}`;
  };

  if (feedUrlFromEnv?.trim()) {
    return normalizeMediumUrlPath(feedUrlFromEnv.trim());
  }

  if (mediumHandleFromEnv?.trim()) {
    const rawHandle = mediumHandleFromEnv.trim();
    if (rawHandle.includes("medium.com")) {
      return normalizeMediumUrlPath(rawHandle);
    }

    const normalizedHandle = rawHandle.startsWith("@") ? rawHandle : `@${rawHandle}`;
    return `https://medium.com/feed/${normalizedHandle}`;
  }

  return "https://medium.com/feed/@gabrielsantos777";
};

const loadMediumArticles = async (
  feedUrl: string,
  maxItems: number,
): Promise<FeedArticle[]> => {
  const rss2JsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;
  const rss2JsonResponse = await fetch(rss2JsonUrl);

  if (rss2JsonResponse.ok) {
    const payload = (await rss2JsonResponse.json()) as Rss2JsonPayload;
    if (payload?.status === "ok" && Array.isArray(payload.items) && payload.items.length > 0) {
      return mapRss2JsonItems(payload.items, maxItems);
    }
  }

  const allOriginsUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(feedUrl)}`;
  const allOriginsResponse = await fetch(allOriginsUrl);
  if (!allOriginsResponse.ok) {
    throw new Error("Falha ao carregar o feed do Medium.");
  }

  const xmlText = await allOriginsResponse.text();
  const parsedItems = mapXmlItems(xmlText, maxItems);
  if (parsedItems.length === 0) {
    throw new Error("Não foi possível ler os artigos do Medium.");
  }

  return parsedItems;
};

const Articles = () => {
  const [mediumArticles, setMediumArticles] = useState<FeedArticle[]>([]);
  const [isLoadingMediumFeed, setIsLoadingMediumFeed] = useState(true);
  const [hasMediumFeedError, setHasMediumFeedError] = useState(false);
  const [mediumFeedErrorMessage, setMediumFeedErrorMessage] = useState("");
  const [configuredFeedUrl, setConfiguredFeedUrl] = useState("");
  const [refreshCounter, setRefreshCounter] = useState(0);

  useEffect(() => {
    let isComponentMounted = true;

    const run = async () => {
      try {
        setIsLoadingMediumFeed(true);
        setHasMediumFeedError(false);
        setMediumFeedErrorMessage("");

        const feedUrlFromEnv = import.meta.env.VITE_MEDIUM_FEED_URL?.trim();
        const mediumHandleFromEnv = import.meta.env.VITE_MEDIUM_HANDLE?.trim();
        const maxItems = Number(import.meta.env.VITE_MEDIUM_MAX_ITEMS || 6);

        const mediumFeedUrl = normalizeMediumFeedUrl(feedUrlFromEnv, mediumHandleFromEnv);
        const mediumFeedUrlWithCacheBypass = withCacheBuster(
          mediumFeedUrl,
          Date.now().toString(),
        );
        setConfiguredFeedUrl(mediumFeedUrl);
        const loadedArticles = await loadMediumArticles(
          mediumFeedUrlWithCacheBypass,
          maxItems,
        );

        if (isComponentMounted) {
          setMediumArticles(loadedArticles);
        }
      } catch (error) {
        if (isComponentMounted) {
          setHasMediumFeedError(true);
          setMediumFeedErrorMessage(
            error instanceof Error ? error.message : "Erro desconhecido ao carregar o Medium.",
          );
        }
      } finally {
        if (isComponentMounted) {
          setIsLoadingMediumFeed(false);
        }
      }
    };

    void run();

    return () => {
      isComponentMounted = false;
    };
  }, [refreshCounter]);

  const renderedArticles = useMemo(
    () => (mediumArticles.length > 0 ? mediumArticles : fallbackArticles),
    [mediumArticles],
  );

  return (
    <section id="articles" className={styles.section}>
      <div className="section-container">
        <span className="section-label">// artigos</span>
        <h2 className="section-title">
          Escrevendo sobre
          <br />
          tecnologia & dados
        </h2>

        {/* {isLoadingMediumFeed ? (
          <div className={styles.loadingState}>
            <p className="inline-flex items-center gap-2">
              <RefreshCcw size={16} className="animate-spin" /> Carregando artigos do Medium...
            </p>
          </div>
        ) : null}

        {!isLoadingMediumFeed ? (
          <div className="mb-4">
            <button
              type="button"
              onClick={() => setRefreshCounter((previousValue) => previousValue + 1)}
              className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-xs text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
            >
              <RefreshCcw size={14} /> Atualizar artigos agora
            </button>
          </div>
        ) : null} */}

        {!isLoadingMediumFeed && hasMediumFeedError ? (
          <div className={styles.errorState}>
            <p>Não consegui carregar seu Medium agora. Exibindo os artigos de fallback.</p>
            <p className="mt-2 text-xs text-amber-100/80">
              Feed usado: <code>{configuredFeedUrl || "não configurado"}</code>
            </p>
            {mediumFeedErrorMessage ? (
              <p className="mt-1 text-xs text-amber-100/80">
                Erro: <code>{mediumFeedErrorMessage}</code>
              </p>
            ) : null}
            <p className="mt-2 text-xs text-amber-100/80">
              Dica: você pode informar <code>VITE_MEDIUM_HANDLE</code>,{" "}
              <code>VITE_MEDIUM_FEED_URL</code> com URL de perfil, ou URL RSS. O sistema converte automaticamente.
            </p>
          </div>
        ) : null}

        <div className={styles.grid}>
          {renderedArticles.map((article) => (
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
                  <a
                    href={article.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={styles.articleLink}
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
