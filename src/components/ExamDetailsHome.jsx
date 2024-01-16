import React from "react";
import data from "../data.json";
import MainCardData from "../MainCardData.json";
import MainCard from "./MainCard";
import InterestedCard from "./InterestedCard";
import { NewFb, NewTwitter, NewLinkedIn } from "./Icons";

const ExamDetailsHome = () => {
  return (
    <>
      <div className="flex justify-center w-full bg-gray-100">
        <div className="w-3/4 my-6 flex flex-col gap-2">
          <div className="font-bold">
            <div>
              <p>&#8592; Back</p>
            </div>
          </div>
          <div className="sm:flex gap-8">
            <div className="flex flex-col gap-4">
              <div className="">
                {MainCardData.map((item, index) => (
                  <div className="">
                    <MainCard
                      key={index}
                      logo={item.logo}
                      title={item.title}
                      agency={item.agency}
                      examDate={item.examDate}
                      applicants={item.applicants}
                      days={item.days}
                      endDate={item.endDate}
                    />
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-xl px-4">
                <div className="border-b-2 py-4">
                  <div className="font-bold">Exam Description:</div>
                  <div className="p-2 flex flex-col gap-1">
                    <div className="flex gap-2">
                      <div>&#8226;</div>
                      <div>
                        JEE Main is a standardized test conducted across
                        different states in India.
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div>&#8226;</div>
                      <div>
                        The exam is held at an undergraduate level to offer
                        admissions to some of the best engineering and technical
                        institutions that are Government funded or
                        privately-owned.
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div>&#8226;</div>
                      <div>
                        The exam conducting authority considers the best NTA
                        score in preparing the ranks/merit list.
                      </div>
                    </div>
                  </div>
                  <div className="font-bold">Eligibility:</div>
                  <div className="p-2 flex flex-col gap-1">
                    <div className="flex gap-2">
                      <div>&#8226;</div>
                      <div>Age Limit - No age limit</div>
                    </div>
                    <div className="flex gap-2">
                      <div>&#8226;</div>
                      <div>Qualifying Exam - Class 12/Equivalent Exam</div>
                    </div>
                    <div className="flex gap-2">
                      <div>&#8226;</div>
                      <div>
                        Percentage - At least 75% in class 12/equivalent exam
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div>&#8226;</div>
                      <div>
                        Year of Passing - 2021, 2022 or appearing in 2023
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div>&#8226;</div>
                      <div>
                        Number of attempts - Candidate can appear in JEE Main
                        for 3 consecutive years after passing their class
                        12/equivalent exam
                      </div>
                    </div>
                  </div>
                  <div className="font-bold">Important Details:</div>
                  <div className="p-2 flex flex-col gap-1">
                    <div className="flex gap-2">
                      <div>&#8226;</div>
                      <div>
                        JEE Main 2023 January Session: NTA released the JEE Main
                        2023 session 1 will be conducted between 24th January
                        and 1st February, 2023.
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div>&#8226;</div>
                      <div>
                        JEE Main 2023 April Session: NTA released the JEE Main
                        2023 session I will be conducted between 1st April, 2023
                        and 15th April, 2023.
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between py-4">
                    <div className="flex justify-between gap-2">
                      <NewFb />
                      <NewTwitter />
                      <NewLinkedIn />
                    </div>
                    <div className="text-sm text-blue-500">Report this job</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 bg-white p-4 rounded-xl h-min">
              <div className="font-bold text-lg ">
                Exams you might be interested in
              </div>
              <div>
                <div className="">
                  {data.map(
                    (item, index) =>
                      item.section === "interested" && (
                        <div className="">
                          <InterestedCard
                            key={index}
                            logo={item.logo}
                            title={item.title}
                            agency={item.agency}
                            peoples={item.numberOfPeople}
                            price={item.price}
                          />
                        </div>
                      )
                  )}
                </div>
              </div>
              <div className="flex justify-center py-5">
                <button className="text-blue-500 rounded-3xl border-2 px-2 border-blue-500 bg-white">
                  View all
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExamDetailsHome;
