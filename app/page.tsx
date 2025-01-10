"use client";
import {Image} from "@nextui-org/image";

import {title} from "@/components/primitives";
import Typed from "typed.js";
import {useEffect, useRef} from "react";

export default function Home() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Contactanos en:', ' mmunozpozos@gmail.com', '+52 241 112 56 57'],
            typeSpeed: 50,
            loop: true,
            showCursor: false,
            cursorChar: "|"
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <section className="flex flex-col items-center justify-center gap-4">
            <span ref={el} className="text-3xl"></span>
            <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>
          Soluciones web escalables que{" "}
            <span className={title({color: "violet"})}>impulsan</span> tu
          negocio y <span className={title({color: "violet"})}>fascinan</span>{" "}
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
