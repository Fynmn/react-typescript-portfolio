import { motion } from "framer-motion";
import { ReactNode } from "react";
import FlatShadowCard from "./FlatShadowCard";

export interface IAwardCard {
  title: string;
  placement: string;
  date: string;
  icon: ReactNode;
  others?: string;
}

const AwardCard: React.FC<IAwardCard> = ({
  title,
  placement,
  date,
  icon,
  others,
}) => {
  return (
    <>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <FlatShadowCard
          interactivity={{
            flatOnMouseDown: true,
            flatOnMouseUp: false,
            flatOnMouseEnter: false,
            flatOnMouseLeave: true,
          }}
          className="hover:scale-105 hover:cursor-pointer"
        >
          <div className="flex flex-col min-w-[200px] w-[280px] sm:w-[330px] p-8 gap-y-2 group">
            {/* <div className="flex flex-col min-w-[200px] w-96 p-8 gap-y-4 border-2 border-yellow-500 rounded-md group hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 hover:shadow-lg hover:shadow-slate-400 hover:-translate-y-2 hover:scale-110 hover:border-0"> */}
            {/* <div className="flex relative w-[105px] h-[70px]">{icon}</div> */}
            <div className="flex flex-col gap-y-2 items-start ">
              {others ? (
                <span className="flex items-center">
                  <p className="text-yellow-900 font-bold mr-1">{placement}</p>
                  <p className="text-yellow-900 font-light text-xs mr-1 mt-1">
                    {" "}
                    -{" "}
                  </p>
                  <p className="text-yellow-900 font-light text-xs mt-1">
                    {others}
                  </p>
                </span>
              ) : (
                <span className="flex items-center">
                  <p className="text-yellow-900 font-bold mr-1">{placement}</p>
                </span>
              )}
              <p className="text-yellow-900 font-semibold text-sm text-start">
                {title}
              </p>
              <p className="text-yellow-900 font-light text-sm">{date}</p>
            </div>
          </div>
        </FlatShadowCard>
      </motion.button>
    </>
  );
};

export default AwardCard;
