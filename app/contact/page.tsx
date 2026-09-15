"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import {
  Check,
  CheckCircle2,
  Clock,
  Copy,
  HelpCircle,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { siteConfig } from "@/config/site";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Desarrollo a Medida",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const serviceOptions = [
    "Desarrollo a Medida",
    "Sistema POS",
    "Sistema de Deudas",
    "Bridge Fiscal SAT",
    "APIs REST",
    "Consultoría UI/UX",
  ];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.contact.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Ignore copy error
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#8b5cf6", "#38bdf8", "#10b981", "#ec4899"],
      });
    }, 800);
  };

  const faqs = [
    {
      question:
        "¿En cuánto tiempo pueden desarrollar e implementar mi proyecto?",
      answer:
        "Dependiendo de la complejidad y alcance. Nuestros sistemas listos para usar (POS, Deudas, Bridge SAT) pueden desplegarse en 24 a 72 horas. Para desarrollos 100% a la medida, realizamos entregas en sprints ágiles de 2 a 6 semanas con prototipos funcionales desde la primera semana.",
    },
    {
      question: "¿Cómo se determinan los costos de una solución de software?",
      answer:
        "Evaluamos el alcance técnico, módulos requeridos, integraciones de terceros (como timbrado SAT o pasarelas de pago) y nivel de personalización. Ofrecemos cotizaciones transparentes, con esquemas de pago por hitos o licencias mensuales según tu preferencia.",
    },
    {
      question:
        "¿Brindan soporte técnico y actualizaciones tras el lanzamiento?",
      answer:
        "Sí, todos nuestros proyectos incluyen un periodo de garantía de estabilidad y soporte técnico prioritario. Además, ofrecemos planes de mantenimiento preventivo, monitoreo 24/7 y respaldos continuos.",
    },
    {
      question:
        "¿Pueden integrar sus sistemas con mi ERP o base de datos actual?",
      answer:
        "Totalmente. Diseñamos nuestras soluciones con arquitectura desacoplada mediante APIs REST, lo que permite conectarnos sin fricciones con SAP, Aspel, sistemas legacy o bases de datos relacionales ya existentes.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      {/* Contact Hero */}
      <section className="text-center max-w-3xl mx-auto pt-6 space-y-4">
        <Chip
          className="font-semibold"
          color="primary"
          size="sm"
          variant="flat"
        >
          <span className="flex items-center gap-1.5">
            <Sparkles size={14} /> Estamos para ayudarte
          </span>
        </Chip>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Hablemos sobre tu{" "}
          <span className="text-gradient-purple">próximo</span> proyecto
        </h1>

        <p className="text-default-600 text-base sm:text-lg leading-relaxed">
          Cuéntanos qué necesitas y un ingeniero especialista te contactará en
          menos de 2 horas con una propuesta adaptada a tu presupuesto.
        </p>
      </section>

      {/* Main Grid: Form & Info */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Form Column */}
        <div className="lg:col-span-7">
          <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-white/10 shadow-xl relative overflow-hidden">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center border border-emerald-500/20 animate-bounce">
                  <CheckCircle2 size={36} />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                    ¡Mensaje recibido con éxito!
                  </h3>
                  <p className="text-default-500 text-sm sm:text-base max-w-md mx-auto">
                    Gracias por ponerte en contacto,{" "}
                    <strong className="text-foreground">
                      {formData.name || "estimado cliente"}
                    </strong>
                    . Nuestro equipo revisará tu solicitud para{" "}
                    <em>{formData.service}</em> y te responderá a la brevedad.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <Button
                    as="a"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl px-6"
                    href={siteConfig.contact.whatsappUrl}
                    rel="noreferrer"
                    startContent={<MessageCircle size={18} />}
                    target="_blank"
                  >
                    Seguimiento en WhatsApp
                  </Button>

                  <Button
                    className="rounded-xl font-medium"
                    variant="bordered"
                    onPress={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        company: "",
                        service: "Desarrollo a Medida",
                        message: "",
                      });
                    }}
                  >
                    Enviar otro mensaje
                  </Button>
                </div>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200/60 dark:border-white/5">
                  <MessageSquare className="text-violet-500" size={18} />
                  <h3 className="text-lg font-bold text-foreground">
                    Formulario de Contacto & Cotización
                  </h3>
                </div>

                {/* Service of Interest Pills */}
                <div className="space-y-2">
                  <span className="block text-xs uppercase font-bold tracking-wider text-default-600">
                    Servicio o producto de interés
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((srv) => (
                      <button
                        key={srv}
                        className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all ${
                          formData.service === srv
                            ? "bg-violet-600 text-white shadow-md shadow-violet-500/20"
                            : "bg-slate-100 dark:bg-white/5 text-default-600 hover:bg-slate-200 dark:hover:bg-white/10"
                        }`}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, service: srv })
                        }
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-xs uppercase font-bold tracking-wider text-default-600 mb-1.5"
                      htmlFor="name"
                    >
                      Nombre completo *
                    </label>
                    <input
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all placeholder:text-default-400"
                      id="name"
                      placeholder="Ej. Juan Pérez"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs uppercase font-bold tracking-wider text-default-600 mb-1.5"
                      htmlFor="email"
                    >
                      Correo electrónico *
                    </label>
                    <input
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all placeholder:text-default-400"
                      id="email"
                      placeholder="nombre@empresa.com"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Phone & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-xs uppercase font-bold tracking-wider text-default-600 mb-1.5"
                      htmlFor="phone"
                    >
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all placeholder:text-default-400"
                      id="phone"
                      placeholder="+52 241 ..."
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs uppercase font-bold tracking-wider text-default-600 mb-1.5"
                      htmlFor="company"
                    >
                      Empresa o Negocio (opcional)
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all placeholder:text-default-400"
                      id="company"
                      placeholder="Nombre de tu empresa"
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label
                      className="block text-xs uppercase font-bold tracking-wider text-default-600"
                      htmlFor="message"
                    >
                      Detalles del requerimiento *
                    </label>
                    <span className="text-[11px] text-default-400">
                      {formData.message.length}/1000
                    </span>
                  </div>
                  <textarea
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all placeholder:text-default-400 resize-none"
                    id="message"
                    maxLength={1000}
                    placeholder="Describe brevemente las funcionalidades deseadas o tus dudas específicas..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <Button
                  className="w-full font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-xl shadow-violet-500/25 rounded-2xl h-14 text-base"
                  endContent={!isSubmitting && <Send size={18} />}
                  isLoading={isSubmitting}
                  size="lg"
                  type="submit"
                >
                  {isSubmitting
                    ? "Enviando solicitud..."
                    : "Enviar Mensaje de Contacto"}
                </Button>

                <p className="text-center text-xs text-default-400 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="text-violet-500" size={14} />
                  Tus datos están protegidos bajo estricta confidencialidad.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Right Info Column */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct WhatsApp Callout Card */}
          <div className="glass-card rounded-3xl p-6 sm:p-7 border border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 to-transparent space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <MessageCircle size={24} />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-base">
                  ¿Prefieres atención inmediata?
                </h4>
                <p className="text-xs text-default-500">
                  Respuesta instantánea por WhatsApp
                </p>
              </div>
            </div>

            <p className="text-sm text-default-600 leading-relaxed">
              Escríbenos directamente a nuestra línea oficial de atención. Te
              asesoramos en tiempo real con cotizaciones y demos en vivo.
            </p>

            <Button
              as="a"
              className="w-full font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/20 rounded-xl h-12"
              href={siteConfig.contact.whatsappUrl}
              rel="noreferrer"
              startContent={<MessageCircle size={18} />}
              target="_blank"
            >
              Iniciar Chat en WhatsApp
            </Button>
          </div>

          {/* Contact Details Card */}
          <div className="glass-card rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-white/10 space-y-5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Información de Contacto
            </h4>

            <div className="space-y-4 text-sm">
              {/* Email with copy button */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/50 dark:border-white/5">
                <div className="flex items-center gap-3 min-w-0">
                  <Mail className="text-violet-500 shrink-0" size={18} />
                  <div className="truncate">
                    <div className="text-[11px] text-default-400 font-medium">
                      Correo electrónico
                    </div>
                    <div className="font-semibold text-foreground truncate">
                      {siteConfig.contact.email}
                    </div>
                  </div>
                </div>

                <Button
                  isIconOnly
                  className="rounded-xl shrink-0"
                  size="sm"
                  title="Copiar correo"
                  variant="flat"
                  onPress={handleCopyEmail}
                >
                  {copiedEmail ? (
                    <Check className="text-emerald-500" size={16} />
                  ) : (
                    <Copy className="text-default-500" size={16} />
                  )}
                </Button>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/50 dark:border-white/5">
                <Phone className="text-violet-500 shrink-0" size={18} />
                <div>
                  <div className="text-[11px] text-default-400 font-medium">
                    Línea telefónica
                  </div>
                  <a
                    className="font-semibold text-foreground hover:text-violet-500 transition-colors"
                    href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/50 dark:border-white/5">
                <MapPin className="text-violet-500 shrink-0" size={18} />
                <div>
                  <div className="text-[11px] text-default-400 font-medium">
                    Ubicación
                  </div>
                  <div className="font-semibold text-foreground">
                    {siteConfig.contact.location}
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/50 dark:border-white/5">
                <Clock className="text-violet-500 shrink-0" size={18} />
                <div>
                  <div className="text-[11px] text-default-400 font-medium">
                    Horario de atención
                  </div>
                  <div className="font-semibold text-foreground text-xs sm:text-sm">
                    {siteConfig.contact.schedule}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="space-y-8 pt-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <Chip
            className="font-semibold"
            color="secondary"
            size="sm"
            variant="flat"
          >
            <span className="flex items-center gap-1">
              <HelpCircle size={14} /> Preguntas Frecuentes
            </span>
          </Chip>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Resolvemos tus dudas
          </h2>
        </div>

        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-white/10">
          <Accordion selectionMode="multiple" variant="splitted">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                aria-label={faq.question}
                className="bg-transparent shadow-none border-b border-slate-200/60 dark:border-white/5 last:border-b-0 py-2"
                title={
                  <span className="font-bold text-base text-foreground">
                    {faq.question}
                  </span>
                }
              >
                <p className="text-default-600 text-sm sm:text-base leading-relaxed pb-3">
                  {faq.answer}
                </p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
