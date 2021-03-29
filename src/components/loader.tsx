import React from "react";
import { ImSpinner8 } from "react-icons/im";

const Loader = () => {
  return (
    <div className=" p-3 w-full flex items-center justify-center">
      <div className=" animate-spin text-blue-400">
        <ImSpinner8 />
      </div>
    </div>
  );
};

export default Loader;
