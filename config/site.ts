export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "paladins.mx",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Productos",
      href: "/products",
    },
    {
      label: "Servicios",
      href: "/services",
    },
    {
      label: "Contacto",
      href: "/contact",
    },
  ],
  links: {
    github: "https://github.com/MiguelAngelMP10",
    twitter: "https://twitter.com/MiguelAngelMP10",
    docs: "https://nextui.org",
  },
};
