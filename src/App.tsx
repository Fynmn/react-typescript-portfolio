import contacts from "./data/contacts";
import projects from "./data/projects";
import ContactCard from "./components/ContactCard";
import ProjectCard from "./components/ProjectCard";
import Skill from "./components/Skills";
import skills from "./data/skills";

import { motion, useScroll } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <div className="flex flex-col w-full bg-slate-600 min-h-screen">
        {/* Introduction Section */}
        <section className="bg-indigo-400">
          <div className="max-w-7xl w-full mx-auto flex items-center justify-center h-[600px]">
            <div className="flex">
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 1, x: -1000 }}
                  animate={{ scale: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 15,
                    duration: 5,
                  }}
                >
                  <h1 className='text-5xl md:text-7xl lg:text-7xl xl:text-7xl  mx-8 md:mx-16 lg:mx-16 xl"mx-16 font-bold text-slate-800 text-center'>
                    Natalie Jane Pacificar
                  </h1>
                </motion.div>
                <motion.div
                  initial={{ scale: 1, x: 1000 }}
                  animate={{ scale: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 15,
                    duration: 5,
                  }}
                >
                  <h1 className="mt-4 text-slate-600">
                    A simple portfolio website for my Typescript practice.
                  </h1>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}

        <section className="bg-indigo-300">
          <div className="max-w-7xl w-full mx-auto">
            <div className="flex flex-col py-16">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <h1 className="text-4xl font-medium text-slate-800 px-16">
                  Featured Projects
                </h1>
              </motion.div>
              <div className="px-16 flex flex-wrap justify-center mt-8">
                {projects.map((project) => (
                  <ProjectCard {...project}></ProjectCard>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Technologies Section */}
        <section className="bg-indigo-400">
          <div className="max-w-7xl w-full mx-auto">
            <div className="flex flex-col py-16">
              <h1 className="text-4xl font-medium text-slate-800 px-16">
                Skills & Technologies
              </h1>
              <div className="px-16 flex flex-wrap mx-auto mt-16 gap-y-8 gap-x-8 justify-center">
                {skills.map((skill) => (
                  <Skill {...skill}></Skill>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact*/}
        <section className="bg-indigo-300">
          <div className="max-w-7xl w-full mx-auto">
            <div className="flex flex-col py-16">
              <h1 className="text-4xl font-medium text-slate-800 px-16">
                Contact Me
              </h1>

              <h2 className="text-center text-3xl font-light text-slate-500 mt-8">
                Send me a Message!
              </h2>
              <div className="px-16 py-8 flex flex-wrap gap-x-4 gap-y-4 justify-center">
                {contacts.map((contact) => (
                  <ContactCard {...contact}></ContactCard>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
