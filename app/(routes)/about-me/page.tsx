"use client";

import ContainerPage from "@/components/container";
import FondoAnimate from "@/components/fondoAnimate";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const PageAboutMe = () => {
  return (
    <main>
      <div className="z-20 relative w-full">
        <FondoAnimate />
        <TransitionPage />
        <div className="flex min-h-[100vh] h-full">
          <ContainerPage>
            <h1 className="text-2xl leading-tight text-center md:text-5xl md:mt-10">
              Toda mi{" "}
              <span className="font-bold text-secundary">
                trayectoria estudiantil
              </span>
            </h1>

            {/* Timeline ocupa todo el ancho */}
            <div className="w-full mt-20">
              <TimeLine />
            </div>
          </ContainerPage>
        </div>
      </div>
    </main>
  );
};

export default PageAboutMe;
