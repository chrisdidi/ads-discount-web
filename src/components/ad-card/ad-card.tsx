import React from "react";
import { AllAdTypes_allAdTypes_data } from "../../__generated__/AllAdTypes";
import { FaPlus } from "react-icons/fa";

interface IProps {
  ad: AllAdTypes_allAdTypes_data;
}
const AdCard: React.FC<IProps> = ({ ad }) => {
  return (
    <div className=" p-3 bg-gray-50 rounded-lg mb-3 flex justify-between items-center">
      <div>
        <h1 className=" font-bold text-lg text-gray-600">{ad.name}</h1>
        <p>RM {ad.price}</p>
      </div>
      <div className=" rounded-full p-2 bg-yellow-500 text-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
        <FaPlus />
      </div>
    </div>
  );
};

export default AdCard;
