import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import About from "./components/About";
import OurProjects from "./components/OurProject";
import GridComponents from "./components/GridComponents";

import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Hero />
      <Services />
      <About />
      <OurProjects />
      <GridComponents />
      <Footer />
    </>
  );
}

export default App;
