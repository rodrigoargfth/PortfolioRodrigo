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
        <div className="flex min-h-[100vh] items-start md:pt-10 lg:pt-12">
          <ContainerPage>
            <div className="flex flex-col h-full justify-start items-center md:items-start">
              {/* Título */}
              <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl lg:text-5xl mb-6 md:mb-8">
                Mis{" "}
                <span className="font-bold text-secundary">
                  servicios profesionales
                </span>
              </h1>

              {/* Imagen + Texto */}
              <div className="flex flex-col md:flex-row md:gap-8 lg:gap-18 items-start w-full">
                {/* Imagen */}
                <div className="w-full md:w-[45%] lg:w-[55%] flex justify-center md:justify-start mb-6 md:mb-0">
                  <Image
                    src="/studyAvatar.png"
                    priority
                    width={400}
                    height={400}
                    alt="Avatar"
                    className="w-48 h-48 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-80 lg:h-80 xl:w-[400px] xl:h-[400px]"
                  />
                </div>

                {/* Texto */}
                <div className="w-full md:w-[55%] lg:w-[55%] flex justify-center md:justify-start">
                  <div className="max-w-[320px] md:max-w-[400px] lg:max-w-[450px] mt-6 md:mt-12">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white text-center md:text-left leading-relaxed">
                      Soy desarrollador Frontend en formación, próximo a
                      finalizar la carrera de Desarrollo de Software. Trabajo
                      con{" "}
                      <span className="text-secundary font-medium">
                        React
                      </span>
                      ,{" "}
                      <span className="text-secundary font-medium">
                        Next
                      </span>
                      ,{" "}
                      <span className="text-secundary font-medium">
                        Tailwind
                      </span>{" "}
                      y consumo de APIs. Me enfoco en construir interfaces
                      limpias, dinámicas y funcionales, con componentes
                      reutilizables y manejo eficiente de estados, apoyándome en
                      Git y metodologías ágiles.
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
