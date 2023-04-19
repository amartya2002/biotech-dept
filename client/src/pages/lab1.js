import Navbar from '@/components/Header'
import Sidebar from '@/components/Sidebar'

function lab1() {
  const labDetails = [
    {
      name: "Advanced Optimization Lab",
      details:"Communication system laboratory is employed for the under graduate students of the institute. The under graduate students of the department of Electronics & Communication Engineering utilize the laboratory for their Analog Communication Lab (EC 591) in 5th semester & Digital Communication Lab (EC 691) in 6th semester study of  the course. This laboratory also provide the facilities for the under graduate  students of department of Computer Science & Engineering  and department of Information Technology of the institute for performing laboratory work in Communication engineering & coding theory  Lab(CS 491)  in 4th semester of their study. This laboratory also provide the additional facilities to the interested under graduate and post graduate students of the department for performing their project work in the domain of communication systems.",
      facilities:"dddddd",
      experiments:"dsev"
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
          Advanced Optimization Lab{" "}
        </p>
      </div>
      <div className="mt-5 shadow-sm  rounded-lg overflow-scroll   h-screen md:h-96  ">
        <p className='text-sm font-bold text-gray-500 mb-2'>
        Communication system laboratory is employed for the under graduate students of the institute. The under graduate students of the department of Electronics & Communication Engineering utilize the laboratory for their Analog Communication Lab (EC 591) in 5th semester & Digital Communication Lab (EC 691) in 6th semester study of  the course. This laboratory also provide the facilities 
        </p>
        <p className='text-blue-500 font-bold'>Experiments:</p>
        <div className='text-sm font-bold text-gray-500'>
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


    
  )
}

export default lab1