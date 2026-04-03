import { FormEvent, useEffect, useState } from "react";
import { BriefcaseBusiness, Github, Linkedin, Mail, Send } from "lucide-react";
import { contactChannels } from "@/data/portfolio-data";

const styles = {
  section: "section-shell border-t border-white/5",
  layout: "section-container grid gap-8 lg:grid-cols-2",
  introText: "max-w-xl text-base leading-8 text-muted-foreground",
  availabilityBadge:
    "mt-6 inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-primary",
  availabilityDot: "size-2 animate-pulse rounded-full bg-primary",
  channelList: "mt-8 space-y-3",
  channelLink:
    "flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 transition-all hover:border-primary/30 hover:bg-primary/10",
  channelIconWrap: "inline-flex size-10 items-center justify-center rounded-lg bg-white/[0.06]",
  channelLabel: "block text-xs uppercase tracking-[0.1em] text-muted-foreground",
  channelValue: "text-sm text-foreground",
  formCard: "rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-7",
  formGrid: "grid gap-4",
  fieldLabel: "space-y-2 text-sm text-muted-foreground",
  fieldInput:
    "w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary/40",
  fieldTextarea:
    "h-32 w-full resize-none rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary/40",
  submitButton:
    "mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-medium text-primary-foreground transition-all hover:bg-primary/90",
  successMessage: "inline-flex items-center gap-2 text-sm text-primary",
};

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
    <section id="contact" className={styles.section}>
      <div className={styles.layout}>
        <div>
          <span className="section-label">// contato</span>
          <h2 className="section-title">
            Vamos construir
            <br />
            algo juntos?
          </h2>
          <p className={styles.introText}>
            Estou aberto a oportunidades de emprego, freelance e conversas sobre
            tecnologia e dados. Respondo em até 24 horas.
          </p>

          <p className={styles.availabilityBadge}>
            <span className={styles.availabilityDot} />
            Disponível para CLT, PJ e freelance - remoto
          </p>

          <div className={styles.channelList}>
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
                  className={styles.channelLink}
                >
                  <span className={styles.channelIconWrap}>
                    <Icon size={18} className="text-primary" />
                  </span>

                  <span>
                    <span className={styles.channelLabel}>{contactChannel.label}</span>
                    <span className={styles.channelValue}>{contactChannel.value}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.formCard}>
          <div className={styles.formGrid}>
            <label className={styles.fieldLabel}>
              <span>Nome</span>
              <input
                type="text"
                value={formData.name}
                onChange={(event) => handleFieldChange("name", event.target.value)}
                placeholder="Seu nome completo"
                className={styles.fieldInput}
                required
              />
            </label>

            <label className={styles.fieldLabel}>
              <span>Email</span>
              <input
                type="email"
                value={formData.email}
                onChange={(event) => handleFieldChange("email", event.target.value)}
                placeholder="seu@email.com"
                className={styles.fieldInput}
                required
              />
            </label>

            <label className={styles.fieldLabel}>
              <span>Assunto</span>
              <input
                type="text"
                value={formData.subject}
                onChange={(event) => handleFieldChange("subject", event.target.value)}
                placeholder="Oportunidade de trabalho / Projeto / etc"
                className={styles.fieldInput}
                required
              />
            </label>

            <label className={styles.fieldLabel}>
              <span>Mensagem</span>
              <textarea
                value={formData.message}
                onChange={(event) => handleFieldChange("message", event.target.value)}
                placeholder="Conte um pouco sobre o projeto ou oportunidade..."
                className={styles.fieldTextarea}
                required
              />
            </label>

            <button type="submit" className={styles.submitButton}>
              Enviar mensagem <Send size={16} />
            </button>

            {isFeedbackVisible ? (
              <p className={styles.successMessage}>
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
