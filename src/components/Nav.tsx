import React, { ReactNode } from "react";
import SectionLink from "./SectionLink";
import sections from "../data/sections";

import { motion, Variants } from "framer-motion";

const navVariants: Variants = {
  hidden: {
    y: 0.1,
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.8,
      staggerChildren: 0.25,
      when: "beforeChildren",
    },
  },
};

const navChildVariants: Variants = {
  hidden: {
    y: -35,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 5,
      stiffness: 100,
    },
  },
};
const Nav = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="h-24 w-full z-30 absolute"
    >
      <div className="relative h-full max-w-7xl mx-auto flex items-center justify-end">
        {/* <div className="px-16 flex flex-1 invisible lg:visible ">
          <DownloadButton btnText="Download CV" pdfUrl="assets/files/CV.pdf" />
        </div> */}
        <div className="">
          <div className="flex space-x-10 px-20">
            <div className="text-sm text-white-600 hidden lg:flex space-x-10 items-center">
              <>
                {sections.map((section, i) => (
                  <motion.span
                    variants={navChildVariants}
                    key={i}
                    className="block"
                  >
                    <SectionLink href={section.href}>
                      {section.name}
                    </SectionLink>
                  </motion.span>
                ))}
              </>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
