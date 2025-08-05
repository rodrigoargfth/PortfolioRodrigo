"use client";

import ContainerPage from "@/components/container";
import FondoAnimate from "@/components/fondoAnimate";
import TransitionPage from "@/components/transition-page";
import CardProyecto from "@/components/proyectCard";

const proyectos = [
  {
    nombre: "Y ocurrio la magia",
    imagen: "/proyecto.jpg",
    enlace: "https://yocurriolamagia.netlify.app/",
    github: "https://github.com/rodrigoargfth/YocurriolaMagiaOficial",
    tipo: "Web",
  },
  {
    nombre: "Peluqueria Canina",
    imagen: "/PeluCanina.jpg",
    github: "https://github.com/rodrigoargfth/PeluqueriaCanina.git",
    tipo: "Software",
  },
  {
    nombre: "Mula1",
    imagenes: ["/mula1.jpg", "/mula2.jpg"],
    github: "https://github.com/rodrigoargfth/MulaF1",
    tipo: "Aplicacion",
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
            <h1 className="text-4xl leading-tight text-center md:text-left md:text-6xl mb-1">
              Todos mis{" "}
              <span className="font-bold text-secundary">proyectos</span>
            </h1>

            {/* Contenedor centrado para la card */}
            <div className="flex flex-col justify-center items-center gap-y-8">
              {/* Fila de arriba: las dos primeras tarjetas */}
              <div className="flex flex-col md:flex-row gap-y-8 md:gap-x-24 items-center sm:items-start">
                {proyectos.slice(0, 2).map((proyecto, index) => (
                  <CardProyecto
                    key={index}
                    nombre={proyecto.nombre}
                    imagen={proyecto.imagenes ? undefined : proyecto.imagen}
                    imagenes={proyecto.imagenes}
                    enlace={proyecto.enlace}
                    github={proyecto.github}
                    tipo={proyecto.tipo}
                  />
                ))}
              </div>

              {/* Fila de abajo: la tercera tarjeta */}
              <div className="flex justify-center w-full">
                {proyectos.slice(2, 3).map((proyecto, index) => (
                  <CardProyecto
                    key={index + 2} /* Es importante que la key sea única */
                    nombre={proyecto.nombre}
                    imagen={proyecto.imagenes ? undefined : proyecto.imagen}
                    imagenes={proyecto.imagenes}
                    enlace={proyecto.enlace}
                    github={proyecto.github}
                    tipo={proyecto.tipo}
                  />
                ))}
              </div>
            </div>
          </ContainerPage>
        </div>
      </div>
    </main>
  );
};

export default PortfolioPage;
