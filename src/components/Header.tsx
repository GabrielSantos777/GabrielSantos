import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navSections } from "@/data/portfolio-data";
import { cn } from "@/lib/utils";

const styles = {
  headerBase: "fixed inset-x-0 top-0 z-50 transition-all duration-300",
  headerScrolled: "border-b border-white/10 bg-background/85 py-3 backdrop-blur-xl",
  headerDefault: "bg-transparent py-5",
  navContainer: "section-container flex items-center justify-between",
  logo: "font-display text-lg font-bold text-primary sm:text-xl",
  logoAccent: "text-muted-foreground",
  desktopNav: "hidden items-center gap-9 md:flex",
  navLinkBase:
    "font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground",
  navLinkCta: "rounded-md border border-primary/40 px-4 py-2 text-primary hover:bg-primary/10",
  mobileMenuButton:
    "rounded-md border border-white/10 p-2 text-muted-foreground transition-colors hover:text-foreground md:hidden",
  mobileMenuDrawer: "section-container mt-2 space-y-2 rounded-xl border border-white/10 bg-black/80 p-4 md:hidden",
  mobileMenuLink:
    "block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground",
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(styles.headerBase, isScrolled ? styles.headerScrolled : styles.headerDefault)}>
      <nav className={styles.navContainer}>
        <a href="#top" className={styles.logo}>
          &lt;GS<span className={styles.logoAccent}>/&gt;</span>
        </a>

        <ul className={styles.desktopNav}>
          {navSections.map((section) => (
            <li key={section.href}>
              <a
                href={section.href}
                className={cn(styles.navLinkBase, section.href === "#contact" && styles.navLinkCta)}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen((previousState) => !previousState)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label="Abrir menu de navegação"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isMobileMenuOpen ? (
        <div id="mobile-nav" className={styles.mobileMenuDrawer}>
          {navSections.map((section) => (
            <a
              key={section.href}
              href={section.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={styles.mobileMenuLink}
            >
              {section.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
};

export default Header;
