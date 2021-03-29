import React from "react";

export interface IProps {
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
  label?: string;
  placeholder?: string;
  hint?: string;
  type?: string;
}

const Input: React.FC<IProps> = ({
  value,
  onChange,
  label,
  hint,
  placeholder,
  type,
}) => {
  return (
    <div>
      <div className=" p-1">
        <p>{label}</p>
      </div>
      <input
        className=" w-full px-3 py-2 rounded-md focus:outline-none shadow-inner bg-gray-50"
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange.bind(this)}
      />
      <div className=" p-1">
        <p className=" text-sm italic text-gray-400">{hint}</p>
      </div>
    </div>
  );
};

export default Input;
