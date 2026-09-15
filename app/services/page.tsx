"use client";

import React from "react";
import NextLink from "next/link";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import {
  ArrowRight,
  BookOpen,
  Code2,
  ExternalLink,
  FileCheck2,
  GitBranch,
  Layers,
  MessageCircle,
  Network,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  Users2,
  Wrench,
  Zap,
} from "lucide-react";

import { siteConfig } from "@/config/site";

export default function ServicesPage() {
  const services = [
    {
      icon: Code2,
      title: "Desarrollo de Software a Medida",
      description:
        "Creamos soluciones tecnológicas y plataformas empresariales adaptadas al 100% a las reglas operativas y flujos de trabajo de tu organización.",
      tags: ["Full Stack", "Next.js", "TypeScript", "Escalabilidad"],
      color: "from-violet-600/20 to-indigo-600/20 text-violet-500",
    },
    {
      icon: Server,
      title: "Servicios REST & Microservicios",
      description:
        "Diseño e implementación de APIs RESTful seguras, documentadas y de alta concurrencia para comunicar sistemas empresariales y plataformas móviles.",
      tags: ["REST API", "Microservicios", "Swagger", "OAuth/JWT"],
      color: "from-blue-600/20 to-cyan-600/20 text-blue-500",
      hasDocsLink: true,
    },
    {
      icon: FileCheck2,
      title: "Automatización & Conectividad SAT",
      description:
        "Integración técnica con los servicios del SAT: validación de CERs, extracción y análisis de CSF, gestión de RFCs, firmas electrónicas y descargas masivas.",
      tags: ["SAT API", "CFDI 4.0", "CSD / e.firma", "Fiscal"],
      color: "from-emerald-600/20 to-teal-600/20 text-emerald-500",
    },
    {
      icon: ShieldCheck,
      title: "Seguridad, Encriptación & Auditoría",
      description:
        "Implementación de estrictos estándares de seguridad, encriptación en reposo y tránsito, prevención de vulnerabilidades OWASP y control de accesos.",
      tags: ["AES-256", "OWASP", "Control de Accesos", "Auditoría"],
      color: "from-red-600/20 to-rose-600/20 text-red-500",
    },
    {
      icon: Sparkles,
      title: "Diseño UI / UX de Vanguardia",
      description:
        "Interfaces intuitivas, responsivas y visualmente deslumbrantes que reducen la curva de aprendizaje de tu personal y deleitan a tus clientes.",
      tags: ["Design System", "Accesibilidad", "Figma", "Micro-interacciones"],
      color: "from-purple-600/20 to-pink-600/20 text-purple-500",
    },
    {
      icon: Wrench,
      title: "Soporte Técnico & Mantenimiento Proactivo",
      description:
        "Monitoreo continuo, resolución prioritaria de incidentes, optimización de consultas de base de datos y actualizaciones preventivas periódicas.",
      tags: ["SLA Garantizado", "Monitoreo 24/7", "Backups", "Optimización"],
      color: "from-amber-600/20 to-yellow-600/20 text-amber-500",
    },
    {
      icon: Network,
      title: "Arquitectura Cloud & Escalabilidad",
      description:
        "Infraestructuras preparadas para alta concurrencia, balanceo de carga, contenedores Docker y despliegues automatizados sin tiempo de inactividad.",
      tags: ["Cloud", "Docker", "CI/CD", "Alta Disponibilidad"],
      color: "from-sky-600/20 to-blue-600/20 text-sky-500",
    },
    {
      icon: Users2,
      title: "Consultoría & Modernización Tecnológica",
      description:
        "Asesoramiento estratégico para definir arquitecturas, modernizar sistemas legacy, migrar bases de datos y digitalizar procesos analógicos.",
      tags: ["Diagnóstico", "Roadmap Técnico", "Migración", "ROI"],
      color: "from-indigo-600/20 to-violet-600/20 text-indigo-500",
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Descubrimiento & Diagnóstico",
      description:
        "Analizamos a fondo los requerimientos, retos y objetivos de negocio para diseñar la solución óptima y delimitar el alcance técnico.",
      icon: Search,
    },
    {
      step: "02",
      title: "Arquitectura & Prototipado",
      description:
        "Modelamos la base de datos, especificamos los contratos de API y diseñamos prototipos interactivos para validación temprana.",
      icon: Layers,
    },
    {
      step: "03",
      title: "Desarrollo Ágil & Pruebas QA",
      description:
        "Construcción en sprints con revisiones periódicas, cobertura de pruebas automatizadas y control riguroso de calidad de código.",
      icon: GitBranch,
    },
    {
      step: "04",
      title: "Despliegue & Acompañamiento",
      description:
        "Lanzamiento controlado en producción, capacitación de usuarios y soporte técnico continuo para garantizar el éxito del proyecto.",
      icon: Rocket,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      {/* Services Hero */}
      <section className="text-center max-w-4xl mx-auto pt-6 space-y-4">
        <Chip
          className="font-semibold"
          color="primary"
          size="sm"
          variant="flat"
        >
          <span className="flex items-center gap-1.5">
            <Zap size={14} /> Capacidades de Ingeniería
          </span>
        </Chip>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Servicios de <span className="text-gradient-purple">Desarrollo</span>,
          APIs & Consultoría Tecnológica
        </h1>

        <p className="text-default-600 text-base sm:text-xl leading-relaxed">
          Convertimos requerimientos complejos en aplicaciones ágiles,
          escalables y seguras. Respaldamos tu crecimiento digital con
          ingeniería de primer nivel.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <div
              key={index}
              className="glass-card rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-white/10 flex flex-col justify-between group hover:border-violet-500/50"
            >
              <div className="space-y-4">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${service.color} flex items-center justify-center`}
                >
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-bold text-foreground group-hover:text-violet-500 transition-colors">
                  {service.title}
                </h3>

                <p className="text-default-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-[11px] font-medium text-default-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {service.hasDocsLink && (
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5">
                  <a
                    className="text-xs font-semibold text-violet-500 hover:text-violet-600 flex items-center gap-1.5 group/link"
                    href="https://docs.paladins.mx/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <BookOpen size={14} />
                    <span>Ver Documentación de APIs</span>
                    <ExternalLink
                      className="group-hover/link:translate-x-0.5 transition-transform"
                      size={12}
                    />
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Methodology Section */}
      <section className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Chip
            className="font-semibold"
            color="secondary"
            size="sm"
            variant="flat"
          >
            Metodología de Trabajo
          </Chip>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            ¿Cómo llevamos a cabo tu proyecto?
          </h2>
          <p className="text-default-600 text-base sm:text-lg">
            Un proceso estructurado, transparente y ágil para asegurar entregas
            a tiempo y con la máxima calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((step, idx) => {
            const Icon = step.icon;

            return (
              <div
                key={idx}
                className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-white/10 relative overflow-hidden flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-mono font-extrabold text-violet-500/40">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-500 flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-foreground">
                    {step.title}
                  </h3>

                  <p className="text-default-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* REST API Callout Banner */}
      <section className="rounded-3xl p-8 sm:p-12 glass-panel border border-violet-500/30 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4 text-left">
            <Chip
              className="font-semibold"
              color="primary"
              size="sm"
              variant="flat"
            >
              <span className="flex items-center gap-1.5">
                <Server size={14} /> Ecosistema de Conexión
              </span>
            </Chip>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-foreground">
              Documentación técnica y endpoints REST
            </h3>

            <p className="text-default-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              Disponemos de documentación interactiva para que tu equipo técnico
              o partners puedan integrar nuestras APIs de facturación, POS,
              consulta SAT y pasarelas de pago de manera rápida y sin
              complicaciones.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <Button
              as="a"
              className="font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-xl shadow-violet-500/25 rounded-2xl px-6"
              endContent={<ExternalLink size={18} />}
              href="https://docs.paladins.mx/"
              rel="noreferrer"
              size="lg"
              target="_blank"
            >
              Ir a Docs Paladins.mx
            </Button>

            <Button
              as={NextLink}
              className="font-semibold rounded-2xl px-6"
              href="/contact?service=rest-api"
              size="lg"
              variant="bordered"
            >
              Consultar Integración
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center max-w-3xl mx-auto space-y-6 pb-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
          ¿Tienes una idea o proyecto en mente?
        </h2>
        <p className="text-default-600 text-base sm:text-lg">
          Permítenos evaluar tu requerimiento y proponerte la mejor arquitectura
          tecnológica.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
          <Button
            as={NextLink}
            className="font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-2xl px-8 shadow-xl shadow-violet-500/25"
            endContent={<ArrowRight size={18} />}
            href="/contact"
            size="lg"
          >
            Solicitar Asesoría Gratuita
          </Button>
          <Button
            as="a"
            className="font-semibold border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 rounded-2xl px-8"
            href={siteConfig.links.whatsapp}
            rel="noreferrer"
            size="lg"
            startContent={<MessageCircle size={18} />}
            target="_blank"
            variant="bordered"
          >
            WhatsApp Inmediato
          </Button>
        </div>
      </section>
    </div>
  );
}
