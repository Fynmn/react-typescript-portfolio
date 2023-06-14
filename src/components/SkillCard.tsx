import React, { ReactNode } from "react";

export interface ISkillCard {
  icon: ReactNode;
  label: string;
}

const SkillCard: React.FC<ISkillCard> = ({ icon, label }) => {
  return (
    <div className="group flex flex-col items-center justify-evenly w-[100px] hover:bg-white hover:rounded-xl cursor-pointer h-[120px]">
      <div className="flex flex-col relative h-[50px] w-[50px]">{icon}</div>
      <p className="text-xs font-normal text-center invisible group-hover:text-slate-300 group-hover:visible">
        {/* <span className="text-xs font-normal text-center text-yellow-500 group-hover:text-yellow-500 invisible group-hover:visible"> */}
        {label}
      </p>
    </div>
  );
};

export default SkillCard;
