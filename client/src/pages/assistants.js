import React from "react";
import Navbar from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import AssistantsTable from "@/components/AssistantsTable";

function assistants() {
  return (
    <div>
      <Navbar />
      <div className="flex ">
        <Sidebar />

        <section className="py-14    rounded-xl w-full mx-auto lg:mr-32 ">
          <AssistantsTable />
        </section>
      </div>
    </div>
  );
}

export default assistants;
