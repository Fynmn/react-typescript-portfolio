import { useEffect, useRef } from "react";
import skills from "@/data/skills";
import { SectionProps } from "./types";
import SkillCard from "../SkillCard";
// import { Profile } from '../../../public/assets/img/Profile.png';
import Marquee from "react-fast-marquee";
import { RxDoubleArrowDown } from "react-icons/rx";
import { motion } from "framer-motion";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

interface SkillsProps extends SectionProps {}

const Skills: React.FC<SkillsProps> = ({ sectionRef }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      tippy(buttonRef.current, {
        content: "See all my skills",
        placement: "right",
        trigger: "mouseenter",
        theme: "primary",
        // arrow: false,
      });
    }
  }, []);

  return (
    <section
      id="skills-section"
      ref={sectionRef}
      className="max-w-7xl w-full mx-auto relative"
    >
      <h1 className="text-yellow-700 text-4xl sm:text-5xl font-semibold text-center py-16 px-16">
        Skills & Technologies
      </h1>
      <div className="flex items-start justify-start">
        <Marquee
          gradient={false}
          speed={40}
          direction="left"
          pauseOnHover={false}
        >
          {skills.map((skill) => (
            <SkillCard icon={skill.icon} label={skill.label}></SkillCard>
          ))}
        </Marquee>
      </div>

      <div className="flex justify-center m-4">
        <motion.a
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <button
            ref={buttonRef}
            className="group hover:bg-yellow-500 hover:text-white flex flex-col items-center text-yellow-500 gap-y-4 p-6 rounded-full"
          >
            {/* <button
    ref={buttonRef}
    className="group hover:bg-yellow-500 hover:animate-ping flex flex-col items-center text-yellow-500 gap-y-4 p-6 rounded-full"
  > */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -12, 0] }} // Animate the y position from 0 to -20 and back to 0
              transition={{
                duration: 1, // Duration of the animation
                repeat: Infinity, // Repeat the animation indefinitely
                ease: "easeInOut", // Easing function for smoother animation
                repeatType: "reverse", // Reverse the animation when repeating
              }}
            >
              <h1 className="text-sm group-hover:animate-text_color_animation">
                Click me
              </h1>
            </motion.div>
            <RxDoubleArrowDown></RxDoubleArrowDown>
          </button>
        </motion.a>
      </div>
    </section>
  );
};

export default Skills;
