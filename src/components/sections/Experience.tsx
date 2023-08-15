import { useRef } from "react";
import { SectionProps } from "./types";
import experiences from "@/data/experiences";
import { Variants, motion, useInView } from "framer-motion";
import ExperienceElement from "../ExperienceElement";

interface ExperienceProps extends SectionProps {}

const Experience: React.FC<ExperienceProps> = ({ sectionRef }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      id="experiences-section"
      ref={sectionRef}
      className="max-w-7xl w-full mx-auto relative bg-blue-500 pb-16"
    >
      <h1 className="text-yellow-700 text-4xl sm:text-5xl font-semibold text-center py-16 px-16">
        Experiences
      </h1>
      <div className="w-full h-full" ref={ref}>
        {experiences.map((experience, i) => (
          <ExperienceElement
            key={i}
            job_title={experience.job_title}
            company={experience.company}
            description={experience.description}
            start_date={experience.start_date}
            end_date={experience.end_date}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
