import React from "react";

export interface ITagProps {
  text: string;
  variant?: "primary" | "secondary" | "technology";
  className?: string;
}

const Tag: React.FC<ITagProps> = ({ text, variant = "technology", className = "" }) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-yellow-900 text-white group-hover:bg-yellow-800 group-hover:text-yellow-50";
      case "secondary":
        return "bg-yellow-500 text-yellow-100 group-hover:bg-yellow-600 group-hover:text-yellow-50";
      case "technology":
      default:
        return "bg-yellow-500 text-yellow-100 group-hover:bg-yellow-600 group-hover:text-yellow-50";
    }
  };

  return (
    <span
      className={`text-xs mr-2 px-2.5 py-0.5 rounded transition-all duration-300 ease-in-out ${getVariantClasses()} ${className}`}
    >
      {text}
    </span>
  );
};

export default Tag; 