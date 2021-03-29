import React from "react";

interface IProps {
  title?: string;
  message?: string;
}
const ErrorAlert: React.FC<IProps> = ({ title, message }) => (
  <div className=" w-full bg-red-100  p-3 rounded-md">
    <h1 className=" text-lg text-red-500 font-bold mb-1">{title}</h1>
    <p className=" text-red-400 font-semibold ">{message}</p>
  </div>
);

export default ErrorAlert;
