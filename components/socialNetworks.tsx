import {
  MailIcon,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import {
  PiGithubLogoLight,
  PiLinkedinLogoBold,
} from "react-icons/pi";

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
