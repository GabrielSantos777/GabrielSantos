import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navSections } from "@/data/portfolio-data";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-background/85 py-3 backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="section-container flex items-center justify-between">
        <a href="#top" className="font-display text-lg font-bold text-primary sm:text-xl">
          &lt;GS<span className="text-muted-foreground">/&gt;</span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {navSections.map((section) => (
            <li key={section.href}>
              <a
                href={section.href}
                className={`font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground ${
                  section.href === "#contact"
                    ? "rounded-md border border-primary/40 px-4 py-2 text-primary hover:bg-primary/10"
                    : ""
                }`}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-md border border-white/10 p-2 text-muted-foreground transition-colors hover:text-foreground md:hidden"
          onClick={() => setIsMobileMenuOpen((previousState) => !previousState)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label="Abrir menu de navegacao"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isMobileMenuOpen ? (
        <div
          id="mobile-nav"
          className="section-container mt-2 space-y-2 rounded-xl border border-white/10 bg-black/80 p-4 md:hidden"
        >
          {navSections.map((section) => (
            <a
              key={section.href}
              href={section.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
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
