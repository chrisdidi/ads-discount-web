import React from "react";
import { ImSpinner8 } from "react-icons/im";

interface IProps {
  includePadding?: boolean;
}
const Loader: React.FC<IProps> = ({ includePadding = true }) => {
  return (
    <div
      className={`w-full flex items-center justify-center ${
        includePadding && "p-3"
      }`}
    >
      <div className=" animate-spin text-blue-400">
        <ImSpinner8 />
      </div>
    </div>
  );
};

export default Loader;
