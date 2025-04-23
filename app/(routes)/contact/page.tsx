"use client";

import ContainerPage from "@/components/container";
import FondoAnimate from "@/components/fondoAnimate";
import TransitionPage from "@/components/transition-page";
import TiltedCard from "@/src/Components/TiltedCard/TiltedCard";
import BounceCards from "@/src/Components/BounceCards/BounceCards";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";

const mediaIcons = [
  {
    icon: <FaWhatsapp size={50} color="#14C54E" />,
    name: "Whatsapp",
    link: "https://wa.me/543571551393",
  },
  {
    icon: <FaLinkedin size={50} color="white" />,
    name: "Linkedin",
    link: "https://www.linkedin.com/in/devrodrigoaranda/",
  },
  {
    icon: <FaGithub size={50} color="white" />,
    name: "Github",
    link: "https://github.com/rodrigoargfth",
  },
];

const Contact = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)",
  ];
  const mediaComunity = mediaIcons.map((media) => ({
    icon: media.icon,
    name: media.name,
    link: media.link,
  }));
  return (
    <main>
      <div className="z-10 relative w-full overflow-hidden">
        <FondoAnimate />
        <TransitionPage />
        <div className="flex min-h-[100vh] h-full">
          <ContainerPage>
            <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
              Estos son mis{" "}
              <span className="font-bold text-secundary">Contactos</span>
            </h1>
            <section className="mt-6 flex justify-center">
              {isMobile ? (
                <div className="flex justify-center gap-9">
                  {mediaComunity.map(({ icon, name, link }, idx) => (
                    <a
                      key={idx}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <TiltedCard
                        containerHeight="80px"
                        containerWidth="80px"
                        imageHeight="90px"
                        imageWidth="90px"
                        scaleOnHover={1.3}
                        rotateAmplitude={30}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={true}
                        overlayContent={
                          <p className="text-white font-semibold text-center">
                            {name}
                          </p>
                        }
                      >
                        <div className="w-full h-full flex items-center justify-center rounded-xl relative overflow-hidden">
                          <div
                            className="absolute inset-0 z-0"
                            style={{
                              background:
                                "linear-gradient(to top, rgba(30, 41, 59, 0.9), rgba(30, 41, 59, 0))",
                            }}
                          />
                          <div className="z-10">
                            <div className="w-12 h-12">{icon}</div>
                          </div>
                        </div>
                      </TiltedCard>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="flex justify-center flex-wrap gap-6">
                  {mediaIcons.map(({ icon, name, link }, idx) => (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={idx}
                      className="block"
                    >
                      <TiltedCard
                        containerHeight="160px"
                        containerWidth="160px"
                        imageHeight="160px"
                        imageWidth="160px"
                        scaleOnHover={1.3}
                        rotateAmplitude={30}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={true}
                        overlayContent={
                          <p className="text-white font-semibold text-center">
                            {name}
                          </p>
                        }
                      >
                        <div className="w-full h-full flex items-center justify-center rounded-xl relative overflow-hidden">
                          <div
                            className="absolute inset-0 z-0"
                            style={{
                              background:
                                "linear-gradient(to top, rgba(30, 41, 59, 0.9), rgba(30, 41, 59, 0))",
                            }}
                          />
                          <div className="z-10">
                            <div className="w-12 h-12">{icon}</div>
                          </div>
                        </div>
                      </TiltedCard>
                    </a>
                  ))}
                </div>
              )}
            </section>

            <section className="mt-10">
              <h2 className="text-xl font-semibold mb-4 text-center md:text-left">
                ¿Querés contactarme por correo?
              </h2>
              <form
                action="mailto:rodrigo.aranda.developer@gmail.com"
                method="POST"
                encType="text/plain"
                className="flex flex-col gap-4 max-w-md w-full mx-auto"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  required
                  className="p-3 rounded-lg border border-gray-300 text-black"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Tu correo"
                  required
                  className="p-3 rounded-lg border border-gray-300 text-black"
                />
                <textarea
                  name="message"
                  placeholder="Escribe tu mensaje"
                  rows={5}
                  required
                  className="p-3 rounded-lg border border-gray-300 text-black"
                />
                <button
                  type="submit"
                  className="bg-secundary hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded-lg"
                >
                  Enviar mensaje
                </button>
              </form>
            </section>
          </ContainerPage>
        </div>
      </div>
    </main>
  );
};

export default Contact;
