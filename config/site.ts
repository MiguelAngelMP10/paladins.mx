export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Paladins.mx",
  shortName: "Paladins",
  title:
    "Paladins.mx | Software a Medida, Sistemas POS & Soluciones Fiscales SAT",
  description:
    "Desarrollo de software empresarial escalable, sistemas POS, plataformas de gestión financiera, automatización fiscal con el SAT y servicios REST de alto rendimiento.",
  url: "https://paladins.mx",
  ogImage: "https://paladins.mx/logo2.png",
  navItems: [
    {
      label: "Inicio",
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
  navMenuItems: [
    {
      label: "Inicio",
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
    {
      label: "Documentación API",
      href: "https://docs.paladins.mx/",
      isExternal: true,
    },
  ],
  contact: {
    email: "mmunozpozos@gmail.com",
    phone: "+52 241 112 56 57",
    whatsappUrl:
      "https://wa.me/522411125657?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto%20con%20Paladins%20MX",
    location: "Tlaxcala / CDMX, México",
    schedule: "Lunes a Viernes: 9:00 AM - 7:00 PM (CST)",
  },
  links: {
    github: "https://github.com/MiguelAngelMP10",
    twitter: "https://twitter.com/MiguelAngelMP10",
    docs: "https://docs.paladins.mx/",
    whatsapp:
      "https://wa.me/522411125657?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto%20con%20Paladins%20MX",
  },
  stats: [
    { value: "+99.9%", label: "Uptime Garantizado" },
    { value: "+50", label: "Proyectos Entregados" },
    { value: "100%", label: "Cumplimiento SAT" },
    { value: "24/7", label: "Soporte Técnico Especializado" },
  ],
};
