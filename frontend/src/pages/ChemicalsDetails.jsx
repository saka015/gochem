// import React, { useState, useEffect } from "react";
// import { MdOutlinePersonSearch } from "react-icons/md";
// import { GrUserWorker } from "react-icons/gr";
// import data from "../assets/data.json";

// const ChemicalsDetails = () => {
//   // const [servicesData, setServicesData] = useState([]);
//   // const [searchInput, setSearchInput] = useState("");
//   // const [filteredData, setFilteredData] = useState([]);

//   const [servicesData, setServicesData] = useState(data);
//   const [searchInput, setSearchInput] = useState("");
//   const [filteredData, setFilteredData] = useState([]);

//   // Function to handle adding a new chemical
//   const addChemical = () => {
//     // Create a new chemical object and add it to the state
//     const newChemical = {
//       instituion_name: "New Chemical Institution",
//       city: "New City",
//       chemical_1: "Chemical A",
//       chemical_2: "Chemical B",
//       chemical_3: "Chemical C",
//       rating: 4.5,
//     };

//     setServicesData([...servicesData, newChemical]);
//   };

//   useEffect(() => {
//     setFilteredData(servicesData);
//   }, [servicesData]);

//   useEffect(() => {
//     setServicesData(data);
//   }, []);

//   const handleSearch = (searchText) => {
//     const filtered = servicesData.filter((service) => {
//       const name = service.instituion_name.toLowerCase();
//       const city = service.city.toLowerCase();
//       const chemical_1 = service.chemical_1.toLowerCase();
//       const chemical_2 = service.chemical_2.toLowerCase();
//       const chemical_3 = service.chemical_3.toLowerCase();
//       const search = searchText.toLowerCase();
//       return (
//         name.includes(search) ||
//         city.includes(search) ||
//         chemical_1.includes(search) ||
//         chemical_2.includes(search) ||
//         chemical_3.includes(search)
//       );
//     });
//     setFilteredData(filtered);
//   };

//   const handleInputChange = (e) => {
//     const text = e.target.value;
//     setSearchInput(text);
//     handleSearch(text);
//   };
import React, { useState, useEffect } from "react";
import { MdOutlinePersonSearch } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";

