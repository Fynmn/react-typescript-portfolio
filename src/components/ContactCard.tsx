import React, { ReactNode } from "react";

export interface IContactCard {
  icon: ReactNode;
  label: string;
  link: string;
}

const ContactCard: React.FC<IContactCard> = ({ icon, label, link }) => {
  return (
    <>
      <a href={link} target="_blank">
        <button className="hover:bg-yellow-500 rounded-full p-2">
          <div className="gap-y-4 flex flex-col justify-center items-center w-full">
            {icon}
            {/* <span className="text-indigo-500 font-medium text-xs group-hover:text-slate-200">
            {label}
          </span> */}
          </div>
        </button>
      </a>
    </>
  );
};

export default ContactCard;
