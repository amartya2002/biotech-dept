import React from "react";
import { useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import Link from "next/link";

function KeypeopleTable() {
  const [isDarkMode, setIsDark] = useState(true);

  const handleClick = () => {
    setIsDark(!isDarkMode);
  };
  const tableItems = [
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Lorem Ipsum",
      contact: "7003960597",
      specialization: "Microwave, analog electronics, biotechnology ",
      position: "HOD, Professor",
      Room: "202",
      email: "paglarocks@hit.com",
      Vidwan_link: "https://www.google.com/",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Lorem Ipsum",
      contact: "7003960597",
      specialization: "Digital electronics, analog electronics",
      position: "Dean, Professor",
      Room: "202",
      email: "xydddddddz@hit.com",
      Vidwan_link: "https://www.google.com/",
    },
  ];

  return (
    <div className="  max-w-md sm:max-w-screen-xl mx-auto px-4 md:px-8  mt-10  ">
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
      <div className="mt-2 shadow-sm border rounded-lg overflow-scroll h-22 ">
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
            {tableItems.map((item, idx) => (
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
