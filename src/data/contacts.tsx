import { IContactCard } from "@/components/ContactCard";

import {
  FaGithub,
  FaInstagram,
  FaFacebookMessenger,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const contacts: IContactCard[] = [
  {
    icon: (
      <FaLinkedin size={28} className="text-white group-hover:text-white" />
    ),
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/natalie-jane-pacificar/",
  },
  {
    icon: <FaGithub size={28} className="text-white group-hover:text-white" />,
    label: "GitHub",
    link: "https://github.com/Fynmn",
  },
  {
    icon: (
      <FaInstagram size={28} className="text-white group-hover:text-white" />
    ),
    label: "Instagram",
    link: "https://www.instagram.com/zecurienelius/",
  },
  {
    icon: (
      <FaFacebookMessenger
        size={28}
        className="text-white group-hover:text-white"
      />
    ),
    label: "Messenger",
    link: "https://m.me/CosmicChronicle",
  },
  {
    icon: (
      <FaFacebookSquare
        size={28}
        className="text-white group-hover:text-white"
      />
    ),
    label: "Facebook",
    link: "https://facebook.com/CosmicChronicle",
  },
  //   {
  //     icon: (
  //       <HiOutlineMail
  //         size={28}
  //         className="text-white group-hover:text-white"
  //       />
  //     ),
  //     label: "Mail",
  //     link: "https://www.facebook.com"
  //   },
];

export default contacts;
