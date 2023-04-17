import Navbar from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import HomeContent from "@/components/HomeContent";

import React from "react";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="flex">
        <Sidebar />
        <HomeContent />
      </div>
    </div>
  );
}
