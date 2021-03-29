import React from "react";

interface IProps {
  label: string;
  onClick: any;
  intention?: "default" | "cancel" | "danger";
  appearance?: "primary" | "default";
  loading?: boolean;
  disabled?: boolean;
}
const Button: React.FC<IProps> = ({
  label,
  onClick,
  appearance,
  intention,
  loading,
  disabled,
}) => {
  const getDynamicStyle = () => {
    if (appearance === "default") {
      switch (intention) {
        case "cancel":
          return ` text-gray-500 hover:bg-gray-50 `;
        case "danger":
          return ` text-red-400 hover:bg-red-50 `;
        default:
          return ` text-blue-500 hover:bg-blue-50 `;
      }
    } else {
      let commonStyle = " text-white";
      switch (intention) {
        case "cancel":
          return `${commonStyle} bg-gray-400`;
        case "danger":
          return `${commonStyle} bg-red-400`;
        default:
          return `${commonStyle} bg-blue-400`;
      }
    }
  };
  return (
    <button
      onClick={disabled ? () => {} : onClick}
      className={` ${getDynamicStyle()} ${
        disabled
          ? "cursor-not-allowed opacity-40"
          : "hover:bg-opacity-50 hover:shadow-md"
      } font-semibold w-full p-3 rounded-md transition-all duration-500`}
    >
      {loading ? "Loading ..." : label}
    </button>
  );
};

export default Button;
