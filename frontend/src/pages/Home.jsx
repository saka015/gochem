import React from "react";
import Footer from "../components/Footer";
import svg from "../assets/svg.svg";

import { GiTransparentTubes, GiTestTubes } from "react-icons/gi";
import { SiMoleculer } from "react-icons/si";
import { SlChemistry } from "react-icons/sl";

const Home = () => {
  return (
    <div className="">
      <div className="main-one mt-28">
        <h1 className="text-5xl font-normal  text-center">
          YOUR GLOBAL PARTNER IN <br />
          <span className="text-green-500 ">ENGINEERED CHEMICALS</span>{" "}
        </h1>
        <div className="mx-auto justify-center flex flex-wrap gap-x-8 mt-6">
          <button className=" btn-main bg-blue-600">OUR SOLUTIONS</button>
          <button className=" btn-main bg-green-500">CONTACT US</button>
        </div>
      </div>
      <div className="main-two mt-28 pt-10 bg-green-100 grid grid-cols-2 gap-y-8 pl-[250px] ">
        <div className="  w-[350px] p-2">
          <GiTransparentTubes className="text-green-500 text-6xl text-center flex mx-auto my-2" />
          <h1 className="text-blue-600 font-semibold tracking-widest text-center my-2">
            EMULSION
          </h1>
          <p className="w-[300px] break-all text-sm text-center font-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            obcaecati. Facere delectus doloremque officia itaque!
          </p>
          <h3 className="font-medium text-[12px] text-center">LEARN MORE</h3>
        </div>
        <div className="  w-[350px] p-2">
          <SiMoleculer className="text-green-500 text-6xl text-center flex mx-auto my-2" />
          <h1 className="text-blue-600 font-semibold tracking-widest text-center my-2">
            OLEAOCHEMICALS
          </h1>
          <p className="w-[300px] break-all text-sm text-center font-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            obcaecati. Facere delectus doloremque officia itaque!
          </p>
          <h3 className="font-medium text-[12px]  text-center">LEARN MORE</h3>
        </div>
        <div className="  w-[350px] p-2">
          <SlChemistry className="text-green-500 text-6xl text-center flex mx-auto my-2" />
          <h1 className="text-blue-600 font-semibold tracking-widest text-center my-2">
            DISPERSIONS
          </h1>
          <p className="w-[300px] break-all text-sm text-center font-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            obcaecati. Facere delectus doloremque officia itaque!
          </p>
          <h3 className="font-medium text-[12px]  text-center">LEARN MORE</h3>
        </div>
        <div className="  w-[350px] p-2">
          <GiTestTubes className="text-green-500 text-6xl text-center flex mx-auto my-2" />
          <h1 className="text-blue-600 font-semibold tracking-widest text-center my-2">
            COMPOUND AND BLENDS
          </h1>
          <p className="w-[300px] break-all text-sm text-center font-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            obcaecati. Facere delectus doloremque officia itaque!
          </p>
          <h3 className="font-medium text-[12px]  text-center">LEARN MORE</h3>
        </div>

        <div className="bg-white w-full">
          <img src={svg} alt="" />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
