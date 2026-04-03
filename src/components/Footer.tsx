import { socialLinks } from "@/data/portfolio-data";

const styles = {
  footer: "border-t border-white/10 py-8",
  container: "section-container flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left",
  logo: "font-display text-base font-bold text-primary",
  logoAccent: "text-muted-foreground",
  subtitle: "mt-1 text-sm text-muted-foreground",
  linksRow: "flex items-center gap-4",
  link: "text-sm text-muted-foreground transition-colors hover:text-primary",
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <p className={styles.logo}>
            &lt;Gabriel <span className={styles.logoAccent}>Santos</span> /&gt;
          </p>
          <p className={styles.subtitle}>
            Feito com foco em performance e experiência - {currentYear}
          </p>
        </div>

        <div className={styles.linksRow}>
          <a href="#top" className={styles.link}>
            Topo
          </a>

          {socialLinks
            .filter((socialLink) => socialLink.label !== "Email")
            .map((socialLink) => (
              <a
                key={socialLink.label}
                href={socialLink.href}
                target="_blank"
                rel="noreferrer noopener"
                className={styles.link}
              >
                {socialLink.label}
              </a>
            ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
