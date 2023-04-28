import { motion } from "framer-motion";

export interface IProjectCard {
  title: string;
  description: string;
  imgUrl: string;
  tags: string[];
}

const ProjectCard: React.FC<IProjectCard> = ({
  title,
  description,
  imgUrl,
  tags,
}) => {
  return (
    <>
      <div className="flex flex-col min-w-[200px] w-[500px] m-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.3, y: -50 }}
          whileInView={{ opacity: 10, scale: 1, y: 0 }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
        >
          <div className="bg-blue-500 h-[400px] hover:animate-pulse cursor-pointer">
            <div className="relative w-full h-[400px] ">
              <img
                className="absolute object-cover w-full h-full -top-4 -left-4"
                src={imgUrl}
              />
            </div>
          </div>
        </motion.div>
        <div className="font-medium text-lg mt-4 text-sky-700">{title}</div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 10, y: 0 }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
        >
          <div className="text-sm font-light text-slate-700 mt-2">
            {description}
          </div>
          <div className="flex flex-wrap mt-4 gap-y-2">
            {tags.map((tag, i) => (
              <span className="bg-blue-100 text-blue-800 text-xs  mr-2 px-2.5 py-0.5 rounded">
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
