import HomeKeypeopleTable from "./Home-keypeople-table";
import Table from "./Table";
import ImageCarousal from "./ImageCarousal";
export default () => {
  return (
    <>
      <section className="py-14    rounded-xl w-full mx-auto md:ml-10 md:mr-36 ">
        <div className=" ">
          <p className="text-3xl text-center mb-1 text-silver">
            Department of <span className="text-dark">Biotechnology</span>{" "}
          </p>
          <p className=" text-center text-silver mb-1  ">(NBA ACCREDITED)</p>
          <p className="text-lg text-center text-silver mb-1  ">
            Under the School of Electronics, Computer and Informatics
          </p>
          <p className="text-3xl  text-center mb-1 text-silver ">
            Haldia Institute of Technology
          </p>
        </div>
        <HomeKeypeopleTable/>
        <ImageCarousal/>
        {/* <Table/> */}

      </section>
    </>
  );
};

// import React from 'react'

// function Home() {
//   return (
//     <div className=' flex  rounded border border-black max-w-lg '>
//         <div className='mt-12 max-w-sm  '>
//         <p className='text-4xl text-center mb-1 text-silver' >Department of <span className='text-dark'>Biotechnology</span> </p>
//         <p className=' text-center text-silver mb-1  '>(NBA ACCREDITED)</p>
//         <p className='text-xl text-center text-silver mb-1  '>Under the School of Electronics, Computer and Informatics</p>
//         <p className='text-4xl  text-center mb-1 text-silver '>Haldia Institute of Technology</p>

//         </div>

//     </div>
//   )
// }

// export default Home
