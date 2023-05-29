import React from "react";
import { useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import Link from "next/link";
import keypeople from "../../database/keypeople.json"

function KeypeopleTable({ avatar, name, contact, specialization, position, Room, email, Vidwan_link }) {
  const [isDarkMode, setIsDark] = useState(true);

  const handleClick = () => {
    setIsDark(!isDarkMode);
  };
  

  return (
    <div className="  max-w-md sm:max-w-screen-xl mx-auto px-4 md:px-8  mt-10   ">
      <div className="max-w-lg flex ">
        <p
          className={`text-2xl font-bold text-gray-900 mr-4 hover:text-blue-500  duration-200 active:scale-105 `}
        >
          Key People{" "}
        </p>
        <button
          onClick={handleClick}
          className="hover:text-blue-500 text-silver duration-200 active:scale-125 hover:scale-110 "
        >
          {isDarkMode ? <BsSun /> : <BsMoon />}
        </button>
      </div>
      {/* ${isDarkMode ? "bg-black  text-white  font-semibold" : "border-b bg-gray-50"
          }  inside thread */}
      <div className="mt-2 shadow-sm border rounded-lg overflow-scroll scrollbar-hide  ">
        <table className=" table-fixed  ">
          <thead
            className={`  ${
              isDarkMode
                ? "bg-black  text-white  font-semibold"
                : "border-b bg-gray-100 text-black font-semibold "
            }   `}
          >
            <tr className="text-left">
              <th className="w-1/3 py-3 px-6    duration-200 active:scale-105   ">
                Name
              </th>
              <th className=" w-1/3  py-3 px-6   duration-200 active:scale-105 ">
                Designation
              </th>
              <th className="py-3 px-6 w-1/3   duration-200 active:scale-105 ">
                Specialization
              </th>
              <th className="py-3 px-6 w-1/3   duration-200 active:scale-105 ">
                Contact
              </th>
              <th className="py-3 px-6 w-1/3   duration-200 active:scale-105 ">
                Room
              </th>
              <th className="py-3 px-6 w-1/3   duration-200 active:scale-105 ">
                Vidwan ID
              </th>
            </tr>
          </thead>
          {/* from tbody ${isDarkMode ? "bg-gradient-to-r from-grad1 to-grad2 text-veryLight font-semibold" : ""
          } */}
          <tbody
            className={` divide-y text-sm ${
              isDarkMode
                ? "divide-slate-700 bg-gradient-to-r from-grad1 to-grad2 text-veryLight font-semibold"
                : "bg-white text-silver font-semibold"
            }  `}
          >
            {keypeople.map((item, idx) => (
              <tr key={idx}>
                <td className="py-5">
                  <div className="flex items-center gap-x-3 pl-5 pr-12    ">
                  {/* pl-10 pr-10 lg:pl-5 md:pl-5 lg:pr-4 */}
                    <img
                      src={item.avatar}
                      className="w-12 h-12 rounded-full hover:scale-110 duration-100 "
                    />
                    <div>
                      <div
                        className={`block  text-sm font-semibold  duration-200 active:scale-105  ${
                          isDarkMode ? "text-white" : "text-black"
                        }  `}
                      >
                        {/* item name ${isDarkMode ? "text-white" : "text-black" */}

                        {item.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6  duration-200 active:scale-105 ">
                  {item.position}
                </td>
                <td className="py-4 px-6 duration-200 active:scale-105 ">
                  {item.specialization}
                </td>
                <td className="py-4 px-6 duration-200 active:scale-105 ">
                  {item.contact} <p>{item.email}</p>
                </td>
                <td className="py-4 px-6 duration-200 active:scale-105 ">
                  {item.Room}
                </td>
                <td className="py-4 px-6 duration-200 active:scale-105 text-blue-600  ">
                  <a target="_blank" className="hover:text-blue-500" href={item.Vidwan_link}>Link</a>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default KeypeopleTable;
