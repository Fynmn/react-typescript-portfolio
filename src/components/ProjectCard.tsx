import { motion } from "framer-motion";

export interface IProjectCard {
  title: string;
  description: string;
  imgUrl: string;
  type: string;
  tags: string[];
}

const ProjectCard: React.FC<IProjectCard> = ({
  title,
  description,
  imgUrl,
  type,
  tags,
}) => {
  return (
    <>
      <div className="flex flex-col min-w-[200px] sm:w-[500px] w-full my-8 group">
        <motion.div
          initial={{ opacity: 0, scale: 0.3, y: -50 }}
          whileInView={{ opacity: 10, scale: 1, y: 0 }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
        >
          <div className=" cursor-pointer relative">
            <div className="absolute inset-0 bg-yellow-500 h-[300px] w-full sm:h-[400px] sm:w-full group-hover:animate-rotate animate-rotate_transition group-hover:rotate-3 group-hover:animate-grow animate-grow_transition"></div>
            <div className="relative h-[300px] w-full sm:h-[400px] sm:w-full z-0 group-hover:animate-grow animate-grow_transition">
              <img
                className="absolute object-cover w-full h-full -top-4 -left-4"
                src={imgUrl}
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 10, y: 0 }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
        >
          <div className="font-semibold text-xl sm:text-2xl mt-4 text-yellow-700 group-hover:animate-grow animate-grow_transition">
            {title}
          </div>

          <div className="text-xs sm:text-sm leading-5 sm:leading-6 font-light text-yellow-700 mt-2 group-hover:animate-grow animate-grow_transition">
            {/* without leading */}
            {/* <div className="text-xs sm:text-sm font-light text-yellow-700 mt-2 group-hover:animate-grow animate-grow_transition"> */}
            {description}
          </div>
          <div className="flex flex-wrap mt-4 gap-y-2 group-hover:animate-grow animate-grow_transition">
            <span className="bg-yellow-700 text-white text-xs mr-2 px-2.5 py-0.5 rounded">
              {type}
            </span>
            {tags.map((tag, i) => (
              <span className="bg-yellow-500 text-yellow-100 text-xs mr-2 px-2.5 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ProjectCard;
