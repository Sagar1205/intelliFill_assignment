import React from "react";
import { Wallet, Users, Bookmark, Lessthan } from "./Icons";
import { Link } from "react-router-dom";

const Card = ({ logo, title, numberOfPeople, agency, price, tags }) => {
  return (
    <div
      className="card border-grey-200 rounded-xl border-2 p-2 bg-white"
      style={{ width: "350px" }}
    >
      <div className="flex justify-between border-b-2 pb-[0.20rem]">
        <div className="flex gap-2">
          <div className="border-2 rounded-lg">
            <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-lg">{title}</h2>
            <p className="text-sm text-gray-400">{agency}</p>
          </div>
        </div>
        <div>
          <Bookmark className="h-2 w-2 " />
        </div>
      </div>

      <div className="flex p-2">
        <div className="w-10"></div>
        <div className="flex flex-col gap-[0.2rem]">
          <p className="flex gap-2">
            <Users />
            <p className="text-sm">{numberOfPeople}</p>
          </p>
          <p className="flex gap-2">
            <Wallet />
            <p className="text-sm">₹ {price}</p>
          </p>
          <div className="flex gap-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm text-gray-400 border-gray-400 border-[0.01rem] rounded-lg py-1 px-2"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex text-sm">
            <Link to="/e" className="text-blue-400">
              View Details &gt;
            </Link>
            {/* <Lessthan /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
