import React, { ReactNode } from "react";

export interface ISkill {
    icon: ReactNode,
    label: string
}

const Skill: React.FC<ISkill> = ({ icon, label }) => {
    return (

        <div className="group flex flex-col items-center justify-center gap-y-2 w-[80px] p-2 hover:bg-white hover:rounded-xl cursor-pointer">
            <div className="flex flex-col relative h-[50px] w-[50px]">
                {icon}
            </div>
            <span className="text-xs font-normal text-center text-blue-800 group-hover:text-blue-800 invisible group-hover:visible">{label}</span>
        </div>

    )
}

export default Skill;