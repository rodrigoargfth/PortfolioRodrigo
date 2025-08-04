
import {
  FaAngular,
  FaBootstrap,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss, SiSpringboot, SiFlutter } from "react-icons/si";
import { SkillIcon } from "./techIcons";

export const frameworkIcons: SkillIcon[] = [
  { icon: <SiFlutter size={60} color="#5fc9f9" />, name: "Flutter" },
  { icon: <FaReact size={50} color="#61DBFB" />, name: "React" },
  { icon: <FaAngular size={60} color="#DD0031" />, name: "Angular" },
  { icon: <FaNodeJs size={60} color="#68A063" />, name: "Node.js" },
  { icon: <FaBootstrap size={60} color="white" />, name: "Bootstrap" },
  { icon: <SiTailwindcss size={60} color="#38B2AC" />, name: "Tailwind" },
  { icon: <SiSpringboot size={60} color="#6db240" />, name: "Spring Boot" },
];