import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="w-full mx-auto p border-b ">
      <nav className="flex flex-col md:flex-row bg-black p-5 ">
        <div className="container flex flex-col sm:flex-row mx-auto flex-wrap items-center justify-between">
          <div>
          <a href="#" className="flex px-4 py-2">
            <span className="self-center text-3xl font-semibold whitespace-nowrap">Tarun Ranjan Singh</span>
          </a>
          </div>
          <div>
          <button data-collapse-toggle="mobile-menu" type="button" className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-2" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
            </svg>
            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </button>
          </div>
          <div className=" md:block w-full md:w-auto" id="mobile-menu">
            <ul className="links flex flex-col text-center md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
              <li >
                <Link to="home" spy={true} smooth={true} offset={50} duration={500} className="text-gray-700 text-lg hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 ">Home</Link>
              </li>
              <li>
                <Link to="about" spy={true} smooth={true} offset={50} duration={500} className="text-gray-700 text-lg hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 ">About</Link>
              </li>
              <li>
                <Link to="projects" spy={true} smooth={true} offset={50} duration={500} className="text-gray-700 text-lg hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 ">Projects</Link>
              </li>
              <li>
                <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className="text-gray-700 text-lg hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 ">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
