"use client";
import { Image } from "@nextui-org/react";

export default function ProductsPage() {
  return (
    <section className="py-16  text-center" data-aos="fade-up" id="features">
      <h2 className="text-5xl font-bold mb-10">Productos</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="feature p-4" data-aos="fade-up" data-aos-delay="100">
          <div className="flex items-center justify-center">
            <Image
              alt="Descripción de la imagen"
              className="rounded-lg shadow-2xl shadow-red-700"
              src="/products/deudas1.png"
              isBlurred
            />
          </div>
          <h3 className="text-3xl font-bold my-4">Sistema de deudas</h3>
          <p className="text-lg text-justify">
            Nuestro sistema te permite gestionar de manera eficiente deudas,
            clientes y pagos. Con funcionalidades como deudas programadas,
            reportes en PDF y control de pagos, tendrás todo lo necesario para
            mantener tus finanzas organizadas. Además, incluye módulos para
            presupuestos, categorías de gastos y gestión de propiedades. Su
            diseño intuitivo y herramientas avanzadas lo hacen ideal para
            simplificar tu administración financiera.
            <span className="text-red-700">
              {" "}
              ¡Optimiza tu tiempo y toma el control de tus deudas!
            </span>
          </p>
        </div>

        <div className="feature p-4" data-aos="fade-up" data-aos-delay="100">
          <div className="flex items-center justify-center">
            <Image
              alt="Descripción de la imagen"
              className="rounded-lg shadow-2xl shadow-green-700"
              src="/products/pos.png"
              isBlurred
            />
          </div>
          <h3 className="text-3xl font-bold my-4">
            Sistema de Punto de Venta (POS)
          </h3>
          <p className="text-lg text-justify">
            Este sistema permite gestionar ventas, clientes, productos,
            inventarios y pagos de manera eficiente. Incluye funcionalidades
            como cortes de caja, devoluciones, reembolsos y gráficos de análisis
            mensual. Con una interfaz intuitiva, facilita el control completo de
            las operaciones diarias en tu negocio.
          </p>
        </div>

        <div className="feature p-4" data-aos="fade-up" data-aos-delay="200">
          <div className="flex items-center justify-center">
            <Image
              alt="Descripción de la imagen"
              className="rounded-lg shadow-2xl shadow-violet-700"
              src="/products/checkbook.png"
            />
          </div>
          <h3 className="text-3xl font-bold  my-4">
            Sistema de Administración de Chequeras (Checkbook)
          </h3>
          <div className="text-lg text-justify">
            Nuestro sistema está diseñado para simplificar y optimizar la
            gestión de tus transacciones financieras. Administra múltiples
            cuentas bancarias con un control detallado de saldos, gestiona
            beneficiarios para agilizar transacciones y lleva un registro
            preciso de cheques emitidos, pendientes y procesados. Además,
            permite personalizar las configuraciones para adaptarse a tus
            necesidades. Con estas herramientas, podrás organizar tus finanzas
            de manera profesional y eficiente, facilitando la administración
            diaria de tus recursos.
          </div>
        </div>

        <div className="feature p-4" data-aos="fade-up" data-aos-delay="200">
          <div className="flex items-center justify-center">
            <Image
              alt="Descripción de la imagen"
              className="rounded-lg shadow-2xl shadow-violet-700"
              src="/products/bridge.png"
            />
          </div>
          <h3 className="text-3xl font-bold  my-4">
            Bridge para la gestión fiscal y administrativa
          </h3>
          <div className="text-lg text-justify">
            Bridge es un sistema administrativo enfocado en la gestión de datos
            fiscales y procesos relacionados con el SAT. Incluye secciones para
            buscar CERs, CSF, gestionar RFCs, firmas electrónicas, solicitudes
            API y consultas de descargas masivas, con una interfaz minimalista y
            accesible.
          </div>
        </div>
      </div>
    </section>
  );
}
