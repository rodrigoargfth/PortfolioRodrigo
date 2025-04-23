"use client";

import ContainerPage from "@/components/container";
import FondoAnimate from "@/components/fondoAnimate";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";
import Image from "next/image";

const PageAboutMe = () => {
  return (
    <main>
      <div className="z-20 relative w-full">
      <FondoAnimate/>
        <TransitionPage />
        <div className="flex min-h-[100vh] h-full">
          <ContainerPage>
            <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
              Toda mi{" "}
              <span className="font-bold text-secundary">
                trayectoria estudiantil
              </span>
            </h1>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="w-full md:w-[60%] lg:w-[55%]">
                <div className="scale-90 md:scale-90 origin-top-lef">
                  <TimeLine />
                </div>
              </div>
              <div className="w-full md:w-1/3 justify-center md:justify-end hidden md:flex lg:w-[55%] items-center mix-blend-lighten">
                <Image
                  src="/studyAvatar.png"
                  priority
                  width={400}
                  height={400}
                  alt="Avatar"
                  className="w-120 h-120 md:w-90 md:h-90 rounded-full shadow-2xl shadow-gray-900"
                />
              </div>
            </div>
          </ContainerPage>
        </div>
      </div>
    </main>
  );
};

export default PageAboutMe;