import { useEffect, useState } from "react";
import { ArrowRight, RefreshCcw } from "lucide-react";
import { Article } from "@/data/portfolio-data";
import { cn } from "@/lib/utils";

const styles = {
  section: "section-shell border-t border-white/5",
  grid: "mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3",
  articleCardBase: "rounded-xl border p-5 transition-all",
  articleCardDefault:
    "border-white/10 bg-white/[0.04] hover:-translate-y-1 hover:border-primary/30",
  articleCardComingSoon: "border-dashed border-white/15 bg-white/[0.02] opacity-70",
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
};

type AllOriginsPayload = {
  contents?: string;
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
  const cacheKey = Date.now().toString();
  const sourceErrors: string[] = [];

  const tryAllOriginsRaw = async () => {
    const sourceUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(feedUrl)}&cb=${cacheKey}`;
    const response = await fetch(sourceUrl, { cache: "no-store" });

    if (!response.ok) {
      sourceErrors.push(`allorigins(raw): HTTP ${response.status}`);
      return [];
    }

    const xmlText = await response.text();
    const parsedItems = mapXmlItems(xmlText, maxItems);
    if (parsedItems.length === 0) {
      sourceErrors.push("allorigins(raw): resposta sem itens");
    }
    return parsedItems;
  };

  const tryAllOriginsJson = async () => {
    const sourceUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(feedUrl)}&cb=${cacheKey}`;
    const response = await fetch(sourceUrl, { cache: "no-store" });

    if (!response.ok) {
      sourceErrors.push(`allorigins(json): HTTP ${response.status}`);
      return [];
    }

    const payload = (await response.json()) as AllOriginsPayload;
    if (!payload.contents) {
      sourceErrors.push("allorigins(json): resposta sem conteúdo");
      return [];
    }

    const parsedItems = mapXmlItems(payload.contents, maxItems);
    if (parsedItems.length === 0) {
      sourceErrors.push("allorigins(json): resposta sem itens");
    }
    return parsedItems;
  };

  const tryRss2Json = async () => {
    const sourceUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}&count=${maxItems}&cb=${cacheKey}`;
    const response = await fetch(sourceUrl, { cache: "no-store" });

    if (!response.ok) {
      sourceErrors.push(`rss2json: HTTP ${response.status}`);
      return [];
    }

    const payload = (await response.json()) as Rss2JsonPayload;
    if (payload?.status === "ok" && Array.isArray(payload.items) && payload.items.length > 0) {
      return mapRss2JsonItems(payload.items, maxItems);
    }

    sourceErrors.push("rss2json: resposta sem itens");
    return [];
  };

  const sources = [tryAllOriginsRaw, tryAllOriginsJson, tryRss2Json];
  for (const source of sources) {
    try {
      const items = await source();
      if (items.length > 0) {
        return items;
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "erro desconhecido";
      sourceErrors.push(message);
    }
  }

  throw new Error(`Não foi possível carregar os artigos do Medium. ${sourceErrors.join(" | ")}`);
};

const Articles = () => {
  const [mediumArticles, setMediumArticles] = useState<FeedArticle[]>([]);
  const [isLoadingMediumFeed, setIsLoadingMediumFeed] = useState(true);
  const [hasMediumFeedError, setHasMediumFeedError] = useState(false);
  const [mediumFeedErrorMessage, setMediumFeedErrorMessage] = useState("");
  const [configuredFeedUrl, setConfiguredFeedUrl] = useState("");

  useEffect(() => {
    let isComponentMounted = true;

    const run = async () => {
      try {
        setIsLoadingMediumFeed(true);
        setHasMediumFeedError(false);
        setMediumFeedErrorMessage("");

        const feedUrlFromEnv = import.meta.env.VITE_MEDIUM_FEED_URL?.trim();
        const mediumHandleFromEnv = import.meta.env.VITE_MEDIUM_HANDLE?.trim();
        const maxItemsFromEnv = Number(import.meta.env.VITE_MEDIUM_MAX_ITEMS);
        const maxItems =
          Number.isFinite(maxItemsFromEnv) && maxItemsFromEnv > 0 ? maxItemsFromEnv : 6;

        const mediumFeedUrl = normalizeMediumFeedUrl(feedUrlFromEnv, mediumHandleFromEnv);
        setConfiguredFeedUrl(mediumFeedUrl);

        const loadedArticles = await loadMediumArticles(mediumFeedUrl, maxItems);
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
  }, []);

  return (
    <section id="articles" className={styles.section}>
      <div className="section-container">
        <span className="section-label">// artigos</span>
        <h2 className="section-title">
          Escrevendo sobre
          <br />
          tecnologia & dados
        </h2>

        {isLoadingMediumFeed ? (
          <div className={styles.loadingState}>
            <p className="inline-flex items-center gap-2">
              <RefreshCcw size={16} className="animate-spin" /> Carregando artigos do Medium...
            </p>
          </div>
        ) : null}

        {!isLoadingMediumFeed && hasMediumFeedError ? (
          <div className={styles.errorState}>
            <p>Não consegui carregar seu Medium agora.</p>
            <p className="mt-2 text-xs text-amber-100/80">
              Feed usado: <code>{configuredFeedUrl || "não configurado"}</code>
            </p>
            {mediumFeedErrorMessage ? (
              <p className="mt-1 text-xs text-amber-100/80">
                Erro: <code>{mediumFeedErrorMessage}</code>
              </p>
            ) : null}
          </div>
        ) : null}

        {!isLoadingMediumFeed && !hasMediumFeedError && mediumArticles.length === 0 ? (
          <div className={styles.loadingState}>
            Nenhum artigo foi encontrado no feed do Medium.
          </div>
        ) : null}

        {!isLoadingMediumFeed && !hasMediumFeedError && mediumArticles.length > 0 ? (
          <div className={styles.grid}>
            {mediumArticles.map((article) => (
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
        ) : null}
      </div>
    </section>
  );
};

export default Articles;
