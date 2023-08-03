import { useInView } from "react-intersection-observer";

import { motion, useScroll } from "framer-motion";
import Introduction from "./components/sections/Introduction";
import Nav from "./components/Nav";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Awards from "./components/sections/Awards";
import Footer from "./components/sections/Footer";
import MouseTrailingEffect from "./components/MouseTrailingEffect";

function App() {
  const { scrollYProgress } = useScroll();
  const [introductionRef, introductionRefInView] = useInView();

  return (
    <>
      <motion.div
        className="bg-yellow-700 h-1 top-0 left-0 right-0 origin-left fixed z-10 w-screen"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="flex flex-col w-full bg-white min-h-screen">
        <MouseTrailingEffect />
        <Nav></Nav>
        <Introduction></Introduction>
        <Projects></Projects>
        <Skills></Skills>
        <Awards></Awards>
        <Footer></Footer>
        {/* <ProjectCard
          title={"Lol"}
          description={"hi"}
          imgUrl={"wolrd"}
          tags={["test"]}
        /> */}
        {/* Introduction Section */}
        {/* <section className="bg-indigo-400">
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
        </section> */}
        {/* Portfolio Section */}
        {/* <section className="bg-indigo-300">
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
        </section> */}
        {/* Skills & Technologies Section */}
        {/* <section className="bg-indigo-400">
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
        </section> */}
        {/* Footer*/}
        {/* <section className="bg-indigo-300">
          <div className="max-w-7xl w-full mx-auto">
            <div className="flex flex-col py-16">
              <h1 className="text-4xl font-medium text-slate-800 px-16">
                Footer Me
              </h1>

              <h2 className="text-center text-3xl font-light text-slate-500 mt-8">
                Send me a Message!
              </h2>
              <div className="px-16 py-8 flex flex-wrap gap-x-4 gap-y-4 justify-center">
                {Footers.map((Footer) => (
                  <FooterCard {...Footer}></FooterCard>
                ))}
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
}

export default App;
