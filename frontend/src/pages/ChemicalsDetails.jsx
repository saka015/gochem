import React, { useState, useEffect } from "react";
import { MdOutlinePersonSearch } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import data from "../assets/data.json";

const ChemicalsDetails = () => {
  const [servicesData, setServicesData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(servicesData);
  }, [servicesData]);

  useEffect(() => {
    setServicesData(data);
  }, []);

  const handleSearch = (searchText) => {
    const filtered = servicesData.filter((service) => {
      const name = service.instituion_name.toLowerCase();
      const city = service.city.toLowerCase();
      const chemical_1 = service.chemical_1.toLowerCase();
      const chemical_2 = service.chemical_2.toLowerCase();
      const chemical_3 = service.chemical_3.toLowerCase();
      const search = searchText.toLowerCase();
      return (
        name.includes(search) ||
        city.includes(search) ||
        chemical_1.includes(search) ||
        chemical_2.includes(search) ||
        chemical_3.includes(search)
      );
    });
    setFilteredData(filtered);
  };

  const handleInputChange = (e) => {
    const text = e.target.value;
    setSearchInput(text);
    handleSearch(text);
  };

  return (
    <div className="our-services bg-green-200">
      <div className="py-2 px-3">
        <h1 className="bg-green-600 text-white text-xl w-1/6 text-center py-3">
          Our Services
        </h1>
      </div>

      <div className="search flex ml-[170px] p-1 mt-6 w-1/3 bg-white">
        <input
          className="search-box focus:outline-none w-[400px] h-10 text-slate-600 p-2"
          type="text"
          onChange={handleInputChange}
          value={searchInput}
          placeholder="Search for Institution, Chemicals..."
        />
        <MdOutlinePersonSearch className="text-4xl ml- mr-1 text-green-600 cursor-pointer" />
      </div>

      <div className="services-list ml-36">
        <ul>
          {filteredData.map((service, index) => (
            <li className="nohover py-4" key={index}>
              <div className="service-detail flex py-4 bg-green-100 pb-4 justify-between">
                <div className="left-service-detail flex -ml-48">
                  <GrUserWorker className="text-6xl ml-60 mt-10" />
                  <div className="ml-8">
                    <h1 className="my-2 mx-2">{service.instituion_name}</h1>
                    <h2 className="my-2 mx-2">{service.city}</h2>
                    <ul className="flex">
                      <li className="p-2 bg-green-300 text-white">
                        {service.chemical_1}
                      </li>
                      <li className="p-2 bg-green-300 ml-3 text-white">
                        {service.chemical_2}
                      </li>
                      <li className="p-2 bg-green-300 ml-3 text-white">
                        {service.chemical_3}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="right-service-detail flex float-right mr-48">
                  <div className="my-1">
                    <h2 className="my-1">
                      {service.rating}{" "}
                      <span className="text-[13px] ml-1 mt-[2px] absolute">
                        ⭐
                      </span>
                    </h2>
                  </div>
                  <button className="contact-now bg-green-400 hover:text-green-400 ml-24 absolute my-3">
                    Contact Now
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChemicalsDetails;
