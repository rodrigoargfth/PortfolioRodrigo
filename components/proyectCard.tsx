"use client";

import { Globe, Github, HelpCircle, Laptop2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiMobile } from "react-icons/bi";

const iconosTipo = {
  Web: <Globe className="w-5 h-5 text-blue-400" />,
  Software: <Laptop2 className="w-5 h-5 text-green-400" />,
  Aplicacion: <BiMobile className="w-5 h-5 text-purple-400" />,
};

interface CardProyectoProps {
  nombre: string;
  imagen?: string;
  imagenes?: string[];
  enlace?: string;
  github?: string;
  className?: string;
  tipo: string;
}

const CardProyecto = ({
  nombre,
  imagen,
  imagenes,
  enlace,
  github,
  tipo,
}: CardProyectoProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!imagenes || imagenes.length <= 1) return;
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagenes.length);
    }, 3000);
    return () => clearInterval(intervalo);
  }, [imagenes]);

  const imagenActual = imagenes?.length ? imagenes[index] : imagen;
  const iconoActual = iconosTipo[tipo as keyof typeof iconosTipo] || (
    <HelpCircle className="w-5 h-5 text-gray-400" />
  );

  return (
    <div className="relative w-[90vw] max-w-[550px] h-[300px] sm:h-[280px] rounded-2xl overflow-hidden shadow-2xl group bg-gray-300">
      {imagenActual && (
        <Image
          src={imagenActual}
          alt={`Imagen de ${nombre}`}
          fill
          className="object-contain group-hover:scale-105 transition-transf  orm duration-500"
          quality={100}
          priority
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <div className="absolute bottom-10 right-4 flex items-center gap-2">
        {iconoActual}
        <span className="text-sm font-medium capitalize">{tipo}</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <h3 className="text-3xl font-bold mb-4">{nombre}</h3>
        <div className="flex gap-4">
          {enlace && (
            <a
              href={enlace}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-all"
            >
              <Globe className="w-5 h-5" />
              Web
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-all"
            >
              <Github className="w-5 h-5" />
              Código
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardProyecto;
