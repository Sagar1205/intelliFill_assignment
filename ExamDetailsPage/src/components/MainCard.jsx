import React from "react";
import { Share, BlueUsers, Bookmark, Date } from "./Icons";

const MainCard = ({
  logo,
  title,
  agency,
  examDate,
  applicants,
  days,
  endDate,
}) => {
  return (
    <div className="flex flex-col card border-grey-200 border-2 p-6 bg-white rounded-xl">
      <div className="flex justify-between pb-[0.20rem]">
        <div className="md:flex gap-2">
          <div className="flex">
            <div className="border-2 rounded-lg">
              <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="font-bold text-lg">{title}</h2>
            <p className="text-xs text-blue-500">{agency}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div>
            <Bookmark className="h-2 w-2 " />
          </div>
          <div>
            <Share />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[0.3rem] border-b-2 p-4 border-gray-200">
        <p className="flex gap-2">
          <Date />
          <p className="text-sm">Exam Date: {examDate}</p>
        </p>
        <p className="flex gap-2">
          <BlueUsers />
          <p className="text-sm">Applicants: {applicants}</p>
        </p>
      </div>
      <div className="flex pt-6 items-center justify-between">
        <div className="text-xs text-gray-400">
          Posted {days} ago, ends on {endDate}
        </div>
        <div>
          <button className="bg-blue-600 rounded-xl text-white p-2 text-xs">
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
