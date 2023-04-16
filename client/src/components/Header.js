import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

import { useState } from "react";
import Sidebar from "./Sidebar";

function Navbar() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
    <section className="mb-10 ">
      
      <nav className="bg-white-200 fixed top-0 w-full z-21 bg-white border-b border-black " aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <header className="flex justify-between items-center h-16 ">
            <div className="flex space-x-3 ">
              <button className="flex-shrink-0 hover:text-blue-500 -ml-2  ">
                <Link href="#">
                <HiArrowRightOnRectangle className="h-6 w-6"/>
                </Link>
              </button>

              <div className="flex-shrink-0  ">
                <Link href="#">
                  {/* <img className="h-8 w-auto" src="../../public/next.svg" alt="Logo" /> */}
                  <p className="font-medium text-xl ">LOGO</p>
                </Link>
              </div>
            </div>

            <nav className=" hidden md:block md:ml-16  text-center lg:ml-32" aria-label="Main menu">
              <ul className="flex space-x-2  lg:space-x-4">
                <li>
                  <Link
                    href="/about-institute"
                    className="text-gray-900 hover:bg-gray-200  px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-department"
                    className="text-gray-900 hover:bg-gray-200  px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Our Department
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-department"
                    className="text-gray-900 hover:bg-gray-200  px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Institute Info
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-department"
                    className="text-gray-900 hover:bg-gray-200  px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="hidden sm:flex sm:items-center">
              <div className="ml-3 relative">
                <button className="text-white  px-4 py-2 rounded-full text-sm font-medium bg-black hover:bg-black ">
                  <Link href="/sign-in"> Faculty Login</Link>
                </button>
              </div>
            </div>
            <div className="sm:hidden flex items-center">
              <button
                className="text-gray-700 hover:bg-slate-100 inline-flex items-center justify-center p-2 rounded-xl transition-all duration-200 ease-in-out fade-in-enter fade-in-enter-active fade-in-exit "
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
      {openModal && <Modal closeModal={setOpenModal} />}
      </section>
    </>
  );
}

function Modal({ closeModal }) {
  return (
    <div
      className="fixed top-2.5 left-0 w-full h-full flex transition-all fade-in-enter fade-in-enter-active   "
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-heading"
    >
      <div className="bg-white rounded-lg shadow-md p-2 w-full mx-4 ">
        <div className="flex justify-between items-center mb-4 ">
          <h2 className="text-xl font-medium" id="modal-heading">
            LOGO
          </h2>
          <button
            className=" mr-2  text-gray-600 hover:text-gray-800  "
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
              <Link href="#" className="text-slate-800 hover:text-slate-900 ">
                Home
              </Link>
              <p className="font-normal text-slate-500">
                Go to our homepage
              </p>
            </li>
            <li className="p-2 hover:bg-slate-100 rounded-xl" >
              <Link href="#" className="text-slate-800 hover:text-slate-900">
                About Us
              </Link>
              <p className="font-normal text-slate-500">
                Wanna know about us?
              </p>
            </li>
            <li className="p-2 hover:bg-slate-100 rounded-xl">
              <Link href="#" className="text-slate-800 hover:text-slate-900">
                Pricing
              </Link>
              <p className="font-normal text-slate-500">
                Pricing is not that complicated, we promise!
              </p>
            </li>
            <li className="p-2 hover:bg-slate-100 rounded-xl">
              <Link href="#" className="text-slate-800 hover:text-slate-900">
                Contact
              </Link>
              <p className="font-normal text-slate-500">
                Wanna ask us out?
              </p>
            </li>
          </ul>
        </div>
        <div className="flex justify-start">
          <button className="px-4 py-2 bg-slate-900 text-white rounded-lg">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;