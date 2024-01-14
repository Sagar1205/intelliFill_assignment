import React from "react";
import { Users, Wallet } from "./Icons";

const InterestedCard = ({
  logo,
  title,
  agency,
  peoples,
  price,
}) => {
  return (
    <div className="flex border-grey-200 border-b-2 justify-between py-4 bg-white">
      <div>
        <div className="flex gap-2 justify-between pb-[0.20rem]">
          <div className="border-2 rounded-lg">
            <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-lg">{title}</h2>
            <p className="text-sm text-gray-400">{agency}</p>
          </div>
        </div>
        <div className="flex flex-col gap-[0.6rem] py-2">
          <p className="flex gap-2 text-gray-400">
            <Users />
            <p className="text-sm"> {peoples}</p>
          </p>
          <p className="flex gap-2 text-gray-400">
            <Wallet />
            <p className="text-sm">₹ {price}</p>
          </p>
        </div>
      </div>
      <div className="text-blue-500 flex flex-col justify-end items-left">
        View details &gt;
      </div>
    </div>
  );
};

export default InterestedCard;
