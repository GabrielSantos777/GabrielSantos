import { socialLinks } from "@/data/portfolio-data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-container flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-display text-base font-bold text-primary">
            &lt;Gabriel <span className="text-muted-foreground">Santos</span> /&gt;
          </p>
          <p className="mt-1 text-sm text-muted-foreground">Feito com foco em performance e experiencia - {currentYear}</p>
        </div>

        <div className="flex items-center gap-4">
          <a href="#top" className="text-sm text-muted-foreground transition-colors hover:text-primary">
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
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
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

