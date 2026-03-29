import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatarImage from "@/assets/avatar_me.png";
import cvFile from "@/assets/Curriculo_Gabriel_Erick_Santos.pdf";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-primary font-mono text-sm md:text-base">
                Olá, eu sou
              </p>
              <h1 className="text-5xl md:text-7xl font-bold">Gabriel Santos</h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Desenvolvedor Full Stack
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl">
              Transformo ideias em soluções digitais e dados em insights
              estratégicos. Atuo no desenvolvimento de aplicações e na
              construção de análises orientadas a negócio, com foco em
              performance, escalabilidade e geração de valor.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold neon-glow"
              >
                <a
                  href={cvFile}
                  download="Curriculo_Gabriel_Santos.pdf"
                  className="flex items-center gap-2"
                >
                  <Download size={20} />
                  Baixar CV
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10"
              >
                <a href="#contact">Entrar em Contato</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/GabrielSantos777"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/gabriel-santos-880200249"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:gabrielsantos.erick@outlook.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="flex justify-center animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-glow"></div>
              <img
                src={avatarImage}
                alt="Batman Dev"
                className="relative w-64 h-64 md:w-96 md:h-96 rounded-full object-cover border-4 border-primary/30 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
