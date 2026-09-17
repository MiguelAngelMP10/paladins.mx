"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { Tabs, Tab } from "@nextui-org/tabs";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  ExternalLink,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import { siteConfig } from "@/config/site";

interface Product {
  id: string;
  category: "fintech" | "pos" | "sat" | "all";
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: "warning" | "success" | "secondary" | "primary";
  image: string;
  description: string;
  keyBenefits: string[];
  specs: string[];
  techTags: string[];
}

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const products: Product[] = [
    {
      id: "deudas",
      category: "fintech",
      title: "Sistema de Deudas & Cobranza",
      subtitle: "Administración integral de cuentas por cobrar y tesorería",
      badge: "Fintech & Crédito",
      badgeColor: "warning",
      image: "/products/deudas1.png",
      description:
        "Plataforma completa para gestionar créditos, deudas programadas, seguimiento de clientes y control de flujo de efectivo. Incluye generación de reportes en PDF, liquidaciones automáticas y paneles de control presupuestal.",
      keyBenefits: [
        "Programación inteligente de cuotas y fechas de vencimiento",
        "Generación automática de estados de cuenta y reportes en PDF",
        "Control granular de pagos parciales, moras e intereses",
        "Módulo de presupuestos, categorías de gastos y propiedades",
      ],
      specs: [
        "Formatos de exportación: PDF, Excel, CSV",
        "Notificaciones de vencimiento configurables",
        "Manejo de múltiples clientes y carteras",
        "Historial inmutable de abonos y liquidaciones",
      ],
      techTags: ["Next.js", "PDF Engine", "PostgreSQL", "Charts", "Fintech"],
    },
    {
      id: "pos",
      category: "pos",
      title: "Sistema de Punto de Venta (POS)",
      subtitle: "Control comercial inteligente para tiendas y sucursales",
      badge: "Comercio & Retail",
      badgeColor: "success",
      image: "/products/pos.png",
      description:
        "Sistema de punto de venta ágil y robusto para optimizar las operaciones diarias. Gestiona inventarios en tiempo real, múltiples cajas, devoluciones, arqueos ciegos y analítica de ventas con gráficos mensuales.",
      keyBenefits: [
        "Arqueos y cortes de caja diarios con validación por usuario",
        "Gestión de catálogo, códigos de barra y stock mínimo",
        "Control de devoluciones, cancelaciones y reembolsos",
        "Métricas en tiempo real de productos más vendidos y márgenes",
      ],
      specs: [
        "Soporte para impresoras térmicas y tickets",
        "Compatibilidad con lectores de código de barras",
        "Arquitectura multi-caja y multi-usuario",
        "Dashboard analítico mensual y anual",
      ],
      techTags: [
        "Next.js",
        "Hardware Support",
        "Analytics",
        "Inventory",
        "POS",
      ],
    },
    {
      id: "checkbook",
      category: "fintech",
      title: "Administración de Chequeras (Checkbook)",
      subtitle: "Gestión de cuentas bancarias y tesorería corporativa",
      badge: "Banca & Tesorería",
      badgeColor: "secondary",
      image: "/products/checkbook.png",
      description:
        "Diseñado para simplificar y blindar la gestión de tesorería y transacciones financieras. Administra múltiples cuentas bancarias, beneficiarios frecuentes, registro de cheques emitidos, en tránsito y cobrados.",
      keyBenefits: [
        "Control detallado de saldos por cuenta bancaria",
        "Directorio centralizado de beneficiarios con validación",
        "Conciliación bancaria y auditoría de cheques emitidos",
        "Alertas de saldo insuficiente y cheques pendientes",
      ],
      specs: [
        "Manejo multi-divisa (MXN, USD)",
        "Registro de firmas y autorizaciones",
        "Exportación de pólizas y movimientos contables",
        "Bitácora de seguridad con control de accesos",
      ],
      techTags: ["Banking", "Audit Logs", "Treasury", "Multi-Account"],
    },
    {
      id: "bridge",
      category: "sat",
      title: "Bridge Fiscal SAT & Gestión Administrativa",
      subtitle: "Automatización de datos fiscales y trámites del SAT",
      badge: "SAT & Fiscal",
      badgeColor: "primary",
      image: "/products/bridge.png",
      description:
        "Sistema administrativo y pasarela API enfocada en la automatización de trámites fiscales con el SAT. Permite buscar y validar certificados CERs, constancias de situación fiscal (CSF), validar RFCs, gestionar firmas electrónicas (e.firma) y realizar descargas masivas de comprobantes.",
      keyBenefits: [
        "Validación y extracción de Constancias de Situación Fiscal (CSF)",
        "Consulta de certificados de sellos digitales (CSD) y CERs",
        "Validación de listas negras del SAT (Art. 69 y 69-B)",
        "API REST integrable con cualquier ERP o sistema empresarial",
      ],
      specs: [
        "Endpoints REST con autenticación JWT / Token",
        "Procesamiento criptográfico de e.firma y claves privadas",
        "Módulo de descargas masivas XML y metadata",
        "Documentación OpenAPI disponible",
      ],
      techTags: ["SAT API", "Cryptography X.509", "REST Service", "CFDI 4.0"],
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      {/* Products Hero */}
      <section className="text-center max-w-4xl mx-auto pt-6 space-y-4">
        <Chip
          className="font-semibold"
          color="primary"
          size="sm"
          variant="flat"
        >
          <span className="flex items-center gap-1.5">
            <Sparkles size={14} /> Soluciones Desarrolladas
          </span>
        </Chip>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Software diseñado para{" "}
          <span className="text-gradient-purple">escalar</span> y simplificar tu
          negocio
        </h1>

        <p className="text-default-600 text-base sm:text-xl leading-relaxed">
          Nuestras plataformas están listas para implementarse de forma
          inmediata o personalizarse según las reglas operativas de tu empresa.
        </p>

        {/* Category filter tabs */}
        <div className="pt-6 flex justify-center max-w-full overflow-x-auto pb-2 scrollbar-none">
          <Tabs
            classNames={{
              tabList:
                "glass-panel p-1 rounded-full border border-slate-200/80 dark:border-white/10 flex-nowrap",
              tab: "rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium whitespace-nowrap",
            }}
            color="primary"
            selectedKey={selectedCategory}
            variant="bordered"
            onSelectionChange={(key) => setSelectedCategory(key as string)}
          >
            <Tab key="all" title="Todos los Productos" />
            <Tab key="fintech" title="Finanzas & Cobranza" />
            <Tab key="pos" title="Punto de Venta" />
            <Tab key="sat" title="Fiscal & SAT" />
          </Tabs>
        </div>
      </section>

      {/* Product List */}
      <section className="space-y-16">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="scroll-mt-32 glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-white/10 overflow-hidden relative"
            id={product.id}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Product Visual Showcase */}
              <div className="lg:col-span-6 space-y-4">
                <div className="relative group rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/10 shadow-2xl bg-slate-950">
                  <div className="relative w-full h-[280px] sm:h-[360px]">
                    <Image
                      fill
                      alt={product.title}
                      className="object-contain object-center p-2 group-hover:scale-105 transition-transform duration-500"
                      src={product.image}
                    />
                  </div>

                  {/* Status Overlay Pill */}
                  <div className="absolute top-4 left-4">
                    <Chip
                      className="font-semibold shadow-md"
                      color={product.badgeColor}
                      size="sm"
                      variant="solid"
                    >
                      {product.badge}
                    </Chip>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {product.techTags.map((tag) => (
                    <Chip
                      key={tag}
                      className="bg-slate-100 dark:bg-white/5 text-default-600 text-xs font-medium"
                      size="sm"
                      variant="flat"
                    >
                      {tag}
                    </Chip>
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                    {product.title}
                  </h2>
                  <p className="text-violet-600 dark:text-violet-400 text-sm sm:text-base font-medium mt-1">
                    {product.subtitle}
                  </p>
                </div>

                <p className="text-default-600 text-sm sm:text-base leading-relaxed">
                  {product.description}
                </p>

                {/* Key Benefits */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-foreground">
                    Beneficios Principales
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {product.keyBenefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="text-xs sm:text-sm text-default-600 flex items-start gap-2"
                      >
                        <CheckCircle2
                          className="text-emerald-500 shrink-0 mt-0.5"
                          size={16}
                        />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Specifications */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 space-y-2">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-foreground flex items-center gap-1.5">
                    <Cpu className="text-violet-500" size={14} />{" "}
                    Especificaciones Técnicas
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-default-500">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <Button
                    as={NextLink}
                    className="w-full sm:w-auto font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-500/25 rounded-xl px-6"
                    endContent={<ArrowRight size={16} />}
                    href={`/contact?product=${product.id}`}
                    size="md"
                  >
                    Solicitar Cotización / Demo
                  </Button>

                  <Button
                    as="a"
                    className="w-full sm:w-auto font-semibold border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 rounded-xl px-6"
                    href={`${siteConfig.contact.whatsappUrl}%20-%20Informes%20sobre%20${encodeURIComponent(product.title)}`}
                    rel="noreferrer"
                    size="md"
                    startContent={<MessageCircle size={16} />}
                    target="_blank"
                    variant="bordered"
                  >
                    Demo por WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Integration & Architecture Banner */}
      <section className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-200/80 dark:border-white/10 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-4">
          <Chip
            className="font-semibold"
            color="secondary"
            size="sm"
            variant="flat"
          >
            Integraciones & APIs
          </Chip>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-foreground">
            ¿Necesitas una personalización o integración a tu sistema actual?
          </h3>
          <p className="text-default-500 text-sm sm:text-base leading-relaxed">
            Nuestros módulos cuentan con arquitectura desacoplada mediante APIs
            REST, facilitando la conexión con cualquier ERP, base de datos
            existente o infraestructura en la nube.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Button
              as="a"
              className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-xl px-6"
              endContent={<ExternalLink size={16} />}
              href="https://docs.paladins.mx/"
              rel="noreferrer"
              target="_blank"
            >
              Explorar Documentación de APIs
            </Button>
            <Button
              as={NextLink}
              className="font-semibold rounded-xl px-6"
              href="/services"
              variant="bordered"
            >
              Ver Servicios de Desarrollo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
