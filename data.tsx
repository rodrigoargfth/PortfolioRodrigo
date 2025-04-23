"use client";

import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Twitter,
  Rss,
  Twitch,
  Youtube,
  Crop,
  Pencil,
  Computer,
  Book,
  Rocket,
  Speech,
  FacebookIcon,
  BrainCircuit,
  UserRoundSearch,
  MailIcon,
  MailsIcon,
} from "lucide-react";
import { FaJava, FaWhatsapp } from "react-icons/fa";
import {
  PiGithubLogoLight,
  PiLinkedinLogoBold,
  PiLinkedinLogoLight,
} from "react-icons/pi";
import { SiCss3, SiGmail, SiHtml5, SiJavascript, SiReact } from "react-icons/si";

const phoneNumber = "543571551393";
const message = encodeURIComponent("Hola, Soy Rodrigo");
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

export const socialNetworks = [
  {
    id: 1,
    logo: <MailIcon size={30} strokeWidth={2.4} />,
    src: "mailto:rodrifother@gmail.com",
  },
  {
    id: 2,
    logo: <PiLinkedinLogoBold size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/rodrigo-aranda-1a154420a/",
  },
  {
    id: 3,
    logo: <PiGithubLogoLight size={30} strokeWidth={1} />,
    src: "https://github.com/rodrigoargfth",
  },
  {
    id: 4,
    logo: <FaWhatsapp size={30} strokeWidth={1} />,
    src: whatsappUrl,
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#ffffff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#ffffff" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Book",
    icon: <BookText size={25} color="#ffffff" strokeWidth={1} />,
    link: "/services",
  },
  {
    id: 4,
    title: "Skill",
    icon: <BrainCircuit size={25} color="#ffffff" strokeWidth={1} />,
    link: "/skill",
  },
  {
    id: 5,
    title: "Target",
    icon: <CodeSquare size={25} color="#ffffff" strokeWidth={1} />,
    link: "/portfolio",
  },
  {
    id: 6,
    title: "Contact",
    icon: <UserRoundSearch size={25} color="#ffffff" strokeWidth={1} />,
    link: "/contact",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Full Stack .NET",
    subtitle: "Instituto Superior Politécnico de Córdoba",
    description:
      "Se dictó comunicación efectiva, metodologías agiles - scrum, Github, Git, HTML, CSS, Bootstrap, TypeScript, Angular, SQL, C#, API REST, POSTMAN.",
    date: "Jun 2023",
  },
  {
    id: 2,
    title: "Curso de Prog. Front End",
    subtitle: "UTN Facultad Regional Córdoba",
    description:
      "En la capacitación se dicto el manejo de HTML, CSS, JavaScript, Bootstrap, Angular..",
    date: "May 2023",
  },
  {
    id: 3,
    title: "Técnico Superior en Desarrollo de Software",
    subtitle: "Escuela Superior de Comercio",
    description:
      "Se aplican conocimientos sobre Base de Datos, Desarrollo de Aplicaciones Web, Desarrollo de Software, Conocimientos en arquitectura de las computadoras.",
    date: "Abr 2023",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "Web Pro",
    image: "/image-1.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 2,
    title: "Desarrollo Web Ágil",
    image: "/image-2.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 3,
    title: "Estrategias Web",
    image: "/image-3.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 4,
    title: "Ideas Creativas",
    image: "/image-4.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 5,
    title: "Webs Impactantes",
    image: "/image-5.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 6,
    title: "Web Dinámica",
    image: "/image-6.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 7,
    title: "Dark Web ",
    image: "/image-7.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 8,
    title: "E-commerce web",
    image: "/image-8.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
];
export const frontendTech = [
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "CSS",
    icon: SiCss3,
  },
  {
    name: "HTML",
    icon: SiHtml5,
  },
  // Agrega más tecnologías si lo necesitas
];