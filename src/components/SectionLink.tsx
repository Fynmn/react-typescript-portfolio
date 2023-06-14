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
  return (
    <Link
      to={href}
      smooth={true}
      offset={5}
      duration={700}
      className="select-none relative group cursor-pointer px-1 py-0.5"
      onClick={onClick}
    >
      <div className="relative">
        <span
          className={`${
            active && "text-yellow-500"
          } relative group-hover:text-yellow-500 transition-all duration-700 ease-out text-yellow-700`}
        >
          {children}
        </span>
        <span
          className={`group-hover:w-full group-hover:left-0 group-hover:bg-yellow-500 block absolute right-0 h-[0.115rem] transition-all duration-700 ease-out ${
            active ? "w-full left-0 bg-yellow-500" : "w-0 bg-yellow-500"
          }`}
        ></span>
      </div>
    </Link>
  );
};

export default SectionLink;
