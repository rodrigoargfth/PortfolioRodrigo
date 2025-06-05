"use client";

import ContainerPage from "@/components/container";
import FondoAnimate from "@/components/fondoAnimate";
import TransitionPage from "@/components/transition-page";
import CardProyecto from "@/components/proyectCard";

const proyectos = [
  {
    nombre: "Y ocurrio la magia",
    src: "/proyecto.jpg",
    enlace: "https://yocurriolamagia.netlify.app/",
    github: "https://github.com/rodrigoargfth/YocurriolaMagiaOficial",
  },
   {
    nombre: "Peluqueria Canina",
    src: "/PeluCanina.jpg",
    github: "https://github.com/rodrigoargfth/PeluqueriaCanina.git",
  },
];

const PortfolioPage = () => {
  return (
    <main>
      <div className="z-20 relative w-full">
        <FondoAnimate />
        <TransitionPage />
        <div className="flex min-h-[100vh] h-full">
          <ContainerPage>
            <h1 className="text-4xl leading-tight text-center md:text-left md:text-6xl md:mt-10 mb-16">
              Todos mis{" "}
              <span className="font-bold text-secundary">proyectos</span>
            </h1>

            {/* Contenedor centrado para la card */}
            <div className="flex flex-row justify-center items-center gap-x-6">
              {proyectos.map((proyecto, index) => (
                <CardProyecto
                  key={index}
                  nombre={proyecto.nombre}
                  imagen={proyecto.src}
                  enlace={proyecto.enlace}
                  github={proyecto.github}
                />
              ))}
            </div>
          </ContainerPage>
        </div>
      </div>
    </main>
  );
};

export default PortfolioPage;
