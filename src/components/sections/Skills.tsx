import { useEffect, useRef, useState } from "react";
import skills from "@/data/skills";
import { SectionProps } from "./types";
import SkillCard from "../SkillCard";
// import { Profile } from '../../../public/assets/img/Profile.png';
import Marquee from "react-fast-marquee";
import { RxDoubleArrowDown, RxDoubleArrowUp } from "react-icons/rx";
import { motion } from "framer-motion";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

interface SkillsProps extends SectionProps {}

const Skills: React.FC<SkillsProps> = ({ sectionRef }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [seeAll, setSeeAll] = useState<boolean>(false);

  // useEffect(() => {
  //   const button = buttonRef.current;

  //   if (button) {
  //     const tooltip = tippy(button, {
  //       content: "See all my skills",
  //       placement: "right",
  //       trigger: "mouseenter",
  //       theme: "primary",
  //     });

  //     const handleClick = () => {
  //       tooltip.hide(); // Hide the tooltip when the button is clicked
  //     };

  //     button.addEventListener("click", handleClick);

  //     return () => {
  //       button.removeEventListener("click", handleClick);
  //       tooltip.destroy(); // Cleanup Tippy.js when the component unmounts
  //     };
  //   }
  // }, []);

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
        {!seeAll ? (
          <Marquee
            gradient={false}
            speed={40}
            direction="left"
            pauseOnHover={false}
          >
            {skills.map((skill, i) => (
              <SkillCard
                key={i}
                icon={skill.icon}
                label={skill.label}
                seeAll={seeAll}
              ></SkillCard>
            ))}
          </Marquee>
        ) : (
          <div className="flex flex-wrap sm:px-16 md:sm:px-32 justify-center">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ x: i % 2 === 0 ? -100 : 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
                style={{ display: "inline-block" }}
                whileHover={{ scale: 1.1 }}
              >
                <SkillCard
                  key={i}
                  icon={skill.icon}
                  label={skill.label}
                  seeAll={seeAll}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-center m-4">
        <motion.a
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <button
            ref={buttonRef}
            onClick={() => {
              setSeeAll(!seeAll);
            }}
            className="group hover:bg-yellow-500 hover:text-white flex flex-col items-center text-yellow-500 gap-y-4 p-6 rounded-full"
          >
            {seeAll ? <RxDoubleArrowUp></RxDoubleArrowUp> : <></>}
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
                {!seeAll ? "Click Me" : "Collapse"}
              </h1>
            </motion.div>
            {!seeAll ? <RxDoubleArrowDown></RxDoubleArrowDown> : <></>}
          </button>
        </motion.a>
      </div>
    </section>
  );
};

export default Skills;
