import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import LoginPage from "./pages/LoginPage";
// import Contact from "./pages/Contact";
import Dashboard from "./pages/ChemicalsDetails";
import ChemicalsDetails from "./pages/ChemicalsDetails";

// import error from "./assets/notfound.svg";

// Define a 404 Not Found component
// const NotFound = () => (
//   <div className="h-[100vh] flex ml-96">
//     <img src={error} width="600" alt="" />
//   </div>
// );

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path="/" exact element={<Home />} /> */}
        <Route path="/chemicalsdetails" exact element={<ChemicalsDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
