import React from "react";

interface IProps {
  label: string;
  size?: "sm" | "md" | "lg";
  onClick?: any;
}
const RoundButton: React.FC<IProps> = ({ label, size = "sm", onClick }) => (
  <div
    onClick={onClick}
    className={`${size === "sm" && "w-4 h-4"} ${size === "md" && "w-6 h-6"} ${
      size === "lg" && "w-8 h-8"
    } flex items-center justify-center bg-yellow-500 text-white rounded-full cursor-pointer hover:shadow-md transition-all duration-300`}
  >
    {label}
  </div>
);

export default RoundButton;
