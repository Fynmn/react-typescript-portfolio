import { motion } from "framer-motion";
import { SectionProps } from "./types";
import ParticlesBackground from "../ParticlesBackground";
import DownloadButton from "../DownloadButton";
import { Link } from "react-scroll";
import { BsArrowDown } from "react-icons/bs";

interface IntroductionProps extends SectionProps {}

const Introduction: React.FC<IntroductionProps> = ({ sectionRef }) => {
  return (
    <section
      id="introduction-section"
      ref={sectionRef}
      className="max-w-7xl w-full mx-auto flex items-center justify-center py-12 md:py-24 min-h-screen"
    >
      <ParticlesBackground />
      <div className="relative flex gap-x-16 flex-wrap justify-center items-center gap-y-8 py-8 md:px-16">
        <div className="flex flex-col gap-y-3 w-[300px] sm:w-[400px] ">
          <div className="flex flex-col gap-y-3 ">
            <div className="flex gap-x-1 items-center md:justify-end justify-center">
              <span className="wave">👋</span>{" "}
              <p className="text-yellow-900 font-medium text-sm sm:text-lg">
                Hola, I'm
              </p>
            </div>

            <div className="w-full text-center md:text-end">
              <h1 className="text-yellow-500 text-4xl sm:text-5xl md:text-7xl font-semibold ">
                Natalie Jane
              </h1>
            </div>
          </div>
          <div className="w-full flex justify-center md:justify-end">
            <h1 className="text-yellow-500 text-4xl sm:text-5xl md:text-7xl font-semibold">
              Pacificar
            </h1>
          </div>
          <div className="flex flex-wrap mt-6 ">
            <p className="text-yellow-900 text-center text-xs sm:text-sm md:text-end leading-5 sm:leading-6">
              A Computer Science Major in Artificial Intelligence Graduate from
              West Visayas State University. I do magic with code.
            </p>
            {/* <p className="text-yellow-900 text-sm text-end leading-6">
              A Computer Science Major in Artificial Intelligence Graduate from
              West Visayas State University. I do magic with React, Python,
              Typescript and more. I also do Design and Data Analytics too!
            </p> */}
          </div>
          <div className="flex justify-center md:justify-end items-center py-1 gap-x-8">
            <div className="hidden sm:block">
              <Link
                to={"projects-section"}
                smooth={true}
                offset={5}
                duration={700}
                className="select-none relative group cursor-pointer px-1"
                onClick={() => {}}
              >
                <div className="flex justify-start relative ">
                  <button className="inline-flex items-center gap-x-1 group text-yellow-500 font-semibold hover:scale-105">
                    <BsArrowDown size={18} />
                    <p className="text-sm pr-2">Explore my work</p>

                    <span
                      className={`group-hover:w-full group-hover:left-0 group-hover:bg-yellow-500 block absolute -bottom-1 right-0 h-[2px] active:w-full active:left-0 active:bg-yellow-500 w-0 bg-yellow-500`}
                    ></span>
                  </button>
                </div>
              </Link>
            </div>

            <div className="">
              <DownloadButton
                btnText="Download CV"
                pdfUrl="assets/files/CV_v2.pdf"
              />
            </div>
          </div>
        </div>

        <div className="w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96">
          <div className="relative w-full h-full">
            <div className="absolute glassIco z-20 before:absolute flex justify-center items-center px-4 py-2 -left-10 bottom-9 md:bottom-[72px] sm:hover:scale-150 hover:scale-110 hover:cursor-pointer">
              <p className="text-[10px] sm:text-sm font-semibold text-yellow-950">
                Design with Figma
              </p>
            </div>

            <div className="absolute glassIco z-20 before:absolute flex justify-center items-center px-4 py-2 -right-16 bottom-20 md:bottom-32 sm:hover:scale-150 hover:scale-110 hover:cursor-pointer">
              <p className="text-[10px] sm:text-sm font-semibold text-yellow-950">
                Data Science with Python
              </p>
            </div>

            <div className="absolute glassIco z-20 before:absolute flex justify-center items-center px-4 py-2 -right-12 sm:-right-24 -bottom-7 md:bottom-3 sm:hover:scale-150 hover:scale-110 hover:cursor-pointer">
              <p className="text-[10px] sm:text-sm font-semibold text-yellow-950">
                Web apps with React, Next.js, Flask and more
              </p>
            </div>

            <img
              src="/assets/img/Profile.png"
              alt=""
              className="absolute object-cover w-full h-full z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
