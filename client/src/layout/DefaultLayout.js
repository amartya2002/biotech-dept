import React from 'react'
import Navbar from "../components/Header"
import Sidebar from "../components/Sidebar"

function DefaultLayout({children}) {
  return (
    <>
    <Navbar/>
    
    <section className='flex'> 
    {/* <Sidebar/> */}
    <main>{children}</main>
    </section>
    
    
    
    
    </>
  )
}

export default DefaultLayout