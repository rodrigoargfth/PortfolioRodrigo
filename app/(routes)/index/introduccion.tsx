"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import FondoAnimate from "../../../components/fondoAnimate";

const Introduccion = () => {
  return (
    <div className="relative z-10 w-full min-h-screen flex items-center">
      <FondoAnimate/>
      <div className="z-20 grid items-center w-full p-2 md:grid-cols-2 gap-6 md:gap-18">
        <div className="flex justify-center md:justify-center md:mr-8 order-1 md:order-1">
          <Image
            src="/faceAvatar.png"
            priority
            width={400}
            height={400}
            alt="Avatar"
           className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full shadow-2xl shadow-gray-900"
          />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start max-w-md mx-auto md:mx-0 order-2 md:order-2">
          <h1 className="mb-4 text-xl sm:text-2xl leading-tight text-center md:text-left md:text-3xl lg:text-4xl md:mb-6 lg:mb-10">
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

          <p className="mb-4 text-sm sm:text-base md:text-lg lg:text-xl text-center md:text-left leading-relaxed px-4 md:px-0 md:mb-6 lg:mb-8">
            Transformo ideas en experiencias digitales fluidas. Como
            desarrollador frontend y creador de contenido, diseño interfaces que
            no solo se ven bien, sino que funcionan a la perfección para todos
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:justify-start md:gap-6 lg:gap-10 w-full">
            <a
              href="/portfolio"
              className="px-4 py-2 transition-all border-2 cursor-pointer text-sm sm:text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secundary hover:border-secundary hover:text-secundary"
            >
              Ver proyectos
            </a>
            <a
              href="/contact"
              className="px-4 py-2 transition-all border-2 cursor-pointer text-sm sm:text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secundary hover:border-secundary hover:text-secundary">
              Contacta conmigo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduccion;
