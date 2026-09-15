import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import NextLink from "next/link";
import Image from "next/image";
import clsx from "clsx";
import {
  ArrowUpRight,
  BookOpen,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { GithubIcon, TwitterIcon } from "@/components/icons";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Desarrollo de Software México",
    "Sistemas POS",
    "Sistema de Deudas",
    "Automatización SAT",
    "Bridge SAT API",
    "Facturación Electrónica",
    "Checkbook",
    "APIs REST",
    "Paladins MX",
  ],
  authors: [{ name: "Paladins.mx" }],
  creator: "Paladins.mx",
  icons: {
    icon: "/logo2-.png",
    shortcut: "/logo2-.png",
    apple: "/logo2-.png",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/logo2.png",
        width: 1200,
        height: 630,
        alt: "Paladins.mx - Soluciones Tecnológicas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/logo2.png"],
    creator: "@MiguelAngelMP10",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#08090f" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentYear = new Date().getFullYear();

  return (
    <html suppressHydrationWarning lang="es">
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased text-foreground relative selection:bg-violet-500/20 selection:text-violet-400",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {/* Ambient Lighting Background */}
          <div className="fixed inset-0 bg-grid pointer-events-none -z-10" />
          <div className="fixed top-[-10%] right-[-5%] glow-blob-purple -z-10 opacity-70 dark:opacity-40 animate-pulse-slow" />
          <div className="fixed bottom-[15%] left-[-10%] glow-blob-cyan -z-10 opacity-50 dark:opacity-30" />

          <div className="relative flex flex-col min-h-screen">
            <Navbar />

            <main className="w-full pt-24 pb-16 flex-grow">{children}</main>

            {/* Premium Footer */}
            <footer className="w-full border-t border-slate-200/80 dark:border-white/10 bg-slate-50/70 dark:bg-[#070a14]/90 backdrop-blur-xl transition-colors">
              <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                  {/* Company Info */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-tr from-violet-600 to-indigo-600 p-[2px]">
                        <div className="w-full h-full bg-background rounded-[10px] flex items-center justify-center">
                          <Image
                            alt="Paladins Logo"
                            className="object-contain"
                            height={32}
                            src="/logo2.png"
                            width={32}
                          />
                        </div>
                      </div>
                      <span className="font-extrabold text-2xl tracking-tight">
                        Paladins<span className="text-violet-500">.mx</span>
                      </span>
                    </div>

                    <p className="text-default-500 text-sm max-w-sm leading-relaxed">
                      Impulsamos empresas y negocios mediante software
                      empresarial de alto rendimiento, sistemas POS, plataformas
                      financieras y automatización fiscal SAT.
                    </p>

                    {/* System Status Pill */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 dark:text-emerald-400 text-xs font-medium">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      Sistemas y APIs 100% Operativos
                    </div>
                  </div>

                  {/* Navigation Links */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                      Navegación
                    </h4>
                    <ul className="space-y-2.5 text-sm">
                      {siteConfig.navItems.map((item) => (
                        <li key={item.href}>
                          <NextLink
                            className="text-default-500 hover:text-violet-500 transition-colors inline-flex items-center gap-1 group"
                            href={item.href}
                          >
                            <span>{item.label}</span>
                          </NextLink>
                        </li>
                      ))}
                      <li>
                        <a
                          className="text-default-500 hover:text-violet-500 transition-colors inline-flex items-center gap-1 group"
                          href="https://docs.paladins.mx/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <span>Docs API</span>
                          <ArrowUpRight
                            className="text-default-400 group-hover:text-violet-500"
                            size={13}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Products */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                      Soluciones
                    </h4>
                    <ul className="space-y-2.5 text-sm">
                      <li>
                        <NextLink
                          className="text-default-500 hover:text-violet-500 transition-colors"
                          href="/products#deudas"
                        >
                          Sistema de Deudas
                        </NextLink>
                      </li>
                      <li>
                        <NextLink
                          className="text-default-500 hover:text-violet-500 transition-colors"
                          href="/products#pos"
                        >
                          Punto de Venta (POS)
                        </NextLink>
                      </li>
                      <li>
                        <NextLink
                          className="text-default-500 hover:text-violet-500 transition-colors"
                          href="/products#checkbook"
                        >
                          Checkbook Financiero
                        </NextLink>
                      </li>
                      <li>
                        <NextLink
                          className="text-default-500 hover:text-violet-500 transition-colors"
                          href="/products#bridge"
                        >
                          Bridge Fiscal SAT
                        </NextLink>
                      </li>
                    </ul>
                  </div>

                  {/* Contact Direct */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                      Contacto Directo
                    </h4>
                    <ul className="space-y-2.5 text-sm text-default-500">
                      <li className="flex items-center gap-2">
                        <Mail className="text-violet-500 shrink-0" size={15} />
                        <a
                          className="hover:text-foreground transition-colors truncate"
                          href={`mailto:${siteConfig.contact.email}`}
                        >
                          {siteConfig.contact.email}
                        </a>
                      </li>
                      <li className="flex items-center gap-2">
                        <Phone className="text-violet-500 shrink-0" size={15} />
                        <a
                          className="hover:text-foreground transition-colors"
                          href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                        >
                          {siteConfig.contact.phone}
                        </a>
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin
                          className="text-violet-500 shrink-0"
                          size={15}
                        />
                        <span>{siteConfig.contact.location}</span>
                      </li>
                    </ul>

                    {/* Social Buttons */}
                    <div className="flex items-center gap-2 pt-2">
                      <a
                        className="w-8 h-8 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-500 flex items-center justify-center transition-colors"
                        href={siteConfig.links.whatsapp}
                        rel="noreferrer"
                        target="_blank"
                        title="WhatsApp"
                      >
                        <MessageCircle size={16} />
                      </a>
                      <a
                        className="w-8 h-8 rounded-lg bg-default-100 hover:bg-default-200 text-default-600 flex items-center justify-center transition-colors"
                        href={siteConfig.links.github}
                        rel="noreferrer"
                        target="_blank"
                        title="GitHub"
                      >
                        <GithubIcon size={16} />
                      </a>
                      <a
                        className="w-8 h-8 rounded-lg bg-default-100 hover:bg-default-200 text-default-600 flex items-center justify-center transition-colors"
                        href={siteConfig.links.twitter}
                        rel="noreferrer"
                        target="_blank"
                        title="Twitter / X"
                      >
                        <TwitterIcon size={16} />
                      </a>
                      <a
                        className="w-8 h-8 rounded-lg bg-default-100 hover:bg-default-200 text-default-600 flex items-center justify-center transition-colors"
                        href={siteConfig.links.docs}
                        rel="noreferrer"
                        target="_blank"
                        title="Documentación"
                      >
                        <BookOpen size={16} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-6 border-t border-slate-200/60 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-default-400">
                  <p>
                    &copy; {currentYear} Paladins.mx. Todos los derechos
                    reservados.
                  </p>
                  <div className="flex items-center gap-6">
                    <span className="inline-flex items-center gap-1 text-default-400">
                      <ShieldCheck className="text-violet-500" size={14} />
                      Seguridad y confidencialidad garantizada
                    </span>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
