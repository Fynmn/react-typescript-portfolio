import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Link } from "react-scroll";
interface SectionLinkProps {
  children: ReactNode;
  active?: boolean;
  href: string;
  onClick?:
    | ((() => void) & React.MouseEventHandler<HTMLButtonElement>)
    | undefined;
}

const SectionLink: React.FC<SectionLinkProps> = ({
  children,
  active = false,
  href,
  onClick = () => null,
}) => {
  const bounceVariants = {
    initial: { scale: 1, y: 0 },
    hover: { scale: 1.1, y: -6, transition: { duration: 0.2, yoyo: Infinity } },
  };

  return (
    <Link
      to={href}
      smooth={true}
      offset={5}
      duration={700}
      className="select-none relative group cursor-pointer px-1 py-0.5"
      onClick={onClick}
    >
      <motion.div
        initial="initial"
        variants={bounceVariants}
        whileHover="hover"
        style={{ display: "inline-block" }}
      >
        <div className="relative">
          <span
            className={`${
              active && "text-yellow-500"
            } relative group-hover:text-yellow-500 text-yellow-700`}
          >
            {children}
          </span>
          <span
            className={`group-hover:w-full group-hover:left-0 group-hover:bg-yellow-500 block absolute -bottom-1 right-0 h-[2px] ${
              active ? "w-full left-0 bg-yellow-500" : "w-0 bg-yellow-500"
            }`}
          ></span>
        </div>
      </motion.div>
    </Link>
  );
};

export default SectionLink;
