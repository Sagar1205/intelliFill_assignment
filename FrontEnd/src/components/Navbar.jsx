import React from "react";
import { SearchIcon, BellIcon, Logo } from "./Icons";

const Navbar = () => {
  return (
    <div className="flex justify-center w-screen py-6 border-b-2 border-gray-300">
      <div className="w-3/4 text-center">
        <nav>
          <div
            className="items-center justify-between w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <div>
              <Logo />
            </div>
            <div className="md:flex gap-8">
              <a
                href="#"
                className="block py-2 px-3 rounded md:bg-transparent text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>

              <a
                href="#"
                className="block py-2 px-3 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Result
              </a>

              <a
                href="#"
                className="block py-2 px-3 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                FAQ
              </a>

              <a
                href="#"
                className="block py-2 px-3 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About Us
              </a>

              <a
                href="#"
                className="block py-2 px-3 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact Us
              </a>
            </div>

            <div className="flex  border-2 border-blue-200 rounded-xl items-center gap-2 px-2">
              <div className="">
                <SearchIcon />
              </div>
              <div className="border-none">
                <input
                  type="text"
                  placeholder="Search exams here"
                  className="text-sm"
                />
              </div>
            </div>

            <div className="flex gap-8 items-center">
              <BellIcon />

              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-10 h-10 rounded-full object-stretch"
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
