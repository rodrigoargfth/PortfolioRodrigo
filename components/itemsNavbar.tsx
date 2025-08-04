
import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  BrainCircuit,
  UserRoundSearch,
} from "lucide-react";
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