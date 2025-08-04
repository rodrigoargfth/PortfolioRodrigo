"use client";

import ContainerPage from "@/components/container";
import FondoAnimate from "@/components/fondoAnimate";
import TransitionPage from "@/components/transition-page";
import SkillsSection from "@/components/skillSection";
import { TypeAnimation } from "react-type-animation";

import { techIcons } from "@/constants/techIcons";
import { frameworkIcons } from "@/constants/frameworkIcons";

const SkillPage: React.FC = () => (
  <main className="overflow-hidden">
    <div className="z-20 relative w-full">
      <TransitionPage />
      <FondoAnimate />
      <div className="flex h-screen min-h-[100vh]">
        <ContainerPage>
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
            Mis{" "}
            <TypeAnimation
              sequence={[
                "habilidades aprendidas",
                1000,
                "tecnologias",
                1000,
                "skills",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-secundary" />
          </h1>

          {/* Lenguajes de programación */}
          <SkillsSection
            title=""
            skills={techIcons} />

          {/* Frameworks */}
          <SkillsSection
            title="FrameWorks que utilizo"
            skills={frameworkIcons} />
        </ContainerPage>
      </div>
    </div>
  </main>
);

export default SkillPage;
