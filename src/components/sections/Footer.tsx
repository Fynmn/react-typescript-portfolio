import skills from "@/data/skills";
import { SectionProps } from "./types";
import SkillCard from "../SkillCard";
// import { Profile } from '../../../public/assets/img/Profile.png';
import Marquee from "react-fast-marquee";
import { RxDoubleArrowDown } from "react-icons/rx";
import { motion } from "framer-motion";
import contacts from "@/data/contacts";
import ContactCard from "../ContactCard";
import { useEffect, useRef } from "react";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import { Link } from "react-scroll";

interface FooterProps extends SectionProps {}

const Footer: React.FC<FooterProps> = ({ sectionRef }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      tippy(buttonRef.current, {
        content: "back to top",
        placement: "right",
        trigger: "mouseenter",
        theme: "primary",
        // arrow: false,
      });
    }
  }, []);

  return (
    <section
      id="contact-section"
      ref={sectionRef}
      className="max-w-7xl w-full mx-auto relative"
    >
      <div className="bg-yellow-700 text-white pb-16 mt-32 flex flex-col">
        <div
          className="relative h-20 w-20 mx-auto mb-8 mt-4 hover:-top-2 group"
          ref={buttonRef}
        >
          <button className="">
            <Link
              to={"introduction-section"}
              smooth={true}
              offset={5}
              duration={700}
            >
              <img
                className="absolute object-contain w-full h-full"
                src="/assets/img/nat-pixel.png"
                alt="Nat in pixel art"
              />
            </Link>
          </button>
          <span
            className={`group-hover:w-6 mx-auto rounded-lg group-hover:left-0 group-hover:bg-yellow-500 block absolute right-0 -bottom-8 h-2 transition-all duration-400 ease-in"
          }`}
          />
        </div>
        <div className="flex flex-col gap-y-8 ">
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
          <div>
            <p className="underline text-lg sm:text-2xl text-white text-center">
              nataliejane.pacificar@outlook.com
            </p>
          </div>
          <span className="flex flex-wrap justify-center px-16 items-center mt-8">
            <p className="mr-1">Copyright</p>
            <p className="text-2xl pb-1 mr-1 flex">©</p>
            <p className="mr-1">2023 Natalie Jane Pacificar.</p>
            <p className="">All rights reserved.</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
