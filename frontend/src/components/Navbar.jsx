import React from 'react'

import { FaSearch } from "react-icons/fa";
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
      <>
        <div className="flex justify-between m-4 ">
          <div className="left-nav float-left">
            <img
              className="ml-12"
              src={logo}
              height="20px"
              width="60px"
              alt=""
            />
          </div>
          <div className="right-nav flex float-right mr-36 mt-6">
            <ul className="flex gap-x-4 uppercase">
              <li className="hover:text-green-300 text-green-300">HOME</li>
              <li className="hover:text-green-300">ABOUT</li>
              <li className="hover:text-green-300">CAREER</li>
              <li className="hover:text-green-300">CONTACT</li>
              <li className="hover:text-green-300">Login/Signup</li>
              <li className="hover:text-green-300">Dashboard</li>
            </ul>
            <FaSearch className="mt-[3px] ml-16 text-xl" />
          </div>
        </div>
        <hr />
      </>
    );
}

export default Navbar