import { Image } from "@nextui-org/image";

import { title } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>
          Soluciones web escalables que{" "}
          <span className={title({ color: "violet" })}>impulsan</span> tu
          negocio y <span className={title({ color: "violet" })}>fascinan</span>{" "}
          a tus usuarios.
        </span>
      </div>

      <div className="inline-block max-w-xl text-center justify-center  ">
        <Image
          alt="Logo"
          className="w-full h-auto rounded-lg shadow-lg shadow-violet-700 mt-8"
          src="/logo2.png"
        />
      </div>
    </section>
  );
}
