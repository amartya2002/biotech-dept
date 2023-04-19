import Navbar from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import LabTable from '@/components/LabsTable'



function laboratories() {
  return (
    <div>
    <Navbar />
    <div className="flex ">
      <Sidebar />

      <section className="py-14    rounded-xl w-full mx-auto lg:mr-32 ">
        <LabTable />
      </section>
    </div>
  </div>
  )
}

export default laboratories