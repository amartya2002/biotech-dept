import React from 'react'
import Navbar from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import HomeContent from '@/components/HomeContent'


function home() {
  return (
    <div>
        <Navbar/>
        <div className='flex '>
        <Sidebar/>
            <HomeContent/>
        
        </div>
       

    </div>
  )
}

export default home