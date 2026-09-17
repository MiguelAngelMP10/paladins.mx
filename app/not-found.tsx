import React from "react";
import NextLink from "next/link";
import { Button } from "@nextui-org/button";
import { ArrowLeft, Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <div className="relative mb-6">
        <div className="text-8xl sm:text-9xl font-black font-mono text-gradient-purple tracking-tighter opacity-80 select-none">
          404
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="p-3 rounded-2xl bg-violet-600/20 backdrop-blur-md border border-violet-500/30 text-violet-400">
            <Sparkles size={28} />
          </span>
        </div>
      </div>

      <h1 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight max-w-md">
        Página no encontrada
      </h1>

      <p className="mt-3 text-default-500 text-sm sm:text-base max-w-md leading-relaxed">
        La ruta que buscas no existe o ha sido movida. Puedes volver al inicio o
        explorar nuestras soluciones.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
        <Button
          as={NextLink}
          className="font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-500/25 rounded-xl px-6"
          href="/"
          startContent={<Home size={16} />}
        >
          Ir al Inicio
        </Button>

        <Button
          as={NextLink}
          className="font-semibold rounded-xl px-6 border-slate-300 dark:border-white/20"
          href="/products"
          startContent={<ArrowLeft size={16} />}
          variant="bordered"
        >
          Ver Productos
        </Button>
      </div>
    </div>
  );
}
