"use client";

import React, { useEffect, useRef } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import Typed from "typed.js";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  FileCheck2,
  Globe2,
  MessageCircle,
  Receipt,
  Server,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import { siteConfig } from "@/config/site";

export default function Home() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: [
        "Sistemas de Punto de Venta (POS)",
        "Automatización Fiscal con el SAT",
        "Plataformas de Gestión Financiera",
        "APIs REST de Alto Rendimiento",
        "Desarrollo de Software a Medida",
      ],
      typeSpeed: 45,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const flagshipProducts = [
    {
      id: "deudas",
      title: "Sistema de Deudas & Cobranza",
      badge: "Fintech & Gestión",
      badgeColor: "warning" as const,
      description:
        "Control integral de deudas programadas, seguimiento de clientes, control de pagos y generación automatizada de reportes financieros en PDF.",
      image: "/products/deudas1.png",
      href: "/products#deudas",
      features: [
        "Recordatorios de pago y calendario",
        "Reportes PDF y balances automáticos",
        "Gestión de presupuestos y gastos",
      ],
    },
    {
      id: "pos",
      title: "Sistema de Punto de Venta (POS)",
      badge: "Comercio & Retail",
      badgeColor: "success" as const,
      description:
        "Plataforma completa para control de inventarios, gestión de ventas, múltiples cajas, devoluciones y análisis gráfico de rendimiento.",
      image: "/products/pos.png",
      href: "/products#pos",
      features: [
        "Cortes de caja y arqueos en tiempo real",
        "Control de stock multialmacén",
        "Métricas y analítica mensual",
      ],
    },
    {
      id: "checkbook",
      title: "Checkbook Financiero",
      badge: "Banca & Tesorería",
      badgeColor: "secondary" as const,
      description:
        "Administración inteligente de cuentas bancarias, emisión y conciliación de cheques, control de beneficiarios y balances en tiempo real.",
      image: "/products/checkbook.png",
      href: "/products#checkbook",
      features: [
        "Soporte multicuentas bancarias",
        "Registro de cheques emitidos y cobrados",
        "Historial y auditoría de movimientos",
      ],
    },
    {
      id: "bridge",
      title: "Bridge Fiscal SAT",
      badge: "SAT & Fiscal",
      badgeColor: "primary" as const,
      description:
        "Automatización de procesos con el SAT: consulta y validación de CERs, CSF, gestión de RFCs, firmas electrónicas y descargas masivas.",
      image: "/products/bridge.png",
      href: "/products#bridge",
      features: [
        "Integración directa vía API REST",
        "Validación de certificados y CSF",
        "Descarga masiva de comprobantes",
      ],
    },
  ];

  const techStack = [
    { name: "Next.js 15", desc: "React Framework", icon: Globe2 },
    { name: "TypeScript", desc: "Type Safety", icon: Code2 },
    { name: "PostgreSQL", desc: "Base de Datos", icon: Database },
    { name: "RESTful APIs", desc: "Microservicios", icon: Server },
    { name: "SAT Bridge", desc: "Conexión Fiscal", icon: FileCheck2 },
    { name: "Cloud Infra", desc: "Alta Disponibilidad", icon: Cpu },
  ];

  const pillars = [
    {
      icon: Zap,
      title: "Rendimiento y Escalabilidad",
      description:
        "Arquitecturas modernas diseñadas para soportar altos volúmenes de transacciones con latencias mínimas y escalabilidad garantizada.",
      color: "from-amber-500/20 to-orange-500/20 text-amber-500",
    },
    {
      icon: ShieldCheck,
      title: "Seguridad de Grado Empresarial",
      description:
        "Estrictos protocolos de encriptación, validación de datos y aislamiento para proteger la información más crítica de tu negocio.",
      color: "from-emerald-500/20 to-teal-500/20 text-emerald-500",
    },
    {
      icon: FileCheck2,
      title: "Integración SAT Especializada",
      description:
        "Experiencia comprobada en automatización fiscal mexicana, certificados, CSF, RFCs y conexión API directa y confiable.",
      color: "from-blue-500/20 to-cyan-500/20 text-blue-500",
    },
    {
      icon: Sparkles,
      title: "Experiencia UI/UX Superior",
      description:
        "Interfaces intuitivas, responsivas y visualmente atractivas que maximizan la productividad de tu equipo y la satisfacción del usuario.",
      color: "from-violet-500/20 to-purple-500/20 text-violet-500",
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 text-center">
        {/* Glow ambient background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-tr from-violet-600/20 via-purple-600/15 to-sky-500/15 blur-3xl -z-10 rounded-full pointer-events-none" />

        {/* Top announcement badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 dark:bg-violet-500/15 border border-violet-500/20 text-violet-700 dark:text-violet-300 text-xs sm:text-sm font-medium mb-8 hover:bg-violet-500/20 transition-all cursor-default">
          <Sparkles className="text-violet-500 shrink-0" size={15} />
          <span>Ingeniería de Software & Soluciones Tecnológicas</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-[1.1] sm:leading-[1.15]">
          Soluciones web escalables que{" "}
          <span className="text-gradient-purple">impulsan</span> tu negocio y{" "}
          <span className="text-gradient-cyan">fascinan</span> a tus clientes.
        </h1>

        {/* Dynamic Typed Subtitle */}
        <div className="mt-6 text-lg sm:text-2xl text-default-600 font-medium h-12 flex items-center justify-center gap-2">
          <span>Especialistas en:</span>
          <span
            ref={typedRef}
            className="text-violet-600 dark:text-violet-400 font-semibold"
          />
        </div>

        {/* Hero CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <Button
            as={NextLink}
            className="w-full sm:w-auto font-semibold bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-xl shadow-violet-500/25 rounded-2xl px-8 h-14"
            endContent={<ArrowRight size={18} />}
            href="/products"
            size="lg"
          >
            Explorar Productos
          </Button>

          <Button
            as={NextLink}
            className="w-full sm:w-auto font-semibold border-slate-300 dark:border-white/20 hover:border-violet-500 dark:hover:border-violet-400 rounded-2xl px-8 h-14 bg-background/50 backdrop-blur-md"
            href="/contact"
            size="lg"
            variant="bordered"
          >
            Solicitar Cotización
          </Button>
        </div>

        {/* Floating Mockup Preview Card */}
        <div className="mt-16 sm:mt-20 max-w-5xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 -z-10" />

          <div className="rounded-2xl sm:rounded-3xl border border-slate-200/80 dark:border-white/10 bg-slate-900/90 dark:bg-[#0c1020]/90 backdrop-blur-xl p-4 sm:p-6 shadow-2xl overflow-hidden text-left">
            {/* Window header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs text-slate-400 font-mono ml-2 hidden sm:inline-block">
                  paladins-ecosystem-v2.0.tsx
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                SAT Live Bridge Active
              </div>
            </div>

            {/* Dashboard Mock Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-slate-400 text-xs">
                  <span>Módulo Financiero</span>
                  <Receipt className="text-violet-400" size={16} />
                </div>
                <div className="text-2xl font-bold text-white font-mono">
                  $1,480,250 MXN
                </div>
                <div className="text-xs text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={12} /> Cobranza y pagos al día
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-slate-400 text-xs">
                  <span>Punto de Venta POS</span>
                  <BarChart3 className="text-sky-400" size={16} />
                </div>
                <div className="text-2xl font-bold text-white font-mono">
                  1,842 Ventas
                </div>
                <div className="text-xs text-sky-400 flex items-center gap-1">
                  <Zap size={12} /> +18.4% este mes
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-slate-400 text-xs">
                  <span>Conexión SAT & RFC</span>
                  <FileCheck2 className="text-emerald-400" size={16} />
                </div>
                <div className="text-2xl font-bold text-white font-mono">
                  100% Válido
                </div>
                <div className="text-xs text-emerald-400 flex items-center gap-1">
                  <ShieldCheck size={12} /> CERs & CSFs sincronizados
                </div>
              </div>
            </div>

            {/* Banner Inside Mock */}
            <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-violet-950/60 to-indigo-950/60 border border-violet-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-violet-600/30 flex items-center justify-center shrink-0">
                  <Cpu className="text-violet-300" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">
                    Arquitectura RESTful & Microservicios
                  </h4>
                  <p className="text-slate-400 text-xs">
                    Integración fluida con cualquier ERP, base de datos o
                    aplicación móvil.
                  </p>
                </div>
              </div>

              <Button
                as="a"
                className="bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl shrink-0"
                href="https://docs.paladins.mx/"
                rel="noreferrer"
                size="sm"
                target="_blank"
              >
                Ver Documentación API
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {siteConfig.stats.map((stat, idx) => (
            <Card
              key={idx}
              className="glass-card shadow-sm hover:shadow-md border border-slate-200/80 dark:border-white/10"
            >
              <CardBody className="p-6 text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-gradient-purple mb-1 font-mono">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-default-600">
                  {stat.label}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      {/* Flagship Products Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Chip
            className="mb-3 font-semibold"
            color="primary"
            size="sm"
            variant="flat"
          >
            Portafolio Insignia
          </Chip>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Nuestros Productos & Soluciones
          </h2>
          <p className="mt-4 text-default-600 text-base sm:text-lg">
            Sistemas robustos desarrollados para resolver las necesidades
            operativas, financieras y fiscales de negocios modernos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {flagshipProducts.map((product) => (
            <div
              key={product.id}
              className="group glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-200/80 dark:border-white/10 relative overflow-hidden"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <Chip
                    className="font-medium"
                    color={product.badgeColor}
                    size="sm"
                    variant="flat"
                  >
                    {product.badge}
                  </Chip>
                  <NextLink
                    className="text-default-400 group-hover:text-violet-500 transition-colors text-xs font-semibold flex items-center gap-1"
                    href={product.href}
                  >
                    Detalles <ArrowRight size={14} />
                  </NextLink>
                </div>

                {/* Product Image Frame */}
                <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-slate-900/50 border border-slate-200/60 dark:border-white/10 shadow-inner group-hover:scale-[1.02] transition-transform duration-300">
                  <Image
                    fill
                    alt={product.title}
                    className="object-cover object-top"
                    src={product.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-xs font-medium">
                      Ver características completas →
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-violet-500 transition-colors">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-default-600 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Key features bullets */}
                <ul className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/5">
                  {product.features.map((feat, i) => (
                    <li
                      key={i}
                      className="text-xs sm:text-sm text-default-600 flex items-center gap-2"
                    >
                      <CheckCircle2
                        className="text-emerald-500 shrink-0"
                        size={15}
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <Button
                  as={NextLink}
                  className="w-full font-semibold bg-slate-100 dark:bg-white/10 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-600 text-foreground transition-all rounded-xl"
                  endContent={<ArrowRight size={16} />}
                  href={product.href}
                >
                  Conocer más sobre {product.title.split(" ")[0]}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Paladins / Value Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Chip
            className="mb-3 font-semibold"
            color="secondary"
            size="sm"
            variant="flat"
          >
            ¿Por qué elegirnos?
          </Chip>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Ingeniería de software con los más altos estándares
          </h2>
          <p className="mt-4 text-default-600 text-base sm:text-lg">
            Combinamos diseño intuitivo con arquitecturas técnicas confiables y
            preparadas para el futuro.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;

            return (
              <div
                key={idx}
                className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-white/10 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${pillar.color} flex items-center justify-center`}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-default-500 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Tech Stack Ecosystem */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 glass-panel border border-slate-200/80 dark:border-white/10 relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-foreground">
              Tecnologías y Estándares Modernos
            </h3>
            <p className="text-default-500 text-sm sm:text-base mt-2">
              Construimos sobre las herramientas y frameworks más eficientes del
              mercado para garantizar velocidad, seguridad y compatibilidad.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack.map((tech, idx) => {
              const TechIcon = tech.icon;

              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 flex flex-col items-center text-center hover:border-violet-500/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-500 flex items-center justify-center mb-2">
                    <TechIcon size={20} />
                  </div>
                  <div className="font-bold text-sm text-foreground">
                    {tech.name}
                  </div>
                  <div className="text-[11px] text-default-500">
                    {tech.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* High-Conversion CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-14 bg-gradient-to-tr from-violet-900 via-indigo-950 to-slate-950 border border-violet-500/30 text-center shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl mx-auto space-y-6">
            <Chip
              className="font-semibold"
              color="secondary"
              size="sm"
              variant="flat"
            >
              Hagamos realidad tu proyecto
            </Chip>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              ¿Listo para transformar la tecnología de tu empresa?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Contáctanos hoy mismo para una consultoría gratuita o demostración
              de nuestros productos. Desarrollamos la solución exacta que tu
              negocio necesita.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                as={NextLink}
                className="w-full sm:w-auto font-semibold bg-white text-violet-950 hover:bg-slate-100 shadow-xl rounded-2xl px-8 h-14"
                endContent={<ArrowRight size={18} />}
                href="/contact"
                size="lg"
              >
                Comenzar Proyecto
              </Button>

              <Button
                as="a"
                className="w-full sm:w-auto font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/30 rounded-2xl px-8 h-14"
                href={siteConfig.links.whatsapp}
                rel="noreferrer"
                size="lg"
                startContent={<MessageCircle size={18} />}
                target="_blank"
              >
                Escribir por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
