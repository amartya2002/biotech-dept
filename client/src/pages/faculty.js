import React from 'react'
import Navbar from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import FacultyTable from '@/components/FacultyTable'

function faculty() {
  return (
    <div>
        <Navbar/>
        <div className='flex '>
        <Sidebar/>

        <section className="py-14    rounded-xl w-full mx-auto lg:mr-32 ">
        
        <FacultyTable/>

      </section>






        </div>
        </div>
  )
}

export default faculty