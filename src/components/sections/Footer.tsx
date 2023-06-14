import skills from "@/data/skills";
import { SectionProps } from "./types";
import SkillCard from "../SkillCard";
// import { Profile } from '../../../public/assets/img/Profile.png';
import Marquee from "react-fast-marquee";
import { RxDoubleArrowDown } from "react-icons/rx";
import { motion } from "framer-motion";
import contacts from "@/data/contacts";
import ContactCard from "../ContactCard";

interface FooterProps extends SectionProps {}

const Footer: React.FC<FooterProps> = ({ sectionRef }) => {
  return (
    <section
      id="Footer-section"
      ref={sectionRef}
      className="max-w-7xl w-full mx-auto relative"
    >
      <div className="bg-yellow-700 text-white py-16 mt-32 flex flex-col gap-y-8">
        <div className="flex justify-center gap-x-4 sm:gap-x-8">
          {contacts.map((contact) => (
            <motion.a
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              <ContactCard
                icon={contact.icon}
                label={contact.label}
                link={contact.link}
              />
            </motion.a>
          ))}
        </div>
        <span className="flex flex-wrap justify-center px-16 items-center">
          <p className="mr-1">Copyright</p>
          <p className="text-2xl pb-1 mr-1 flex">©</p>
          <p className="mr-1">2023 Natalie Jane Pacificar.</p>
          <p className="">All rights reserved.</p>
        </span>
      </div>
    </section>
  );
};

export default Footer;
