"use client"

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import FondoAnimate from "./fondoAnimate";

const Introduccion = () => {
  return (
    <div className="relative z-10 w-full">
      <FondoAnimate/>
      <div className="z-20 grid items-center h-full p-4 pb-40 pt-40 md:py-0 md:grid-cols-2 gap-10 md:gap-18">
        <div className="flex justify-center md:justify-end md:mr-8">
          <Image
            src="/faceAvatar.png"
            priority
            width="400"
            height="400"
            alt="Avatar"
           className="w-60 h-60 md:w-80 md:h-80 rounded-full shadow-2xl shadow-gray-900"
          />
        </div>
        <div className="flex flex-col justify-center max-w-md">
          <h1 className="mb-2 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
            Si puedes imaginarlo, <br />
            <TypeAnimation
              sequence={[
                "puedes programarlo",
                1000,
                "puedes optimizarlo",
                1000,
                "puedes implementarlo",
                1000,
                "puedes desarrollarlo",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-secundary"
            />
          </h1>

          <p className="mx-10 mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
            Transformo ideas en experiencias digitales fluidas. Como
            desarrollador frontend y creador de contenido, diseño interfaces que
            no solo se ven bien, sino que funcionan a la perfección para todos
          </p>

          <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
            <a
              href="/projects"
              className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secundary hover:border-secundary hover:text-secundary"
            >
              Ver proyectos
            </a>
            <a
              href="/contact"
              className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secundary hover:border-secundary hover:text-secundary"
            >
              Contacta conmigo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduccion;
