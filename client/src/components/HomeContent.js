import KeypeopleTable from "./KeypeopleTable";

function HomeContent() {
  return (
    <>
      <section className="py-14    rounded-xl w-full mx-auto lg:mr-32 ">
        <div className="text-center">
          <p className="text-4xl font-bold text-gray-900 mb-2">
            Department of{" "}
            <span className="text-gradient-blue">Biotechnology</span>
          </p>
          <p className="text-sm font-bold text-gray-500 mb-3">
            (NBA ACCREDITED)
          </p>
          <p className="text-lg font-medium text-gray-700 mb-4">
            Under the School of Electronics Computer, and Informatics
          </p>
          <p className="text-2xl font-bold text-gray-900">
            Haldia Institute of Technology
          </p>
        </div>

        <KeypeopleTable />
      </section>
    </>
  );
}
export default HomeContent;
