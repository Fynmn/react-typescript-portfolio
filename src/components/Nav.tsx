import React, { ReactNode, useState } from "react";
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
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false); // initiate isNavOpen state with false

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="h-24 w-full z-30 absolute"
    >
      <div className="relative h-full max-w-7xl mx-auto flex items-center ">
        <div className="px-12 flex flex-1 visible lg:invisible ">
          {/* <DownloadButton btnText="Download CV" pdfUrl="assets/files/CV.pdf" /> */}
          <section className="flex">
            <div
              className="space-y-2 group"
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <span className="block h-0.5 w-8 animate-pulse bg-yellow-700"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-yellow-700"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-yellow-700"></span>
            </div>

            <div
              className={
                isNavOpen
                  ? "showMenuNav ease-in duration-700"
                  : "hideMenuNav ease-out duration-700"
              }
            >
              <div
                className="absolute top-0 right-0 px-12 py-8"
                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
              >
                <svg
                  className="h-8 w-8 text-yellow-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                {sections.map((section, i) => (
                  <SectionLink href={section.href}>{section.name}</SectionLink>
                ))}
              </ul>
            </div>
          </section>
        </div>
        <div className="justify-end">
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
                <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        transition: left 4s ease-in;
      }
    `}</style>
              </>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
