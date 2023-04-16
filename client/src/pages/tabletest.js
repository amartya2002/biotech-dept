import React from 'react'

export default () => {

    const tableItems = [
        {
            avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Liam James",
           
            contact: "700396059ggggghhhhhhhhhhhhhhhhhhhhhhhhh",
            position: "HOD, Professorgggggggjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjgrmrkmf,mrf,m,mr.emf.,mf.bmmt;kmtgjj",
            Room: "202",
            email:"xyddddddddddz@hit.com",
        },
       
    ]

    return (
        <>
        <div className="  max-w-md sm:max-w-screen-xl mx-auto px-4 md:px-8  mt-10  ">
        <div className="max-w-lg">
        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
          Key People
        </h3>
      </div>
      <div className="mt-2 shadow-sm border rounded-lg overflow-scroll h-22 ">
        <table className="table-fixed border text-sm">
        <thead className="bg-gray-50 text-gray-600 font-medium border-b">
    <tr className=' text-left'>
      <th className="w-1/3 py-3 px-6">Name</th>
      <th className="w-1/3 py-3 px-6">Age</th>
      <th className="w-1/3 py-3 px-6">Location</th>
    </tr>
  </thead>
  <tbody className="text-gray-600 divide-y">
    <tr>
      <td className="px-6 py-4 ">John Smith</td>
      <td className="px-6 py-4 ">35ffffffffffffffffjjjjjjjjjjjjjj sjsjjjjjjj hn Smithfffffffffffffffffffffff  fffffffffffffffffffffff ssssssssssssssssssssss ssssssssssssssssssssssssssjj</td>
      <td className="px-6 py-4">San Francisco, CA</td>
    </tr>
    <tr>
      <td className="px-6 py-4">Jane Doe</td>
      <td className="px-6 py-4">27</td>
      <td className="px-6 py-4">New York, NY</td>
    </tr>
    <tr>
      <td className="px-6 py-4">Bob Johnson</td>
      <td className="px-6 py-4">42</td>
      <td className="px-6 py-4">Chicago, IL</td>
    </tr>
  </tbody>
</table>
</div>
</div>
</>
    )
}