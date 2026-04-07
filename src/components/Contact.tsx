import { FormEvent, useState } from "react";
import { AlertTriangle, CheckCircle2, Loader2, Github, Linkedin, Mail, Send } from "lucide-react";
import { contactChannels } from "@/data/portfolio-data";

const styles = {
  section: "section-shell border-t border-white/5",
  layout: "section-container grid gap-8 lg:grid-cols-2",
  introText: "max-w-xl text-base leading-8 text-muted-foreground",
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
    "mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-medium text-primary-foreground transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60",
  successMessage: "inline-flex items-center gap-2 text-sm text-primary",
  errorMessage: "inline-flex items-center gap-2 text-sm text-amber-300",
};

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type SubmitStatus = "idle" | "sending" | "success" | "error";

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const getDefaultEmailTarget = () =>
  contactChannels.find((channel) => channel.id === "email")?.value || "";

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const handleFieldChange = (field: keyof ContactFormData, value: string) => {
    setFormData((previousData) => ({ ...previousData, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const recipientEmail = getDefaultEmailTarget();
    const endpointFromEnv = import.meta.env.VITE_CONTACT_FORM_ENDPOINT?.trim();
    const endpoint = endpointFromEnv || `https://formsubmit.co/ajax/${recipientEmail}`;

    setSubmitStatus("sending");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `[Portfolio] ${formData.subject}`,
          _captcha: "false",
          _template: "table",
        }),
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar.");
      }

      setSubmitStatus("success");
      setFormData(initialFormData);
    } catch {
      setSubmitStatus("error");
    }
  };

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
            Estou aberto a oportunidades de emprego, freelance e conversas sobre tecnologia e dados. Respondo em até
            24 horas.
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
                placeholder="Oportunidade de trabalho / Projeto / etc."
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

            <button type="submit" className={styles.submitButton} disabled={submitStatus === "sending"}>
              {submitStatus === "sending" ? (
                <>
                  Enviando <Loader2 size={16} className="animate-spin" />
                </>
              ) : (
                <>
                  Enviar mensagem <Send size={16} />
                </>
              )}
            </button>

            {submitStatus === "success" ? (
              <p className={styles.successMessage}>
                <CheckCircle2 size={16} /> Mensagem enviada com sucesso.
              </p>
            ) : null}

            {submitStatus === "error" ? (
              <p className={styles.errorMessage}>
                <AlertTriangle size={16} /> Não consegui enviar agora. Verifique o endpoint do formulário.
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
