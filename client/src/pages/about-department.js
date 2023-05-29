import Navbar from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import deptInfo from "../../database/deptInfo.json";

function Department({ title, introduction, CO, learnings, contact }) {
  return (
    <div>
      <Navbar />
      <div className="flex ">
        <Sidebar />

        <section className="py-14 rounded-xl w-full mx-auto lg:mr-32 ">
          <div className="  max-w-md sm:max-w-screen-xl mx-auto px-4 md:px-8  ">
            {deptInfo.map((item, idx) => (
              <div key={idx}>
                <div className="max-w-lg flex ">
                  <p
                    className={`text-2xl font-bold text-gray-900 mr-4 hover:text-blue-500  duration-200 active:scale-105 `}
                  >
                    {item.title}
                  </p>
                  <div> </div>
                </div>
                <div className="mt-5 shadow-sm  rounded-lg   h-screen md:h-96  ">
                  <p className="text-sm font-bold text-gray-500 mb-2">
                    {item.introduction}
                  </p>
                  <p className="text-blue-500 font-bold">Course Outcomes:</p>
                  <div className=" font-bold text-gray-500">
                    {item.courseOutcomes.map((outcome, index) => (
                      <div key={index}>
                        {Object.values(outcome).map((value, i) => (
                          <p className="text-sm" key={i}>{value}</p>
                        ))}
                      </div>
                    ))}

                    <div className="mt-5 shadow-sm  rounded-lg overflow-scroll   h-screen md:h-96 text  ">
                      <p className="text-blue-500 ">Learnings:</p>
                      {item.learnings.map((learning, index) => (
                      <div key={index}>
                        {Object.values(learning).map((value, i) => (
                          <p className="text-sm" key={i}>{value}</p>
                        ))}
                      </div>
                    ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Department;
