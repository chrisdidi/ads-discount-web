import React from "react";
import { AccountType } from "../../types/schema";

interface IProps {
  account: AccountType;
  onSelect: (id: number) => void;
}
const AccountCard: React.FC<IProps> = ({ account, onSelect }) => (
  <div
    onClick={account?.id ? onSelect.bind(this, account.id) : () => {}}
    className={` group w-full rounded-lg p-4 flex items-center bg-gray-50 cursor-pointer mb-3 border border-solid border-white hover:border-blue-400 transition-all duration-300 relative`}
  >
    {account?.discounts && account.discounts.length > 0 && (
      <div className="absolute top-0 right-0 rounded-full bg-yellow-500 px-1 animate-bounce">
        <p className=" text-white">Offer Available!</p>
      </div>
    )}
    <div className=" h-4 w-4 rounded-full p-1 overflow-hidden bg-blue-100 mr-3">
      <div className="w-full h-full group-hover:bg-blue-500 rounded-full" />
    </div>
    <h1>{account.name}</h1>
  </div>
);

export default AccountCard;
