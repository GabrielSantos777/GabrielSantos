import { FormEvent, useEffect, useState } from "react";
import { BriefcaseBusiness, Github, Linkedin, Mail, Send } from "lucide-react";
import { contactChannels } from "@/data/portfolio-data";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);

  const handleFieldChange = (field: keyof ContactFormData, value: string) => {
    setFormData((previousData) => ({ ...previousData, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsFeedbackVisible(true);
    setFormData(initialFormData);
  };

  useEffect(() => {
    if (!isFeedbackVisible) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsFeedbackVisible(false);
    }, 3000);

    return () => window.clearTimeout(timeoutId);
  }, [isFeedbackVisible]);

  return (
    <section id="contact" className="section-shell border-t border-white/5">
      <div className="section-container grid gap-8 lg:grid-cols-2">
        <div>
          <span className="section-label">// contato</span>
          <h2 className="section-title">
            Vamos construir
            <br />
            algo juntos?
          </h2>
          <p className="max-w-xl text-base leading-8 text-muted-foreground">
            Estou aberto a oportunidades de emprego, freelances e conversas sobre tecnologia e dados. Respondo em ate
            24 horas.
          </p>

          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-primary">
            <span className="size-2 animate-pulse rounded-full bg-primary" />
            Disponivel para CLT, PJ e freelance - remoto
          </p>

          <div className="mt-8 space-y-3">
            {contactChannels.map((contactChannel) => {
              const iconByChannel = {
                email: Mail,
                linkedin: Linkedin,
                github: Github,
              };

              const Icon = iconByChannel[contactChannel.id];

              return (
                <a
                  key={contactChannel.id}
                  href={contactChannel.href}
                  target={contactChannel.href.startsWith("http") ? "_blank" : undefined}
                  rel={contactChannel.href.startsWith("http") ? "noreferrer noopener" : undefined}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 transition-all hover:border-primary/30 hover:bg-primary/10"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-lg bg-white/[0.06]">
                    <Icon size={18} className="text-primary" />
                  </span>

                  <span>
                    <span className="block text-xs uppercase tracking-[0.1em] text-muted-foreground">
                      {contactChannel.label}
                    </span>
                    <span className="text-sm text-foreground">{contactChannel.value}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-7">
          <div className="grid gap-4">
            <label className="space-y-2 text-sm text-muted-foreground">
              <span>Nome</span>
              <input
                type="text"
                value={formData.name}
                onChange={(event) => handleFieldChange("name", event.target.value)}
                placeholder="Seu nome completo"
                className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary/40"
                required
              />
            </label>

            <label className="space-y-2 text-sm text-muted-foreground">
              <span>Email</span>
              <input
                type="email"
                value={formData.email}
                onChange={(event) => handleFieldChange("email", event.target.value)}
                placeholder="seu@email.com"
                className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary/40"
                required
              />
            </label>

            <label className="space-y-2 text-sm text-muted-foreground">
              <span>Assunto</span>
              <input
                type="text"
                value={formData.subject}
                onChange={(event) => handleFieldChange("subject", event.target.value)}
                placeholder="Oportunidade de trabalho / Projeto / etc"
                className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary/40"
                required
              />
            </label>

            <label className="space-y-2 text-sm text-muted-foreground">
              <span>Mensagem</span>
              <textarea
                value={formData.message}
                onChange={(event) => handleFieldChange("message", event.target.value)}
                placeholder="Conte um pouco sobre o projeto ou oportunidade..."
                className="h-32 w-full resize-none rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary/40"
                required
              />
            </label>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-medium text-primary-foreground transition-all hover:bg-primary/90"
            >
              Enviar mensagem <Send size={16} />
            </button>

            {isFeedbackVisible ? (
              <p className="inline-flex items-center gap-2 text-sm text-primary">
                <BriefcaseBusiness size={16} /> Obrigado! Mensagem recebida. Vou retornar em breve.
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;