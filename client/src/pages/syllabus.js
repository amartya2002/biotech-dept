import Navbar from "@/components/Header";
import Sidebar from "@/components/Sidebar";

function departmentalActivities() {
  const labDetails = [
    {
      name: "Advanced Optimization Lab",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..",
      facilities: "dddddd",
      experiments: "dsev",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex ">
        <Sidebar />

        <section className="py-14    rounded-xl w-full mx-auto lg:mr-32 ">
          <div className="  max-w-md sm:max-w-screen-xl mx-auto px-4 md:px-8  ">
            <div className="max-w-lg flex ">
              <p
                className={`text-2xl font-bold text-gray-900 mr-4 hover:text-blue-500  duration-200 active:scale-105 `}
              >
                UG & PG Syllabus
              </p>
            </div>
            <div className="mt-5 shadow-sm  rounded-lg overflow-scroll   h-screen md:h-96  ">
              <p className="text-sm font-bold text-gray-500 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-blue-500 font-bold">Lorem Ipsum:</p>
              <div className="text-sm font-bold text-gray-500">
                <p>Lorem Ipsum1</p>
                <p>Lorem Ipsum2</p>
                <p>Lorem Ipsum3</p>
                <p>Lorem Ipsum4</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default departmentalActivities;
