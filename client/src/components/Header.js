import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useState, useEffect, useRef } from "react";

function Navbar() {
  const [openModal, setOpenModal] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      {openSidebar && <MobileSidebar closeSidebar={setOpenSidebar} />}
      <section className="mb-10 ">
        <nav
          className="bg-white-200 fixed top-0 w-full z-21 bg-white border-b bg-opacity-75 backdrop-filter backdrop-blur-lg "
          aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
            <header className="flex justify-between items-center h-16 ">
              <div className="flex space-x-3 ">
                <button
                  className="flex-shrink-0 hover:text-blue-500 -ml-2   active:scale-110 duration-200   "
                  onClick={() => {
                    setOpenSidebar(!openSidebar);
                  }}
                >
                  <HiArrowRightOnRectangle className="h-6 w-6 lg:hidden " />
                </button>

                <div className="flex-shrink-0  ">
                  <Link href="/">
                    
                    <p className="font-medium text-xl ">LOGO</p>
                  </Link>
                </div>
              </div>

              <nav
                className=" hidden md:block md:ml-16  text-center lg:ml-32"
                aria-label="Main menu"
              >
                <ul className="flex space-x-2  lg:space-x-4">
                  <li>
                    <Link
                      href="home"
                      className="text-silver px-3 py-2 rounded-full text-sm font-semibold duration-200 hover:scale-110 active:scale-125 hover:text-blue-500 "
                    >  
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="about-department"
                      className="text-silver    px-3 py-2 rounded-full text-sm font-semibold duration-200 hover:scale-110 active:scale-125 hover:text-blue-500 "
                    >
                      Our Department
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="about-institute"
                      className="text-silver    px-3 py-2 rounded-full text-sm font-semibold duration-200 hover:scale-110 active:scale-125 hover:text-blue-500"
                    >
                      Institute Info
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="contact"
                      className="text-silver    px-3 py-2 rounded-full text-sm font-semibold duration-200 hover:scale-110 active:scale-125 hover:text-blue-500"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="hidden md:flex sm:items-center">
                <div className="ml-3 relative">
                  <button className="text-white  px-4 py-2 rounded-full text-sm font-medium bg-black hover:scale-105 active:scale-110 duration-200  ">
                 
                    <Link href="/sign-in"> Faculty Login</Link>
                  </button>
                </div>
              </div>
              <div className="md:hidden flex items-center">
                <button
                  className="text-gray-700 hover:bg-slate-100 inline-flex items-center justify-center p-2 rounded-xl transition-all ease-in-out fade-in-enter fade-in-enter-active active:scale-110 duration-200 "
                  aria-label="Open main menu"
                  onClick={() => {
                    setOpenModal(!openModal);
                  }}
                >
                  <FaBars className="h-5 w-6 " />
                </button>
              </div>
            </header>
          </div>
        </nav>
        {/* {openModal && <Modal />} header v1  */}
        {openModal && (
          <Modal closeModal={setOpenModal} closeSidebar={setOpenSidebar} />
        )}
      </section>
    </>
  );
}
function MobileSidebar({ closeSidebar }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        closeSidebar(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeSidebar]);
  return (
    <div className="fixed inset-0 z-50 overflow-hidden ">
      <div className="absolute inset-0   backdrop-filter backdrop-blur-lg bg-opacity-30 "></div>
      <aside
        ref={overlayRef}
        className=" left-0 top-0  fixed  flex-col w-3/5 h-screen px-5 py-8 overflow-y-auto bg-white   animate-slideInLeft border-r border-grey-200 shadow-lg"
      >
        <Link href="/">
        <p className="text-dark text-center font-bold tracking-wide active:scale-110 duration-200 ">
          Department of{" "}
          <span className="text-gradient-blue">Biotechnology</span>
        </p>
        </Link>
        <hr className="mt-2" />

        <div className="flex flex-col mt-4">
          <nav className="flex-1 -mx-3 space-y-4 tracking-wide leading-tight ">
            <Link
              className=" font-bold flex items-center px-3 py-2 text-silver  rounded-full hover:bg-gray-200 hover:text-black hover:font-bold active:scale-105 duration-200"
              href="/faculty"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                ></path>
              </svg>
              <span className="mx-2 text-sm font-semibold  leading-tight ">
                Faculty
              </span>
            </Link>

            <Link
              className="flex items-center px-3 py-2 text-silver  rounded-full  hover:bg-gray-200 hover:text-black hover:font-bold active:scale-105 duration-200  "
              href="/assistants"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                ></path>
              </svg>
              <span className="mx-2 text-sm font-semibold  leading-tight">
                Assistants
              </span>
            </Link>

            <Link
              className="flex items-center px-3 py-2 text-silver  rounded-full  hover:bg-gray-200 hover:text-black hover:font-bold active:scale-105 duration-200  "
              href="/laboratories"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                />
              </svg>

              <span className="mx-2 text-sm font-semibold  leading-tight ">
                Laboratories
              </span>
            </Link>

            <Link
              className="flex items-center px-3 py-2 text-silver   rounded-full  hover:bg-gray-200 hover:text-black hover:font-bold active:scale-105 duration-200  "
              href="/library"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                />
              </svg>

              <span className="mx-2 text-sm font-semibold  leading-tight">
                Library
              </span>
            </Link>

            <Link
              className="flex items-center px-3 py-2 text-silver   rounded-full   hover:bg-gray-200 hover:text-black hover:font-bold active:scale-105 duration-200 "
              href="research-publications"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                />
              </svg>

              <span className="mx-2 text-sm font-semibold  leading-tight">
                Research Publications
              </span>
            </Link>

            <Link
              className="flex items-center px-3 py-2 text-silver   rounded-full   hover:bg-gray-200 hover:text-black hover:font-bold  active:scale-105 duration-200 "
              href="grants-research-publications"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-7 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                />
              </svg>
              <span className="mx-2 text-sm font-semibold  leading-tight">
                Grants for Research & Publications
              </span>
            </Link>

            <Link
              className="flex items-center px-3 py-2 text-silver   rounded-full   hover:bg-gray-200 hover:text-black hover:font-bold active:scale-105 duration-200  "
              href="placement-records"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                />
              </svg>

              <span className="mx-2 text-sm font-semibold  leading-tight">
                Placement Records
              </span>
            </Link>

            <Link
              className="flex items-center px-3 py-2 text-silver   rounded-full   hover:bg-gray-200 hover:text-black hover:font-bold active:scale-105 duration-200  "
              href="departmental-activities"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>

              <span className="mx-2 text-sm font-semibold  leading-tight">
                Departmental Activities
              </span>
            </Link>

            <Link
              className="flex items-center px-3 py-2 text-silver   rounded-full   hover:bg-gray-200 hover:text-black hover:font-bold active:scale-105 duration-200  "
              href="syllabus"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                />
              </svg>

              <span className="mx-2 text-sm font-semibold">
                UG & PG Syllabus
              </span>
            </Link>
          </nav>
        </div>

        <button
          onClick={() => closeSidebar(false)}
          className="  mt-5 text-white  px-5 py-2 rounded-lg  bg-black active:scale-105 duration-200"
        >
          Close
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg> */}
        </button>
      </aside>
    </div>
  );
}
function Modal({ closeModal, closeSidebar }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        closeModal(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);
  return (
    <div className="absolute inset-0  backdrop-filter backdrop-blur-lg bg-opacity-30 " >
    <div
      className="fixed top-2.5 left-0 w-full h-96 flex animate-modal     "
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-heading"
      ref={overlayRef}
      
    >
      <div className="bg-white rounded-lg shadow-md p-2 w-full mx-4 ">
        <div className="flex justify-between items-center mb-4 ">
          <div className="flex space-x-3 ">
            <button
              className="flex-shrink-0 hover:text-blue-500 -ml-2 transition-all   "
              onClick={() => {
                closeModal(false);
                closeSidebar(true);
              }}
            >
              <HiArrowRightOnRectangle className="h-6 w-6 lg:hidden " />
            </button>

            <div className="flex-shrink-0  ">
              <Link href="/">
                
                <p className="font-medium text-xl ">LOGO</p>
              </Link>
            </div>
          </div>
          <button
            className=" mr-2  text-gray-600  hover:text-gray-800  "
            onClick={() => closeModal(false)}
          >
            <span className="sr-only">Close modal</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mb-4">
          <ul className="font-semibold text-slate-800 divide-y divide-dashed">
            <li className="p-2 hover:bg-slate-100 rounded-xl">
              <Link href="/" className="text-slate-800 hover:text-slate-900 ">
                Home
              </Link>
              {/* <p className="font-normal text-silver">Go to our homepage</p> */}
            </li>
            <li className="p-2 hover:bg-slate-100 rounded-xl">
              <Link href="about-department" className="text-slate-800 hover:text-slate-900">
                Our Department
              </Link>
              <p className="font-normal text-silver">
                Discover the exciting world of biotechnology
              </p>
            </li>
            <li className="p-2 hover:bg-slate-100 rounded-xl">
              <Link href="about-institute" className="text-slate-800 hover:text-slate-900">
                Our Institute
              </Link>
              <p className="font-normal text-silver">Discover who we are</p>
            </li>
            <li className="p-2 hover:bg-slate-100 rounded-xl">
              <Link href="contact" className="text-slate-800 hover:text-slate-900">
                Contact
              </Link>
              <p className="font-normal text-silver">Get in touch with us.</p>
            </li>
          </ul>
        </div>

        <div className=" flex flex-col ">
          <button className="text-white px-4 py-2 rounded-full text-sm font-medium bg-black hover:scale-105 active:scale-110 duration-200">
            Faculty Login
          </button>
        </div>
        <div className="flex justify-center mt-36">
        {/* <button
          onClick={() => closeModal(false)}
          className="  text-lightSilver "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            className="w-14 h-14"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button> */}
        </div>
      </div>
    </div>
    </div>
  );
}
export default Navbar;
