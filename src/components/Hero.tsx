import { useEffect, useRef, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroAvatar, heroStats, resumeFile, socialLinks } from "@/data/portfolio-data";

type CountUpProps = {
  value: number;
  suffix?: string;
  shouldStart: boolean;
};

const CountUpValue = ({ value, suffix, shouldStart }: CountUpProps) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!shouldStart) {
      return;
    }

    const durationInMilliseconds = 1200;
    const animationStart = performance.now();

    const runAnimation = (timestamp: number) => {
      const progress = Math.min((timestamp - animationStart) / durationInMilliseconds, 1);
      setCurrentValue(Math.round(progress * value));

      if (progress < 1) {
        requestAnimationFrame(runAnimation);
      }
    };

    requestAnimationFrame(runAnimation);
  }, [shouldStart, value]);

  return (
    <span className="font-display text-3xl font-extrabold tracking-tight text-primary">
      {currentValue}
      {suffix}
    </span>
  );
};

const Hero = () => {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [shouldAnimateStats, setShouldAnimateStats] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimateStats(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="section-shell pb-16 pt-36">
      <div className="section-container grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_360px] xl:gap-20">
        <div className="space-y-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-primary">
            <span className="size-2 animate-pulse rounded-full bg-primary" />
            Disponivel para oportunidades
          </p>

          <h1 className="font-display text-[clamp(2.8rem,9vw,5.4rem)] font-extrabold leading-[0.95] tracking-[-0.04em]">
            <span className="block">Full Stack</span>
            <span className="block text-transparent [-webkit-text-stroke:1px_hsl(var(--primary)/0.5)]">
              & Data
            </span>
            <span className="block text-primary">Analyst</span>
          </h1>

          <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Desenvolvo <strong className="font-medium text-foreground">produtos digitais orientados a dados</strong>{" "}
            de aplicacoes web escalaveis a pipelines de analise e dashboards que transformam numeros em decisoes
            estrategicas.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="#projects">
                Ver projetos <ArrowRight size={16} />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 border-white/15 bg-white/5 text-muted-foreground hover:border-primary/35 hover:bg-primary/10 hover:text-primary"
            >
              <a href={resumeFile} download="Curriculo_Gabriel_Santos.pdf">
                Baixar CV <Download size={16} />
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-4 pt-2">
            {socialLinks.map((socialLink) => {
              const iconByLabel = {
                GitHub: Github,
                LinkedIn: Linkedin,
                Email: Mail,
              };
              const Icon = iconByLabel[socialLink.label as keyof typeof iconByLabel];

              return (
                <a
                  key={socialLink.label}
                  href={socialLink.href}
                  target={socialLink.href.startsWith("http") ? "_blank" : undefined}
                  rel={socialLink.href.startsWith("http") ? "noreferrer noopener" : undefined}
                  className="inline-flex size-10 items-center justify-center rounded-md border border-white/10 text-muted-foreground transition-all hover:border-primary/35 hover:bg-primary/10 hover:text-primary"
                  aria-label={socialLink.label}
                >
                  <Icon size={17} />
                </a>
              );
            })}
          </div>

          <div
            ref={statsRef}
            className="grid grid-cols-2 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]"
          >
            {heroStats.map((statItem) => (
              <div key={statItem.label} className="border border-white/5 px-5 py-4 text-center">
                <CountUpValue value={statItem.value} suffix={statItem.suffix} shouldStart={shouldAnimateStats} />
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">{statItem.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[340px]">
          <div className="relative aspect-square">
            <div className="absolute inset-0 rounded-full border border-primary/30" />
            <div className="absolute -inset-4 animate-[spin_20s_linear_infinite] rounded-full border border-dashed border-primary/20" />
            <div className="absolute -inset-8 animate-[spin_35s_linear_infinite_reverse] rounded-full border border-dashed border-primary/10" />
            <img
              src={heroAvatar}
              alt="Gabriel Santos"
              className="relative size-full rounded-full object-cover p-5 grayscale-[20%]"
            />
          </div>

          <div className="absolute -bottom-3 right-0 rounded-xl border border-primary/30 bg-card/95 px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="size-2.5 animate-pulse rounded-full bg-primary" />
              <div>
                <p className="text-xs font-semibold text-foreground">Aberto a oportunidades</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                  CLT - PJ - Remoto
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

