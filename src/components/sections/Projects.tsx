import projects from "@/data/projects";
import { SectionProps } from "./types";
import ProjectCard from "../ProjectCard";
// import { Profile } from '../../../public/assets/img/Profile.png';
import { motion } from "framer-motion";

interface ProjectsProps extends SectionProps {}

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const Projects: React.FC<ProjectsProps> = ({ sectionRef }) => {
  return (
    <section id="projects-section" ref={sectionRef} className="relative">
      {/* bg-color up here */}
      <div className="max-w-7xl w-full mx-auto">
        <h1 className="text-yellow-700 text-4xl sm:text-5xl font-semibold text-center py-16">
          Projects
        </h1>

        <div className="flex flex-wrap items-center justify-evenly mx-16 gap-y-8 sm:gap-y-4 md:gap-y-2 lg:gap-y-0 pb-16">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              description={project.description}
              imgUrl={project.imgUrl}
              type={project.type}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
