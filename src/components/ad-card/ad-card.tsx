import React, { useContext } from "react";
import { AllAdTypes_allAdTypes_data } from "../../__generated__/AllAdTypes";
import { FaPlus } from "react-icons/fa";
import cartStore from "../../context/cartStore";
import Loader from "../loader";

interface IProps {
  ad: AllAdTypes_allAdTypes_data;
  accountId: number;
}
const AdCard: React.FC<IProps> = ({ ad, accountId }) => {
  const { onUpdateCart, loading, customError } = useContext(cartStore);

  return (
    <div className=" p-3 bg-gray-50 rounded-lg mb-3 flex justify-between items-center">
      <div>
        {customError && (
          <p className="text-red-500 italic text-sm">{customError}</p>
        )}
        <h1 className=" font-bold text-lg text-gray-600">{ad.name}</h1>
        <p>RM {ad.price}</p>
      </div>
      <div
        onClick={
          !loading
            ? onUpdateCart?.bind(this, { adId: ad.id, accountId, quantity: 1 })
            : () => {}
        }
        className=" rounded-full p-2 bg-yellow-500 text-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      >
        {loading ? <Loader includePadding={false} /> : <FaPlus />}
      </div>
    </div>
  );
};

export default AdCard;
