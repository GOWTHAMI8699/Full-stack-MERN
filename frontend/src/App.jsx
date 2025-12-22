import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import UseEffect from './Hooks/UseEffect';


const App = () => {
  return (
    <>
      {/* <Header/>
      <Footer/> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/useState" element={<useState/>} />
        <Route path="/useEffect" element={<UseEffect/>} />

      </Routes>
    </>
  );
};
export default App