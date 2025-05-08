"use client";

import ContainerPage from "@/components/container";
import FondoAnimate from "@/components/fondoAnimate";
import TransitionPage from "@/components/transition-page";
import Image from "next/image";

const ServicesPage = () => {
  return (
    <main className="overflow-hidden">
      <div className="z-20 relative w-full">
        <TransitionPage />
        <FondoAnimate />
        <div className="flex min-h-[100vh]">
          <ContainerPage>
            <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-5">
              Mis{" "}
              <span className="font-bold text-secundary">
                servicios profesionales
              </span>
            </h1>
            <div className="flex flex-col md:flex-row md:gap-18">
              <div className="w-full md:w-1/3 lg:w-[55%] items-center mix-blend-lighten flex md:justify-end md:mr-8">
                <Image
                  src="/serviceAvatar.png"
                  priority
                  width={400}
                  height={400}
                  alt="Avatar"
                  className="w-60 h-60 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-[400px] lg:h-[400px]"
                />
              </div>
              <div className="w-full md:w-[60%] lg:w-[55%]">
                <div className="scale-90 md:scale-90 origin-top-right">
                  <div className="max-w-[350px] mt-30">
                    <p className="text-xl md:text-xl text-white mb-6 md:mb-8 max-w-3xl mx-auto md:mx-0 leading-snug md:leading-relaxed">
                      Soy desarrollador Frontend en formación, próximo a
                      finalizar la carrera de Desarrollo de Software. Trabajo
                      con{" "}
                      <span className="text-secundary font-medium">
                        {" "}
                        React.js
                      </span>
                      ,{" "}
                      <span className="text-secundary font-medium">
                        {" "}
                        Next.js
                      </span>{" "}
                      ,
                      <span className="text-secundary font-medium">
                        {" "}
                        Tailwind.css
                      </span>{" "}
                      y consumo de APIs, enfocándome en componentes
                      reutilizables y manejo eficiente de estados. Me apoyo en
                      Git y metodologías ágiles para desarrollar interfaces
                      limpias, dinámicas y funcionales. y para construir
                      aplicaciones dinámicas, enfocándome en componentes
                      reutilizables, estados eficientes y consumo de APIs.
                      Domino los fundamentos de complementados con Git y
                      metodologías ágiles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ContainerPage>
        </div>
      </div>
    </main>
  );
};

export default ServicesPage;
