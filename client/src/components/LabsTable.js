import React from "react";
import { useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import Link from "next/link";

function LabTable() {
  const [isDarkMode, setIsDark] = useState(true);

  const handleClick = () => {
    setIsDark(!isDarkMode);
  };
  const tableItems = [
    {
      name: "Advanced Optimization Lab BT-101",
      Room: "202",
      link: "lab1",

      incharge_name: "Dr. Lorem Ipsum1",
      incharge_contact: " 7003690595",
      incharge_email: "xyz@hit.com",

      assistant_name: "Mr. Lorem Ipsum",
      assistant_contact: " 70039609",
      assistant_email: "xydz@hit.com",
      other_details: "",
    },

    {
      name: "Biotechnology Laboratory BT-102",
      Room: "203",
      link: "lab2",

      incharge_name: "Dr. Lorem Ipsum",
      incharge_contact: " 7003690595",
      incharge_email: "xyz@hit.com",

      assistant_name: "Mr. Lorem Ipsum",
      assistant_contact: " 70039609",
      assistant_email: "xygfbdz@hit.com",
      other_details: "",
    },
    {
      name: "Genetic Engineering Laboratory BT-103",
      Room: "204",
      link: "lab3",

      incharge_name: "Dr. Lorem Ipsum",
      incharge_contact: " 7003690595",
      incharge_email: "xgtyz@hit.com",

      assistant_name: "Mr. Lorem Ipsum",
      assistant_contact: " 70039609",
      assistant_email: "xy5tdz@hit.com",
      other_details: "",
    },
    {
      name: "Programming Lab BT-104",
      Room: "205",
      link: "lab3",

      incharge_name: "Dr. Lorem Ipsum",
      incharge_contact: " 7003690595",
      incharge_email: "xy43z@hit.com",

      assistant_name: "Mr. Lorem Ipsum",
      assistant_contact: " 70039609",
      assistant_email: "xy5dz@hit.com",
      other_details: "",
    },
  ];

  return (
    <div className="  max-w-md sm:max-w-screen-xl mx-auto px-4 md:px-8  ">
      <div className="max-w-lg flex ">
        <p
          className={`text-2xl font-bold text-gray-900 mr-4 hover:text-blue-500  duration-200 active:scale-105 `}
        >
          Laboratories{" "}
        </p>
        <button
          onClick={handleClick}
          className="hover:text-blue-500 text-silver duration-200 active:scale-125 hover:scale-110 "
        >
          {isDarkMode ? <BsSun /> : <BsMoon />}
        </button>
      </div>
      <div className="mt-5 shadow-sm border rounded-lg overflow-scroll   h-screen md:h-96  ">
        <table className=" table-fixed  ">
          <thead
            className={`  ${
              isDarkMode
                ? "bg-black  text-white  font-semibold"
                : "border-b bg-gray-100 text-black font-semibold "
            }   `}
          >
            <tr className="text-left">
              <th className="w-1/3 py-3 px-6 ">Name</th>
              <th className=" w-1/3  py-3 px-6">Room</th>
              <th className="py-3 px-6 w-1/3 ">Incharge</th>
              <th className="py-3 px-6 w-1/3 ">Assistant</th>
              <th className="py-3 px-6 w-1/3 ">Other Details</th>
            </tr>
          </thead>
          <tbody
            className={` divide-y text-sm ${
              isDarkMode
                ? "bg-gradient-to-r from-grad1 to-grad2 text-veryLight font-semibold divide-slate-700"
                : "bg-white text-silver font-semibold"
            }  `}
          >
            {tableItems.map((item, idx) => (
              <tr key={idx}>
                <td className="py-4 px-6 ">
                  {" "}
                  <Link
                    className="hover:text-blue-400 duration-100 "
                    href={item.link} 
                  >
                    {item.name}
                  </Link>{" "}
                </td>
                <td className="py-4 px-6">{item.Room}</td>
                <td className="py-4 px-6 ">
                  {item.incharge_name}
                  <p>{item.incharge_contact}</p>
                  <p>{item.incharge_email}</p>
                </td>
                <td className="py-4 px-6 ">
                  {item.assistant_name}
                  <p>{item.assistant_contact}</p>
                  <p>{item.assistant_email}</p>
                </td>
                <td className="py-4 px-6 ">{item.other_details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default LabTable;
