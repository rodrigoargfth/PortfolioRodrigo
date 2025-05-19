"use client";

import { Globe, Github } from "lucide-react";
import Image from "next/image";

interface CardProyectoProps {
  nombre: string;
  imagen: string;
  enlace?: string;
  github?: string;
}

const CardProyecto = ({ nombre, imagen, enlace, github }: CardProyectoProps) => {
  return (
    <div className="relative w-full max-w-4xl h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
      {/* Imagen del proyecto */}
      <Image
        src={imagen}
        alt={`Imagen de ${nombre}`}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
        quality={100}
        priority
      />
      
      {/* Overlay con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      {/* Contenido */}
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <h3 className="text-4xl font-bold mb-4">{nombre}</h3>
        
        {/* Botones */}
        <div className="flex gap-4">
          {enlace && (
            <a
              href={enlace}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 hover:bg-secundary/90 text-white font-medium py-2 px-4 rounded-lg transition-all"
            >
              <Globe className="w-5 h-5" />
              Ver sitio
            </a>
          )}
          
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 hover:bg-secundary/90 text-white font-medium py-2 px-4 rounded-lg transition-all"
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