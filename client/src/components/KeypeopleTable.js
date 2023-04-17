import React from "react";

function KeypeopleTable() {
  const tableItems = [
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liam James",

      contact: "7003960597",
      specialization: "Microwave, analog electronics",
      position: "HOD, Professor",
      Room: "202",
      email: "xydddddddz@hit.com",
    },
  ];

  return (
    <div className="  max-w-md sm:max-w-screen-xl mx-auto px-4 md:px-8  mt-10  ">
      <div className="max-w-lg">
        <p className="text-2xl font-bold text-gray-900 ">Key People</p>
      </div>
      <div className="mt-2 shadow-sm border rounded-lg overflow-scroll h-22 ">
        <table className=" table-fixed  ">
          <thead className="bg-gray-50 text-dark font-semibold border-b">
            <tr className="text-left">
              <th className="w-1/3 py-3 px-6 ">Name</th>
              <th className=" w-1/3  py-3 px-6">Designation</th>
              <th className="py-3 px-6 w-1/3 ">Specialization</th>
              <th className="py-3 px-6 w-1/3 ">Contact</th>
              <th className="py-3 px-6 w-1/3 ">Room</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y text-sm">
            {tableItems.map((item, idx) => (
              <tr key={idx}>
                <td className="py-5">
                  <div className="flex items-center justify-center gap-x-3  pl-10 pr-10 lg:pr-0  ">
                    <img
                      src={item.avatar}
                      className="w-12 h-12 rounded-full "
                    />
                    <div>
                      <div className="block text-black text-sm font-semibold">
                        {item.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 text-silver font-semibold">
                  {item.position}
                </td>
                <td className="py-4 px-6 text-silver font-semibold">
                  {item.specialization}
                </td>
                <td className="py-4 px-6 text-silver font-semibold">
                  {item.contact} <p>{item.email}</p>
                </td>
                <td className="py-4 px-6 text-silver font-semibold">
                  {item.Room}
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
