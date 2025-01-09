"use client";

import { Image } from "@nextui-org/react";

export default function ServicesPage() {
  return (
    <section className="py-16  text-center" data-aos="fade-up" id="features">
      <h2 className="text-5xl font-bold mb-10">Servicios</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="feature p-4" data-aos="fade-up" data-aos-delay="100">
          <div className="flex items-center justify-center">
            <Image
              alt="Descripción de la imagen"
              className="w-64 h-64 rounded-lg shadow-2xl shadow-red-700"
              src="/image2.jpg"
            />
          </div>
          <h3 className="text-3xl font-bold my-4">
            Desarrollo de software a medida
          </h3>
          <p className="text-lg">
            Capacidad para crear soluciones tecnológicas completamente adaptadas
            a las necesidades exclusivas de cada cliente.
          </p>
        </div>
        <div className="feature p-4" data-aos="fade-up" data-aos-delay="200">
          <div className="flex items-center justify-center">
            <Image
              alt="Descripción de la imagen"
              className="w-64 h-64 rounded-lg shadow-2xl shadow-red-700"
              src="/image1_0.jpg"
            />
          </div>
          <h3 className="text-3xl font-bold  my-4">Servicios REST</h3>
          <p className="text-lg">
            Nuestros Servicios REST proporcionan una comunicación eficiente y
            escalable entre sistemas, mejorando la interoperabilidad y
            facilitando la integración para una experiencia digital fluida y
            transformadora.
          </p>
          <a
            className="relative inline-block text-blue-500 font-semibold transition duration-300 ease-in-out
                    hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            href="https://docs.paladins.mx/"
            rel="noreferrer"
            target="_blank"
          >
            <span
              className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 ease-in-out
                        origin-bottom-right hover:scale-x-100 hover:origin-bottom-left"
            />
            Documentacion
          </a>
        </div>
        <div className="feature p-4" data-aos="fade-up" data-aos-delay="300">
          <div className="flex items-center justify-center">
            <Image
              alt="Descripción de la imagen"
              className="w-64 h-64 rounded-lg shadow-2xl shadow-red-700"
              src="/image3.png"
            />
          </div>
          <h3 className="text-3xl font-bold my-4">
            Soporte Técnico y Mantenimiento
          </h3>
          <p className=" text-lg">
            Ofrecemos soporte continuo y servicios de mantenimiento para
            asegurar que las soluciones implementadas funcionen de manera óptima
            y se mantengan actualizadas.
          </p>
        </div>
        <div className="feature p-4" data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-3xl font-bold my-4">Innovación Tecnológica</h3>
          <p className="text-lg">
            Integración de las últimas tecnologías y tendencias del mercado para
            proporcionar soluciones innovadoras y mantener a nuestros clientes a
            la vanguardia de la transformación digital.
          </p>
        </div>
        <div className="feature p-4" data-aos="fade-up" data-aos-delay="500">
          <h3 className="text-3xl font-bold my-4">Seguridad</h3>
          <p className="text-lg">
            Implementación de estrictas medidas de seguridad para proteger los
            datos y la información crítica del cliente, garantizando la
            confidencialidad y la integridad de sus sistemas.
          </p>
        </div>
        <div className="feature p-4" data-aos="fade-up" data-aos-delay="600">
          <h3 className="text-3xl font-bold my-4">Escalabilidad</h3>
          <p className="text-lg">
            Diseño de soluciones escalables que pueden crecer y adaptarse junto
            con el negocio del cliente, permitiendo la incorporación de nuevas
            funcionalidades y usuarios sin afectar el rendimiento.
          </p>
        </div>
        <div className="feature p-4" data-aos="fade-up" data-aos-delay="700">
          <h3 className="text-3xl font-bold my-4">
            Consultoría y Asesoramiento
          </h3>
          <p className="text-lg">
            Ofrecemos servicios de consultoría para ayudar a nuestros clientes a
            definir sus necesidades y objetivos tecnológicos, y asesoramos sobre
            las mejores estrategias y tecnologías para alcanzarlos.
          </p>
        </div>
        <div className="feature p-4" data-aos="fade-up" data-aos-delay="800">
          <h3 className="text-3xl font-bold my-4">
            Interfaz de Usuario y Experiencia de Usuario (UI/UX)
          </h3>
          <p className="text-lg">
            Diseño de interfaces intuitivas y atractivas que mejoran la
            experiencia del usuario y facilitan la adopción y el uso del
            software.
          </p>
        </div>
      </div>
    </section>
  );
}
