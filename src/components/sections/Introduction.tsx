import { AnimatePresence, motion } from "framer-motion";
import { SectionProps } from "./types";
import ParticlesBackground from "../ParticlesBackground";
import DownloadButton from "../DownloadButton";
import { Link } from "react-scroll";
import { BsArrowDown } from "react-icons/bs";
import React, { useEffect, useState } from "react";

interface IntroductionProps extends SectionProps {}

interface TypingAnimationProps {
  text: String;
  typingSpeed: number;
  delay: number;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  typingSpeed,
  delay,
}) => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setTypedText(text.substring(0, currentIndex));
      currentIndex++;
      if (currentIndex > text.length) {
        clearInterval(intervalId);
      }
    }, typingSpeed); // Adjust the typing speed here (in milliseconds)

    return () => {
      clearInterval(intervalId);
    };
  }, [text]);

  return (
    <AnimatePresence>
      <div className="w-full text-center md:text-end">
        <h1 className="">
          {typedText.split("").map((char: any, index: any) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: delay }}
            >
              {char}
            </motion.span>
          ))}
        </h1>
      </div>
    </AnimatePresence>
  );
};

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
          <div className="flex flex-col gap-y-3">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex gap-x-1 items-center md:justify-end justify-center">
                <span className="wave">👋</span>
                <p className="text-yellow-900 font-medium text-sm sm:text-lg">
                  <TypingAnimation
                    text="Hola, I'm"
                    typingSpeed={200}
                    delay={0}
                  />
                </p>
              </div>
            </motion.div>

            <div className="w-full text-center md:text-end">
              <h1 className="text-yellow-500 text-4xl sm:text-5xl md:text-7xl font-semibold ">
                <TypingAnimation
                  text="Natalie Jane"
                  typingSpeed={200}
                  delay={2}
                />
              </h1>
            </div>
          </div>
          <div className="w-full flex justify-center md:justify-end">
            <h1 className="text-yellow-500 text-4xl sm:text-5xl md:text-7xl font-semibold">
              <TypingAnimation text="Pacificar" typingSpeed={200} delay={4.2} />
            </h1>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex flex-wrap mt-6 ">
              <p className="text-yellow-900 text-center text-xs sm:text-sm md:text-end leading-5 sm:leading-6">
                A Computer Science Major in Artificial Intelligence Graduate
                from West Visayas State University. I do magic with code.
              </p>
              {/* <p className="text-yellow-900 text-sm text-end leading-6">
              A Computer Science Major in Artificial Intelligence Graduate from
              West Visayas State University. I do magic with React, Python,
              Typescript and more. I also do Design and Data Analytics too!
            </p> */}
            </div>
          </motion.div>
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
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 4.2, duration: 0.5, ease: "easeOut" }}
                >
                  <div className="flex justify-start relative ">
                    <motion.button 
                      className="inline-flex items-center gap-x-1 group text-yellow-500 font-semibold select-none"
                      whileHover={{ 
                        scale: 1.05,
                        y: -2,
                        transition: { 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 10 
                        }
                      }}
                      whileTap={{ 
                        scale: 0.95,
                        y: 0,
                        transition: { duration: 0.1 }
                      }}
                    >
                      <motion.div
                        animate={{ 
                          y: [0, -2, 0],
                          transition: { 
                            duration: 1.5, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                          }
                        }}
                      >
                        <BsArrowDown size={18} />
                      </motion.div>
                      <p className="text-sm pr-2 group-hover:text-yellow-600 transition-colors duration-300 select-none">Explore my work</p>

                      <motion.span
                        className="block absolute -bottom-1 right-0 h-[2px] bg-yellow-500"
                        initial={{ width: 0, left: "100%" }}
                        whileHover={{ 
                          width: "100%", 
                          left: 0,
                          transition: { 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 20 
                          }
                        }}
                      />
                    </motion.button>
                  </div>
                </motion.div>
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.5, duration: 0.5, ease: "easeOut" }}
            >
              <div className="">
                <DownloadButton
                  btnText="Download CV"
                  // pdfUrl="assets/files/CV_v2.pdf"
                  pdfUrl="assets/files/temp_CV_Natalie.pdf"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -50, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 2.5, ease: "easeOut" }}
        >
          <div className="w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <div className="relative w-full h-full">
              <motion.div 
                className="absolute glassIco z-20 before:absolute flex justify-center items-center px-4 py-2 -left-10 bottom-9 md:bottom-[72px] hover:cursor-pointer group"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  y: [0, -5, 0],
                  transition: { 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }
                }}
              >
                <p className="text-[10px] sm:text-sm font-semibold text-yellow-950 group-hover:text-yellow-700 transition-colors duration-300 select-none">
                  Design with Figma
                </p>
                <motion.div
                  className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    transition: { duration: 1, repeat: Infinity }
                  }}
                />
              </motion.div>

              <motion.div 
                className="absolute glassIco z-20 before:absolute flex justify-center items-center px-4 py-2 -right-16 bottom-20 md:bottom-32 hover:cursor-pointer group"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, 5, -5, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  y: [0, -3, 0],
                  transition: { 
                    duration: 2.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 0.5
                  }
                }}
              >
                <p className="text-[10px] sm:text-sm font-semibold text-yellow-950 group-hover:text-yellow-700 transition-colors duration-300 select-none">
                  Data Science with Python
                </p>
                <motion.div
                  className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    transition: { duration: 1, repeat: Infinity, delay: 0.3 }
                  }}
                />
              </motion.div>

              <motion.div 
                className="absolute glassIco z-20 before:absolute flex justify-center items-center px-4 py-2 -right-12 sm:-right-24 -bottom-7 md:bottom-3 hover:cursor-pointer group"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, -3, 3, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  y: [0, -4, 0],
                  transition: { 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }
                }}
              >
                <p className="text-[10px] sm:text-sm font-semibold text-yellow-950 group-hover:text-yellow-700 transition-colors duration-300 select-none">
                  Web apps with React, Next.js, Flask and more
                </p>
                <motion.div
                  className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    transition: { duration: 1, repeat: Infinity, delay: 0.6 }
                  }}
                />
              </motion.div>

              <img
                src="/assets/img/Profile.png"
                alt=""
                className="absolute object-cover w-full h-full z-10"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;
