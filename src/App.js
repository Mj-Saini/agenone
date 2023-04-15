import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import About from "./components/About";
import OurProjects from "./components/OurProject";
import GridComponents from "./components/GridComponents";

import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Experiment from "./components/Experiment";

function App() {


  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* <Loader/> */}
      {/* <NavBar /> */}
      <Hero />
      <Services />
      <About />
      <OurProjects />
      <GridComponents />
      <Footer />
      {/* <Experiment/> */}
    </>
  );
}

export default App;
