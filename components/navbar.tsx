"use client";

import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import clsx from "clsx";
import {
  ArrowRight,
  BookOpen,
  Boxes,
  Code2,
  ExternalLink,
  Home,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  X,
} from "lucide-react";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, TwitterIcon } from "@/components/icons";

interface NavItemData {
  label: string;
  href: string;
  desc: string;
  icon: React.ElementType;
  badge?: string;
  isExternal?: boolean;
}

const navItemsList: NavItemData[] = [
  {
    label: "Inicio",
    href: "/",
    desc: "Página principal y soluciones",
    icon: Home,
  },
  {
    label: "Productos",
    href: "/products",
    desc: "POS, Deudas, Checkbook y Bridge SAT",
    icon: Boxes,
    badge: "4 Sistemas",
  },
  {
    label: "Servicios",
    href: "/services",
    desc: "Desarrollo a medida y APIs REST",
    icon: Code2,
  },
  {
    label: "Contacto",
    href: "/contact",
    desc: "Cotizaciones y asesoría personalizada",
    icon: Send,
  },
  {
    label: "Documentación API",
    href: "https://docs.paladins.mx/",
    desc: "Guías técnicas y endpoints",
    icon: BookOpen,
    isExternal: true,
  },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu upon route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;

      document.body.style.overflow = "hidden";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsMenuOpen(false);
        }
      };

      const handleResize = () => {
        if (window.innerWidth >= 1024) {
          setIsMenuOpen(false);
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("resize", handleResize);

      return () => {
        document.body.style.overflow = originalStyle;
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Floating Top Navbar Container */}
      <header className="fixed top-0 inset-x-0 z-40 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4">
        <nav
          aria-label="Navegación principal"
          className={clsx(
            "max-w-7xl mx-auto h-16 sm:h-[4.25rem] px-3.5 sm:px-6 rounded-2xl border transition-all duration-300 shadow-lg shadow-black/5 dark:shadow-purple-950/20",
            "bg-white/80 dark:bg-[#0d111e]/80 backdrop-blur-xl border-slate-200/80 dark:border-white/10",
            "flex items-center justify-between gap-2 sm:gap-4",
          )}
        >
          {/* Brand Logo & Title */}
          <div className="flex items-center gap-2">
            <NextLink
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-xl"
              href="/"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden bg-gradient-to-tr from-violet-600 to-indigo-600 p-[2px] shadow-md shadow-violet-500/20 group-hover:scale-105 transition-transform duration-300 shrink-0">
                <div className="w-full h-full bg-background rounded-[10px] flex items-center justify-center overflow-hidden">
                  <Image
                    priority
                    alt="Paladins Logo"
                    className="object-contain"
                    height={34}
                    src="/logo2.png"
                    width={34}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-foreground flex items-center">
                  Paladins<span className="text-violet-500">.mx</span>
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-wider text-default-500 -mt-1 hidden sm:block">
                  Software Solutions
                </span>
              </div>
            </NextLink>
          </div>

          {/* Desktop Navigation Links (>= 1024px) */}
          <div className="hidden lg:flex items-center justify-center">
            <ul className="flex gap-1 justify-center items-center px-3 py-1.5 rounded-full bg-slate-100/70 dark:bg-white/5 border border-slate-200/60 dark:border-white/5">
              {siteConfig.navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.href}>
                    <NextLink
                      className={clsx(
                        "relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                        isActive
                          ? "text-violet-600 dark:text-violet-400 font-semibold bg-white dark:bg-white/10 shadow-sm"
                          : "text-default-600 hover:text-foreground hover:bg-slate-200/50 dark:hover:bg-white/5",
                      )}
                      href={item.href}
                    >
                      {item.label}
                      {isActive && (
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-violet-500" />
                      )}
                    </NextLink>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Desktop Links (Docs & GitHub) */}
            <div className="hidden lg:flex items-center gap-1">
              <a
                className="p-2 rounded-xl text-default-500 hover:text-violet-500 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                href={siteConfig.links.docs}
                rel="noreferrer"
                target="_blank"
                title="Documentación API"
              >
                <BookOpen size={19} />
              </a>
              <a
                className="p-2 rounded-xl text-default-500 hover:text-foreground hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                href={siteConfig.links.github}
                rel="noreferrer"
                target="_blank"
                title="GitHub"
              >
                <GithubIcon size={19} />
              </a>
            </div>

            {/* Theme Toggle (Visible on all devices) */}
            <div className="p-1 sm:p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
              <ThemeSwitch />
            </div>

            {/* Desktop Cotizar CTA */}
            <div className="hidden md:flex">
              <Button
                as={NextLink}
                className="font-medium bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-md shadow-violet-500/25 rounded-xl px-4 h-9"
                endContent={<ArrowRight size={15} />}
                href="/contact"
                size="sm"
              >
                Cotizar
              </Button>
            </div>

            {/* Mobile Animated Hamburger Button (< 1024px) */}
            <button
              aria-expanded={isMenuOpen}
              aria-label={
                isMenuOpen ? "Cerrar menú principal" : "Abrir menú principal"
              }
              className={clsx(
                "lg:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 border",
                isMenuOpen
                  ? "bg-violet-600 text-white border-violet-600 shadow-md shadow-violet-500/25"
                  : "bg-slate-100/80 dark:bg-white/10 text-foreground border-slate-200/80 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/15",
              )}
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Drawer / Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-start">
            {/* Backdrop Blur */}
            <motion.div
              animate={{ opacity: 1 }}
              aria-hidden="true"
              className="fixed inset-0 bg-slate-950/60 dark:bg-black/80 backdrop-blur-md"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Drawer Modal Box */}
            <motion.div
              animate={{ y: 0, opacity: 1, scale: 1 }}
              className="relative w-full max-w-lg mx-auto p-3 sm:p-4 z-10 max-h-[100dvh] flex flex-col"
              exit={{ y: -20, opacity: 0, scale: 0.97 }}
              initial={{ y: -30, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="w-full bg-white/95 dark:bg-[#0b0e1b]/95 border border-slate-200/90 dark:border-white/10 rounded-3xl shadow-2xl backdrop-blur-2xl overflow-hidden flex flex-col max-h-[calc(100dvh-1.5rem)]">
                {/* Drawer Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg overflow-hidden bg-gradient-to-tr from-violet-600 to-indigo-600 p-[1.5px]">
                      <div className="w-full h-full bg-background rounded-[7px] flex items-center justify-center">
                        <Image
                          alt="Paladins Logo"
                          className="object-contain"
                          height={24}
                          src="/logo2.png"
                          width={24}
                        />
                      </div>
                    </div>
                    <span className="font-extrabold text-base tracking-tight text-foreground">
                      Paladins<span className="text-violet-500">.mx</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <ThemeSwitch />
                    <button
                      aria-label="Cerrar menú"
                      className="p-2 rounded-xl text-default-600 hover:text-foreground hover:bg-slate-200/70 dark:hover:bg-white/10 transition-colors"
                      type="button"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>

                {/* Scrollable Body */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">
                  {/* Navigation Links Group */}
                  <div className="space-y-1.5">
                    <div className="px-2 pb-1 text-[11px] font-bold uppercase tracking-wider text-default-400">
                      Navegación Principal
                    </div>
                    {navItemsList.map((item, idx) => {
                      const isActive = pathname === item.href;
                      const Icon = item.icon;

                      if (item.isExternal) {
                        return (
                          <motion.a
                            key={item.href}
                            animate={{ opacity: 1, x: 0 }}
                            className="w-full flex items-center justify-between p-3 rounded-2xl text-foreground hover:bg-slate-100 dark:hover:bg-white/5 border border-transparent hover:border-slate-200 dark:hover:border-white/5 transition-all group"
                            href={item.href}
                            initial={{ opacity: 0, x: -10 }}
                            rel="noreferrer"
                            target="_blank"
                            transition={{ delay: idx * 0.04 }}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="flex items-center gap-3.5 min-w-0">
                              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 text-default-600 group-hover:text-violet-500 group-hover:bg-violet-500/10 flex items-center justify-center transition-colors shrink-0">
                                <Icon size={20} />
                              </div>
                              <div className="text-left min-w-0">
                                <div className="font-semibold text-sm text-foreground group-hover:text-violet-500 transition-colors flex items-center gap-1.5">
                                  <span>{item.label}</span>
                                  <ExternalLink
                                    className="text-default-400"
                                    size={12}
                                  />
                                </div>
                                <div className="text-xs text-default-400 truncate">
                                  {item.desc}
                                </div>
                              </div>
                            </div>
                            <ArrowRight
                              className="text-default-300 group-hover:text-violet-500 group-hover:translate-x-0.5 transition-all shrink-0"
                              size={16}
                            />
                          </motion.a>
                        );
                      }

                      return (
                        <motion.div
                          key={item.href}
                          animate={{ opacity: 1, x: 0 }}
                          initial={{ opacity: 0, x: -10 }}
                          transition={{ delay: idx * 0.04 }}
                        >
                          <NextLink
                            className={clsx(
                              "w-full flex items-center justify-between p-3 rounded-2xl transition-all group",
                              isActive
                                ? "bg-violet-500/10 dark:bg-violet-500/15 border border-violet-500/30 text-violet-600 dark:text-violet-300 shadow-sm"
                                : "text-foreground hover:bg-slate-100 dark:hover:bg-white/5 border border-transparent hover:border-slate-200 dark:hover:border-white/5",
                            )}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="flex items-center gap-3.5 min-w-0">
                              <div
                                className={clsx(
                                  "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors",
                                  isActive
                                    ? "bg-violet-600 text-white shadow-md shadow-violet-500/30"
                                    : "bg-slate-100 dark:bg-white/5 text-default-600 group-hover:text-violet-500 group-hover:bg-violet-500/10",
                                )}
                              >
                                <Icon size={20} />
                              </div>
                              <div className="text-left min-w-0">
                                <div className="flex items-center gap-2">
                                  <span
                                    className={clsx(
                                      "font-semibold text-sm",
                                      isActive
                                        ? "text-violet-600 dark:text-violet-400"
                                        : "text-foreground group-hover:text-violet-500",
                                    )}
                                  >
                                    {item.label}
                                  </span>
                                  {item.badge && (
                                    <Chip
                                      className="font-medium text-[10px] h-5"
                                      color="primary"
                                      size="sm"
                                      variant="flat"
                                    >
                                      {item.badge}
                                    </Chip>
                                  )}
                                </div>
                                <div className="text-xs text-default-400 truncate">
                                  {item.desc}
                                </div>
                              </div>
                            </div>

                            {isActive ? (
                              <div className="w-2 h-2 rounded-full bg-violet-500 shadow-sm shadow-violet-500 shrink-0 mr-1" />
                            ) : (
                              <ArrowRight
                                className="text-default-300 group-hover:text-violet-500 group-hover:translate-x-0.5 transition-all shrink-0"
                                size={16}
                              />
                            )}
                          </NextLink>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Direct CTAs */}
                  <div className="space-y-2.5 pt-2 border-t border-slate-200/80 dark:border-white/10">
                    <div className="px-2 text-[11px] font-bold uppercase tracking-wider text-default-400">
                      Contacto y Cotizaciones
                    </div>

                    <a
                      className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 font-semibold text-sm transition-all group"
                      href={siteConfig.links.whatsapp}
                      rel="noreferrer"
                      target="_blank"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/30">
                          <MessageCircle size={18} />
                        </div>
                        <div className="text-left">
                          <div>Contactar por WhatsApp</div>
                          <div className="text-[11px] font-normal text-emerald-600/80 dark:text-emerald-400/80">
                            Respuesta inmediata
                          </div>
                        </div>
                      </div>
                      <ArrowRight
                        className="text-emerald-500 group-hover:translate-x-0.5 transition-transform"
                        size={16}
                      />
                    </a>

                    <NextLink
                      className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-violet-500/25 transition-all group"
                      href="/contact"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                          <Sparkles size={18} />
                        </div>
                        <div className="text-left">
                          <div>Solicitar Cotización</div>
                          <div className="text-[11px] font-normal text-violet-100">
                            Presupuesto sin compromiso
                          </div>
                        </div>
                      </div>
                      <ArrowRight
                        className="text-white group-hover:translate-x-0.5 transition-transform"
                        size={16}
                      />
                    </NextLink>
                  </div>

                  {/* Direct Contacts Row */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <a
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-100/80 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 text-xs text-default-600 hover:text-foreground transition-colors"
                      href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                    >
                      <Phone className="text-violet-500 shrink-0" size={14} />
                      <span className="truncate">
                        {siteConfig.contact.phone}
                      </span>
                    </a>
                    <a
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-100/80 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 text-xs text-default-600 hover:text-foreground transition-colors"
                      href={`mailto:${siteConfig.contact.email}`}
                    >
                      <Mail className="text-violet-500 shrink-0" size={14} />
                      <span className="truncate">Email Directo</span>
                    </a>
                  </div>

                  {/* Social and Status Bar */}
                  <div className="pt-3 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <a
                        className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 text-default-500 hover:text-foreground hover:bg-slate-200 dark:hover:bg-white/10 flex items-center justify-center transition-colors"
                        href={siteConfig.links.github}
                        rel="noreferrer"
                        target="_blank"
                        title="GitHub"
                      >
                        <GithubIcon size={16} />
                      </a>
                      <a
                        className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 text-default-500 hover:text-foreground hover:bg-slate-200 dark:hover:bg-white/10 flex items-center justify-center transition-colors"
                        href={siteConfig.links.twitter}
                        rel="noreferrer"
                        target="_blank"
                        title="Twitter / X"
                      >
                        <TwitterIcon size={16} />
                      </a>
                      <a
                        className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 text-default-500 hover:text-foreground hover:bg-slate-200 dark:hover:bg-white/10 flex items-center justify-center transition-colors"
                        href={siteConfig.links.docs}
                        rel="noreferrer"
                        target="_blank"
                        title="Documentación API"
                      >
                        <BookOpen size={16} />
                      </a>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[11px] font-medium">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      <span>Sistemas Operativos</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
