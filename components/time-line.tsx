"use client";

import { dataAboutPage } from "@/data";

const TimeLine = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex items-start gap-12 relative">
        {/* Línea central */}
        <div className="absolute top-8 left-0 w-full h-[2px] bg-slate-300"></div>

        {dataAboutPage.map((data, index) => (
          <div key={data.id} className="relative flex flex-col items-center min-w-[200px]">
            {/* Puntos en la línea */}
            <div className="relative z-10 w-6 h-6 flex items-center justify-center rounded-full bg-indigo-600 border-4 border-slate-50 shadow-lg"></div>

            {/* Contenido */}
            <div className="mt-6 text-center">
              <time className="block text-xs font-semibold text-emerald-600 bg-emerald-100 rounded-full px-2 py-0.5 mb-2">
                {data.date}
              </time>
              <h3 className="text-lg font-bold text-green-400">{data.subtitle}</h3>
              <p className="text-sm text-slate-200">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
