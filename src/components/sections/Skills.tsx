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
import { useInView } from "react-intersection-observer";

interface SkillsProps extends SectionProps {}

const Skills: React.FC<SkillsProps> = ({ sectionRef }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [seeAll, setSeeAll] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  
  // Intersection Observer to detect when section is visible
  const [skillsRef, skillsInView] = useInView({
    threshold: 0.3, // Trigger when 30% of section is visible
    triggerOnce: false
  });

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

  // Audio control functions
  const startMusic = () => {
    if (audioRef.current) {
      console.log("Starting music...");
      audioRef.current.volume = 0.3;
      audioRef.current.currentTime = 30;
      audioRef.current.play().then(() => {
        console.log("Music started successfully");
        setIsPlaying(true);
      }).catch((error) => {
        console.log("Music start failed:", error);
      });
    }
  };

  const stopMusic = () => {
    if (audioRef.current) {
      console.log("Stopping music...");
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Audio control effect for section visibility
  useEffect(() => {
    if (skillsInView && !isPlaying && !seeAll) {
      // Start playing when section becomes visible (only if not in expanded view)
      startMusic();
    } else if (!skillsInView && isPlaying) {
      // Pause when section is not visible
      stopMusic();
    }
  }, [skillsInView, isPlaying, seeAll]);

  return (
    <section
      id="skills-section"
      ref={skillsRef}
      className="max-w-7xl w-full mx-auto relative"
    >
             <h1 className="text-yellow-700 text-4xl sm:text-5xl font-semibold text-center py-16 px-16">
         Skills & Technologies
       </h1>

      <div className="flex items-start justify-start relative">
        {!seeAll ? (
          <div className="relative w-full">
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
            {/* Fade overlay on the right end */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10"></div>
            {/* Fade overlay on the left end */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10"></div>
          </div>
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

      <div className="flex justify-center m-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
                     <button
             ref={buttonRef}
             onClick={() => {
               if (!seeAll) {
                 // When expanding to show all skills, stop music
                 stopMusic();
               } else {
                 // When collapsing skills, start music if section is visible
                 if (skillsInView) {
                   startMusic();
                 }
               }
               setSeeAll(!seeAll);
             }}
             className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-yellow-300 hover:border-yellow-400"
           >
            {/* Animated background particles */}
            <motion.div
              className="absolute inset-0 opacity-20"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 50% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Main content */}
            <div className="relative flex items-center gap-3">
              {seeAll ? (
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <RxDoubleArrowUp size={20} />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <RxDoubleArrowDown size={20} />
                </motion.div>
              )}
              
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-sm font-medium">
                  {!seeAll ? "🎮 Explore All Skills" : "📦 Collapse Skills"}
                </span>
              </motion.div>
            </div>
            
            {/* Ripple effect on click */}
            <motion.div
              className="absolute inset-0 rounded-full bg-white opacity-30"
              initial={{ scale: 0, opacity: 0 }}
              whileTap={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
          
          {/* Floating particles around the button */}
          {!seeAll && (
            <>
              <motion.div
                className="absolute -top-2 -left-2 w-2 h-2 bg-yellow-300 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-yellow-400 rounded-full"
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              <motion.div
                className="absolute -bottom-1 -left-1 w-1 h-1 bg-yellow-500 rounded-full"
                animate={{
                  y: [0, -6, 0],
                  opacity: [0.4, 0.9, 0.4]
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </>
          )}
                 </motion.div>
       </div>
       
       {/* Hidden audio element */}
       <audio
         ref={audioRef}
         preload="auto"
         loop
         style={{ display: 'none' }}
       >
         <source src="/assets/audio/social-network-mountain-king.mp3" type="audio/mpeg" />
         Your browser does not support the audio element.
       </audio>
     </section>
   );
 };

export default Skills;
