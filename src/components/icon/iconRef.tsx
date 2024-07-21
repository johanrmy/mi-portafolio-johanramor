import {
  IoCodeSlashOutline,
  IoColorFillOutline,
  IoColorWandOutline,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoReorderThree,
} from "react-icons/io5";
import { DiReact } from "react-icons/di";
import {
  SiTailwindcss,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiFlutter,
  SiJquery,
} from "react-icons/si";
import { FaNodeJs, FaAws } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandJavascript } from "react-icons/tb";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineErrorOutline } from "react-icons/md";

type IconRefType =
  | "frontend"
  | "backend"
  | "othertools"
  | "react"
  | "tailwind"
  | "express"
  | "nodejs"
  | "postgresql"
  | "html"
  | "css"
  | "js"
  | "flutter"
  | "jquery"
  | "aws"
  | "instagram"
  | "github"
  | "linkedin"
  | "sidemenu"
  | "email"
  | "success"
  | "error";

const iconRef: Record<IconRefType, JSX.Element> = {
  frontend: <IoCodeSlashOutline size={60} className="text-hp-color-500" />,
  backend: <IoColorFillOutline size={60} className="text-hp-color-500" />,
  othertools: <IoColorWandOutline size={60} className="text-hp-color-500" />,
  react: <DiReact size={20} />,
  tailwind: <SiTailwindcss size={20} />,
  express: <SiExpress size={20} />,
  nodejs: <FaNodeJs size={20} />,
  postgresql: <BiLogoPostgresql size={20} />,
  html: <SiHtml5 size={20} />,
  css: <SiCss3 size={20} />,
  js: <TbBrandJavascript size={20} />,
  flutter: <SiFlutter size={20} />,
  jquery: <SiJquery size={20} />,
  aws: <FaAws size={20} />,
  instagram: <IoLogoInstagram size={45} />,
  github: <IoLogoGithub size={45} />,
  linkedin: <IoLogoLinkedin size={45} />,
  sidemenu: <IoReorderThree size={45} />,
  email: <MdOutlineAlternateEmail size={45} />,
  success: <FaRegCheckCircle size={50} />,
  error: <MdOutlineErrorOutline size={50} />,
};

export type { IconRefType };
export { iconRef };
