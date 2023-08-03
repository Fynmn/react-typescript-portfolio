import skills from "@/data/skills";
import { SectionProps } from "./types";
import SkillCard from "../SkillCard";
import awards from "@/data/awards";
import AwardCard from "../AwardCard";
import { Variants, motion, useInView } from "framer-motion";
import { useRef } from "react";
// import { Profile } from '../../../public/assets/img/Profile.png';

interface AwardsProps extends SectionProps {}

const Awards: React.FC<AwardsProps> = ({ sectionRef }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const awardsVariants: Variants = {
    hidden: {
      y: 0.1,
    },
    visible: {
      y: 0,
      transition: {
        delay: 0.25,
        staggerChildren: 0.25,
        when: "beforeChildren",
      },
    },
  };

  const awardsChildVariants: Variants = {
    hidden: {
      y: -35,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 1.2,
      },
    },
  };

  return (
    <section
      id="awards-section"
      ref={sectionRef}
      className="max-w-7xl w-full mx-auto relative"
    >
      <h1 className="text-yellow-700 text-4xl sm:text-5xl font-semibold text-center py-16 px-16">
        Awards & Certificates
      </h1>

      <div className="w-full h-full" ref={ref}>
        <motion.div
          variants={awardsVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className=""
        >
          <div className="flex flex-wrap justify-center gap-8 mt-4">
            {awards.map((award, i) => (
              <motion.span
                variants={awardsChildVariants}
                viewport={{ once: true }}
                key={i}
                className="block"
              >
                <AwardCard
                  icon={award.icon}
                  title={award.title}
                  placement={award.placement}
                  date={award.date}
                  others={award?.others}
                />
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
