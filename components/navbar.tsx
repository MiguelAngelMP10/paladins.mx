"use client";

import React, { useState } from "react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import clsx from "clsx";
import { ArrowRight, BookOpen, MessageCircle, Sparkles } from "lucide-react";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon } from "@/components/icons";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <NextUINavbar
        className={clsx(
          "mx-auto rounded-2xl border transition-all duration-300 shadow-lg shadow-black/5 dark:shadow-purple-950/20",
          "bg-white/70 dark:bg-[#0d111e]/75 backdrop-blur-xl border-slate-200/80 dark:border-white/10",
        )}
        height="4rem"
        isMenuOpen={isMenuOpen}
        maxWidth="xl"
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="basis-1/5 sm:basis-auto" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            className="lg:hidden text-foreground"
          />
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-3 group"
              href="/"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-tr from-violet-600 to-indigo-600 p-[2px] shadow-md shadow-violet-500/20 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-background rounded-[10px] flex items-center justify-center overflow-hidden">
                  <Image
                    alt="Paladins Logo"
                    className="object-contain"
                    height={36}
                    src="/logo2.png"
                    width={36}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-foreground flex items-center gap-1">
                  Paladins<span className="text-violet-500">.mx</span>
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-wider text-default-500 -mt-1 hidden sm:block">
                  Software Solutions
                </span>
              </div>
            </NextLink>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden lg:flex basis-full" justify="center">
          <ul className="flex gap-1.5 justify-center items-center px-4 py-1.5 rounded-full bg-slate-100/70 dark:bg-white/5 border border-slate-200/60 dark:border-white/5">
            {siteConfig.navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <NavbarItem key={item.href}>
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
                </NavbarItem>
              );
            })}
          </ul>
        </NavbarContent>

        <NavbarContent className="basis-1/5 sm:basis-auto gap-2" justify="end">
          <NavbarItem className="hidden sm:flex items-center gap-1.5">
            <Link
              isExternal
              className="p-2 rounded-xl text-default-500 hover:text-violet-500 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              href={siteConfig.links.docs}
              title="Documentación API"
            >
              <BookOpen size={19} />
            </Link>
            <Link
              isExternal
              className="p-2 rounded-xl text-default-500 hover:text-foreground hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              href={siteConfig.links.github}
              title="GitHub"
            >
              <GithubIcon size={19} />
            </Link>
          </NavbarItem>

          <NavbarItem>
            <ThemeSwitch />
          </NavbarItem>

          <NavbarItem className="hidden md:flex">
            <Button
              as={NextLink}
              className="font-medium bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-md shadow-violet-500/25 rounded-xl px-4"
              endContent={<ArrowRight size={15} />}
              href="/contact"
              size="sm"
            >
              Cotizar
            </Button>
          </NavbarItem>
        </NavbarContent>

        {/* Mobile Menu */}
        <NavbarMenu className="bg-background/95 backdrop-blur-2xl pt-6 px-6 border-t border-divider">
          <div className="flex flex-col gap-3">
            {siteConfig.navMenuItems.map((item, index) => {
              const isActive = pathname === item.href;

              return (
                <NavbarMenuItem key={`${item.label}-${index}`}>
                  <NextLink
                    className={clsx(
                      "w-full flex items-center justify-between p-3.5 rounded-xl text-lg font-medium transition-colors",
                      isActive
                        ? "bg-violet-500/10 text-violet-600 dark:text-violet-400 font-semibold"
                        : "text-foreground hover:bg-default-100",
                    )}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-violet-500" />
                    ) : (
                      <ArrowRight className="text-default-400" size={18} />
                    )}
                  </NextLink>
                </NavbarMenuItem>
              );
            })}

            <div className="my-4 pt-4 border-t border-divider flex flex-col gap-3">
              <Button
                isExternal
                as={Link}
                className="w-full justify-center h-12 rounded-xl text-base font-medium"
                color="success"
                href={siteConfig.links.whatsapp}
                startContent={<MessageCircle size={18} />}
                variant="flat"
              >
                Contactar por WhatsApp
              </Button>

              <Button
                as={NextLink}
                className="w-full justify-center h-12 rounded-xl text-base font-medium bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/30"
                href="/contact"
                startContent={<Sparkles size={18} />}
                onClick={() => setIsMenuOpen(false)}
              >
                Solicitar Cotización
              </Button>
            </div>
          </div>
        </NavbarMenu>
      </NextUINavbar>
    </div>
  );
};
