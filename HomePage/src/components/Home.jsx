import React from 'react'
import data from '../data.json'
import Card from './card'
import Banner from './Banner'
import examNames from '../examlist.json'
import ExamList from './ExamList'

const Home = () => {
  return (
    <>
      <div className="flex justify-center w-full bg-gray-100">
        <div className="w-3/4 my-6">
          <div className=''>
            <Banner />
          </div>
          <div className="py-2 flex flex-col gap-2">
            <div className="flex justify-between text-lg font-bold">
              <p>Recommended exams</p>
              <a href="" className="text-blue-500">
                See All
              </a>
            </div>
            <div className="flex gap-4 overflow-hidden">
              {data.map(
                (item, index) =>
                  item.section === "recommended" && (
                    <div className="">
                      <Card
                        key={index}
                        logo={item.logo}
                        title={item.title}
                        agency={item.agency}
                        numberOfPeople={item.numberOfPeople}
                        price={item.price}
                        tags={item.tags}
                      />
                    </div>
                  )
              )}
            </div>
          </div>
          <div className="py-2 flex flex-col gap-4">
            <div className="flex justify-between text-lg font-bold">
              <p>Recent exams</p>
              <a href="" className="text-blue-500">
                See All
              </a>
            </div>
            <div className="flex gap-4 overflow-hidden">
              {examNames.map((name, index) => (
                <div
                  key={index}
                  className="text-[1rem] border-blue-400 border-2 rounded-xl px-4 py-1 text-blue-400 cursor-pointer"
                >
                  <ExamList name={name} />
                </div>
              ))}
            </div>
            <div className="flex gap-4 overflow-hidden">
              {data.map(
                (item, index) =>
                  item.section === "recent" && (
                    <div className="">
                      <Card
                        key={index}
                        logo={item.logo}
                        title={item.title}
                        agency={item.agency}
                        numberOfPeople={item.numberOfPeople}
                        price={item.price}
                        tags={item.tags}
                      />
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home