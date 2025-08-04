import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandTypescript, TbBrandMysql, TbBrandKotlin } from "react-icons/tb";
import { GrJava } from "react-icons/gr";
import { FaCss3, FaHtml5 } from "react-icons/fa";
import { FaDartLang } from "react-icons/fa6";
import { ReactElement } from "react";
import { SiJavascript, SiKotlin } from "react-icons/si";

export interface SkillIcon {
  icon: ReactElement;
  name: string;
}

export const techIcons: SkillIcon[] = [
  { icon: <FaHtml5 size={50} color="white" />, name: "Html" },
  { icon: <FaCss3 size={50} color="#FFC906" />, name: "Css" },
  { icon: <SiJavascript size={50} color="#AEAE2D" />, name: "JavaScript" },
  { icon: <TbBrandTypescript size={50} color="#017acc" />, name: "TypeScript" },
  { icon: <GrJava size={50} color="#FF5D06" />, name: "Java" },
  { icon: <FaDartLang size={60} color="#2bb7f5" />, name: "Dart" },
  { icon: <SiKotlin size={60} color="#d11eec" />, name: "Kotlin" },
  { icon: <BiLogoPostgresql size={50} color="#326790" />, name: "PostgresSQL" },
  { icon: <TbBrandMysql size={60} color="#4FB0C6" />, name: "Mysql" },
];
