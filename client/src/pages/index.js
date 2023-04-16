import Image from "next/image";

import Navbar from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import HomeContent from '@/components/HomeContent'
import SidebarHack from "@/components/SidebarHack";


import React from "react";

export default function Home() {
  return (
    <div>
    <Navbar/>
    
    <div className="flex">
      {/* <SidebarHack/> */}
      <Sidebar/>
      <HomeContent/>

    </div>
   

</div>
  )
}
