import skills from "@/data/skills";
import { SectionProps } from "./types";
import SkillCard from "../SkillCard";
// import { Profile } from '../../../public/assets/img/Profile.png';
import { RxDoubleArrowDown } from "react-icons/rx";
import { motion } from "framer-motion";
import contacts from "@/data/contacts";
import ContactCard from "../ContactCard";
import { useEffect, useRef } from "react";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import { Link } from "react-scroll";
import clipboardCopy from "clipboard-copy";
import toast from "react-hot-toast";
import FlatShadowCard from "../FlatShadowCard";
import { GiRoundStar } from "react-icons/gi";
import { FaRegCopy } from "react-icons/fa";

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

  const handleCopyEmail = () => {
    clipboardCopy("nataliejane.pacificar@outlook.com");
    // toast.success("Copied 'nataliejane.pacificar@outlook.com'");
    toast.custom((t) => (
      <FlatShadowCard
        className={`${
          t.visible
            ? "animate-enter px-4 py-2 text-yellow-900 flex gap-x-1 items-center"
            : "animate-leave px-4 py-2 text-yellow-900 flex gap-x-1 items-center"
        }`}
      >
        <FaRegCopy />
        <p> Copied 'nataliejane.pacificar@outlook.com'</p>
      </FlatShadowCard>
    ));
  };

  return (
    <section
      id="contact-section"
      ref={sectionRef}
      className="max-w-7xl w-full mx-auto relative"
    >
      <div className="bg-yellow-700 text-white pb-16 mt-32 flex flex-col">
        <div
          className="relative h-20 w-20 mx-auto mb-8 mt-4 hover:-top-2 group active:scale-90"
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
        <div className="flex flex-col gap-y-8">
          <div className="flex justify-center gap-x-4 sm:gap-x-8">
            {contacts.map((contact, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2 }}
                onHoverStart={(e: any) => {}}
                onHoverEnd={(e: any) => {}}
                whileTap={{ scale: 0.9 }}
              >
                <ContactCard
                  icon={contact.icon}
                  label={contact.label}
                  link={contact.link}
                />
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center gap-y-4">
            <button
              onClick={handleCopyEmail}
              className="underline text-lg sm:text-2xl text-white hover:bg-yellow-500 active:scale-90"
            >
              nataliejane.pacificar@outlook.com
            </button>
            <a
              href="https://github.com/Fynmn/react-typescript-portfolio"
              target="_blank"
            >
              <span className="flex items-center gap-x-1 justify-center hover:text-yellow-400 active:animate-ping">
                Give this portfolio a{" "}
                <span className="text-yellow-400">
                  <GiRoundStar />
                </span>
                on GitHub, you amazing hooman 😎
              </span>
            </a>
          </div>

          <span className="flex flex-wrap justify-center px-16 items-center">
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
