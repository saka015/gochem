import React from "react";

import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer bg-green-200 justify-around ">
      <div className=" flex space-around py-12 justify-around">
        <img src={logo} width="100px" height="50px" alt="" />
        <ul>
          <h2 className="text-xl font-semibold text-blue-600">SERVICES</h2>
          <li className="text-[13px]">OPTION</li>
          <li className="text-[13px]">OPTION</li>
          <li className="text-[13px]">OPTION</li>
          <li className="text-[13px]">OPTION</li>
        </ul>
        <ul>
          <h2 className="text-xl font-semibold text-blue-600">PRODUCTS</h2>
          <li className="text-[13px]">OPTION</li>
          <li className="text-[13px]">OPTION</li>
          <li className="text-[13px]">OPTION</li>
          <li className="text-[13px]">OPTION</li>
        </ul>
        <ul>
          <h2 className="text-xl font-semibold text-blue-600">BRANCHES</h2>
          <li className="text-[13px]">OPTION</li>
          <li className="text-[13px]">OPTION</li>
          <li className="text-[13px]">OPTION</li>
          <li className="text-[13px]">OPTION</li>
        </ul>

        <ul>
          <h2 className="text-xl font-semibold text-blue-600">GET IN TOUCH</h2>
          <li>Phone:957-527-2220</li>
          <li>Email:info@carwash.com</li>
          <input
            className="p-2 text-[10px] uppercase mt-2"
            type="text"
            placeholder="Subscribe Us!"
          />
        </ul>
      </div>
      <div className="line w-full bg-green-400 h-[0.01cm]"></div>
      <h3 className="text-center py-3 text-[12px] uppercase">
        GoChem 2023 All Privacy Rights.
      </h3>
    </div>
  );
};

export default Footer;
