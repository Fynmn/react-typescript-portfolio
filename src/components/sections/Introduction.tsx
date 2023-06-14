import { motion } from "framer-motion";
import { SectionProps } from "./types";
import ParticlesBackground from "../ParticlesBackground";
// import { HiArrowDownTray } from "react-icons/hi";

interface IntroductionProps extends SectionProps {}

const Introduction: React.FC<IntroductionProps> = ({ sectionRef }) => {
  return (
    <section
      id="introduction-section"
      ref={sectionRef}
      className="max-w-7xl w-full mx-auto flex items-center justify-center py-32"
    >
      <ParticlesBackground />
      <div className="relative flex gap-x-16 flex-wrap justify-center items-center gap-y-8 py-8">
        <div className="flex flex-col">
          <div className="w-full">
            <h1 className="text-yellow-500 text-4xl sm:text-5xl md:text-7xl font-semibold ">
              Natalie Jane
            </h1>
          </div>
          <div className="w-full flex justify-center md:justify-end">
            <h1 className="text-yellow-500 text-4xl sm:text-5xl md:text-7xl font-semibold">
              Pacificar
            </h1>
          </div>
        </div>

        <div className="w-60 h-60 sm:w-80 sm:h-80">
          <div className="relative w-full h-full">
            <img
              src="../../../public/assets/img/Profile.png"
              alt=""
              className="absolute object-cover w-full h-full "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
