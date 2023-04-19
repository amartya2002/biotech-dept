import React from "react";
import { useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

function FacultyTable() {
  const [isDarkMode, setIsDark] = useState(true);

  const handleClick = () => {
    setIsDark(!isDarkMode);
  };
  const tableItems = [
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liamdddsssssssss Jamedddds laosjdddjcjdn d",
      contact: "7003960597",
      position: "HOD, Professor",
      specialization:
        "Microwave, antenna, analog electronics, digital electronics",
      Room: "202",
      email: "xydddddddz@hit.com",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Liam James",
      contact: "7003960597",
      position: "HOD, Professorffvfdcnjdnv iejdekmdk",
      specialization:
        "Microwave, antenna, analog electronics, digital electronics",
      Room: "202",
      email: "xydddddddz@hit.com",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Liam James",
      contact: "7003960597",
      position: "HOD, Professor",
      specialization:
        "Microwave, antenna, analog electronics, digital electronics",
      Room: "202",
      email: "xydddddddz@hit.com",
    },
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Liam James",
      contact: "7003960597",
      position: "HOD, Professor",
      specialization:
        "Microwave, antenna, analog electronics, digital electronics",
      Room: "202",
      email: "xydddddddz@hit.com",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liam James",
      contact: "7003960597",
      position: "HOD, Professor",
      specialization:
        "Microwave, antenna, analog electronics, digital electronics",
      Room: "202",
      email: "xydddddddz@hit.com",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liam James",
      contact: "7003960597",
      position: "HOD, Professor",
      specialization:
        "Microwave, antenna, analog electronics, digital electronics",
      Room: "202",
      email: "xydddddddz@hit.com",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liam James",
      contact: "7003960597",
      position: "HOD, Professor",
      specialization:
        "Microwave, antenna, analog electronics, digital electronics",
      Room: "202",
      email: "xydddddddz@hit.com",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liam James",
      contact: "7003960597",
      position: "HOD, Professor",
      specialization:
        "Microwave, antenna, analog electronics, digital electronics",
      Room: "202",
      email: "xydddddddz@hit.com",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liam James",
      contact: "7003960597",
      position: "HOD, Professor",
      specialization:
        "Microwave, antenna, analog electronics, digital electronics",
      Room: "202",
      email: "xydddddddz@hit.com",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liam James",
      contact: "7003960597",
      position: "HOD, Professor",
      specialization:
        "Microwave, antenna, analog electronics, digital electronics",
      Room: "202",
      email: "xydddddddz@hit.com",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liam James",
      contact: "7003960597",
      position: "HOD, Professor",
      specialization:
        "Microwave, antenna, analog electronics, digital electronics",
      Room: "202",
      email: "xydddddddz@hit.com",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liam James",
      contact: "7003960597",
      position: "HOD, Professor",
      specialization:
        "Microwave, antenna, analog electronics, digital electronics",
      Room: "202",
      email: "xydddddddz@hit.com",
    },
  ];

  return (
    <div className="  max-w-md sm:max-w-screen-xl mx-auto px-4 md:px-8  ">
      <div className="max-w-lg flex ">
        <p
          className={`text-2xl font-bold text-gray-900 mr-4 hover:text-blue-500  duration-200 active:scale-105 `}
        >
          Faculty{" "}
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
              <th className=" w-1/3  py-3 px-6">Designation</th>
              <th className="py-3 px-6 w-1/3 ">Specialization</th>
              <th className="py-3 px-6 w-1/3 ">Contact</th>
              <th className="py-3 px-6 w-1/3 ">Room</th>
            </tr>
          </thead>
          <tbody
            className={` divide-y  text-sm ${
              isDarkMode
                ? "bg-gradient-to-r from-grad1 to-grad2 text-veryLight font-semibold divide-slate-700"
                : "bg-white text-silver font-semibold"
            }  `}
          >
            {tableItems.map((item, idx) => (
              <tr key={idx}>
                <td className="py-5">
                  <div className="flex items-center gap-x-3  pl-5 pr-12   ">
                    <img
                      src={item.avatar}
                      alt=""
                      className="w-12 h-12 rounded-full hover:scale-110 duration-100"
                    />
                    <div>
                      <div
                        className={`block  text-sm font-semibold  duration-200 active:scale-105  ${
                          isDarkMode ? "text-white" : "text-black"
                        }  `}
                      >
                        {item.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">{item.position}</td>
                <td className="py-4 px-6 ">
                  {item.specialization}
                  <p>{item.email}</p>
                </td>
                <td className="py-4 px-6 ">{item.contact}</td>
                <td className="py-4 px-6 ">{item.Room}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FacultyTable;