const ChemicalsDetails = () => {
  const [servicesData, setServicesData] = useState([
    {
      "instituion_name": "Stanford",
      "city": "New York",
      "chemical_1": "HCl [2.5l]",
      "chemical_2": "H2SO4 [3.1l]",
      "chemical_3": "CH3COOH [4.8l]",
      "rating": 4.2
    },
    {
      "instituion_name": "Harvard",
      "city": "Boston",
      "chemical_1": "NaOH [5.0l]",
      "chemical_2": "HNO3 [2.8l]",
      "chemical_3": "C6H12O6 [6.3l]",
      "rating": 4.5
    },
    {
      "instituion_name": "MIT",
      "city": "Cambridge",
      "chemical_1": "NH3 [3.7l]",
      "chemical_2": "H2O [4.2l]",
      "chemical_3": "C2H5OH [5.5l]",
      "rating": 4.8
    },
    {
      "instituion_name": "Caltech",
      "city": "Pasadena",
      "chemical_1": "KOH [2.8l]",
      "chemical_2": "HClO4 [2.1l]",
      "chemical_3": "H3PO4 [3.5l]",
      "rating": 4.7
    },
    {
      "instituion_name": "Princeton",
      "city": "Princeton",
      "chemical_1": "NaCl [3.0l]",
      "chemical_2": "H2SO4 [4.5l]",
      "chemical_3": "C6H8O6 [2.7l]",
      "rating": 4.3
    },
    {
      "instituion_name": "Yale",
      "city": "New Haven",
      "chemical_1": "HNO3 [3.5l]",
      "chemical_2": "KOH [2.3l]",
      "chemical_3": "H2O [5.2l]",
      "rating": 4.1
    },
    {
      "instituion_name": "Oxford",
      "city": "Oxford",
      "chemical_1": "H2SO4 [2.9l]",
      "chemical_2": "NaOH [4.7l]",
      "chemical_3": "CH3COOH [3.8l]",
      "rating": 4.4
    },
    {
      "instituion_name": "Cambridge",
      "city": "Cambridge",
      "chemical_1": "NaCl [3.3l]",
      "chemical_2": "HClO4 [2.5l]",
      "chemical_3": "H2SO4 [4.1l]",
      "rating": 4.2
    },
    {
      "instituion_name": "ETH Zurich",
      "city": "Zurich",
      "chemical_1": "NH3 [3.9l]",
      "chemical_2": "H2O [5.1l]",
      "chemical_3": "KOH [3.7l]",
      "rating": 4.6
    },
    {
      "instituion_name": "University of Tokyo",
      "city": "Tokyo",
      "chemical_1": "HClO4 [2.7l]",
      "chemical_2": "C6H12O6 [3.3l]",
      "chemical_3": "HNO3 [4.7l]",
      "rating": 4.4
    },
    {
      "instituion_name": "Stanford",
      "city": "New York",
      "chemical_1": "HCl [2.5l]",
      "chemical_2": "H2SO4 [3.1l]",
      "chemical_3": "CH3COOH [4.8l]",
      "rating": 4.2
    },
    {
      "instituion_name": "Harvard",
      "city": "Boston",
      "chemical_1": "NaOH [5.0l]",
      "chemical_2": "HNO3 [2.8l]",
      "chemical_3": "C6H12O6 [6.3l]",
      "rating": 4.5
    },
    {
      "instituion_name": "MIT",
      "city": "Cambridge",
      "chemical_1": "NH3 [3.7l]",
      "chemical_2": "H2O [4.2l]",
      "chemical_3": "C2H5OH [5.5l]",
      "rating": 4.8
    },
    {
      "instituion_name": "Caltech",
      "city": "Pasadena",
      "chemical_1": "KOH [2.8l]",
      "chemical_2": "HClO4 [2.1l]",
      "chemical_3": "H3PO4 [3.5l]",
      "rating": 4.7
    },
    {
      "instituion_name": "Princeton",
      "city": "Princeton",
      "chemical_1": "NaCl [3.0l]",
      "chemical_2": "H2SO4 [4.5l]",
      "chemical_3": "C6H8O6 [2.7l]",
      "rating": 4.3
    },
    {
      "instituion_name": "Yale",
      "city": "New Haven",
      "chemical_1": "HNO3 [3.5l]",
      "chemical_2": "KOH [2.3l]",
      "chemical_3": "H2O [5.2l]",
      "rating": 4.1
    },
    {
      "instituion_name": "Oxford",
      "city": "Oxford",
      "chemical_1": "H2SO4 [2.9l]",
      "chemical_2": "NaOH [4.7l]",
      "chemical_3": "CH3COOH [3.8l]",
      "rating": 4.4
    },
    {
      "instituion_name": "Cambridge",
      "city": "Cambridge",
      "chemical_1": "NaCl [3.3l]",
      "chemical_2": "HClO4 [2.5l]",
      "chemical_3": "H2SO4 [4.1l]",
      "rating": 4.2
    },
    {
      "instituion_name": "ETH Zurich",
      "city": "Zurich",
      "chemical_1": "NH3 [3.9l]",
      "chemical_2": "H2O [5.1l]",
      "chemical_3": "KOH [3.7l]",
      "rating": 4.6
    },
    {
      "instituion_name": "University of Tokyo",
      "city": "Tokyo",
      "chemical_1": "HClO4 [2.7l]",
      "chemical_2": "C6H12O6 [3.3l]",
      "chemical_3": "HNO3 [4.7l]",
      "rating": 4.4
    },
    {
      "instituion_name": "Stanford",
      "city": "New York",
      "chemical_1": "HCl [2.5l]",
      "chemical_2": "H2SO4 [3.1l]",
      "chemical_3": "CH3COOH [4.8l]",
      "rating": 4.2
    },
    {
      "instituion_name": "Harvard",
      "city": "Boston",
      "chemical_1": "NaOH [5.0l]",
      "chemical_2": "HNO3 [2.8l]",
      "chemical_3": "C6H12O6 [6.3l]",
      "rating": 4.5
    },
    {
      "instituion_name": "MIT",
      "city": "Cambridge",
      "chemical_1": "NH3 [3.7l]",
      "chemical_2": "H2O [4.2l]",
      "chemical_3": "C2H5OH [5.5l]",
      "rating": 4.8
    },
    {
      "instituion_name": "Caltech",
      "city": "Pasadena",
      "chemical_1": "KOH [2.8l]",
      "chemical_2": "HClO4 [2.1l]",
      "chemical_3": "H3PO4 [3.5l]",
      "rating": 4.7
    }
  ]
  );

  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // Function to handle adding a new chemical
  const addChemical = () => {
    // Create a new chemical object and add it to the state
    const newChemical = {
      instituion_name: "New Chemical Institution",
      city: "New City",
      chemical_1: "Chemical A",
      chemical_2: "Chemical B",
      chemical_3: "Chemical C",
      rating: 4.5,
    };

    setServicesData([...servicesData, newChemical]);
  };

  useEffect(() => {
    setFilteredData(servicesData);
  }, [servicesData]);

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
      <button
        onClick={addChemical}
        className="add-chemical-button bg-blue-600 text-white px-4 py-2 mt-4"
      >
        Add Chemical
      </button>
    </div>
  );
};

export default ChemicalsDetails;
