"use client";

import ContainerPage from "@/components/container";
import FondoAnimate from "@/components/fondoAnimate";
import TransitionPage from "@/components/transition-page";
import { useMediaQuery } from "react-responsive";
import { TypeAnimation } from "react-type-animation";

import { IoLogoJavascript } from "react-icons/io";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandTypescript } from "react-icons/tb";
import { GrJava } from "react-icons/gr";
import {
  FaAngular,
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { FaDartLang } from "react-icons/fa6";
import { SiTailwindcss, SiSpringboot,SiFlutter} from "react-icons/si";
import TiltedCard from "@/src/Components/TiltedCard/TiltedCard";
import { TbBrandMysql } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination,  } from "swiper/modules";
import "swiper/css/navigation";

const techIcons = [
  { icon: <FaHtml5 size={50} color="white" />, name: "Html" },
  { icon: <FaCss3 size={50} color="#FFC906" />, name: "Css" },
  { icon: <IoLogoJavascript size={50} color="#AEAE2D" />, name: "JavaScript" },
  { icon: <TbBrandTypescript   size={50} color="#017acc" />, name: "TypeScript" },
  { icon: <GrJava size={50} color="#FF5D06" />, name: "Java" },
  { icon: <BiLogoPostgresql  size={50} color="#326790" />, name: "PostgresSQL" },
  { icon: <FaDartLang  size={60} color="#2bb7f5" />, name: "Dart" },
  { icon: <TbBrandMysql size={60} color="#4FB0C6" />, name: "Mysql" },
];
const frameworkIcons = [
  { icon: <SiFlutter  size={60} color="#5fc9f9" />, name: "Flutter" },
  { icon: <FaReact size={50} color="#61DBFB" />, name: "React" },
  { icon: <FaAngular size={60} color="#DD0031" />, name: "Angular" },
  { icon: <FaNodeJs size={60} color="#68A063" />, name: "Node.js" },
  { icon: <FaBootstrap size={60} color="white" />, name: "Bootstrap" },
  { icon: <SiTailwindcss size={60} color="#38B2AC" />, name: "Tailwind" },
  { icon: <SiSpringboot  size={60} color="#6db240" />, name: "Spring Boot" },
];

const SkillPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const frameWorks = frameworkIcons.map((framework) => ({
    icon: framework.icon,
    name: framework.name,
  }));

  return (
    <main className="overflow-hidden">
      <div className="z-20 relative w-full">
        <TransitionPage />
        <FondoAnimate />
        <div className="flex h-screen">
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
                className="font-bold text-secundary"
              />
            </h1>

            {/* -----Lenguajes de programacion----- */}
            <section className="mt-10">
              <h2 className="text-xl font-semibold mb-10">
                Lenguajes de Programación
              </h2>
              <Swiper
                slidesPerView={isMobile ? 2 : 4}
                spaceBetween={10}
                modules={[Pagination]}
                pagination={{
                  dynamicBullets: true,
                  clickable: true,
                }}
              >
                {techIcons.map(({ icon, name }, idx) => (
                  <SwiperSlide key={idx}>
                    <TiltedCard
                      containerHeight="140px"
                      containerWidth="140px"
                      imageHeight="140px"
                      imageWidth="140px"
                      scaleOnHover={1}
                      rotateAmplitude={30}
                      showMobileWarning={false}
                      showTooltip={true}
                      displayOverlayContent={true}
                    >
                      <div className="w-full h-full flex flex-col items-center justify-center rounded-xl relative overflow-hidden">
                        <div
                          className="absolute inset-0 z-0"
                          style={{
                            background:
                              "linear-gradient(to top, rgba(30, 41, 59, 0.9), rgba(30, 41, 59, 0))",
                          }}
                        />
                        <div className="z-10 flex flex-col items-center justify-center text-center gap-2">
                          <div className="text-4xl">{icon}</div>
                          <p className="text-white font-semibold text-base">
                            {name}
                          </p>
                        </div>
                      </div>
                    </TiltedCard>
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>

            {/* -----FrameWorks----- */}
            <section className="mt-10">
              <h2 className="text-xl font-semibold mb-10">
                FrameWorks que utilizo
              </h2>
              <Swiper             
                slidesPerView={isMobile ? 2 : 4}
                spaceBetween={10}
                modules={[Pagination]}
                className="mySwiper"
                pagination={{
                  dynamicBullets: true,
                  clickable: true,
                }}
              >
                {frameWorks.map(({ icon, name }, idx) => (
                  <SwiperSlide key={idx}>
                    <TiltedCard
                      containerHeight="140px"
                      containerWidth="140px"
                      imageHeight="140px"
                      imageWidth="140px"
                      scaleOnHover={1}
                      rotateAmplitude={30}
                      showMobileWarning={false}
                      showTooltip={true}
                      displayOverlayContent={true}
                    >
                      <div className="w-full h-full flex flex-col items-center justify-center rounded-xl relative overflow-hidden">
                        <div
                          className="absolute inset-0 z-0"
                          style={{
                            background:
                              "linear-gradient(to top, rgba(30, 41, 59, 0.9), rgba(30, 41, 59, 0))",
                          }}
                        />
                        <div className="z-10 flex flex-col items-center justify-center text-center gap-2">
                          <div className="text-4xl">{icon}</div>
                          <p className="text-white font-semibold text-base">
                            {name}
                          </p>
                        </div>
                      </div>
                    </TiltedCard>
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>
            {/* <section className="mt-16">
              <h2 className="text-xl font-semibold mb-4">Frameworks</h2>
              {isMobile ? (
                <div className="flex justify-center">
                  <BounceCards
                    className="custom-bounceCards"
                    items={frameWorks} // Aquí usamos el array con los íconos
                    containerWidth={300}
                    containerHeight={200}
                    animationDelay={1}
                    animationStagger={0.08}
                    easeType="elastic.out(1, 0.5)"
                    transformStyles={transformStyles}
                    enableHover={false}
                  />
                </div>
              ) : (
                <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
                  {frameworkIcons.map(({ icon, name }, idx) => (
                    <TiltedCard
                      key={idx}
                      containerHeight="160px"
                      containerWidth="160px"
                      imageHeight="160px"
                      imageWidth="160px"
                      scaleOnHover={1.3}
                      rotateAmplitude={30}
                      showMobileWarning={false}
                      showTooltip={true}
                      displayOverlayContent={true}
                    >
                      <div className="w-full h-full flex items-center justify-center rounded-xl relative overflow-hidden">
                        <div
                          className="absolute inset-0 z-0"
                          style={{
                            background:
                              "linear-gradient(to top, rgba(30, 41, 59, 0.9), rgba(30, 41, 59, 0))",
                          }}
                        />
                        <div className="z-10 text-5xl">{icon}</div>
                      </div>
                    </TiltedCard>
                  ))}
                </div>
              )}
            </section> */}
          </ContainerPage>
        </div>
      </div>
    </main>
  );
};

export default SkillPage;
